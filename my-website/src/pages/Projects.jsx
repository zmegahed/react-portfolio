import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/');
  };
  
  const projects = [
    {
      id: 1,
      title: "Patient Health Hub",
      description: "A modern, full-stack healthcare management system providing a comprehensive interface for managing patient information, medical records, and visit history. Features include real-time updates, secure data handling, and an intuitive user interface.",
      technologies: ["React.js", "Python", "PostgreSQL"],
      live: "https://github.com/zmegahed/Health-Patient-App",
      images: ["./images/fitnessmeals.png"],
      highlights: [
        "Real-time patient data synchronization",
        "HIPAA-compliant security measures",
        "Intuitive appointment scheduling system",
        "Comprehensive medical history tracking"
      ]
    },
    {
      id: 2,
      title: "Madina Islamic Center Rework",
      description: "Complete redesign of a WordPress web application featuring an advanced booking calendar and donation system. The project focused on improving user experience while maintaining cultural authenticity.",
      technologies: ["WordPress", "CSS", "Elementor", "JavaScript"],
      live: "https://zmegahed.github.io/MicRework/micrework.html",
      images: ["./images/madina.png"],
      highlights: [
        "Custom event booking system",
        "Integrated donation platform",
        "Mobile-responsive design",
        "Multi-language support"
      ]
    },
    {
      id: 3,
      title: "Stansberry One Page",
      description: "Developed a full-stack web application featuring a grade calculator and office sign-up system with automated email notifications. The system streamlines the process of scheduling office visits while maintaining accurate records.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://zmegahed.github.io/HTML_CSS_SPECIALIST/index.html",
      images: ["./images/stansberry.png"],
      highlights: [
        "Automated email notification system",
        "Real-time grade calculation",
        "Interactive scheduling interface",
        "Data analytics dashboard"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050517] pt-24">
      <section className="relative py-24 bg-[#050517]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-64 -top-32 w-[700px] h-[700px] bg-gradient-to-r from-[#4E6E5D]/20 to-transparent rounded-full blur-[200px] animate-float" />
          <div className="absolute -right-64 -bottom-32 w-[700px] h-[700px] bg-gradient-to-l from-[#4E6E5D]/20 to-transparent rounded-full blur-[200px] animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Add Back button */}
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
            <h2 className="text-4xl font-bold text-white">All Projects</h2>
            <p className="mt-4 text-gray-400 max-w-2xl">
              Explore my complete portfolio of web development projects.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-[#4E6E5D] 
                         transition-all duration-500 hover:bg-white/10"
              >
                {project.images && project.images[0] && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-sm bg-[#4E6E5D] text-white rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.highlights && (
                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium text-gray-300">Key Features:</h4>
                      <ul className="text-sm text-gray-400">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 mb-1">
                            <span className="text-[#4E6E5D] mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.live && (
                    <div className="mt-6 flex justify-between items-center">
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#4E6E5D] hover:text-[#4f6e4e] transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Project</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;