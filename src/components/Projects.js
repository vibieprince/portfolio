import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-grid">
                <div className="project-card">
                    <h3>Sports Networking & Scoring App</h3>
                    <p>A hybrid app to connect athletes and track sports scores.</p>
                </div>
                <div className="project-card">
                    <h3>Bill Generation System</h3>
                    <p>A barcode scanning billing system for fast and easy transactions.</p>
                </div>
                <div className="project-card">
                    <h3>Portfolio Website</h3>
                    <p>A fully responsive React.js portfolio to showcase my work.</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;

