import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowLeft, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/');
  };
  
  const projects = [
    {
      id: 1,
      title: "Patient Health Hub",
      technologies: ["React.js", "Python", "PostgreSQL"],
      live: "https://github.com/zmegahed/Health-Patient-App"
    },
    {
      id: 2,
      title: "Madina Islamic Center Rework",
      technologies: ["WordPress", "CSS", "Elementor", "JavaScript"],
      live: "https://zmegahed.github.io/MicRework/micrework.html"
    },
    {
      id: 3,
      title: "Stansberry One Page",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://zmegahed.github.io/HTML_CSS_SPECIALIST/index.html"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050517] pt-24">
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-[#4E6E5D] hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-[#4E6E5D]"/>
              <p className="text-[#4E6E5D] uppercase text-sm tracking-wider font-medium">Featured Work</p>
            </div>
            <h2 className="text-4xl font-bold text-white">Projects</h2>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <a 
                key={project.id}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden bg-gradient-to-r from-white/5 via-white/10 to-white/5 hover:from-[#4E6E5D]/20 hover:via-[#4E6E5D]/10 hover:to-[#4E6E5D]/20 rounded-lg transition-all duration-500 ease-out">
                  <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="flex-shrink-0 md:w-1/3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#4E6E5D] transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 text-sm bg-white/10 text-white rounded-full transition-all duration-300 
                                     group-hover:bg-[#4E6E5D] group-hover:text-white group-hover:translate-y-0 
                                     translate-y-0 hover:-translate-y-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex-shrink-0 flex items-center gap-2 text-white/60 group-hover:text-white transition-all duration-300">
                      <span className="text-sm uppercase tracking-wider">View Project</span>
                      <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="absolute inset-0 border border-white/10 group-hover:border-[#4E6E5D] transition-colors duration-300" />
                  
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#4E6E5D] via-[#4E6E5D]/50 to-transparent transition-all duration-700 ease-out" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;