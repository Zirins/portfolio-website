import React from 'react';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import instagramIcon from '../assets/icons/instagram.svg';

const Sidebar = () => {
    return (
        <div className="h-screen w-1/3 bg-primary text-textPrimary p-20 flex flex-col justify-between fixed top-0 left-0 md:w-1/2 md:h-screen sm:w-full sm:h-auto sm:relative sm:p-8 xs:p-6">
            {/* Header Section */}
            <div className="flex flex-col items-center mb-6 sm:items-start sm:text-left">
                <h1 className="text-4xl font-bold text-textPrimary tracking-wide sm:text-3xl">Benson Lin</h1>
                <h2 className="text-xl mt-2 text-accent tracking-wide sm:text-lg">Fullstack Developer | WPI Junior</h2>
                <p className="mt-4 text-textPrimary text-center leading-relaxed sm:text-left sm:text-sm">
                    Computer Science major specializing in fullstack development.
                </p>
            </div>

            {/* Navigation Links */}
            <nav className="mt-8">
                <ul className="space-y-4 text-lg sm:text-sm">
                    <li className="hover:text-accent cursor-pointer underline-offset-4 hover:underline transition duration-300 hover:shadow-accent" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>ABOUT</li>
                    <li className="hover:text-secondary cursor-pointer underline-offset-4 hover:underline transition duration-300 hover:shadow-secondary" onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>EXPERIENCE</li>
                    <li className="hover:text-accent cursor-pointer underline-offset-4 hover:underline transition duration-300 hover:shadow-accent" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>PROJECTS</li>
                </ul>
            </nav>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-8 sm:justify-center">
                <a href="https://github.com/Zirins" target="_blank" rel="noopener noreferrer">
                    <img
                        src={githubIcon}
                        alt="GitHub"
                        className="w-8 h-8 hover:scale-110 transition duration-300 hover:shadow-accent filter invert"
                    />
                </a>
                <a href="https://www.linkedin.com/in/bensonlinbl/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={linkedinIcon}
                        alt="LinkedIn"
                        className="w-8 h-8 hover:scale-110 transition duration-300 hover:shadow-secondary filter invert"
                    />
                </a>
                <a href="https://instagram.com/bensonlinbl" target="_blank" rel="noopener noreferrer">
                    <img
                        src={instagramIcon}
                        alt="Instagram"
                        className="w-8 h-8 hover:scale-110 transition duration-300 hover:shadow-accent filter invert"
                    />
                </a>
            </div>

        </div>
    );
};

export default Sidebar;
