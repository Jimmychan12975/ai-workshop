import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle message submission logic here
    console.log('Message submitted:', message);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Event Location</h3>
              <p>Pepperdine University</p>
              <p>24255 Pacific Coast Highway</p>
              <p>Malibu, CA 90263</p>
            </div>
            <div className="info-item">
              <h3>Contact Details</h3>
              <p>Email: jimmybojim.chan@pepperdine.edu</p>
              <p>Phone: (310) xxx-0123</p>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={message.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={message.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={message.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={message.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 