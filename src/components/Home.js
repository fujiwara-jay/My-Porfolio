import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/Pic.jpg';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <motion.div 
          className="profile-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={profileImage} 
            alt="Profile" 
            className="profile-image"
          />
        </motion.div>
        
        <motion.div 
          className="intro-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>Julian P. Gazzingan Jr.</h1>
          <h2>4th-Year IT Student | Aspiring Web Developer</h2>
          <p>
            I am a dedicated Information Technology student at 
            Pateros Technological College seeking an OJT opportunity 
            to bridge the gap between academic theory and industry practice. 
            With a strong foundation in IT principles and hands on experience 
            through personal web development projects, I am eager to contribute to a 
            fast paced team. I am a fast learner committed to delivering value while 
            building a professional career in tech.
          </p>
          
          <div className="skills">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">SQL</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;