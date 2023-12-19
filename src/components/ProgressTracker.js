// ProgressTracker.js
import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ completionPercentage }) => {
  const angle = (completionPercentage / 100) * 360;

  return (
    <div className="progress-container">
      <div className="progress-circle">
        <div
          className="progress-indicator"
          style={{
            backgroundImage: `conic-gradient(#ccc 0deg, #ccc ${angle}deg, #3498db ${angle}deg 360deg)`,
          }}
        >
          <span className="progress-text">{completionPercentage}%</span>
        </div>
      </div>
      <div className="progress-info">
        <p>Step 1: Personal Information</p>
        <p>Step 2: Additional Details</p>
      </div>
    </div>
  );
};

export default ProgressTracker;
