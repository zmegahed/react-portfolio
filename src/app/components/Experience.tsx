import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

interface Job {
  id: string;
  company: string;
  headline: string;
  period: string;
  location: string;
  role: string;
  description: string[];
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedJob, setSelectedJob] = useState<string>('carefirst');

  const jobs: Job[] = [
    {
      id: 'carefirst',
      company: 'CareFirst BlueCross BlueShield',
      headline: 'INTERN SHIPS 15 PAGES, IMPROVES LOAD TIME BY 30%',
      period: 'Jan 2023–Aug 2024',
      location: 'Baltimore, MD',
      role: 'Digital Design Intern',
      description: [
        'As part of the Digital Design team, Megahed was responsible for translating high-fidelity mockups into production-ready code. The internship, which extended beyond the typical summer timeline, saw the developer ship 15 distinct pages to the CareFirst production environment.',
        'Performance optimization became a key focus area. Through strategic implementation of lazy loading, image optimization, and code splitting, Megahed achieved a documented 30% improvement in page load times across the deployed pages.',
        'The work required close collaboration with designers, backend developers, and content strategists—an experience that honed Megahed\'s ability to navigate the complexities of enterprise-level web development.',
      ]
    },
    {
      id: 'madina',
      company: 'Madina Islamic Center',
      headline: 'LOCAL DEVELOPER LEADS CENTER\'S DIGITAL OVERHAUL',
      period: 'Jul 2023–May 2024',
      location: 'Remote',
      role: 'Web Developer & Team Lead',
      description: [
        'In a volunteer capacity that evolved into a leadership role, Megahed spearheaded the complete digital transformation of the Madina Islamic Center\'s web presence. The project encompassed a full website redesign, custom booking system implementation, and team coordination.',
        'The redesign prioritized accessibility and mobile responsiveness, recognizing that a significant portion of the center\'s community accessed the site via smartphones. The custom booking system streamlined event registration and facility reservations, reducing administrative overhead by an estimated 40%.',
        'Leading a small team of volunteers, Megahed managed project timelines, delegated tasks, and ensured code quality through regular reviews. The experience provided valuable insights into the intersection of technical execution and community impact.',
      ]
    },
    {
      id: 'dealeron',
      company: 'DealerOn',
      headline: 'FRONT-END DEV TRANSLATES 12 MOCKUPS DAILY, CLIENTS REPORTEDLY PLEASED',
      period: 'Jan–May 2025',
      location: 'Remote',
      role: 'Front-End Developer (Contract)',
      description: [
        'In this high-volume contract position, Megahed worked within DealerOn\'s rapid-turnaround production pipeline, converting an average of 12 design mockups per day into functional automotive dealership websites.',
        'The role demanded exceptional attention to detail and the ability to maintain code consistency across dozens of concurrent projects. Megahed developed custom WordPress templates, implemented responsive designs, and ensured cross-browser compatibility—all while adhering to tight deadlines.',
        'Client satisfaction remained consistently high, with feedback highlighting the accuracy of implementations and the speed of delivery. The experience reinforced Megahed\'s ability to perform under pressure while maintaining quality standards.',
      ]
    }
  ];

  const selectedJobData = jobs.find(job => job.id === selectedJob) || jobs[0];

  return (
    <section id="experience" ref={ref} className="py-24 px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.h2
          className="font-bold mb-12 tracking-tight"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(48px, 8vw, 96px)',
            lineHeight: '1'
          }}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 0.6 }}
        >
          PROFESSIONAL EXPERIENCE
        </motion.h2>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              className={`border-2 p-6 cursor-pointer transition-all ${
                selectedJob === job.id
                  ? 'border-[#D0021B] bg-[#F5F0E8] border-l-8'
                  : 'border-[#1A1A1A] bg-transparent hover:bg-[#F5F0E8]/50'
              }`}
              onClick={() => setSelectedJob(job.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {/* Company Name */}
              <p
                className="uppercase tracking-[0.12em] mb-2"
                style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px' }}
              >
                {job.company}
              </p>

              {/* Headline */}
              <h3
                className="font-bold mb-4 leading-tight"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(20px, 2vw, 28px)'
                }}
              >
                {job.headline}
              </h3>

              {/* Metadata */}
              <div className="space-y-1 mb-4 pb-4 border-b border-[#1A1A1A]">
                <p
                  className="uppercase tracking-[0.08em]"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px' }}
                >
                  {job.period}
                </p>
                <p
                  className="uppercase tracking-[0.08em] opacity-70"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px' }}
                >
                  {job.location} · {job.role}
                </p>
              </div>

              {/* Read More Indicator */}
              {selectedJob === job.id && (
                <motion.p
                  className="uppercase tracking-[0.12em] text-[#D0021B]"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ◆ CURRENTLY READING
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Expanded Article */}
        <motion.div
          className="mt-8 border-2 border-[#D0021B] p-8 bg-[#F5F0E8]"
          key={selectedJob}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Article Header */}
          <div className="mb-6 pb-4 border-b-2 border-[#1A1A1A]">
            <p
              className="uppercase tracking-[0.12em] mb-2"
              style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px' }}
            >
              {selectedJobData.company}
            </p>
            <h3
              className="font-bold mb-3 leading-tight"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(32px, 4vw, 48px)'
              }}
            >
              {selectedJobData.headline}
            </h3>
            <p
              className="uppercase tracking-[0.1em]"
              style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px' }}
            >
              {selectedJobData.period} · {selectedJobData.location} · {selectedJobData.role}
            </p>
          </div>

          {/* Article Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedJobData.description.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-justify"
                style={{ 
                  fontFamily: 'IBM Plex Serif, serif',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
