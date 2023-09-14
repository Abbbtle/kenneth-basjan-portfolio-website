import React, { useState, useEffect } from "react";
import HorizontalRule from "./HorizontalRule";

const techStackData = [
  {
    name: "Bonolo Pitswane (President of BYS Durban)",
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
  const [numItemsToDisplay, setNumItemsToDisplay] = useState(2);

  // Update numItemsToDisplay based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setNumItemsToDisplay(1);
      } else {
        setNumItemsToDisplay(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + techStackData.length) % techStackData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % techStackData.length);
  };

  const displayData = [];
  for (let counter = 0; counter < numItemsToDisplay; counter++) {
    displayData.push(techStackData[(currentIndex + counter) % techStackData.length]);
  }
  
    return (
      <div>
        <h2 className='text-4xl md:text-[72px] font-bold text-white uppercase text-center mt-40 md:mb-[-40px]'>
          Hear what clients
        </h2>
        <h2 className='text-4xl md:text-[72px] font-bold text-[#906EF0] uppercase text-center'>
          Say about my work
          <div className='mx-1 mt-[-15px] md:mt-[-40px]'><HorizontalRule/></div>
        </h2>
        <p className='text-lg md:text-[20px] font-semibold text-center mx-5'>
          Nothing makes me happier than <span className="text-[#906EF0]">witnessing my clients' success and satisfaction</span>. Here are some kind 
          words from those <span className="text-[#906EF0]">I've had the privilege to collaborate with</span>. Their words reaffirm 
          my <span className="text-[#906EF0]">commitment to excellence</span> and fuel my drive to 
          continually <span className="text-[#906EF0]">exceed expectations</span>. Let's create a success 
          story <span className="text-[#906EF0]">together</span>!
        </p>

        {/* Slider */}
        <div className="flex items-center justify-center py-8 mb-10 md:mb-40">
          <div className="flex space-x-2 md:space-x-6 items-center md:items-stretch">
            {/* Left Arrow */}
            <button
              className="text-white hover:text-[#906EF0]"
              onClick={handlePrev}
            >
              &lt;
            </button>
            {displayData.map((client, index) => (
              <div 
                key={index} 
                className="w-[60vw] md:w-[40vw] h-auto flex flex-col justify-end bg-transparent shadow-2xl shadow-black rounded-3xl border-[#808080] border-[1px] p-4">
                {/* Card Info */}
                <div className="flex flex-col justify-around">
                <div className="w-30 h-auto rounded-full bg-transparent text-md md:text-[22px] text-[#d8d8d8] px-2 py-1 font-semibold">
                    <p className="text-[40px] mt-5">"</p>
                    {client.description}
                    <p className="text-[40px] mt-10">"</p>
                  </div>
                  <p className="text-[16px] font-semibold text-[#A3A3A3] ml-2">{client.name}</p>
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
