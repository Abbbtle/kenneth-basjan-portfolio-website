import Lenis from 'lenis';

// In-page links take one second to scroll, easing in and out so the page visibly travels.
const SCROLL_OPTIONS = {
  duration: 1,
  easing: (t) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2),
};

let lenis = null;
// Set when scrolling is unpaused while one of the page's own scrolls is still running.
let resumeWhenDone = false;

// `force` lets a link chosen in the mobile menu scroll the page behind it while scrolling is paused.
const scrollPage = (target, onComplete) => {
  lenis.scrollTo(target, {
    ...SCROLL_OPTIONS,
    force: true,
    onComplete: () => {
      if (resumeWhenDone) {
        resumeWhenDone = false;
        lenis.start();
      }
      onComplete?.();
    },
  });
};

// Moves keyboard focus to a section without scrolling. Sections aren't focusable by default, so
// they get tabindex="-1". Nothing happens while the section is inert behind the mobile menu.
export const focusSection = (section) => {
  if (!section.hasAttribute('tabindex')) section.setAttribute('tabindex', '-1');
  section.focus({ preventScroll: true });
};

// Smooth-scroll in-page links through Lenis. Links marked data-native-anchor (the skip link)
// keep the browser's behaviour. Keyboard activation also moves focus to the target section.
const onAnchorClick = (event) => {
  if (!lenis || event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const link = event.target.closest('a[href^="#"]');
  if (!link || link.hasAttribute('data-native-anchor')) return;

  const hash = link.getAttribute('href');
  const target = hash === '#top' ? null : document.querySelector(hash);
  if (hash !== '#top' && !target) return;

  event.preventDefault();
  const fromKeyboard = event.detail === 0;
  window.history.pushState(null, '', hash);
  // Lenis honours each section's CSS scroll-margin-top, which clears the fixed header.
  scrollPage(target ?? 0, () => {
    if (fromKeyboard && target) focusSection(target);
  });
};

export const startSmoothScroll = () => {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  lenis = new Lenis({ autoRaf: true });
  document.addEventListener('click', onAnchorClick);
  return () => {
    document.removeEventListener('click', onAnchorClick);
    lenis?.destroy();
    lenis = null;
    resumeWhenDone = false;
  };
};

// Pauses scrolling, e.g. while the mobile menu is open. Lenis cancels a scroll in progress when it
// starts again, so unpausing waits for the page's own scroll (like one chosen in the menu) to end.
export const setSmoothScrollPaused = (paused) => {
  if (!lenis) return;
  resumeWhenDone = false;
  if (paused) lenis.stop();
  else if (lenis.isScrolling === 'smooth') resumeWhenDone = true;
  else lenis.start();
};

// Back to the top of the page (smoothly when motion is allowed). The back-to-top button disappears
// near the top, so focus moves to the first link in the header instead of being lost.
export const scrollToTop = () => {
  if (lenis) scrollPage(0);
  else window.scrollTo({ top: 0 });
  document.querySelector('header a[href="#top"]')?.focus({ preventScroll: true });
};
