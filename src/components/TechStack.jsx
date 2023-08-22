import React, { useState } from "react";

const softwareData = [
  {
    name: "Figma",
    category: "UI/UX",
    image: "figma-logo.png", // Replace with actual image path
  },
  // Add more software data objects as needed
];

const TechStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + softwareData.length) % softwareData.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % softwareData.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {softwareData.map((software, index) => (
          <div
            key={index}
            className={`slider-card ${activeIndex === index ? "active" : ""}`}
          >
            <img src={software.image} alt={software.name} className="card-image" />
            <div className="card-info">
              <div className="software-name">{software.name}</div>
              <div className="category-title">
                <div className="rounded-border">{software.category}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="slider-arrow left-arrow">
        &lt;
      </button>
      <button onClick={handleNext} className="slider-arrow right-arrow">
        &gt;
      </button>
    </div>
  );
};

export default TechStack;
