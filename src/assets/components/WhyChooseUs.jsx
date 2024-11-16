import React from 'react';
import './WhyChooseUs.scss';
import  choose from "../images/chooseus.png";
import  whyred from "../images/whyred.png";
const WhyChooseUs = () => {
  return (
    <div id='why'>
      <h3 className='h33'>Why Choose Us</h3>
    <img src={whyred} className="whyred"alt="" />
    <div className="why-choose-us">
      <div className="content-wrapper">
        
        <div className="left-content">
          <h2 className='whybud'><b>Why BUD KREATIVE?</b></h2>
          <ul>
            <li className='li'>Proven track record of driving results.</li>
            <li className='li'>Tailored solutions for your unique business needs.</li>
            <li className='li'>Professional team of content creators and social media experts.</li>
          </ul>
          <button className="cta-button">Schedule Your Free Consultation Today!</button>
        </div>
        <div className="right-content">
          <img src={choose} alt="BUD KREATIVE" />
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default WhyChooseUs;