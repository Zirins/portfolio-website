import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-primary text-neutral shadow-md p-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                <div className="text-3xl font-bold tracking-wide text-secondary">
                    Benson Lin
                </div>
                <ul className="flex space-x-8 text-lg ">
                    <li><a className="hover:text-secondary border-b-2 border-secondary" href="/">Home</a></li>
                    <li><a className="hover:text-secondary border-b-2 border-secondary" href="/about">About</a></li>
                    <li><a className="hover:text-secondary border-b-2 border-secondary" href="/projects">Projects</a></li>
                    <li><a className="hover:text-secondary border-b-2 border-secondary" href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
