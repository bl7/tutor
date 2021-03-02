import React from 'react';
import image10 from '../../assets/images/image10.jpg';
import './StartTeaching.css';
const StartTeaching = () => {
  return (
    <div className="startTeaching">
      <div className="startTeaching__contain">
        <img src={image10} alt="" />
        <div className="startTeaching__desc">
          <h2>Become an instructor</h2>
          <p>
            Top instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.{' '}
          </p>
          <button>Start Teaching Today</button>
        </div>
      </div>
    </div>
  );
};

export default StartTeaching;
