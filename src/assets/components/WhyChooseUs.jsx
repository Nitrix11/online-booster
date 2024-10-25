import React from 'react';
import './WhyChooseUs.scss';
import  choose from "../images/chooseus.png";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="content-wrapper">
        <div className="left-content">
          <h2><b>Why BUD KREATIVE?</b></h2>
          <ul>
            <li>Proven track record of driving results.</li>
            <li>Tailored solutions for your unique business needs.</li>
            <li>Professional team of content creators and social media experts.</li>
          </ul>
          <button className="cta-button">Schedule Your Free Consultation Today!</button>
        </div>
        <div className="right-content">
          <img src={choose} alt="BUD KREATIVE" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;