import React, { useState, useEffect } from 'react';
import '../styles/CountdownTimer.css';

const CountdownTimer = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(eventDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      {Object.keys(timeLeft).map(interval => (
        <div key={interval} className="countdown-segment">
          <span className="countdown-number">{timeLeft[interval]}</span>
          <span className="countdown-label">{interval}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer; 