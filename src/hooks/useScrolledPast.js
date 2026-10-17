import { useEffect, useState } from 'react';

// True once the page has scrolled more than `offset` pixels.
const useScrolledPast = (offset) => {
  const [scrolledPast, setScrolledPast] = useState(() => window.scrollY > offset);

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > offset);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return scrolledPast;
};

export default useScrolledPast;
