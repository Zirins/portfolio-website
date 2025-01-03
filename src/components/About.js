import React from 'react';

const About = () => {
    return (
        <section id="about" className="h-screen bg-neutral flex flex-col npm justify-end items-center p-8">
            {/* Description */}
            <p className="text-lg text-textp max-w-2xl text-center leading-relaxed">
                Hi, I’m <span className="font-bold">Benson Lin</span>, a passionate <span className="text-secondary"> Full Stack Developer </span>
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

        </section>
        
    );
};

export default About;
