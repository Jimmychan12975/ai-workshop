import React from 'react';
import '../styles/Agenda.css';

const Agenda = () => {
  const schedule = [
    {
      time: '5:30 PM',
      title: 'Registration & Dinner',
      description: 'Check-in and networking over dinner'
    },
    {
      time: '6:00 PM',
      title: 'Keynote: The Future of AI',
      description: 'Introduction to AI and its impact on the future'
    },
    {
      time: '6:30 PM',
      title: 'Interactive Workshop Sessions',
      description: 'Hands-on experience with AI tools and technologies'
    },
    {
      time: '7:10 PM',
      title: 'Sharing Session',
      description: 'Share your projects and ideas with the community'
    },
    {
        time: '7:30 PM',
        title: 'Closing Remarks',
        description: 'Event conclusion and final networking opportunity'
    }
  ];

  return (
    <section className="agenda section" id="agenda">
      <div className="container">
        <h2 className="section-title">Event Agenda</h2>
        <div className="timeline">
          {schedule.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <span className="time">{item.time}</span>
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda; 