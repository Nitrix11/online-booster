import React from 'react';
import './KeyFeatures.scss';

const KeyFeatures = () => {
  return (
    <section className="key-features-section">
      <h2>Key Features</h2>
      <div className="features-list">
        <div className="feature-item">
          <i className="fas fa-globe"></i>
          <p>Digital/Social Media Audit</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-comments"></i>
          <p>Customized Content Strategy</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-chart-bar"></i>
          <p>Reports & Analytics</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-video"></i>
          <p>Content Creation (4 video clips, 8 still ads)</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-search"></i>
          <p>Basic SEO & Social Media Optimization</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-user-cog"></i>
          <p>Account Management</p>
        </div>
      </div>
      <button className="cta-button">Claim Your 50% Discount—<span><br /></span>Limited Slots Available!</button>
    </section>
  );
};

export default KeyFeatures;
