import React from 'react';
import './PromoSection.scss';
import group from '../images/landing pic group.png';
import red from '../images/herored.png';
import circle  from '../images/Ellipse 2.png';
import TypingText from"../components/TypingText"
import black from"../images/heroblack.png"
import insta from"../images/insta.png"
import mag from"../images/mag.png"
import line from"../images/Line.png"
import one from"../images/450.svg"
const PromoSection = () => {
  return (
    <>
    
    
    
    
    
    

  <div className='hero'>
    <div className="promo-section">
      <img src={circle} alt="" className='circle animated2-image' />
      <img src={circle} alt="" className='circle2 animated2-image2' />
      <img src={black} alt="" className='black' />
<  img src={red} alt="" className="red animated4-image2" />
<img src={insta} alt="" className='insta animated3-image' />
<img src={mag} alt="" className='mag' />
      <div className="promo-content">
        <div className="text-content">
          <h3 className='Amplify'>Amplify Your Social Media Reach in Just 3 Months!</h3>
          <h1 className="highlight"></h1>
          <p className='p1'>Join our <span>Online Presence Booster</span> program and  see measurable<span><br /></span>
          growth on your social platforms at an un beatable rate. </p>
          <p className='p2'><b>Lock in 3 moths for a 50% discount!</b></p>
          <p className='p3'><b>$225.00/3 months</b></p>
          <img  className="p4" src={one} alt="" />
          <div className='b-Container'>
            <p>Claim My 3-Month Boost Now</p>
            <button className="cta-btn">Get Offer</button>
          </div>
          
        </div>
        <div className="image-content">
          <img src={group} className='promo-pic' alt="Promo" />
        </div>
      </div>
    </div>

    </div>
     <hr />   
    </>
  );
};

export default PromoSection;