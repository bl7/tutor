import React from 'react';
import LinkedinIcon from '../assets/images/linkedin.svg';
import FacebookIcon from '../assets/images/facebook.svg';
import InstagramIcon from '../assets/images/instagram.svg';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contain">
        <div className="footer__top">
          <div className="footer__know">
            <h2>Get to know us</h2>
            <br />
            <p> About Us</p>
            <p> Contact Us</p>
            <p> FAQ </p>
            <p> Reviews</p>
            <p> Safety </p>
            <p> Security </p>
            <p> In the News</p>
          </div>
          <div className="footer__learn">
            <h2>Learn with us</h2>
            <br />
            <p> Find a Tutor</p>
            <p> Request a Tutor</p>
            <p> Online Tutoring </p>
            <p> Get Math Help</p>
            <p> Learning Resources </p>
            <p> Blog</p>
          </div>
          <div className="footer__work">
            <h2>Work with us</h2>
            <br />
            <p> Wyzant for Higher Ed</p>
            <p> Careers at Wyzant</p>
            <p> Apply to Tutor </p>
            <p> Tutor Job Board</p>
            <p> Affiliates </p>
          </div>
          <div className="footer__touch">
            <h2>Let’s keep in touch</h2>
            <br />
            <div className="footer__social">
              <img src={LinkedinIcon} alt="Linkedin" />
              <img src={FacebookIcon} alt="Facebook" />
              <img src={InstagramIcon} alt="Instagram" />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p> © 2021 Your Tutor - All Rights Reserved</p>
          </div>
          <div className="footer__privacyNav">
            <p>Terms of Use </p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
