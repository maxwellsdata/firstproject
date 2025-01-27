import React from 'react';

function Resources() {
  const scheduleItems = [
    { week: 1, date: "Jan 27", passage: "Proverbs 1-3", link: "https://www.biblegateway.com/passage/?search=proverbs%201-3&version=NIV" },
    { week: 2, date: "Feb 3", passage: "Proverbs 4-6", link: "https://www.biblegateway.com/passage/?search=proverbs%204-6&version=NIV" },
    { week: 3, date: "Feb 10", passage: "Proverbs 7-9", link: "https://www.biblegateway.com/passage/?search=proverbs%207-9&version=NIV" },
    { week: 4, date: "Feb 17", passage: "Proverbs 10-12", link: "https://www.biblegateway.com/passage/?search=proverbs%2010-12&version=NIV" },
    { week: 5, date: "Feb 24", passage: "Proverbs 13-15", link: "https://www.biblegateway.com/passage/?search=proverbs%2013-15&version=NIV" },
    { week: 6, date: "Mar 2", passage: "Proverbs 16-18", link: "https://www.biblegateway.com/passage/?search=proverbs%2016-18&version=NIV" },
    { week: 7, date: "Mar 9", passage: "Proverbs 19-21", link: "https://www.biblegateway.com/passage/?search=proverbs%2019-21&version=NIV" },
    { week: 8, date: "Mar 16", passage: "Proverbs 22-24", link: "https://www.biblegateway.com/passage/?search=proverbs%2022-24&version=NIV" },
    { week: 9, date: "Mar 23", passage: "Proverbs 25-27", link: "https://www.biblegateway.com/passage/?search=proverbs%2025-27&version=NIV" },
    { week: 10, date: "Mar 30", passage: "Proverbs 28-31", link: "https://www.biblegateway.com/passage/?search=proverbs%2028-31&version=NIV" },
  ];

  return (
    <div className="resources-container">
      <h1 className="page-title">Resources</h1>
      
      <section className="resources-section">
        <h2 className="section-title">Reading Schedule</h2>
        <div className="schedule-container">
          <div className="schedule-grid">
            {scheduleItems.map((item) => (
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="schedule-item"
                key={item.week}
              >
                <div className="date">Week {item.week} - {item.date}</div>
                <div className="passage-text">{item.passage}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section">
        <h2 className="section-title">Additional Study Resources</h2>
        <div className="resource-cards">
          <div className="resource-card">
            <h3>Enduring Word</h3>
            <p>Free, comprehensive Bible commentary that's easy to use and organized chapter by chapter.</p>
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
            <p>Free online courses covering various biblical topics, including in-depth studies of Proverbs.</p>
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