import { useEffect, useRef, useState } from 'react';

const FINE_POINTER = '(hover: hover) and (pointer: fine)';
const INTERACTIVE = 'a, button, summary, label, [role="button"]';
const TEXT_ENTRY = 'input, textarea, select, [contenteditable]';

// The original site's ring cursor (mouse and trackpad only). It grows into a filled disc over
// links and buttons, and steps aside over text fields so the normal caret shows. The system
// pointer is hidden by an inline style in index.html, so it never shows alongside the ring.
//
// The ring checks what's underneath it every frame, not only when the mouse moves, so it stays
// right when the page scrolls or content moves under a still mouse (an accordion opening, a
// toast appearing). It only touches the DOM when the position or what's underneath changes.
//
// It first appears on the first mouse movement: after a reload, browsers keep showing the
// previous pointer until the mouse moves, so appearing then means the two never show at once.
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [enabled, setEnabled] = useState(() => window.matchMedia(FINE_POINTER).matches);

  useEffect(() => {
    const query = window.matchMedia(FINE_POINTER);
    const onChange = (event) => setEnabled(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!enabled || !cursor) return undefined;

    let frame = 0;
    let pointer = null; // last known position; null while the pointer is outside the page
    let moved = false;
    let underneath; // element under the pointer at the last check

    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (!pointer) return;
      if (moved) {
        cursor.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
        moved = false;
      }
      const target = document.elementFromPoint(pointer.x, pointer.y);
      if (target === underneath) return;
      underneath = target;
      const overText = Boolean(target?.closest(TEXT_ENTRY));
      cursor.classList.toggle('is-visible', !overText);
      cursor.classList.toggle('is-active', !overText && Boolean(target?.closest(INTERACTIVE)));
    };

    const onMove = (event) => {
      pointer = { x: event.clientX, y: event.clientY };
      moved = true;
      if (!frame) frame = requestAnimationFrame(tick);
    };
    // Outside the page there's nothing to track: hide the ring and pause the checks.
    const onLeave = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      pointer = null;
      underneath = undefined;
      cursor.classList.remove('is-visible', 'is-active');
    };

    const root = document.documentElement;
    document.addEventListener('mousemove', onMove, { passive: true });
    root.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('mousemove', onMove);
      root.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled]);

  return enabled ? <div ref={cursorRef} className="custom-cursor" aria-hidden="true" /> : null;
};

export default CustomCursor;
