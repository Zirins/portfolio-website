import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const NavBar = () => {
    return (
        <nav className="bg-primary text-neutral shadow-md p-4 fixed w-full z-10">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                {/* Logo */}
                <div className="font-serif text-3xl font-extrabold tracking-wide text-secondary">
                    Benson Lin
                </div>

                {/* Navbar Links */}
                <ul className="flex space-x-8 text-lg">
                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="hover:text-secondary transition-colors duration-300 cursor-pointer"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="hover:text-secondary transition-colors duration-300 cursor-pointer"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="hover:text-secondary transition-colors duration-300 cursor-pointer"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="hover:text-secondary transition-colors duration-300 cursor-pointer"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
