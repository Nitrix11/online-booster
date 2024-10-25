import React from 'react';
import './HowItWorks.scss';
import cameras from "../images/howitworks.png";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
            <div className="image-wrapper">
          <img src={cameras} alt="Camera Equipment" />
        </div>
      <div className="content-wrapper">
        <h2 className='h2222'><b>How It Works</b></h2>
        <p><b>Simple Process to Elevate Your Social Media</b></p>
        <div className="steps">
        
          <div className="step">
            <div className="step-number">01</div>
            <h3>Sign up for a free consultation</h3>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <h3>Receive a personalized social media audit and strategy</h3>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <h3>Watch your social media channels grow and thrive</h3>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default HowItWorks;