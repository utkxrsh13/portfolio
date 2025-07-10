import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const progress = (scrollTop / maxScroll) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    const handleScroll = () => {
      requestAnimationFrame(calculateScrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    calculateScrollProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-black/50 z-50 backdrop-blur-sm">
      <div 
        className="h-full bg-gradient-to-r from-green via-cyan to-green transition-all duration-100 ease-out shadow-neon"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Glowing effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green via-cyan to-green blur-sm opacity-50"></div>
      </div>
      
      {/* Tech indicators */}
      <div className="absolute right-4 top-1 flex items-center gap-2">
        <div className="w-2 h-2 bg-green rounded-full animate-pulse opacity-60"></div>
        <span className="text-green/80 text-xs font-mono">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </div>
  );
};

export default ScrollProgress;
