import React from 'react';
import './Home.css';
import Prince from '../assets/Prince.jpg';
import { motion } from 'framer-motion';




const Home = () => {
    return (
        <div className="home-container">
            <div className="intro">
                <h2>Hi,</h2>
                <h1>I'm <span>Prince</span></h1>
                <p className="roles">
                    Video Editor | Data Scientist | Developer | Meme Creator | AI Engineer
                </p>
                <div className="skills-bar">
                    <p>React.js</p>
                    <div className="bar"><div className="fill" style={{ width: "20%" }}></div></div>
                    <p>JavaScript</p>
                    <div className="bar"><div className="fill" style={{ width: "70%" }}></div></div>
                    <p>C++</p>
                    <div className="bar"><div className="fill" style={{ width: "85%" }}></div></div>
                    <p>HTML & CSS</p>
                    <div className="bar"><div className="fill" style={{ width: "90%" }}></div></div>
                </div>
            </div>
            <div className="profile-pic">
                <img src={Prince} alt="Prince's Picture" />
            </div>
        </div>
    );
};

export default Home;

