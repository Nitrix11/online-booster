import React from 'react';
import './PromoSection.scss';
import group from '../images/landing pic group.png';
import red from '../images/herored.png';
import circle  from '../images/Ellipse 2.png';

const PromoSection = () => {
  return (<>
    <div className="promo-section">
      <img src={circle} alt="" className='circle' />
<  img src={red} alt="" className="red" />

      <div className="promo-content">
        <div className="text-content">
          <h3>Online Presence</h3>
          <h1 className="highlight">BOOSTER</h1>
          <p className='p1'>Transform Your Social Media in 3s<span><br /></span> Months – 50% Off Limited Time!</p>
          <p className='p2'><b>Expert Social Media Management for Startups & SMEs at<span><br /></span> Unbeatable Prices. Limited Time Offer – Act Now!</b></p>
          <button className="cta-btn">Get Started Today<br/>Only $225 for 3 Months</button>
        </div>
        <div className="image-content">
          <img src={group} alt="Promo" />
        </div>
      </div>
    </div>
    <hr />
    </>
  );
};

export default PromoSection;