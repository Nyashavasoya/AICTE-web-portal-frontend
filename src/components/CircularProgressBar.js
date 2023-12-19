import React, { useState, useEffect } from 'react';
import './CircularProgressBar.css'; // Import your CSS file

const CircularProgressBar = ({ progress }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = (100 - progress) / 100 * 314; // 314 is the circumference of the circle

    setOffset(progressOffset);
  }, [progress]);

  return (
    <div className="progress-bar">
      <div className="percent">
        <svg>
          <circle cx="105" cy="105" r="50"></circle>
          <circle cx="105" cy="105" r="50" style={{ strokeDashoffset: offset }}></circle>
        </svg>
        <div className="number">
          <h3>{progress}<span>%</span></h3>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
