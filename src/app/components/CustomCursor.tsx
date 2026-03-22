import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [targetPosition, setTargetPosition] = useState({ x: -100, y: -100 });
  const [isIdle, setIsIdle] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout>();
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    // Detect touch devices
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
      
      // Reset idle state
      setIsIdle(false);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      // Set idle after 3 seconds
      idleTimerRef.current = setTimeout(() => {
        setIsIdle(true);
      }, 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Smooth cursor follow with lag
  useEffect(() => {
    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.15,
        y: prev.y + (targetPosition.y - prev.y) * 0.15,
      }));

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetPosition]);

  // Don't render custom cursor on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom pen cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-300"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) rotate(${isIdle ? '55deg' : '35deg'})`,
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: 'translate(-6px, -22px)', // Offset so nib is at cursor position
          }}
        >
          {/* Pen body */}
          <path
            d="M8 24L4 28L2 26L6 22L8 24Z"
            fill="#D0021B"
            stroke="#1A1A1A"
            strokeWidth="0.5"
          />
          <path
            d="M6 22L20 8L22 10L8 24L6 22Z"
            fill="#D0021B"
            stroke="#1A1A1A"
            strokeWidth="0.5"
          />
          <path
            d="M20 8L24 4L26 6L22 10L20 8Z"
            fill="#8B0000"
            stroke="#1A1A1A"
            strokeWidth="0.5"
          />
          {/* Nib highlight */}
          <circle cx="5" cy="25" r="1" fill="#FF6B6B" opacity="0.6" />
        </svg>
      </div>
    </>
  );
}