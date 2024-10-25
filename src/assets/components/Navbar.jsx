import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className={`navbar ${isHovered ? 'hovered' : ''}`}>
      <h3>Chat with us on Whatsapp now!</h3>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open('https://wa.me/your-whatsapp-number', '_blank')}
      >
    Get in Touch Now
      </button>
    </nav>
  );
}

export default Navbar;
