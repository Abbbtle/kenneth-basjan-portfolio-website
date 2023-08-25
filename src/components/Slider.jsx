import React, { useState } from "react";
import {FaReact} from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';
import {FaHtml5} from 'react-icons/fa';
import {SiCss3} from 'react-icons/si';
import {IoLogoJavascript} from 'react-icons/io'
import {BsGit} from 'react-icons/bs'
import {CgFigma} from 'react-icons/cg'
import {react} from '../assets'

const techStackData = [
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: {SiTailwindcss},
  },
  {
    name: "ReactJS",
    category: "Web Framework",
    image: {react},
  },
  {
    name: "Figma",
    category: "UI/UX",
    icon: {CgFigma},
  },
  {
    name: "HTML",
    category: "Web Framework",
    icon: {FaHtml5},
  },
  {
    name: "CSS",
    category: "Web Framework",
    icon: {SiCss3},
  },
  {
    name: "JavaScript",
    category: "Web Framework",
    icon: {IoLogoJavascript},
  },
  {
    name: "Git",
    category: "Web Framework",
    icon: {BsGit},
  },
  {
    name: "WordPress",
    category: "Web Framework",
    icon: {BsGit},
  },
  {
    name: "Elementor",
    category: "Web Framework",
    icon: {BsGit},
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

  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex space-x-8">

        {/* Arrow Left */}
        <button
          className="text-white hover:text-[#906EF0]"
          onClick={handlePrev}
        >
          &lt;
        </button>

        {/* Cards */}
        {techStackData.slice(currentIndex, currentIndex + 3).map((software, index) => (
          <div key={index} className="w-64 bg-[#0D0D0D] shadow-md rounded p-4">
            <img
              src={software.image}
              alt={software.name}
              className="w-32 mx-auto mb-4"
            />
            <div className="flex justify-between">
              <p className="text-lg font-semibold">{software.name}</p>
              <div className="rounded-full bg-transparent border-gray-400 text-[#808080] px-2 py-1">
                {software.category}
              </div>
            </div>
          </div>
        ))}

        {/* Arrow Right */}
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
