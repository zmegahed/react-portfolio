import { useEffect, useState, useRef } from 'react';
import { Masthead } from './components/Masthead';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { GrainOverlay } from './components/GrainOverlay';
import { ScrollProgress } from './components/ScrollProgress';

interface AgingStage {
  backgroundColor: string;
  grainOpacity: number;
  textOpacity: number;
  sepiaIntensity: number;
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [agingStage, setAgingStage] = useState<AgingStage>({
    backgroundColor: '#F5F0E8',
    grainOpacity: 0,
    textOpacity: 1,
    sepiaIntensity: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aging effect based on scroll
  useEffect(() => {
    // Define aging stages
    const stages = [
      { threshold: 0, bg: '#F5F0E8', grain: 0, text: 1, sepia: 0 },      // Fresh newsprint
      { threshold: 0.25, bg: '#EDE3D0', grain: 0.06, text: 1, sepia: 0 },  // Light aging
      { threshold: 0.5, bg: '#DDD0B5', grain: 0.12, text: 0.95, sepia: 30 }, // Medium aging
      { threshold: 0.75, bg: '#C9B99A', grain: 0.18, text: 0.85, sepia: 60 }, // Heavy aging
    ];

    // Find current and next stages
    let currentStage = stages[0];
    let nextStage = stages[0];
    let stageProgress = 0;

    for (let i = 0; i < stages.length - 1; i++) {
      if (scrollProgress >= stages[i].threshold && scrollProgress < stages[i + 1].threshold) {
        currentStage = stages[i];
        nextStage = stages[i + 1];
        const rangeSize = nextStage.threshold - currentStage.threshold;
        stageProgress = (scrollProgress - currentStage.threshold) / rangeSize;
        break;
      }
    }

    if (scrollProgress >= stages[stages.length - 1].threshold) {
      currentStage = stages[stages.length - 1];
      nextStage = stages[stages.length - 1];
      stageProgress = 1;
    }

    // Interpolate between stages
    const interpolate = (start: number, end: number, progress: number) => {
      return start + (end - start) * progress;
    };

    const interpolateColor = (color1: string, color2: string, progress: number) => {
      const hex2rgb = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
      };

      const rgb2hex = (r: number, g: number, b: number) => {
        return '#' + [r, g, b].map(x => {
          const hex = Math.round(x).toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        }).join('');
      };

      const c1 = hex2rgb(color1);
      const c2 = hex2rgb(color2);

      const r = interpolate(c1.r, c2.r, progress);
      const g = interpolate(c1.g, c2.g, progress);
      const b = interpolate(c1.b, c2.b, progress);

      return rgb2hex(r, g, b);
    };

    setAgingStage({
      backgroundColor: interpolateColor(currentStage.bg, nextStage.bg, stageProgress),
      grainOpacity: interpolate(currentStage.grain, nextStage.grain, stageProgress),
      textOpacity: interpolate(currentStage.text, nextStage.text, stageProgress),
      sepiaIntensity: interpolate(currentStage.sepia, nextStage.sepia, stageProgress),
    });
  }, [scrollProgress]);

  // Navigation handler
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 180; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen transition-colors duration-700 ease-out"
      style={{
        backgroundColor: agingStage.backgroundColor,
        '--newsprint': agingStage.backgroundColor,
        color: '#1A1A1A',
        opacity: agingStage.textOpacity,
      } as React.CSSProperties}
    >
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Grain Overlay */}
      <GrainOverlay opacity={agingStage.grainOpacity} />

      {/* Content */}
      <div
        style={{
          filter: `sepia(${agingStage.sepiaIntensity}%)`,
        }}
      >
        <Masthead onNavigate={handleNavigate} />
        
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>

      {/* Scroll Progress */}
      <ScrollProgress />
    </div>
  );
}