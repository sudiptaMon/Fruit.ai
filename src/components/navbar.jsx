import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = ({ username }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">Fruit.AI</h1>
        <div className="navbar-links">
          <span className="nav-item">Home</span>
          <div className="nav-item dropdown" onClick={toggleDropdown}>
            {username}
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <span className="dropdown-item">{username}</span>
              <span className="dropdown-item">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
