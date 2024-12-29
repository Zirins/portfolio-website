import React from 'react';

const Sidebar = () => {
    return (
        <div className="h-screen w-1/3 bg-primary text-textPrimary p-8 flex flex-col justify-between fixed top-0 left-0 md:h-screen">
            {/* Header Section */}
            <div className="flex flex-col items-center mb-6">
                <h1 className="text-4xl font-bold text-textPrimary tracking-wide">Benson Lin</h1>
                <h2 className="text-xl mt-2 text-accent tracking-wide">Fullstack Developer | WPI Junior</h2>
                <p className="mt-4 text-textPrimary text-center leading-relaxed">
                    Computer Science major specializing in fullstack development.
                </p>
            </div>

            {/* Navigation Links */}
            <nav className="mt-8">
                <ul className="space-y-4 text-lg">
                    <li className="hover:text-accent cursor-pointer underline-offset-4 hover:underline transition duration-300 hover:shadow-accent" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>ABOUT</li>
                    <li className="hover:text-secondary cursor-pointer underline-offset-4 hover:underline transition duration-300 hover:shadow-secondary" onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>EXPERIENCE</li>
                    <li className="hover:text-accent cursor-pointer underline-offset-4 hover:underline transition duration-300 hover:shadow-accent" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>PROJECTS</li>
                </ul>
            </nav>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-8">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github text-3xl hover:text-accent transition duration-300 hover:shadow-accent"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in text-3xl hover:text-secondary transition duration-300 hover:shadow-secondary"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram text-3xl hover:text-accent transition duration-300 hover:shadow-accent"></i>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;