import React from 'react';
import './GetStartedToday.scss';

const GetStartedToday = () => {
  return (
    <div className="get-started-today">
      <div className="content-wrapper">
        
        <div className="form-container">
          <div className='texts'>
          <h2>Get Started Today</h2>
        <p className='claim'>Claim Your 50% Discount</p>
        <p className='fill'>
        Fill out the form below to schedule your<span><br /></span>
free consultation or secure your<span><br /></span>
promo package
        </p>
          </div>
      
          <form>
            
            <div className="form-group">
              <input type="text" placeholder="Full Name (Required)" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number (Required)" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address (Required)" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Business Name (Required)" />
            </div>
            <button type="submit" className="cta-button">
              Schedule Free Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetStartedToday;