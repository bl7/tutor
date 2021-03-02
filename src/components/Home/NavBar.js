import React from 'react';
import TutorLogo from '../../assets/images/Tutor.svg';
import GradCapLogo from '../../assets/images/GradCap.svg';
import BoardLogo from '../../assets/images/Board.svg';
import SearchLogo from '../../assets/images/Search.svg';
import ArrowDownLogo from '../../assets/images/ArrowDown.svg';
import { MenuOutlined } from '@ant-design/icons';
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
          <div className="navBar__navsBig">
            <div class="dropdown">
              <div className="navBar__nav dropbtn">
                <p>Online Classes</p>
                <img src={ArrowDownLogo} alt="" />
              </div>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div class="dropdown">
              <div className="navBar__nav dropbtn">
                <p>Tuition</p>
                <img src={ArrowDownLogo} alt="" />
              </div>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div class="dropdown">
              <div className="navBar__nav dropbtn">
                <p>Coaching</p>
                <img src={ArrowDownLogo} alt="" />
              </div>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div class="dropdown">
              <div className="navBar__nav dropbtn">
                <p>Courses</p>
                <img src={ArrowDownLogo} alt="" />
              </div>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <img src={SearchLogo} alt="" className="navBar__search" />
          </div>
          <div className="navBar__hamburger">
            <MenuOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
