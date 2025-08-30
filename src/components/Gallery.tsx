import React, { useEffect, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('gallery');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      id: 1,
      src: '/1151310230.jpg',
      title: 'Personal Photo 1',
      description: 'Shishir Pandey - Personal Collection'
    },
    {
      id: 2,
      src: '/1967057127.jpg',
      title: 'Personal Photo 2',
      description: 'Shishir Pandey - Personal Collection'
    },
    {
      id: 3,
      src: '/2036840851.jpg',
      title: 'Personal Photo 3',
      description: 'Shishir Pandey - Personal Collection'
    },
    {
      id: 4,
      src: '/-1952158908.jpg',
      title: 'Personal Photo 4',
      description: 'Shishir Pandey - Personal Collection'
    },
    {
      id: 5,
      src: '/-767349983.jpg',
      title: 'Personal Photo 5',
      description: 'Shishir Pandey - Personal Collection'
    },
    {
      id: 6,
      src: '/1151310230.jpg',
      title: 'Personal Photo 6',
      description: 'Shishir Pandey - Personal Collection'
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 max-w-7xl mx-auto">
      <div className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Gallery
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <ZoomIn className="text-white bg-black/50 rounded-full p-2" size={32} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors z-10"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-bold text-xl mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;