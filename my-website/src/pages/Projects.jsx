import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();
  const scrollContainerRef = React.useRef(null);
  
  const handleBackClick = () => {
    navigate('/');
  };
  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
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
        <div className="max-w-7xl mx-auto px-6">
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

          <div className="relative group">
            <button 
              onClick={() => handleScroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#050517] p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button 
              onClick={() => handleScroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#050517] p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            >
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="flex-none w-64 snap-start bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-[#4E6E5D] transition-all duration-500 hover:bg-white/10"
                >
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 text-xs bg-[#4E6E5D] text-white rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#4E6E5D] hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Project</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;