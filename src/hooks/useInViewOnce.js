import { useEffect, useState } from 'react';

// Becomes true the first time the referenced element scrolls into view, then stays true.
const useInViewOnce = (ref, rootMargin = '0px 0px -12% 0px') => {
  const [inView, setInView] = useState(() => !('IntersectionObserver' in window));

  useEffect(() => {
    if (inView || !ref.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, ref, rootMargin]);

  return inView;
};

export default useInViewOnce;
