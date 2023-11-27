import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
    fontFamily: '"Press Start 2P", cursive',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    background: '#1a1a1a', // a dark gray color
    color: '#3399ff', // a neon green color
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    padding: '0px 0',
};

const navStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    listStyle: 'none',
    padding: '0 20px',
};

const linkStyle = {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '0.6em', // smaller font size
    textDecoration: 'none',
    color: '#3399ff', // a blue color
    background: '#1a1a1a', // a dark gray color
    padding: '10px 20px',
    marginRight: '10px',
    border: '2px solid #3399ff', // a blue border
    boxSizing: 'border-box',
};

const Header = () => {
    return (
        <header style={headerStyle}>
            <nav style={navStyle}>
                <Link to="/navigation" style={linkStyle}>Navigation</Link>
                <Link to="/coms" style={linkStyle}>Coms</Link>
                <Link to="/shipyard" style={linkStyle}>Shipyard</Link>
                <Link to="/cargo" style={linkStyle}>Cargo</Link>
            </nav>
        </header>
    );
};

export default Header;
