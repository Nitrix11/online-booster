import React from 'react';
import './KeyFeatures.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faComments, faChartBar, faVideo, faSearch, faUserCog } from "@fortawesome/free-solid-svg-icons";

const KeyFeatures = () => {
  return (
    <section className="key-features-section">
      <h2>Key Features</h2>
      <div className="features-list">
        <div className="feature-item">
          <FontAwesomeIcon icon={faGlobe} />
          <p>Digital/Social Media Audit</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faComments} />
          <p>Customized Content Strategy</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faChartBar} />
          <p>Reports & Analytics</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faVideo} />
          <p>Content Creation (4 video clips, 8 still ads)</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faSearch} />
          <p>Basic SEO & Social Media Optimization</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faUserCog} />
          <p>Account Management</p>
        </div>
      </div>
      <button className="cta-button">Claim Your 50% Discount—<span><br /></span>Limited Slots Available!</button>
    </section>
  );
};

export default KeyFeatures;
