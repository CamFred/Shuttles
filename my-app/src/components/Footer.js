import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="nav">
          <Link to="/" className="link">Home</Link>
          <Link to="/about" className="link">About</Link>
         <Link to="/contact" className="link">Contact</Link>
      </nav>
      {/* Footer content goes here */}
      <p>© 2023 My Website</p>
    </footer>
  );
};

export default Footer;
