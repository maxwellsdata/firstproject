import React from 'react';
import destinyLogo from './photos/destiny-rescue-logo.png';
import oneGenLogo from './photos/one-gen-away.png';

function Partnerships() {
  return (
    <div className="partnerships-container">
      <h1 className="page-title">Partnerships</h1>
      
      <div className="partnerships-grid">
        <div className="partnership-card">
          <div className="partnership-header">
            <div className="partnership-title">
              <h2>Destiny Rescue</h2>
              <p className="partnership-tagline">Rescuing Children. Restoring Hope.</p>
            </div>
            <img 
              src={destinyLogo} 
              alt="Destiny Rescue Logo" 
              className="partner-logo destiny-logo"
            />
          </div>
          
          <div className="partnership-content">
            <p>Destiny Rescue is an internationally-recognized Christian non-profit organization dedicated to rescuing children trapped in sexual exploitation and trafficking. Through rescue, rehabilitation, and reintegration, they work to give children a future free from exploitation.</p>
            
            <div className="partnership-cta">
              <h3>Support Our Mission</h3>
              <p>Join us in making a difference. Your donation helps rescue and restore precious lives from trafficking and exploitation.</p>
              <a href="https://www.destinyrescue.org/us/donate/" target="_blank" rel="noopener noreferrer" className="cta-button">
                Donate to Save a Child
              </a>
            </div>
          </div>
        </div>

        <div className="partnership-card">
          <div className="partnership-header">
            <div className="partnership-title">
              <h2>One Generation Away</h2>
              <p className="partnership-tagline">Wiping Hunger Off the Face of America</p>
            </div>
            <img 
              src={oneGenLogo} 
              alt="One Generation Away Logo" 
              className="partner-logo one-gen-away-logo"
            />
          </div>
          
          <div className="partnership-content">
            <p>One Generation Away is a compassionate community resource dedicated to wiping hunger off the face of America. They rescue high-quality food from grocery stores, restaurants, caterers, and farms, then distribute it to neighbors in need — no questions asked.</p>
            
            <div className="partnership-cta">
              <h3>Get Involved</h3>
              <p>Help us fight hunger in our community. One Generation Away provides fresh produce, pantry staples, and more to different neighborhoods through their Mobile Pantry program.</p>
              <a href="https://onegenaway.com/donate/" target="_blank" rel="noopener noreferrer" className="cta-button">
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