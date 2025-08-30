import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import AgeCounter from './AgeCounter';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const openMap = (place: string) => {
    const locations = {
      birthplace: 'Palpa Tansen, Syangja, Nepal',
      hometown: 'Kaligandaki Harmichour, Gulmi, Nepal',
      current: 'Butwal, Nepal'
    };
    const query = encodeURIComponent(locations[place as keyof typeof locations]);
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  };

  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <div className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Biography Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Calendar className="mr-3 text-purple-400" />
              Biography
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex flex-col space-y-2">
                <span className="text-purple-400 font-semibold">Full Name:</span>
                <span>Shishir Pandey</span>
              </div>
              
              <div className="flex flex-col space-y-2">
                <span className="text-purple-400 font-semibold">Date of Birth:</span>
                <span>2061-07-07 BS / 2004-10-23 AD</span>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 mt-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Clock className="mr-2 text-purple-400" />
                  Live Age Counter
                </h4>
                <AgeCounter />
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MapPin className="mr-3 text-purple-400" />
              Locations
            </h3>
            
            <div className="space-y-6">
              {/* Birth Place */}
              <div className="group">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Birth Place</h4>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Palpa Tansen, Syangja</span>
                  <button
                    onClick={() => openMap('birthplace')}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    View Map
                  </button>
                </div>
                <img
                  src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Palpa Tansen"
                  className="w-full h-32 object-cover rounded-lg mt-3 cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Home Town */}
              <div className="group">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Home Town</h4>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Kaligandaki Harmichour, Gulmi</span>
                  <button
                    onClick={() => openMap('hometown')}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    View Map
                  </button>
                </div>
                <img
                  src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Gulmi"
                  className="w-full h-32 object-cover rounded-lg mt-3 cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Current Location */}
              <div className="group">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Currently Living</h4>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Butwal, Nepal</span>
                  <button
                    onClick={() => openMap('current')}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    View Map
                  </button>
                </div>
                <img
                  src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Butwal"
                  className="w-full h-32 object-cover rounded-lg mt-3 cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;