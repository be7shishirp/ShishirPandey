import React, { useEffect, useState } from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
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

    const element = document.getElementById('education');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      level: 'SEE (Class 10)',
      gpa: '3.70',
      subjects: 'Optional Math and Account',
      year: '2076 BS',
      icon: BookOpen
    },
    {
      level: '+2 (Class 12)',
      gpa: '3.08',
      subjects: 'Account and Business Study',
      year: '2081 BS',
      icon: GraduationCap
    }
  ];

  return (
    <section id="education" className="py-20 px-4 max-w-7xl mx-auto">
      <div className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform delay-${index * 200}`}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-full p-3 mr-4">
                  <edu.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{edu.level}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="text-yellow-400 mr-3" size={20} />
                  <span className="text-gray-300">GPA: </span>
                  <span className="text-white font-bold ml-2">{edu.gpa}</span>
                </div>

                <div className="flex items-center">
                  <BookOpen className="text-purple-400 mr-3" size={20} />
                  <span className="text-gray-300">{edu.subjects}</span>
                </div>

                <div className="flex items-center">
                  <Calendar className="text-blue-400 mr-3" size={20} />
                  <span className="text-gray-300">Passed: </span>
                  <span className="text-white font-bold ml-2">{edu.year}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Successfully completed with excellent academic performance, demonstrating strong analytical and problem-solving skills in mathematics and business studies.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;