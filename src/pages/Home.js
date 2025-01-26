import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to Men's Bible Study</h1>
      <div className="content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            We are a community of men dedicated to growing in our faith through
            the study of God's Word, fellowship, and prayer. Our mission is to
            help men become better disciples of Christ, leaders in their homes,
            and servants in their communities.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Join us as we journey together in faith, supporting and encouraging
            one another in our walk with Christ.
          </p>
        </section>
        
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            To equip and encourage men to grow in their relationship with Christ
            through biblical teaching, authentic relationships, and spiritual
            accountability.
          </p>
          <ul style={{ marginTop: '1rem', listStyle: 'none' }}>
            <li style={{ marginBottom: '0.5rem' }}>🎯 Biblical Teaching</li>
            <li style={{ marginBottom: '0.5rem' }}>🤝 Authentic Community</li>
            <li style={{ marginBottom: '0.5rem' }}>🙏 Prayer Support</li>
            <li>💪 Spiritual Growth</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
