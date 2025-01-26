import React from 'react';
import { Link } from 'react-router-dom';
import useScrollDirection from '../hooks/useScrollDirection';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
  const scrollDirection = useScrollDirection();
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  console.log('Dark mode:', isDarkMode);

  return (
    <nav className={`navbar ${scrollDirection === "down" ? "hidden" : ""} ${isDarkMode ? 'dark-mode' : ''}`}>
      <Link to="/">Home</Link>
      <Link to="/get-plugged-in">Get Plugged In</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/partnerships">Partnerships</Link>
      <button 
        className="theme-toggle" 
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        style={{ color: 'white' }}
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </nav>
  );
}

export default Navbar; 