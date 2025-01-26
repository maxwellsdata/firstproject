import React from 'react';

function Calendar() {
  return (
    <div className="calendar-container">
      <h1 className="page-title">Calendar</h1>
      
      <div className="calendar-content">
        <div className="content-card">
          <h2>Upcoming Events</h2>
          <div className="calendar-info">
            <p>Monday Night Group meets every Monday at 7:00 PM</p>
            <p>Location: The Church at West Franklin</p>
          </div>
          
          {/* Placeholder for future calendar integration */}
          <div className="calendar-placeholder">
            <p>Full calendar integration coming soon...</p>
            <p>For now, join us every Monday night!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar; 