import React, { useState, useEffect } from "react";
import '../index.css'

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
        position: "fixed", // Use fixed position
      }}
    ></div>
  );
};

export default CustomCursor;
