import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Navbar />

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
