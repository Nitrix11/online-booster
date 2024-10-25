import React from 'react';
import './Solution.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faClock } from "@fortawesome/free-solid-svg-icons";

const Solution = () => {
  return (
    <div className="social-media-solution">
      <div className="solution-content">
        <h2 className='h222'><b>We Have Got<span><br /></span> The Solution For You!!</b></h2>
        <p>
          "With our expert social media management services, we take care of everything—from strategy to content creation—so you can focus on growing your business."
        </p>
        <div className="solution-items">
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>No Measurable Results</h3>
          </div>
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <h3>Time-Consuming</h3>
          </div>
        </div>
        <p>
          Tired of These Challenges? Let Us Handle It!
        </p>
        <button className="cta-button">Schedule Your Free Consultation</button>
      </div>
    </div>
  );
};

export default Solution;
