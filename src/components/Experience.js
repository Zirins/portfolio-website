import React from 'react';

const Experience = () => {
    const experiences = [
        {
            date: 'MAR 2024 — MAY 2024',
            title: 'Software Engineer Collaboration',
            company: 'Brigham & Women\'s Hospital',
            link: 'https://www.brighamandwomens.org/',
            description: 'Worked on a 9-person team applying Agile methodologies to create a hospital web application prototype. Developed features using React.js, Typescript, Material UI, Express, Prisma ORM, and PostgreSQL. Built algorithms for hospital navigation (A*, Dijkstra, BFS, DFS) and implemented modules for pathfinding and service requests.',
            tags: ['React.js', 'TypeScript', 'Material UI', 'Express', 'Prisma ORM', 'PostgreSQL']
        },
    ];

    return (
        <section id="experience" className="h-auto min-h-[300px] bg-gray-100 text-gray-800 p-8 md:p-16 lg:p-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Experience</h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <a
                        key={index}
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl hover:scale-105 hover:bg-gray-50"
                    >
                        <p className="text-sm text-gray-600 mb-2">{exp.date}</p>
                        <h3 className="text-xl font-semibold text-gray-800 hover:text-primary">
                            {exp.title} · {exp.company}
                        </h3>
                        <p className="text-sm text-gray-700 mt-2 leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap mt-4 gap-2">
                            {exp.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-lg shadow"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Experience;
