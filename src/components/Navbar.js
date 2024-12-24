import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="logo">My Portfolio</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;