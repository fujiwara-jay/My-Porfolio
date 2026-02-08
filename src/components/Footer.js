import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/fujiwara-jay" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/julian-gazzingan-b6a238333/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/jayrfujiwara/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
        
        <p className="copyright">
          &copy; {currentYear} Julian P. Gazzingan Jr., All rights reserved.
        </p>
        
        <p className="footer-note">
          Student IT Intern. Built with React & ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;