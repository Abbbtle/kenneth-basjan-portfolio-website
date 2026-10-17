import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CgClose, CgMenuGridO } from 'react-icons/cg';
import logo from '../assets/images/logo.webp';
import { navLinks } from '../data/navigation';
import useActiveSection from '../hooks/useActiveSection';
import useScrolledPast from '../hooks/useScrolledPast';
import { focusSection, setSmoothScrollPaused } from '../lib/smoothScroll';
import Button from './Button';

// The hero ('top') is tracked too, so no link is marked current while it's in view.
const SECTION_IDS = ['top', ...navLinks.map(({ id }) => id)];
// In the mobile menu, Contact is the outlined button rather than a plain link.
const MENU_LINKS = navLinks.filter(({ id }) => id !== 'contact');

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const closeRef = useRef(null);
  // The section last chosen in the mobile menu.
  const chosenRef = useRef(null);
  const activeId = useActiveSection(SECTION_IDS);
  const scrolled = useScrolledPast(8);
  const closeMenu = () => setMenuOpen(false);
  const chooseSection = (id) => {
    chosenRef.current = id;
  };

  // While the mobile menu is open, the page behind it is inert, scrolling pauses, and focus starts
  // on the close button. Choosing a link scrolls the page behind the menu, which stays open until
  // the close button, Escape or a tap outside it closes it. Focus then moves to the last section
  // chosen, or back to the menu button.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const toggle = toggleRef.current;
    // The menu renders outside #root, so this covers the whole page, including anything that
    // appears while the menu is open (like the back-to-top button once the page scrolls).
    const page = document.getElementById('root');
    page.inert = true;
    setSmoothScrollPaused(true);
    closeRef.current?.focus();

    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false);
    const desktop = window.matchMedia('(min-width: 768px)');
    const onBreakpoint = (event) => event.matches && setMenuOpen(false);
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);

    return () => {
      page.inert = false;
      setSmoothScrollPaused(false);
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
      const chosen = chosenRef.current && document.getElementById(chosenRef.current);
      chosenRef.current = null;
      if (chosen) focusSection(chosen);
      else toggle?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      {/* Transparent over the top of the hero; a solid charcoal bar once the page scrolls,
          so the links never sit on top of the content behind them. */}
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b text-white transition-colors duration-300 ${
          scrolled ? 'border-white/10 bg-charcoal/95 backdrop-blur-md' : 'border-transparent'
        }`}
      >
        <div className="page flex h-20 items-center justify-between">
          <a href="#top" aria-label="Kenneth Basjan, back to top" className="-ml-1 p-1">
            <img src={logo} alt="" width={480} height={479} className="h-11 w-11 md:h-12 md:w-12" />
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-9 text-sm font-medium uppercase tracking-[0.08em]">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={activeId === id ? 'true' : undefined}
                    className="hover-line py-1"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-2xl md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <CgMenuGridO aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* The original site's mobile menu: a frosted panel over the right three-quarters of the
          screen, with the close icon on top, the links centred, and Contact as the outlined button.
          Choosing a link scrolls the page behind it, and tapping the uncovered strip on the left
          closes it. It renders outside #root so the whole page behind it can be made inert.
          Links only turn purple on hover with a mouse: on touchscreens a tapped link would stay
          purple, which is hard to read over the white About panel. */}
      {createPortal(
        <div className={menuOpen ? 'md:hidden' : 'hidden'}>
          <div aria-hidden="true" className="fixed inset-0 z-50" onClick={closeMenu} />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="mobile-panel fixed inset-y-0 left-1/4 right-0 z-50 flex flex-col items-center justify-center gap-8 bg-charcoal/80 p-8 backdrop-blur-lg"
          >
            <button
              ref={closeRef}
              type="button"
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center text-2xl"
              onClick={closeMenu}
            >
              <CgClose aria-hidden="true" />
            </button>
            <nav aria-label="Mobile">
              <ul className="flex flex-col items-center gap-8 text-lg font-medium uppercase tracking-[0.08em]">
                {MENU_LINKS.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      aria-current={activeId === id ? 'true' : undefined}
                      onClick={() => chooseSection(id)}
                      className="flex min-h-11 items-center decoration-2 underline-offset-8 aria-[current=true]:underline [@media(hover:hover)]:hover:text-accent"
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <Button href="#contact" onClick={() => chooseSection('contact')}>
                    Contact
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};

export default Header;
