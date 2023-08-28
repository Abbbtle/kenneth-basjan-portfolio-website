import React, { useState } from "react";
// import { git, github, wordpress, vite, vscode, css3, html5, javascript, figma, tailwind} from '../assets';
import react from '../assets/Images/Logos/react.svg'
import vite from '../assets/Images/Logos/vite.svg'
import figma from '../assets/Images/Logos/figma.png'
import wordpress from '../assets/Images/Logos/wordpress.png'
import html5 from '../assets/Images/Logos/html5.svg'
import git from '../assets/Images/Logos/git.png'
import css3 from '../assets/Images/Logos/css3.svg'
import javascript from '../assets/Images/Logos/javascript.png'
import tailwind from '../assets/Images/Logos/tailwind.png'
import github from '../assets/Images/Logos/ithub.png'
import vscode from '../assets/Images/Logos/vscode.png'

const techStackData = [
  {
    name: "Tailwind CSS",
    category: "Styling",
    image: tailwind,
  },
  {
    name: "ReactJS",
    category: "Web Framework",
    image: react,
  },
  {
    name: "Github",
    category: "Version Control",
    image: github,
  },
  {
    name: "Git",
    category: "Version Control",
    image: git,
  },
  {
    name: "WordPress",
    category: "CMS",
    image: wordpress,
  },
  {
    name: "Figma",
    category: "UI/UX",
    image: figma,
  },
  {
    name: "HTML",
    category: "Hypertext Markup Language",
    image: html5,
  },
  {
    name: "CSS",
    category: "Cascading Style Sheets.",
    image: css3,
  },
  {
    name: "Javascript",
    category: "Programming Language",
    image: {javascript},
  },
  {
    name: "Vite",
    category: "Build Tool",
    image: vite,
  },
  {
    name: "VS Code",
    category: "Code Editor",
    image: vscode,
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
  
    const displayData = [];
    let counter = 0;
    while (displayData.length < 3) {
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
            <div key={index} className="w-72 flex flex-col justify-end bg-[#0D0D0D] shadow-2xl shadow-black rounded-3xl border-[#808080] border-[1px] p-4">
              {/* Images */}
              <img
                src={software.image}
                alt={software.name}
                className="w-32 h-auto mx-16 mb-4"
              />
              {/* Card Info */}
              <div className="flex justify-between">
                <p className="text-lg font-semibold">{software.name}</p>
                <div className="rounded-full bg-transparent border-[#808080] text-[#808080] px-2 py-1">
                  {software.category}
                </div>
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
    );
  };
  
  export default Slider;
