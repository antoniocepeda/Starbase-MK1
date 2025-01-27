import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-12-31T00:00:00'); // Example date

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 min-w-[100px]">
            <div className="font-['Orbitron'] text-4xl font-bold text-[#00D4FF] glow-text">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-white/80 uppercase text-sm mt-2">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;