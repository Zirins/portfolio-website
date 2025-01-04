import React from 'react';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import instagramIcon from '../assets/icons/instagram.svg';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-primary text-textPrimary p-4 shadow-md z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold">Benson Lin</h1>

                {/* Navigation Links */}
                <ul className="flex space-x-6 text-lg">
                    <li className="hover:text-secondary cursor-pointer" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>ABOUT</li>
                    <li className="hover:text-secondary cursor-pointer" onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>EXPERIENCE</li>
                    <li className="hover:text-secondary cursor-pointer" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>PROJECTS</li>
                </ul>


            </div>
        </nav>
    );
};

export default Navbar;
