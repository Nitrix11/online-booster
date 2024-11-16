import React from 'react';
import './SocialMediaPromo.scss';
import socialmedia from '../images/socialmedia.png';
import black22 from"../images/socialblack.png"
const SocialMediaPromo = () => {
  return (
    <div id='social'>
    
    <img src={black22} className="black22" alt="" />
    
    
    
    
    
    
    
    
    

    <>
    <h2 className='h2'>What’s Included In Our Social Media<span className='span1'><br /></span> Management Promo</h2>
     <section className="promo-section1">
      
          <div className="promo-image">
          {/* Replace the below image with your actual assets */}
          <img src={socialmedia} alt="Promo Visual" />
        </div>
      <div className="promo-content">
  
        <div className="promo-text">
          
          <div className="promo-details">
            <h3 className='h3'>Unlock the full potential of your brand’s social media presence</h3>
            <ul>
              <li className='li'>Tailored Social Media Strategies</li>
              <li className='li'>Content Creation for Engaging Posts</li>
              <li className='li'>Actionable Insights for Growth</li>
            </ul>
            <p>
              We’ll take the hassle out of managing your social channels, providing tailored strategies, engaging content, and actionable insights to help your brand stand out.
            </p>
            <p>
              Whether you're a startup, SME, or growing business, this package delivers everything you need to boost your online presence and connect with your audience—all at an unbeatable price.
            </p>
            <button className="contact-button">Get Started Now</button>
          </div>
        </div>
       
      </div>
    </section>
    <hr className='hr' />
   
    </> 
    </div>
  );
};

export default SocialMediaPromo;
