import React from 'react';
import '../styles/About.css';

const About = () => {
  const eventDetails = {
    date: 'November 21st, 2024',
    time: '5:30 PM - 7:30 PM PST',
    venue: 'Pepperdine University, Malibu Campus',
    location: 'Beckman Management Center, Room P1'
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About the Event</h2>
        <div className="about-content">
          <div className="about-description">
            <p>
              Join us for an immersive one-day workshop where industry experts and 
              academics come together to explore the cutting-edge developments in 
              Artificial Intelligence. Perfect for students, professionals, and 
              enthusiasts looking to deepen their understanding of AI technologies.
            </p>
          </div>
          <div className="event-details">
            {Object.entries(eventDetails).map(([key, value]) => (
              <div key={key} className="detail-item">
                <span className="detail-label">{key}:</span>
                <span className="detail-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 