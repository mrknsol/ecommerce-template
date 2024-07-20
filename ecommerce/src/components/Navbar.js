import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">ECOMMERCE</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/news">News</Link>
        <Link to="/about-us">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;