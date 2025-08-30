import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/30 backdrop-blur-md py-8 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
          >
            <ArrowUp size={24} />
          </button>
        </div>

        <div className="flex items-center justify-center mb-4">
          <span className="text-gray-300">Made with</span>
          <Heart className="text-red-500 mx-2 animate-pulse" size={20} />
          <span className="text-gray-300">by Shishir Pandey</span>
        </div>

        <p className="text-gray-400 text-sm">
          © 2025 Shishir Pandey. All rights reserved.
        </p>

        <div className="mt-4">
          <p className="text-purple-400 text-sm">
            "Turning data into insights, dreams into reality"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;