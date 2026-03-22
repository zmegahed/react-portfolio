import { motion } from 'motion/react';

export function Hero() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="min-h-screen pt-[180px] pb-16 px-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-6 gap-5">
        {/* Main Headline - spans all 6 columns */}
        <motion.div
          className="col-span-6"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h2
            className="font-bold leading-[0.9] tracking-tight"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(80px, 12vw, 180px)'
            }}
          >
            DEVELOPER BUILDS THINGS PEOPLE ACTUALLY USE
          </h2>
        </motion.div>

        {/* Deck - spans 4 columns */}
        <motion.div
          className="col-span-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.6 }}
        >
          <p
            className="italic mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              lineHeight: '1.3'
            }}
          >
            Local front-end developer, 3 years in the field, has completed over 50 projects without once using a carousel.
          </p>

          {/* Byline */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.9 }}
          >
            <p
              className="uppercase tracking-[0.1em]"
              style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px' }}
            >
              By Zeyad Megahed · Staff Correspondent
            </p>
            <p
              className="uppercase tracking-[0.1em] opacity-60 mt-1"
              style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px' }}
            >
              {today}
            </p>
          </motion.div>

          {/* Body Copy */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1, staggerChildren: 0.06 }}
          >
            <p
              className="text-justify"
              style={{ 
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              In a digital landscape cluttered with templated websites and cookie-cutter solutions, one developer stands apart. Zeyad Megahed, a front-end specialist based in the Washington D.C. metropolitan area, has built a reputation for creating custom, high-performance web experiences that prioritize user needs over fleeting design trends.
            </p>
            <p
              className="text-justify"
              style={{ 
                fontFamily: 'IBM Plex Serif, serif',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              Since beginning his professional journey in 2021, Megahed has worked with three companies, shipping production code that serves thousands of users daily. His approach combines technical precision with an editorial eye for detail—a rare combination in an industry often dominated by framework fatigue and design system dogma.
            </p>
          </motion.div>
        </motion.div>

        {/* Portrait Box - spans 2 columns */}
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.4 }}
        >
          <div className="border-2 border-[#1A1A1A] p-4 bg-[#E5E5E5]">
            <div 
              className="aspect-[3/4] mb-3 relative overflow-hidden"
              style={{
                backgroundImage: `repeating-radial-gradient(circle at center, #1A1A1A 0, #1A1A1A 1px, transparent 1px, transparent 100%)`,
                backgroundSize: '4px 4px',
                backgroundPosition: '0 0'
              }}
            >
              {/* Halftone placeholder - you can replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-[#1A1A1A]/20 to-[#1A1A1A]/40" />
            </div>
            <p
              className="uppercase tracking-[0.08em]"
              style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px' }}
            >
              ZEYAD MEGAHED photographed at his workspace in Fairfax, Virginia. The developer maintains a strict "no carousel" policy.
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="col-span-6 text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.6 }}
        >
          <p
            className="uppercase tracking-[0.15em] mb-2"
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px' }}
          >
            SCROLL TO READ ON
          </p>
          <motion.div
            className="inline-block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L8 14M8 14L3 9M8 14L13 9" stroke="#1A1A1A" strokeWidth="1.5" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
