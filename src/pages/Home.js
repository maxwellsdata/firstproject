import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Monday Night Group</h1>
      
      <div className="home-content">
        <div className="content-card">
          <h2>Who We Are</h2>
          <p>
            We are a community of men dedicated to growing in our faith through 
            the study of God's Word, fellowship, and prayer. Our mission is to 
            help men become better disciples of Christ, leaders in their homes, 
            and servants in their communities.
          </p>
          <p>
            Join us as we journey together in faith, supporting and encouraging 
            one another in our walk with Christ.
          </p>
        </div>

        <div className="content-card">
          <h2>Our Mission</h2>
          <p>
            To equip and encourage men to grow in their relationship with Christ 
            through biblical teaching, authentic relationships, and spiritual 
            accountability.
          </p>
          <ul className="mission-list">
            <li><span>📖</span> Biblical Teaching</li>
            <li><span>🤝</span> Authentic Community</li>
            <li><span>🙏</span> Prayer Support</li>
            <li><span>🌱</span> Spiritual Growth</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
