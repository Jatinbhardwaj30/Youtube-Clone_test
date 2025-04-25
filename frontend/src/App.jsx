import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* video id */}
            <Route path="/video/:id" element={<VideoDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
