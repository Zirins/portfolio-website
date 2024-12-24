import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between p-6 bg-gray-800 text-white shadow-md">
            {/* Updated Name */}
            <div className="text-4xl font-extrabold tracking-wide">Benson Lin</div>

            <ul className="flex space-x-6 text-lg font-medium">
                <li><Link className="hover:text-blue-400" to="/">Home</Link></li>
                <li><Link className="hover:text-blue-400" to="/about">About</Link></li>
                <li><Link className="hover:text-blue-400" to="/projects">Projects</Link></li>
                <li><Link className="hover:text-blue-400" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
