import React from 'react';
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import instagramIcon from "../assets/icons/instagram.svg";

const About = () => {
    return (
        <section id="about" className="h-screen w-screen bg-primary flex flex-col npm justify-center items-center p-8">
            {/* Description */}
            <p className="text-lg text-textp max-w-2xl text-center leading-relaxed text-secondary">
                Hi, I’m a passionate <span className="text-secondary"> Full Stack Developer </span>
                who loves building modern, scalable web applications. I specialize in
                <span className="text-secondary"> React.js, JavaScript, and Tailwind CSS</span>, and I enjoy turning ideas into reality through code.
            </p>

            {/* Skills */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-secondary text-neutral rounded-lg shadow">React</span>
                <span className="px-4 py-2 bg-secondary text-neutral rounded-lg shadow">JavaScript</span>
                <span className="px-4 py-2 bg-secondary text-neutral rounded-lg shadow">Tailwind CSS</span>
                <span className="px-4 py-2 bg-secondary text-neutral rounded-lg shadow">Node.js</span>
                <span className="px-4 py-2 bg-secondary text-neutral rounded-lg shadow">Git</span>
                <span className="px-4 py-2 bg-secondary text-neutral rounded-lg shadow">APIs</span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-16">
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
                        alt="Linkedin"
                        className="w-8 h-8 hover:scale-110 transition duration-300 hover:shadow-accent filter invert"
                    />
                </a>
                <a href="https://instagram.com/bensonlinbl" target="_blank" rel="noopener noreferrer">
                    <img
                        src={instagramIcon}
                        alt="GitHub"
                        className="w-8 h-8 hover:scale-110 transition duration-300 hover:shadow-accent filter invert"
                    />
                </a>
            </div>

        </section>

    );
};

export default About;
