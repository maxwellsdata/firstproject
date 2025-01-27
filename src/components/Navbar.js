import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
          Home
        </Link>
        <Link to="/get-plugged-in" className={location.pathname === '/get-plugged-in' ? 'nav-link active' : 'nav-link'}>
          Get Plugged In
        </Link>
        <Link to="/resources" className={location.pathname === '/resources' ? 'nav-link active' : 'nav-link'}>
          Resources
        </Link>
        <Link to="/calendar" className={location.pathname === '/calendar' ? 'nav-link active' : 'nav-link'}>
          Calendar
        </Link>
        <Link to="/partnerships" className={location.pathname === '/partnerships' ? 'nav-link active' : 'nav-link'}>
          Partnerships
        </Link>
        <button 
          className="theme-toggle" 
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar; 