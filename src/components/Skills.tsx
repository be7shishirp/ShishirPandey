import React, { useEffect, useState } from 'react';
import { Code, BookOpen, TrendingUp, Users } from 'lucide-react';

const Skills = () => {
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: 'Technical Skills',
      icon: Code,
      items: ['Audit & Accounting', 'Tally ERP', 'Excel Advanced', 'Data Analysis'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Personal Skills',
      icon: BookOpen,
      items: ['Reading & Research', 'Explorer & Traveler', 'Problem Solving', 'Critical Thinking'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Experience',
      icon: TrendingUp,
      items: ['1 Year Audit Experience', 'Financial Analysis', 'Report Generation', 'Client Management'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Interests',
      icon: Users,
      items: ['Technology', 'Finance', 'Travel', 'Photography'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <div className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Skills & Experience
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`bg-gradient-to-br ${skill.color} rounded-full p-4 mb-6 mx-auto w-fit group-hover:animate-pulse`}>
                <skill.icon size={24} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white text-center mb-4">
                {skill.category}
              </h3>

              <ul className="space-y-3">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-300 text-center text-sm hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Experience Details */}
        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Professional Experience</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Audit Experience (1 Year)</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Financial statement preparation and analysis</li>
                <li>• Tally ERP software management</li>
                <li>• Excel-based reporting and data analysis</li>
                <li>• Client consultation and advisory services</li>
                <li>• Compliance and regulatory reporting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Key Achievements</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Streamlined audit processes using advanced Excel functions</li>
                <li>• Improved data accuracy by 95% through systematic verification</li>
                <li>• Successfully managed multiple client portfolios</li>
                <li>• Developed efficient reporting templates</li>
                <li>• Maintained 100% compliance record</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;