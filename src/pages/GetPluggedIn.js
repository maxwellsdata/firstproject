import React from 'react';
import baptismImage from './photos/baptism-image.jpg';

function GetPluggedIn() {
  return (
    <div className="plugged-in-page">
      <div className="hero-section">
        <img 
          src={baptismImage}
          alt="Men celebrating baptism in the lake" 
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Get Plugged In</h1>
            <p className="hero-subtitle">Join our community of men growing together in faith</p>
          </div>
        </div>
      </div>
      
      <div className="contact-form-container">
        <h2>Connect With Us</h2>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input type="text" id="zipCode" name="zipCode" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="prayerRequests">Prayer Requests</label>
              <textarea 
                id="prayerRequests" 
                name="prayerRequests" 
                rows="4"
                placeholder="Share your prayer requests here..."
              ></textarea>
            </div>
            
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetPluggedIn; 
