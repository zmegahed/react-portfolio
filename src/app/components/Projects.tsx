import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

interface Project {
  id: string;
  headline: string;
  description: string;
  tech: string[];
  rating: number;
  liveUrl?: string;
  githubUrl?: string;
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'fpl',
      headline: 'SQUAD PREDICTOR EARNS RARE FIVE STARS; ANALYST CALLS IT "GENUINELY USEFUL"',
      description: 'A data-driven application that leverages machine learning to predict optimal Fantasy Premier League lineups. Built with React.js frontend and Python serverless backend, the tool analyzes player statistics, fixture difficulty, and form data to generate actionable squad recommendations. Over 1,000 active users during peak season.',
      tech: ['React.js', 'Python', 'Serverless', 'RESTful API', 'Data Analysis'],
      rating: 5,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'madina',
      headline: 'SITE REDESIGN COMPLETE; BOOKING SYSTEM WORKS ON FIRST TRY',
      description: 'Complete digital overhaul of Madina Islamic Center\'s web presence. Custom WordPress theme built from scratch with Elementor integration, featuring a bespoke event booking system, prayer time automation, and donation processing. Mobile-first approach resulted in 85% mobile traffic retention.',
      tech: ['WordPress', 'CSS', 'Elementor', 'JavaScript', 'PHP'],
      rating: 5,
      liveUrl: '#'
    },
    {
      id: 'subaru',
      headline: 'LANDING PAGE REVIEWED: ANIMATIONS SMOOTH, SEO INTACT, DEALER SATISFIED',
      description: 'High-converting landing page for Subaru Crosstrek promotion. Implemented scroll-triggered animations, optimized image delivery, and ensured accessibility compliance. Page achieved 95+ Lighthouse scores across all metrics while maintaining brand guidelines and dealer requirements.',
      tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'SEO Optimization'],
      rating: 4,
      liveUrl: '#'
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? 'text-[#D0021B]' : 'text-[#1A1A1A]/20'}
            style={{ fontSize: '16px' }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="projects" ref={ref} className="py-24 px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p
            className="uppercase tracking-[0.15em] mb-2"
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px' }}
          >
            ARTS & CULTURE
          </p>
          <h2
            className="font-bold tracking-tight"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(48px, 8vw, 96px)',
              lineHeight: '1'
            }}
          >
            SELECTED WORKS
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="border-2 border-[#1A1A1A] bg-[#F5F0E8] overflow-hidden transition-all relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              style={{
                transform: hoveredProject === project.id ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredProject === project.id 
                  ? '8px 8px 0 rgba(26, 26, 26, 0.15)' 
                  : '0 0 0 rgba(26, 26, 26, 0)'
              }}
            >
              {/* Dog-ear effect on hover */}
              {hoveredProject === project.id && (
                <motion.div
                  className="absolute top-0 right-0 w-0 h-0"
                  style={{
                    borderStyle: 'solid',
                    borderWidth: '0 40px 40px 0',
                    borderColor: 'transparent #1A1A1A transparent transparent'
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              <div className="p-8">
                {/* Star Rating */}
                <div className="mb-4">
                  {renderStars(project.rating)}
                </div>

                {/* Headline */}
                <h3
                  className="font-bold mb-4 leading-tight transition-colors"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(28px, 3.5vw, 48px)',
                    color: hoveredProject === project.id ? '#D0021B' : '#1A1A1A'
                  }}
                >
                  {project.headline}
                </h3>

                {/* Description */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <p
                    className="text-justify md:col-span-2 lg:col-span-1"
                    style={{ 
                      fontFamily: 'IBM Plex Serif, serif',
                      fontSize: '14px',
                      lineHeight: '1.6'
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack & Links */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-4 border-t border-[#1A1A1A]">
                  {/* Credits */}
                  <div>
                    <p
                      className="uppercase tracking-[0.12em] mb-2"
                      style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px' }}
                    >
                      CREDITS
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={tech}
                          className="uppercase tracking-[0.08em]"
                          style={{ 
                            fontFamily: 'IBM Plex Mono, monospace',
                            fontSize: '10px'
                          }}
                        >
                          {tech}
                          {i < project.tech.length - 1 && ' ·'}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="border-2 border-[#D0021B] px-4 py-2 uppercase tracking-[0.1em] hover:bg-[#D0021B] hover:text-[#F5F0E8] transition-all relative overflow-hidden group"
                        style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px' }}
                      >
                        <span className="relative z-10">Live Demo</span>
                        <motion.div
                          className="absolute inset-0 bg-[#D0021B]"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ transformOrigin: 'left' }}
                        />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="border-2 border-[#1A1A1A] px-4 py-2 uppercase tracking-[0.1em] hover:bg-[#1A1A1A] hover:text-[#F5F0E8] transition-all"
                        style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px' }}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
