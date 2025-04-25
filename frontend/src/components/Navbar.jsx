import React from 'react';
import './Navbar.css';
import { FaMicrophone, FaVideo, FaBell, FaBars } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <FaBars className="icon menu-icon" />
        <img
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
          alt="YouTube Logo"
          className="logo"
        />
      </div>

      <div className="nav-center">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button className="search-btn">
            <img src="/search-icon.png" alt="search" />
          </button>
        </div>
        <button className="mic-btn">
          <FaMicrophone />
        </button>
      </div>

      <div className="nav-right">
        <FaVideo className="icon" />
        <FaBell className="icon" />
        <img
          src="https://yt3.ggpht.com/yti/APfAmoGFbXAIQ=s88-c-k-c0x00ffffff-no-rj"
          alt="Profile"
          className="profile-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
