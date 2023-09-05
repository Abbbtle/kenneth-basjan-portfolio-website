import React, { useState } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  // Attach scroll event listener to toggle visibility
  window.addEventListener('scroll', toggleVisibility);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-gray-500 hover:bg-gray-700 hover:text-[#906EF0] text-white text-2xl px-2 py-2 rounded-full"
        >
          <BsArrowUpCircle /> {/* Render the icon component here */}
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
