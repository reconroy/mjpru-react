import React from 'react';
import './../customStyles/numberIcons.css';

const NumberIcons = ({ number, status, isHovered }) => (
  <div
    className={`number-icon ${status} ${isHovered ? 'hovered' : ''}`}
  >
    {number}
  </div>
);

export default NumberIcons;
