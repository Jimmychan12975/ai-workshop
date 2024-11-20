import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>AI Workshop</h3>
          <p>Pepperdine Emerging Technologies Association</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#agenda">Agenda</a>
            <a href="#registration">Register</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="link-group">
            <h4>Connect</h4>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 