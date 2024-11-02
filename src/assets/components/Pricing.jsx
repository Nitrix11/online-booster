import React from 'react';
import './Pricing.scss';
import price from "../images/price.png"
import red from '../images/herored.png';
const Pricing = () => {
  return (
    <div className='price'>
      {/* <h2 className='h22222'></h2> */}
      <  img src={red} alt="" className="red animated4-image2" />
    <div className="pricing">
   
      <div className="content-wrapper">
      
        {/* <p className='p11'><b>Affordable Pricing For Premium <span><br /></span>Social Media Management</b></p> */}
        <div className="promo-price">
          <h3><b>Pricing</b></h3>
          <p>$225 for 3 months</p>
          <p>(50% discount from $150/month)</p>
        </div>
      
        {/* <button className="cta-button">Get Started Now</button> */}
      </div>
      <div className="image-wrapper">
          <img src={price} alt="Social Media Setup" />
        </div>
    </div>
    </div>
  );
};

export default Pricing;