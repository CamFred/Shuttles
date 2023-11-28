import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'; // Import the CSS file

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/navigation" className="link">Navigation</Link>
                <Link to="/engineering" className="link">Engineering</Link>

                
                <Link to="/coms" className="link">Coms</Link>
                <Link to="/cargo" className="link">Cargo</Link>
            </nav>
        </header>
    );
};

export default Header;