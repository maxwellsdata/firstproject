import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/get-plugged-in">Get Plugged In</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/partnerships">Partnerships</Link>
      <button 
        className="theme-toggle" 
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </nav>
  );
}

export default Navbar; 