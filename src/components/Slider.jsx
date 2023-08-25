import React, { useState } from "react";
import {FaReact} from 'react-icons/fa';

const techStackData = [
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: {FaReact}, // Replace with actual image path
  },
  {
    name: "ReactJS",
    category: "Web Framework",
    icon: "react.png", // Replace with actual image path
  },
  // Add data for other software in your tech stack
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
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={handlePrev}
        >
          &lt;
        </button>
        {techStackData.slice(currentIndex, currentIndex + 3).map((software, index) => (
          <div key={index} className="w-64 bg-white shadow-md rounded p-4">
            <img
              src={software.icon}
              alt={software.name}
              className="w-32 mx-auto mb-4"
            />
            <div className="flex justify-between">
              <p className="text-lg font-semibold">{software.name}</p>
              <div className="rounded-full bg-blue-500 text-white px-2 py-1">
                {software.category}
              </div>
            </div>
          </div>
        ))}
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
