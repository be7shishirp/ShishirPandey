import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Logo Animation */}
      <div className={`mb-8 transform transition-all duration-2000 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-20 opacity-0 scale-0'
      }`}>
        <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
          <span className="text-4xl font-bold text-white">SP</span>
        </div>
      </div>

      {/* Main Heading with Rainbow Effect */}
      <div className={`text-center transform transition-all duration-2000 delay-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-rainbow-glow">
          <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-rainbow">
            Shishir Pandey
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up">
          <p className="mb-4">Thank you for visiting!</p>
          <p className="text-purple-400">Welcome to my digital universe</p>
        </div>
      </div>

      {/* Profile Image with Glow Effect */}
      <div className={`mb-8 transform transition-all duration-2000 delay-1000 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-75'
      }`}>
        <div className="relative">
          <img
            src="/1967057127.jpg"
            alt="Shishir Pandey"
            className="w-48 h-48 rounded-full object-cover border-4 border-purple-500 shadow-2xl animate-profile-glow"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 animate-pulse"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/70" />
      </div>
    </section>
  );
};

export default Hero;