import React, { useState, useEffect } from 'react';
import { TAGLINES } from '../constants';

export function RotatingTagline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % TAGLINES.length);
        setIsAnimating(false);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center px-4">
      <h2 
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black transform -skew-x-6 text-[#5D9FFF] transition-opacity duration-1000 whitespace-nowrap ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ textShadow: '3px 3px 0px #FF4D00' }}
      >
        {TAGLINES[currentIndex]}
      </h2>
    </div>
  );
}