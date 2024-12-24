import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar /> {/* Include Navbar at the top */}
                <Routes>
                    <Route path="/" element={<h1>Home Page</h1>} />
                    <Route path="/about" element={<h1>About Page</h1>} />
                    <Route path="/projects" element={<h1>Projects Page</h1>} />
                    <Route path="/contact" element={<h1>Contact Page</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
