import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const coursework = [
    'Web Application Development',
    'Database Design & Implementation',
    'User Interface Design',
    'Software Engineering',
    'Data Structures & Algorithms',
    'Systems Analysis & Design'
  ];

  return (
    <section id="education" ref={ref} className="py-24 px-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Article - 2 columns */}
        <div className="lg:col-span-2">
          {/* Headline */}
          <motion.h2
            className="font-bold mb-6 tracking-tight"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: '1.1'
            }}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 0.6 }}
          >
            LOCAL DEVELOPER GRADUATES CUM LAUDE, CITES 'CURIOSITY' AS PRIMARY SKILL
          </motion.h2>

          {/* Byline */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <p
              className="uppercase tracking-[0.1em]"
              style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px' }}
            >
              Education Brief · March 22, 2026
            </p>
          </motion.div>

          {/* Body Copy */}
          <motion.div
            className="space-y-4"
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
              FAIRFAX, VA—Zeyad Megahed graduated from George Mason University with a Bachelor of Science in Information Technology, specializing in Web Application Development. The achievement came with Cum Laude honors and a 3.7 GPA, reflecting a consistent presence on the Dean's List throughout his academic tenure.
            </p>
            <p
              className="text-justify"
              style={{ 
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              "The degree was important," Megahed noted in a recent interview, "but the real education came from building things that broke, fixing them, and understanding why they broke in the first place." This hands-on philosophy guided his approach to both coursework and personal projects throughout his university years.
            </p>
            <p
              className="text-justify"
              style={{ 
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              The Web Application Development concentration proved to be a natural fit, combining technical rigor with design thinking—a balance that would later define Megahed's professional approach. Professors noted his ability to translate complex technical concepts into accessible, user-friendly implementations.
            </p>
          </motion.div>
        </div>

        {/* Sidebar Fact Box - 1 column */}
        <motion.div
          className="border-2 border-[#1A1A1A] p-6 bg-[#F5F0E8] h-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p
            className="uppercase tracking-[0.12em] mb-4 pb-3 border-b-2 border-[#1A1A1A]"
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px' }}
          >
            ACADEMIC RECORD
          </p>

          <div className="space-y-4 mb-6">
            <div>
              <p
                className="font-bold mb-1"
                style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '16px' }}
              >
                George Mason University
              </p>
              <p
                style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '14px' }}
              >
                Bachelor of Science
              </p>
              <p
                className="opacity-70"
                style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '13px' }}
              >
                Information Technology
              </p>
            </div>

            <div className="border-t border-[#1A1A1A] pt-3">
              <p
                className="uppercase tracking-[0.08em] mb-2"
                style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px' }}
              >
                CONCENTRATION
              </p>
              <p
                style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '13px' }}
              >
                Web Application Development
              </p>
            </div>

            <div className="border-t border-[#1A1A1A] pt-3">
              <p
                className="uppercase tracking-[0.08em] mb-2"
                style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px' }}
              >
                HONORS
              </p>
              <p
                style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '13px' }}
              >
                Cum Laude • GPA 3.7 • Dean's List
              </p>
            </div>
          </div>

          <div className="border-t-2 border-[#1A1A1A] pt-4">
            <p
              className="uppercase tracking-[0.12em] mb-3"
              style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px' }}
            >
              RELEVANT COURSEWORK
            </p>
            <ul className="space-y-2">
              {coursework.map((course) => (
                <li
                  key={course}
                  className="text-justify"
                  style={{ 
                    fontFamily: 'IBM Plex Serif, serif',
                    fontSize: '12px',
                    lineHeight: '1.4'
                  }}
                >
                  • {course}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
