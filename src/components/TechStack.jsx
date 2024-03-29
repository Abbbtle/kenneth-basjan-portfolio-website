import React, { useState, useEffect } from "react";
import react from '../assets/Images/Logos/react.svg'
import vite from '../assets/Images/Logos/vite.svg'
import figma from '../assets/Images/Logos/figma.png'
import wordpress from '../assets/Images/Logos/wordpress.png'
// import git from '../assets/Images/Logos/git.png'
import javascript from '../assets/Images/Logos/javascript.png'
import tailwind from '../assets/Images/Logos/tailwind.png'
import github from '../assets/Images/Logos/github.png'
import vscode from '../assets/Images/Logos/vscode.png'
import sanity from '../assets/Images/Logos/sanity.png'
// import framer from '../assets/Images/Logos/framer.png'
import discord from '../assets/Images/Logos/discord.png'
import chatgpt from '../assets/Images/Logos/chatgpt.png'
import notion from '../assets/Images/Logos/notion.png'
import java from '../assets/Images/Logos/java.png'
import python from '../assets/Images/Logos/python.svg'
import django from '../assets/Images/Logos/django-icon.webp'
import postgres from '../assets/Images/Logos/PostgreSQL.png'
import bootstrap from '../assets/Images/Logos/bootstrap.png'

const techStackData = [
  {
    name: "Tailwind CSS",
    category: "Styling",
    image: tailwind,
  },
  {
    name: "React JS",
    category: "Web Framework",
    image: react,
  },
  {
    name: "Github",
    category: "Version Control",
    image: github,
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
    name: "Java",
    category: "Language",
    image: java,
  },
  {
    name: "Python",
    category: "Language",
    image: python,
  },
  {
    name: "Django",
    category: "Python Framework",
    image: django,
  },
  {
    name: "PostgresSQL",
    category: "SQL Database",
    image: postgres,
  },
  {
    name: "Bootstrap",
    category: "Styling",
    image: bootstrap,
  }
];

const TechStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numItemsToDisplay, setNumItemsToDisplay] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumItemsToDisplay(1); 
      } else {
        setNumItemsToDisplay(3); 
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
      <div className="flex  items-center justify-center py-8">
        <div className="flex space-x-2 md:space-x-6 items-center md:items-stretch">
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
              className="w-40 md:w-80 flex items-center md:items-stretch flex-col justify-end bg-[#0D0D0D] shadow-2xl shadow-black rounded-3xl border-[#808080] border-[1px] p-4">
              {/* Images */}
              <img
                src={software.image}
                alt={software.name}
                className="w-28 h-auto md:mx-auto mb-6 md:mb-12 mt-10 rounded-3xl "
              />
              {/* Card Info */}
              <div className="flex justify-between items-center pl-3 pr-3">
                <p className="text-lg text-center md:text-start md:text-sm font-semibold">{software.name}</p>
                <div className="hidden md:block w-30 h-auto rounded-full text-center bg-transparent border-[#808080] border-[1px] text-sm text-[#808080] px-2 py-1">
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

