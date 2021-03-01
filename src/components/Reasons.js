import React from 'react';
import './Reasons.css';

const Reasons = ({ icon, heading, text }) => {
  return (
    <div className="reasons">
      <div className="reasons__contain">
        <img src={icon} alt="" />
        <div className="reasons__text">
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
