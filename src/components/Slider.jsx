import React, { useState } from "react";
import {react, git, github, wordpress, vite, vscode, css3, html5, javascript, figma, tailwind} from '../assets';

const techStackData = [
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: {tailwind},
  },
  {
    name: "ReactJS",
    category: "Web Framework",
    icon: {react},
  },
  {
    name: "Github",
    category: "Version Control",
    icon: {github},
  },
  {
    name: "Git",
    category: "Version Control",
    icon: {git},
  },
  {
    name: "WordPress",
    category: "CMS",
    icon: {wordpress},
  },
  {
    name: "Figma",
    category: "UI/UX",
    icon: {figma},
  },
  {
    name: "HTML",
    category: "Hypertext Markup Language",
    icon: {html5},
  },
  {
    name: "CSS",
    category: "Cascading Style Sheets.",
    icon: {css3},
  },
  {
    name: "Javascript",
    category: "Programming Language",
    icon: {javascript},
  },
  {
    name: "Vite",
    category: "Build Tool",
    icon: {vite},
  },
  {
    name: "VS Code",
    category: "Code Editor",
    icon: {vscode},
  }
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
              src={software.icon}
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
