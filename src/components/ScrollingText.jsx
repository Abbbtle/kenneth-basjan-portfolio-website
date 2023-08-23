import React, { useRef, useEffect } from "react";
import '../index.css'

const ScrollingText = () => {
  return (
  <div>

    <div class="overflow-x-hidden">
      <div class="py-12 animate-marquee whitespace-nowrap ">
        <span class="mx-4 text-[200px] uppercase">Make the best decision for your business</span>
      </div>
    </div>

    <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
      <span class="mx-4 text-[200px] uppercase">Make the best decision for your business</span>
    </div>
  </div>
  );
};

export default ScrollingText;
