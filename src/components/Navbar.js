import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  // Prevent duplicate links
  const links = [
    { path: '/', text: 'Home' },
    { path: '/get-plugged-in', text: 'Get Plugged In' },
    { path: '/resources', text: 'Resources' },
    { path: '/calendar', text: 'Calendar' },
    { path: '/partnerships', text: 'Partnerships' }
  ];

  return (
    <nav className="navbar">
      {links.map((link) => (
        <Link 
          key={link.path}
          to={link.path}
          className={location.pathname === link.path ? 'active' : ''}
        >
          {link.text}
        </Link>
      ))}
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