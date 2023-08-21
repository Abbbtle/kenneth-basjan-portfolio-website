import React from 'react';
import '../index.css'; // or import './Button.module.css';

const Button1 = ({ children }) => {
  return (
    <button className="button1 font-semibold">{children}</button>
  );
};

export default Button1;