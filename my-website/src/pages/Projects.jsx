import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowLeft, MoveUpRight } from 'lucide-react';

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
	{
      id: 4,
      title: "CareFirst BlueCross BlueShield",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      live: "https://individual.carefirst.com/individuals-families/health-insurance-basics/how-health-insurance-works/what-is-health-insurance.page"
    }
	{
      id: 5,
      title: "CareFirst BlueCross BlueShield",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      live: "https://individual.carefirst.com/individuals-families/health-insurance-basics/how-health-insurance-works/aca-basics.page"
    }
	{
      id: 6,
      title: "CareFirst BlueCross BlueShield",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      live: "https://individual.carefirst.com/individuals-families/health-insurance-basics/how-health-insurance-works/turning-26-need-health-insurance.page"
    }
	{
      id: 7,
      title: "CareFirst BlueCross BlueShield",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      live: "https://individual.carefirst.com/individuals-families/health-insurance-basics/health-insurance-costs/lower-prescription-costs.page"
    }
	{
      id: 8,
      title: "CareFirst BlueCross BlueShield",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery"],
      live: "https://github.com/zmegahed/zmegahed.github.io/tree/main/Subaru-Crosstrek-Landing-Page"
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

          <div className="space-y-8">
            {projects.map((project, index) => (
              <a 
                key={project.id}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8 
                                bg-white/5 backdrop-blur-sm
                                before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#4E6E5D]/0 before:via-[#4E6E5D]/5 before:to-[#4E6E5D]/0 
                                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000">
                   

                    <div className="flex-shrink-0 md:w-1/3 relative">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#4E6E5D] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#4E6E5D] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-4 py-2 text-sm bg-white/10 text-white/50 rounded-lg transition-all duration-500 
                                     group-hover:bg-[#4E6E5D] group-hover:text-white transform group-hover:-translate-y-1 group-hover:scale-110"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className="relative overflow-hidden rounded-lg group/button">
                        <div className="relative z-10 px-6 py-3 flex items-center gap-2 bg-[#4E6E5D]/20 text-white 
                                      group-hover:bg-[#4E6E5D] transition-all duration-300">
                          <span className="text-sm uppercase tracking-wider">View Project</span>
                          <MoveUpRight className="w-4 h-4 transform group-hover/button:rotate-45 transition-transform duration-300" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#4E6E5D]/0 via-[#4E6E5D]/30 to-[#4E6E5D]/0 
                                      translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-500" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 border border-white/10 group-hover:border-[#4E6E5D] transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r 
                                from-[#4E6E5D] via-[#4E6E5D]/50 to-transparent transition-all duration-700 ease-out" />
                  
                  <div className="absolute -top-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-[#4E6E5D]/20 
                                group-hover:border-[#4E6E5D] transform rotate-45 transition-colors duration-300" />
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