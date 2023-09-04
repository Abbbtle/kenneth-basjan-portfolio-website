import React, { useState } from "react";
import HorizontalRule from "./HorizontalRule";

const techStackData = [
  {
    name: "Bonolo Basjan (President of BYS Durban)",
    description: "Kenneth's creativity and technical expertise made our project a resounding success. His communication throughout the process was exemplary, and he was always receptive to feedback. Working with Kenneth was an absolute pleasure.",
  },
  {
    name: "Nico Ludek (Founder of Empire Studios)",
    description: "In the world of web development, Kenneth is a true magician. He transformed our vision into a visually stunning and highly functional reality. We highly recommend him to anyone seeking top-notch web development services.",
  },
  {
    name: "Nomvo Bam (Founder of BABA Inc.)",
    description: "Kenneth Basjan's web development skills are truly remarkable. He created a stunning website for our e-commerce business, and the results speak for themselves. His dedication to delivering a seamless user experience is truly impressive.",
  }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + techStackData.length) % techStackData.length);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techStackData.length);
    };
  
    const displayData = [];
    let counter = 0;
    while (displayData.length < 2) {
      displayData.push(techStackData[(currentIndex + counter) % techStackData.length]);
      counter++;
    }
  
    return (
      <div>
        <h2 className='text-[72px] font-bold text-white uppercase text-center mt-40 mb-[-40px]'>
          Hear what clients
        </h2>
        <h2 className='text-[72px] font-bold text-[#906EF0] uppercase text-center'>
          Say about my work
          <div className='mr-[300px] ml-[300px] mt-[-40px]'><HorizontalRule/></div>
        </h2>

        <div className="flex items-center justify-center py-8 mb-40">
          <div className="flex space-x-8">
            {/* Left Arrow */}
            <button
              className="text-white hover:text-[#906EF0]"
              onClick={handlePrev}
            >
              &lt;
            </button>
            {displayData.map((software, index) => (
              <div key={index} className="w-[40vw] h-auto flex flex-col justify-end bg-transparent shadow-2xl shadow-black rounded-3xl border-[#808080] border-[1px] p-4">
                {/* Card Info */}
                <div className="flex flex-col justify-around items-center">
                <div className="w-30 h-auto rounded-full bg-transparent text-[22px] text-[#d8d8d8] px-2 py-1 font-semibold">
                    <p className="text-[40px] mt-5">"</p>
                    {software.description}
                    <p className="text-[40px] mt-10">"</p>
                  </div>
                  <p className="text-[16px] font-semibold text-[#A3A3A3]">{software.name}</p>
                </div>
              </div>
            ))}
            {/* Right Arrow */}
            <button
              className="text-white hover:text-[#906EF0]"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>

      </div>
    );
  };
  
  export default Testimonials;
