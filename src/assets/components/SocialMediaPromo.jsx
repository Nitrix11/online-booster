import React from 'react';
import './SocialMediaPromo.scss';
import socialmedia from '../images/socialmedia.png';

const SocialMediaPromo = () => {
  return (
    <>
    <h2 className='h2'><b>What’s Included In Our Social <span><br /></span>Media Management Promo</b></h2>
     <section className="promo-section">
      
          <div className="promo-image">
          {/* Replace the below image with your actual assets */}
          <img src={socialmedia} alt="Promo Visual" />
        </div>
      <div className="promo-content">
  
        <div className="promo-text">
          
          <div className="promo-details">
            <h3>Unlock the full potential of your brand’s social media presence</h3>
            <ul>
              <li>Tailored Social Media Strategies</li>
              <li>Content Creation for Engaging Posts</li>
              <li>Actionable Insights for Growth</li>
            </ul>
            <p>
              We’ll take the hassle out of managing your social channels, providing tailored strategies, engaging content, and actionable insights to help your brand stand out.
            </p>
            <p>
              Whether you're a startup, SME, or growing business, this package delivers everything you need to boost your online presence and connect with your audience—all at an unbeatable price.
            </p>
            <button className="contact-button">Get in Touch Now</button>
          </div>
        </div>
       
      </div>
    </section>
    </> 
    
  );
};

export default SocialMediaPromo;
