import { useEffect, useState } from 'react';

// Returns the id of the section currently crossing the middle of the viewport.
const useActiveSection = (ids) => {
  const [activeId, setActiveId] = useState(null);
  const key = ids.join(',');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    key.split(',').forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [key]);

  return activeId;
};

export default useActiveSection;
