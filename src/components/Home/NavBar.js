import React, { useState } from 'react';
import TutorLogo from '../../assets/images/Tutor.svg';
import GradCapLogo from '../../assets/images/GradCap.svg';
import BoardLogo from '../../assets/images/Board.svg';
import SearchLogo from '../../assets/images/Search.svg';
import ArrowDownLogo from '../../assets/images/ArrowDown.svg';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';

import './NavBar.css';

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
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
              </div>
            </div>
            <div class="dropdown">
              <div className="navBar__nav dropbtn">
                <p>Tuition</p>
                <img src={ArrowDownLogo} alt="" />
              </div>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
              </div>
            </div>
            <div class="dropdown">
              <div className="navBar__nav dropbtn">
                <p>Coaching</p>
                <img src={ArrowDownLogo} alt="" />
              </div>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
              </div>
            </div>
            <div class="dropdown">
              <div className="navBar__nav dropbtn">
                <p>Courses</p>
                <img src={ArrowDownLogo} alt="" />
              </div>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
              </div>
            </div>
            <img src={SearchLogo} alt="" className="navBar__search" />
          </div>
          <Button
            className="navBar__hamburger"
            type="primary"
            onClick={showDrawer}
          >
            <MenuOutlined />
          </Button>
        </div>
      </div>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        onClick={onClose}
      >
        <h2>Online Classes</h2>
        <hr />
        <a href="#">Link 1</a>
        <br />
        <h2>Tuition</h2>
        <hr />
        <a href="#">Link 1</a>
        <br /> <h2>Coaching</h2>
        <hr />
        <a href="#">Link 1</a>
        <br /> <h2>Courses</h2>
        <hr />
        <a href="#">Link 1</a>
        <br />
      </Drawer>
    </div>
  );
};

export default NavBar;
