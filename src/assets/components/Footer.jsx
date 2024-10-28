import React from 'react';
import './Footer.scss';
import logo from "../images/footer logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebook from"../images/Facebook.svg";
import Instagram from"../images/Instagram.svg";
import Linkedin from"../images/LinkedIn.png";
import Youtube from"../images/YouTube.svg";
import x from"../images/x.svg";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-wrapper">
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="menu-section">
          <h3>Menu</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Work</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div className="services-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Product Videos</a></li>
            <li><a href="#">Brand Videos</a></li>
            <li><a href="#">SM Videos</a></li>
            <li><a href="#">Animations</a></li>
          </ul>
        </div>
        <div className="address-section">
          <h3>Address</h3>
          <p>Batanai Gardens, First Floor Jason Moyo</p>
          <div className="social-links">
  <a href="https://www.facebook.com/people/Bud-Kreative/61559118987578/" className="social-link"><img src={facebook} /></a>
  <a href="https://www.instagram.com/budkreative/" className="social-link"><img src={Instagram} /></a>
  <a href="https://www.linkedin.com/company/bud-kreative/" className="social-link"><img src={Linkedin} /></a>
  <a href="https://www.youtube.com/@budkreative/" className="social-link"><img src={Youtube} /></a>
  <a href="https://x.com/BudKreative/" className="social-link"><img src={x} /></a>
</div>

        </div>
        <div className="newsletter-section">
          <h3>Subscribe</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit" className="cta-button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 BUD KREATIVE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;