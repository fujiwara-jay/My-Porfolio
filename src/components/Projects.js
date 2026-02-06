import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Capstone Project: Web-Based Rental Unit Space Finder",
      description: "Designed and implemented features for property listing, search, and booking.",
      technologies: ["React", "Node.js", "SQL", "JavaScript"],
      github: "https://github.com/fujiwara-jay/May-Space-Frontend",
      live: "https://mayspaceunitfinder.vercel.app/unitfinder",
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for managing tasks with drag-and-drop functionality and team collaboration.",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "React-Weather-App",
      description: "Real-time weather application with location detection and weather forecast.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/fujiwara-jay/React-Weather-App",
      live: "https://react-weather-app-simple-project.vercel.app/",
      image: "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/400x250/2563eb/ffffff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;