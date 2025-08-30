import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Financial Dashboard',
      description: 'Comprehensive financial analysis dashboard built with Excel VBA and advanced formulas.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Excel', 'VBA', 'Power BI'],
      details: 'A complete financial management system featuring automated calculations, dynamic charts, and real-time reporting capabilities. Includes profit/loss analysis, budget tracking, and financial forecasting tools.'
    },
    {
      id: 2,
      title: 'Audit Management System',
      description: 'Streamlined audit process management using Tally ERP and custom Excel templates.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Tally ERP', 'Excel', 'Data Analysis'],
      details: 'Developed a comprehensive audit management system that reduced processing time by 60%. Features include automated report generation, compliance tracking, and client communication tools.'
    },
    {
      id: 3,
      title: 'Business Analytics Reports',
      description: 'Advanced business intelligence reports for small and medium enterprises.',
      image: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Excel', 'Data Visualization', 'Business Intelligence'],
      details: 'Created dynamic business analytics reports featuring KPI dashboards, trend analysis, and predictive modeling. Helped businesses make data-driven decisions with clear visual insights.'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Eye className="text-white bg-black/50 rounded-full p-2" size={32} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.details}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform">
                    <Github className="mr-2" size={20} />
                    View Code
                  </button>
                  <button className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform">
                    <ExternalLink className="mr-2" size={20} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;