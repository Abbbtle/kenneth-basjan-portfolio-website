import React, { useState } from "react";
import react from '../assets/Images/Logos/react.svg'
import vite from '../assets/Images/Logos/vite.svg'
import figma from '../assets/Images/Logos/figma.png'
import wordpress from '../assets/Images/Logos/wordpress.png'
import git from '../assets/Images/Logos/git.png'
import javascript from '../assets/Images/Logos/javascript.png'
import tailwind from '../assets/Images/Logos/tailwind.png'
import github from '../assets/Images/Logos/github.png'
import vscode from '../assets/Images/Logos/vscode.png'
import sanity from '../assets/Images/Logos/sanity.png'
import framer from '../assets/Images/Logos/framer.png'
import discord from '../assets/Images/Logos/discord.png'
import chatgpt from '../assets/Images/Logos/chatgpt.png'
import notion from '../assets/Images/Logos/notion.png'
import python from '../assets/Images/Logos/python.svg'

const techStackData = [
  {
    name: "TailwindCSS",
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
    name: "Sanity",
    category: "Headless CMS",
    image: sanity,
  },
  {
    name: "Figma",
    category: "UI/UX",
    image: figma,
  },
  {
    name: "Javascript",
    category: "Language",
    image: javascript,
  },
  {
    name: "Discord",
    category: "Communication",
    image: discord,
  },
  {
    name: "Notion",
    category: "Notes",
    image: notion,
  },
  {
    name: "ChatGPT",
    category: "Productivity",
    image: chatgpt,
  },
  {
    name: "Framer Motion",
    category: "Animation",
    image: framer,
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
  },
  {
    name: "Python",
    category: "Language",
    image: python,
  }
];

const TechStack = () => {
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
        <div className="flex space-x-6">
          {/* Left Arrow */}
          <button
            className="text-white hover:text-[#906EF0]"
            onClick={handlePrev}
          >
            &lt;
          </button>
          {displayData.map((software, index) => (
            <div 
              key={index}  
              className="w-80 flex flex-col justify-end bg-[#0D0D0D] shadow-2xl shadow-black rounded-3xl border-[#808080] border-[1px] p-4">
              {/* Images */}
              <img
                src={software.image}
                alt={software.name}
                className="w-28 h-auto mx-auto mb-12 mt-10 rounded-3xl"
              />
              {/* Card Info */}
              <div className="flex justify-between items-center pl-3 pr-3">
                <p className="text-sm font-semibold">{software.name}</p>
                <div className="w-30 h-auto rounded-full text-center bg-transparent border-[#808080] border-[1px] text-sm text-[#808080] px-2 py-1">
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
  
  export default TechStack;

