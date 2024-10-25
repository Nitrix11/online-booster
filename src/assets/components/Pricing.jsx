import React from 'react';
import './Pricing.scss';
import price from "../images/price.png"

const Pricing = () => {
  return (
    <>
      <h2 className='h22222'><b>Pricing</b></h2>

    <div className="pricing">
   
      <div className="content-wrapper">
      
        <p className='p11'><b>Affordable Pricing For Premium <span><br /></span>Social Media Management</b></p>
        <div className="promo-price">
          <h3><b>Promo Price:</b></h3>
          <p>$225 for 3 months</p>
          <p>(50% discount from $150/month)</p>
        </div>
      
        <button className="cta-button">Get Started Now</button>
      </div>
      <div className="image-wrapper">
          <img src={price} alt="Social Media Setup" />
        </div>
    </div>
    </>
  );
};

export default Pricing;