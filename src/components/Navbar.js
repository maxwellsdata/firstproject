import React from 'react';
import { Link } from 'react-router-dom';
import useScrollDirection from '../hooks/useScrollDirection';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
  const scrollDirection = useScrollDirection();
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  return (
    <nav className={`navbar ${scrollDirection === "down" ? "hidden" : ""} ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Your existing navbar content */}
      <button 
        className="theme-toggle" 
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}

export default Navbar; 