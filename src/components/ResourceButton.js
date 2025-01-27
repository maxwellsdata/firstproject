import React from 'react';

function ResourceButton({ title, description, link, buttonText }) {
  return (
    <div className="resource-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="resource-button"
      >
        {buttonText || "Read More"}
      </a>
    </div>
  );
}

export default ResourceButton; 