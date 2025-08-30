import React, { useEffect, useState } from 'react';
import { Mail, Instagram, MapPin, Phone } from 'lucide-react';

const Contact = () => {
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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'be7ccrp@gmail.com',
      link: 'mailto:be7ccrp@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@shishirpnde',
      link: 'https://www.instagram.com/shishirpnde',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Butwal, Nepal',
      link: 'https://www.google.com/maps/search/Butwal,+Nepal',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <div className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Contact Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`bg-gradient-to-br ${contact.color} rounded-full p-4 mb-6 mx-auto w-fit group-hover:animate-pulse`}>
                <contact.icon size={24} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white text-center mb-3">
                {contact.label}
              </h3>

              <p className="text-gray-300 text-center mb-4">{contact.value}</p>

              <div className="text-center">
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center bg-gradient-to-r ${contact.color} text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform font-medium`}
                >
                  Connect
                  <contact.icon className="ml-2" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Get In Touch</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:scale-105 transition-transform font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;