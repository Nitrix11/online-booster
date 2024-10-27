import React from 'react';
import './Cool.scss';
import claim from '../images/claimpromo.png';
import black from"../images/clamblack.png"
const CoolSection = () => {
  return (
    <div id='wrapper-black'>
    <img src={black} alt="" id='black' />
    <div className="cool-section">
      <div className="text-content">
        <h2 className=''> <b>Claim Promo Package</b></h2>
        <button className="cta-btn">Submit & Get Started</button>
        <p><b>
          
        “Thank you for reaching out! Our team will get back to you within 24
          hours to schedule your consultation or process your package. We look
          forward to helping you boost your social media presence!”
    </b>    </p>
      </div>
      <div className="image-content">
        <img src={claim} alt="Customer Support" />
      </div>
    </div>
    </div>
  );
};

export default CoolSection;