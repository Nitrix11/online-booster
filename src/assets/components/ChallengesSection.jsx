import React from 'react';
import './ChallengesSection.scss';
import challenges from "../images/challenges.png"

const ChallengesSection = () => {
  return (
    <>
     <h2 className='h22'><b>"Are These Challenges <span><br /></span>Holding Back Your Brand's Growth?"</b></h2>
       <section id="challenges-section">
      <div className="content">
       
        <ul className="challenges-list">
          <li>Inconsistent Posting: Struggling to keep up with regular, engaging <span><br /></span>posts?</li>
          <li>Low Engagement: Not seeing the likes, comments, and shares you <span><br /></span>deserve?</li>
          <li>Time-Consuming: Social media taking up too much of your <span><br /></span>time?</li>
          <li>Lack of Strategy: Unsure of what to post and <span><br /></span>when?</li>
          <li>No Measurable Results: Not seeing a clear ROI from your <span><br /></span>efforts?</li>
        </ul>
      </div>
      <div className="image-section">
        <div className="image-wrapper1">
          <img src={challenges} alt="Frustrated person at a laptop" />
        </div>
      </div>
    </section>
    </>
 
  );
};

export default ChallengesSection;
