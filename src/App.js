import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import app from './firebase';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

// Import pages
import Home from './pages/Home';
import GetPluggedIn from './pages/GetPluggedIn';
import Resources from './pages/Resources';
import Calendar from './pages/Calendar';
import Partnerships from './pages/Partnerships';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-plugged-in" element={<GetPluggedIn />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/partnerships" element={<Partnerships />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
