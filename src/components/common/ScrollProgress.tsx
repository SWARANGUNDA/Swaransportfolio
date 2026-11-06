import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollPercentage(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-lime-brand via-lime-400 to-cobalt-brand transition-all duration-75 ease-out shadow-[0_0_12px_rgba(212,255,50,0.8)]"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

