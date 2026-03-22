import { useState } from 'react';
import { motion } from 'motion/react';

interface MastheadProps {
  onNavigate: (section: string) => void;
}

export function Masthead({ onNavigate }: MastheadProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'ABOUT' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-[var(--newsprint)] z-50 border-b border-[#1A1A1A]/10"
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: 'inset(0 0% 0 0)' }}
      transition={{ duration: 0.4, delay: 0.3, ease: [0.0, 0.0, 0.2, 1.0] }}
    >
      <div className="max-w-[1440px] mx-auto px-8 pt-6 pb-4">
        {/* Newspaper Title */}
        <motion.h1
          className="text-center mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <span className="text-3xl md:text-5xl font-bold tracking-tight">THE MEGAHED DISPATCH</span>
        </motion.h1>

        {/* Red Rule */}
        <motion.div
          className="h-[2px] bg-[#D0021B] mb-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2, delay: 0.7 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Thin Black Rule */}
        <motion.div
          className="h-[1px] bg-[#1A1A1A] mb-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2, delay: 0.9 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Dateline */}
        <motion.p
          className="text-center mb-3 uppercase tracking-[0.15em] text-[9px] md:text-[10px] px-2"
          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.0 }}
        >
          <span className="hidden md:inline">FRONT-END DEVELOPER & WEB DESIGNER · FAIRFAX, VA · EST. 2021 · VOL. 3, NO. 47</span>
          <span className="md:hidden">FRONT-END DEVELOPER · FAIRFAX, VA · EST. 2021</span>
        </motion.p>

        {/* Navigation Links - Desktop */}
        <motion.nav
          className="hidden md:flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative py-1 transition-colors"
              style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px' }}
            >
              {link.label}
              {hoveredLink === link.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D0021B]"
                  layoutId="nav-underline"
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden mx-auto border border-[#1A1A1A] px-4 py-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px' }}
        >
          {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
        </motion.button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 border-t border-[#1A1A1A] pt-4 space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-center py-2 border-b border-[#1A1A1A]/20"
                style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px' }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}