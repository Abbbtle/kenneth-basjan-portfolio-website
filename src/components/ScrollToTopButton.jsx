import { BsArrowUpCircle } from 'react-icons/bs';
import useScrolledPast from '../hooks/useScrolledPast';
import { scrollToTop } from '../lib/smoothScroll';

// The original site's back-to-top button: a grey circle in the corner that appears once the page
// has scrolled a little, and turns purple on hover.
const ScrollToTopButton = () => {
  const visible = useScrolledPast(300);
  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-gray-500 text-2xl text-white transition-colors hover:bg-gray-700 hover:text-accent"
    >
      <BsArrowUpCircle aria-hidden="true" />
    </button>
  );
};

export default ScrollToTopButton;
