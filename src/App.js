import React from 'react';
// import Navbar from './components/Navbar';
import About from './components/About'; // Import About component
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Sidebar */}
                <Sidebar />

            </div>
        </Router>
    );
}

export default App;
