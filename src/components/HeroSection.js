import React from 'react';
import CountdownTimer from './CountdownTimer';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Unlock the Future with AI!</h1>
        <p className="hero-subtitle">
          Join us at Pepperdine for an immersive AI Workshop, hosted by the 
          Emerging Technologies Association.
        </p>
        <div className="countdown-container">
          <CountdownTimer 
            eventDate="2024-11-21T17:30:00" 
            className="countdown-timer"
          />
        </div>
        <a href="https://cglink.me/2sh/r375555" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Register Now</button>
        </a>
      </div>
      <div className="hero-background">
        <div className="neural-network-animation"></div>
      </div>
    </section>
  );
};

export default HeroSection; 