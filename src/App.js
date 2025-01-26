import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import './App.css';
import app from './firebase';

// Import pages
import Home from './pages/Home';
import GetPluggedIn from './pages/GetPluggedIn';
import Resources from './pages/Resources';
import Calendar from './pages/Calendar';
import Partnerships from './pages/Partnerships';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/get-plugged-in">Get Plugged In</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/partnerships">Partnerships</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-plugged-in" element={<GetPluggedIn />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/partnerships" element={<Partnerships />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
