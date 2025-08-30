import React, { useState, useEffect } from 'react';

const AgeCounter = () => {
  const [age, setAge] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateAge = () => {
      // Birth date: 2061-07-07 BS at 11:17 PM
      // Converting to AD: 2004-10-23 at 11:17 PM
      const birthDate = new Date(2004, 9, 23, 23, 17, 0); // Month is 0-indexed
      const now = new Date();
      
      const diff = now.getTime() - birthDate.getTime();
      
      const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
      const months = Math.floor((diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
      const days = Math.floor((diff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
      const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((diff % (60 * 1000)) / 1000);

      setAge({ years, months, days, hours, minutes, seconds });
    };

    calculateAge();
    const interval = setInterval(calculateAge, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-white animate-pulse">{age.years}</div>
        <div className="text-sm text-purple-400">Years</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white animate-pulse">{age.months}</div>
        <div className="text-sm text-purple-400">Months</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white animate-pulse">{age.days}</div>
        <div className="text-sm text-purple-400">Days</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white animate-pulse">{age.hours}</div>
        <div className="text-sm text-purple-400">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white animate-pulse">{age.minutes}</div>
        <div className="text-sm text-purple-400">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white animate-pulse">{age.seconds}</div>
        <div className="text-sm text-purple-400">Seconds</div>
      </div>
    </div>
  );
};

export default AgeCounter;