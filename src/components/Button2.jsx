import React from 'react';
import '../index.css'; // or import './Button.module.css';

const Button2 = ({ children }) => {
  return (
    <button className="button2 font-medium">{children}</button>
  );
};

export default Button2;