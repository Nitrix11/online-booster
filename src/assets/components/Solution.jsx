import React from 'react';
import './Solution.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faClock } from "@fortawesome/free-solid-svg-icons";
import black from"../images/heroblack.png"
import red from '../images/herored.png';
const Solution = () => {
  return (
    <div className='solutionz'>
       <img src={black} alt="" className='black' />
       <  img src={red} alt="" className="red animated-image2" />
    <div className="social-media-solution">
      <div className="solution-content">
        <div className="two2">
        <h3 className='h3'>Struggling with inconsistent posting, low engagement,<span><br /></span>  and time-consuming tasks? </h3>
        <h2 className='h222'><b>We've got you covered.</b></h2>
        </div>

       
        <p className='p0'>
          <b>
          "With our expert social media management services, we take care of everything—from strategy to content creation—so you can focus on growing your business."
          </b>
        </p>
        <div className="solution-items">
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon className='icon2' icon={faChartLine} />
            </div>
            <h3>No Measurable Results</h3>
          </div>
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon className='icon1' icon={faClock} />
            </div>
            <h3>Time-Consuming</h3>
          </div>
        </div>
        <p className='tired'>
          Tired of These Challenges? Let Us Handle It!
        </p>
        <button className="cta-button">Schedule Your Free Consultation</button>
      </div>
    </div>
    <hr />
    </div>
  ); 
};

export default Solution;
