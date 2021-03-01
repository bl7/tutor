import React from 'react';
import TutorLogo from '../assets/images/Tutor.svg';
import GradCapLogo from '../assets/images/GradCap.svg';
import BoardLogo from '../assets/images/Board.svg';
import SearchLogo from '../assets/images/Search.svg';
import ArrowDownLogo from '../assets/images/ArrowDown.svg';
// import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__top">
        <div className="navBar__login">
          <img src={GradCapLogo} alt="" />
          <p>Student Login</p>
        </div>
        <div className="navBar__login">
          <img src={BoardLogo} alt="" />
          <p>Tutor Login</p>
        </div>
        <div className="navBar__login">
          <a href="" className="navBar__button">
            Sign Up
          </a>
        </div>
      </div>
      <div className="navBar__bottom">
        <div className="navBar__logo">
          <img src={TutorLogo} alt="" />
          <p>Your Tutor</p>
        </div>
        <div className="navBar__navs">
          <div className="navBar__nav">
            <p>Online Classes</p>
            <img src={ArrowDownLogo} alt="" />
          </div>
          <div className="navBar__nav">
            <p>Tuition</p>
            <img src={ArrowDownLogo} alt="" />
          </div>
          <div className="navBar__nav">
            <p>Coaching</p>
            <img src={ArrowDownLogo} alt="" />
          </div>
          <div className="navBar__nav">
            <p>Courses</p>
            <img src={ArrowDownLogo} alt="" />
          </div>

          <img src={SearchLogo} alt="" className="navBar__search" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
