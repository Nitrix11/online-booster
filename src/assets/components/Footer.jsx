import React from 'react';
import './Footer.scss';
import logo from "../images/footer logo.png"

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
            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
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