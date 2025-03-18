import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills-container">
            <h1>My Skills</h1>
            
            <div className="skills-grid">
                {/* Technical Skills */}
                <div className="skill-category">
                    <h2>Technical Skills</h2>
                    <div className="skill">
                        <span>React.js</span>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: "80%" }}></div>
                        </div>
                    </div>

                    <div className="skill">
                        <span>JavaScript</span>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: "75%" }}></div>
                        </div>
                    </div>

                    <div className="skill">
                        <span>C++</span>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: "85%" }}></div>
                        </div>
                    </div>

                    <div className="skill">
                        <span>Python (NumPy, Pandas)</span>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: "70%" }}></div>
                        </div>
                    </div>

                    <div className="skill">
                        <span>HTML & CSS</span>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: "90%" }}></div>
                        </div>
                    </div>
                </div>

                {/* Creative Skills */}
                <div className="skill-category">
                    <h2>Creative Skills</h2>
                    <div className="skill">
                        <span>Video Editing</span>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: "85%" }}></div>
                        </div>
                    </div>

                    <div className="skill">
                        <span>Meme Creation</span>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: "90%" }}></div>
                        </div>
                    </div>

                    <div className="skill">
                        <span>UI/UX Design</span>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: "75%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

