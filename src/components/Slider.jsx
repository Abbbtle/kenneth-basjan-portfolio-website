import React, { useState } from "react";
import design from '../assets/Images/Services/Gifs/design.gif'
import frontend from '../assets/Images/Services/Gifs/frontend.gif'
import consultation from '../assets/Images/Services/Gifs/consultation.gif'
import video from '../assets/Images/Services/Gifs/video-editing.gif'
import smm from '../assets/Images/Services/Gifs/smm.gif'
import backend from '../assets/Images/Services/Gifs/backend.gif'

const techStackData = [
  {
    name: "Frontend Development",
    description: "Craft dynamic and responsive front-end solutions, bringing designs to life with precision and elegance.",
    image: frontend,
  },
  {
    name: "Backend Development",
    description: "Build robust and scalable back-end systems to power your web applications with efficiency and reliability.",
    image: backend,
  },
  {
    name: "Design",
    description: "Elevate user experiences through intuitive and visually engaging interfaces, ensuring seamless navigation.",
    image: design,
  },
  {
    name: "Social Media Marketing",
    description: " Harness the power of social media to amplify your brand presence and engage your target audience.",
    image: smm,
  },
  {
    name: "Video Editing",
    description: "Transform raw footage into captivating visual narratives and brand communication.",
    image: video,
  },
  {
    name: "Consultation",
    description: "Receive expert guidance and strategic insights to shape your digital initiatives and maximize results.",
    image: consultation,
  },
];

const Slider = () => {
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
      <div className="flex items-center justify-center py-8">
        <div className="flex space-x-8">
          {/* Left Arrow */}
          <button
            className="text-white hover:text-[#906EF0]"
            onClick={handlePrev}
          >
            &lt;
          </button>
          {displayData.map((software, index) => (
            <div key={index} className="w-[35vw] h-auto flex flex-col justify-end bg-[#0D0D0D] shadow-2xl shadow-black rounded-3xl border-[#808080] border-[1px] p-4">
              {/* Card Info */}
              <div className="flex flex-col justify-around items-center">
                <p className="text-2xl font-semibold text-white">{software.name}</p>
                <div className="w-30 h-auto rounded-full text-center bg-transparent text-sm text-[#d8d8d8] px-2 py-1">
                  {software.description}
                </div>
              </div>
              {/* Images */}
              <img
                src={software.image}
                alt={software.name}
                className="w-auto h-48 mx-auto mb-8 mt-10 rounded-3xl"
              />
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
    );
  };
  
  export default Slider;
