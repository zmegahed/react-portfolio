import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

interface ContactMethod {
  label: string;
  value: string;
  link: string;
}

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

  const contacts: ContactMethod[] = [
    {
      label: 'EMAIL',
      value: 'zeyadfouad34@gmail.com',
      link: 'mailto:zeyadfouad34@gmail.com'
    },
    {
      label: 'GITHUB',
      value: 'zmegahed',
      link: 'https://github.com/zmegahed'
    },
    {
      label: 'LINKEDIN',
      value: 'zeyad-megahed',
      link: 'https://linkedin.com/in/zeyad-megahed'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-24 px-8 min-h-screen flex flex-col justify-center">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Main Headline */}
        <motion.h2
          className="font-bold text-center mb-8 leading-[0.9] tracking-tight"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(48px, 10vw, 140px)'
          }}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 0.8 }}
        >
          AVAILABLE FOR OPPORTUNITIES.
          <br />
          SERIOUS INQUIRIES ONLY.
        </motion.h2>

        {/* Editorial Pitch */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p
              className="text-justify"
              style={{ 
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              In an industry saturated with buzzwords and trend-chasing, finding a developer who prioritizes substance over style has become increasingly difficult. Zeyad Megahed represents a return to fundamentals: clean code, thoughtful design, and solutions that actually solve problems.
            </p>
            <p
              className="text-justify"
              style={{ 
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              Whether you're seeking a developer who can translate complex requirements into elegant implementations, or simply need someone who understands that good design is invisible, inquiries are welcomed. No recruiters. No cryptocurrency projects. No "exposure opportunities."
            </p>
          </div>
        </motion.div>

        {/* Classified Ads Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredContact(contact.label)}
              onMouseLeave={() => setHoveredContact(null)}
              className="border-2 border-[#D0021B] p-6 bg-[#F5F0E8] block relative overflow-hidden group"
            >
              {/* Background fill on hover */}
              <motion.div
                className="absolute inset-0 bg-[#D0021B]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredContact === contact.label ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />

              <div className="relative z-10">
                <p
                  className="uppercase tracking-[0.12em] mb-3 transition-colors"
                  style={{ 
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '10px',
                    color: hoveredContact === contact.label ? '#F5F0E8' : '#1A1A1A'
                  }}
                >
                  {contact.label}
                </p>
                <p
                  className="font-bold break-all transition-colors"
                  style={{ 
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '14px',
                    color: hoveredContact === contact.label ? '#F5F0E8' : '#1A1A1A'
                  }}
                >
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Footer Masthead */}
        <motion.div
          className="text-center pt-12 border-t-2 border-[#1A1A1A]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p
            className="mb-2 opacity-50"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px' }}
          >
            THE MEGAHED DISPATCH
          </p>
          <p
            className="uppercase tracking-[0.15em] opacity-40"
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px' }}
          >
            © 2026 THE MEGAHED DISPATCH · ALL PITCHES CONSIDERED · VOL. 3, NO. 47
          </p>
        </motion.div>
      </div>
    </section>
  );
}
