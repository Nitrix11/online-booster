import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className={`navbar ${isHovered ? 'hovered' : ''}`}>
      <h3 className='navh3'>Chat with us on Whatsapp now!</h3>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open('https://wa.me/+263774001984', '_blank')}
      >
    Get in Touch Now
      </button>
    </nav>
  );
}

export default Navbar;
