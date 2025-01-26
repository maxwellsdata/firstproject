import React from 'react';
import destinyLogo from './photos/destiny-rescue-logo.png'; // Update this path to match your image location
import oneGenLogo from './photos/one-gen-away.png';

function Partnerships() {
  return (
    <div className="partnerships-page">
      <h1>Ministry Partners</h1>
      <p className="page-subtitle">Together we can make a greater impact</p>
      
      <div className="partnership-container">
        <div className="partnership-card">
          <div className="partnership-header">
            <div className="header-text">
              <h2>Destiny Rescue</h2>
              <span className="partner-tagline">Rescuing Children. Restoring Hope.</span>
            </div>
            <img 
              src={destinyLogo} 
              alt="Destiny Rescue Logo" 
              className="partner-logo"
            />
          </div>
          <div className="partnership-content">
            <div className="mission-text">
              <p>
                Destiny Rescue is an internationally-recognized Christian non-profit organization 
                dedicated to rescuing children trapped in sexual exploitation and trafficking. 
                Through rescue, rehabilitation, and reintegration, they work to give children 
                a future free from exploitation.
              </p>
            </div>
            
            <div className="donation-section">
              <h3>Support Our Mission</h3>
              <div className="impact-statement">
                <p>
                  Join us in making a difference. Your donation helps rescue and restore 
                  precious lives from trafficking and exploitation.
                </p>
              </div>
              <a 
                href="https://advocatesfundingfreedom.funraise.org/team/monday-night-men's-group"
                target="_blank"
                rel="noopener noreferrer"
                className="donate-button"
              >
                Donate to Save a Child Here
              </a>
            </div>
          </div>
        </div>

        <div className="partnership-card">
          <div className="partnership-header">
            <div className="header-text">
              <h2>One Generation Away</h2>
              <span className="partner-tagline">Wiping Hunger Off the Face of America</span>
            </div>
            <img 
              src={oneGenLogo} 
              alt="One Generation Away Logo" 
              className="partner-logo"
            />
          </div>
          <div className="partnership-content">
            <div className="mission-text">
              <p>
                One Generation Away is a compassionate community resource dedicated to wiping 
                hunger off the face of America. They rescue high-quality food from grocery stores, 
                restaurants, caterers, and farms, then distribute it to neighbors in need — no 
                questions asked.
              </p>
            </div>
            
            <div className="donation-section">
              <h3>Get Involved</h3>
              <div className="impact-statement">
                <p>
                  Help us fight hunger in our community. One Generation Away provides fresh produce, 
                  pantry staples, and more to different neighborhoods through their Mobile Pantry 
                  program.
                </p>
              </div>
              <a 
                href="https://onegenaway.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="donate-button"
              >
                Learn More & Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnerships; 