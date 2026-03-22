import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    'JavaScript', 'React', 'TypeScript', 'Python', 'PHP',
    'WordPress', 'MySQL', 'Adobe Suite', 'HTML/CSS', 'Node.js'
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Headline */}
        <motion.h2
          className="font-bold mb-4 tracking-tight"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(48px, 8vw, 96px)',
            lineHeight: '1'
          }}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 0.6 }}
        >
          WHO IS ZEYAD MEGAHED?
        </motion.h2>

        {/* Deck */}
        <motion.p
          className="italic mb-12 max-w-3xl"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(20px, 2.5vw, 32px)',
            lineHeight: '1.3'
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A deep dive into the developer who believes good design shouldn't need a user manual.
        </motion.p>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p
              className="text-justify"
              style={{ 
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              Hi, I'm Zeyad—a UI/UX Designer and Front-end Developer based in the DMV area. I've been crafting beautiful and functional websites since high school, always driven by a desire to push the boundaries of what's possible on the web.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.36 }}
          >
            <p
              className="text-justify"
              style={{ 
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              When I'm not coding, you can find me exploring new technologies, watching soccer, or enjoying the great outdoors. Every project I take on is an opportunity to create something that doesn't just look good—but works flawlessly.
            </p>
          </motion.div>

          {/* Column 3 - Stats Box */}
          <motion.div
            className="border-2 border-[#1A1A1A] p-6 bg-[#F5F0E8]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            <div className="space-y-4">
              <div className="border-b border-[#1A1A1A] pb-3">
                <div 
                  className="font-bold leading-none mb-1"
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '72px' }}
                >
                  50<span className="text-4xl">+</span>
                </div>
                <p
                  className="uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px' }}
                >
                  PROJECTS COMPLETED
                </p>
              </div>

              <div className="border-b border-[#1A1A1A] pb-3">
                <div 
                  className="font-bold leading-none mb-1"
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '72px' }}
                >
                  3<span className="text-4xl">+</span>
                </div>
                <p
                  className="uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px' }}
                >
                  YEARS EXPERIENCE
                </p>
              </div>

              <div>
                <div 
                  className="font-bold leading-none mb-1"
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '72px' }}
                >
                  3
                </div>
                <p
                  className="uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px' }}
                >
                  COMPANIES
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pull Quote */}
        <motion.div
          className="border-l-4 border-[#D0021B] pl-8 py-6 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ transformOrigin: 'left' }}
        >
          <p
            className="leading-tight"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: 'bold'
            }}
          >
            "50 projects. 3 companies. Zero templates."
          </p>
        </motion.div>

        {/* Skills - Classified Ads Style */}
        <motion.div
          className="border-2 border-[#D0021B] p-6 bg-[#F5F0E8]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p
            className="uppercase tracking-[0.12em] mb-3"
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px' }}
          >
            FOR HIRE:
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="uppercase tracking-[0.1em] opacity-90"
                style={{ 
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '10px'
                }}
              >
                {skill}
                {index < skills.length - 1 && ' ·'}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
