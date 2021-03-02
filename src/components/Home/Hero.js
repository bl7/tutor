import React from 'react';
import './Hero.css';
const Hero = ({ backgroundImg }) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: 'center',
      }}
    >
      <div className="hero__contain">
        <h1>Find an expert tutor, Get better grades</h1>
        <div className="hero__searchBar">
          <input
            type="text"
            placeholder="What do you want to learn? Enter subject, categories,class"
          />
          <button>Find Now</button>
        </div>
        <p>87456 people are learning on Your Tutor today</p>
      </div>
    </div>
  );
};

export default Hero;
