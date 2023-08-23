import React, { useRef, useEffect } from "react";
import '../index.css'

const ScrollingText = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = container.querySelector(".scrolling-content");

    const marqueeWidth = content.offsetWidth;

    const clone = content.cloneNode(true);
    container.appendChild(clone);

    const animateMarquee = () => {
      const scrollLeft = container.scrollLeft;
      if (scrollLeft + container.clientWidth >= marqueeWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 3; // Adjust speed as needed
      }
    };

    const animationInterval = setInterval(animateMarquee, 10); // Adjust interval as needed

    return () => {
      container.removeChild(clone);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="scrolling-container" ref={containerRef}>
      <div className="scrolling-content font-bold">
        <span className="text-[#906EF0]">MAKE</span> THE <span className="text-[#906EF0]">BEST</span> DECISION <span className="text-[#906EF0]">FOR</span> YOUR <span className="text-[#906EF0]">BUSINESS</span>.{" "}
      </div>
    </div>
  );
};

export default ScrollingText;
