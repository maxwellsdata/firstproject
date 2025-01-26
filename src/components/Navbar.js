import React from 'react';
import { Link } from 'react-router-dom';
import useScrollDirection from '../hooks/useScrollDirection';

function Navbar() {
  const scrollDirection = useScrollDirection();
  
  return (
    <nav className={`navbar ${scrollDirection === "down" ? "hidden" : ""}`}>
      {/* Your existing navbar content */}
    </nav>
  );
}

export default Navbar; 