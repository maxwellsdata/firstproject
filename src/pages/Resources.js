import React from 'react';

function Resources() {
  const readingSchedule = [
    { date: "1/27", chapters: "Proverbs 1-3" },
    { date: "2/3", chapters: "Proverbs 4-6" },
    { date: "2/10", chapters: "Proverbs 7-9" },
    { date: "2/17", chapters: "Proverbs 10-12" },
    { date: "2/24", chapters: "Proverbs 13-15" },
    { date: "3/2", chapters: "Proverbs 16-18" },
    { date: "3/9", chapters: "Proverbs 19-21" },
    { date: "3/16", chapters: "Proverbs 22-24" },
    { date: "3/23", chapters: "Proverbs 25-27" },
    { date: "3/30", chapters: "Proverbs 28-31" }
  ];

  return (
    <div className="resources-container">
      <h1 className="page-title">Resources</h1>

      {/* Primary Resources Section */}
      <section className="resources-section">
        <h2>Primary Resources</h2>
        <div className="schedule-container">
          <h2>Current Study: Book of Proverbs</h2>
          <p className="schedule-intro">
            Join us as we study through the Book of Proverbs. 
            Each week, we'll explore the wisdom and practical guidance 
            that these chapters offer for our daily lives.
          </p>
          <div className="reading-schedule">
            <h3>Reading Schedule</h3>
            <div className="schedule-grid">
              {readingSchedule.map((week, index) => (
                <div key={index} className="schedule-item">
                  <div className="date">{week.date}</div>
                  <div className="chapters">{week.chapters}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Resources Section */}
      <section className="resources-section">
        <h2>Additional Study Resources</h2>
        <div className="resource-cards">
          <div className="resource-card">
            <h3>Enduring Word</h3>
            <p>Free, comprehensive Bible commentary that's easy to use and organized chapter by chapter. Great for personal Bible study or lesson preparation.</p>
            <a 
              href="https://enduringword.com/bible-commentary/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resource-link"
            >
              Access Commentary
            </a>
          </div>

          <div className="resource-card">
            <h3>The Gospel Coalition Courses</h3>
            <p>Free online courses covering various biblical topics, including in-depth studies of Proverbs and other books of the Bible.</p>
            <a 
              href="https://www.thegospelcoalition.org/course/proverbs-courses/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resource-link"
            >
              View Courses
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources; 