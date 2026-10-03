import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Mini Management</h2>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#records">Records</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;