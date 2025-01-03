import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-grow overflow-y-auto">
                <About />
                <Experience />
                <Projects />
            </div>
        </div>
    );
}

export default App;
