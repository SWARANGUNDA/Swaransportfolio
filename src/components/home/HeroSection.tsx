import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroPortrait } from './HeroPortrait';
import { HeroActions } from './HeroActions';
import { DigitalWave } from './DigitalWave';
import { ParticleNetwork } from './ParticleNetwork';
import { heroContainerVariants } from '../../animations/heroVariants';
import { initHeroScrollChoreography } from '../../animations/scrollAnimations';
import { isTouchDevice } from '../../animations/animationUtils';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle global mouse movement for spotlight & 3D wave interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isTouchDevice() || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Normalized coordinates (-1 to 1) for WebGL
    setMousePos({
      x: (x - 0.5) * 2,
      y: (y - 0.5) * 2,
    });

    // Update CSS variables for mouse spotlight
    sectionRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  // Wire GSAP ScrollTrigger choreography on mount
  useEffect(() => {
    const cleanup = initHeroScrollChoreography();
    return () => {
      cleanup?.();
    };
  }, []);

  const handleExploreWork = () => {
    const el = document.querySelector('#projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConnect = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenResumeModal = () => {
    if (onOpenResume) {
      onOpenResume();
    } else {
      const resumeBtn = document.querySelector('[data-resume-trigger]') as HTMLButtonElement;
      if (resumeBtn) resumeBtn.click();
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-midnight overflow-x-clip flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-4 select-none"
    >
      {/* LAYER 0: Atmospheric Ambient Lighting & Radial Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle radial emerald & cyan glow */}
        <div className="absolute top-1/4 left-5 sm:left-20 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-cyan-500/8 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-10 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-emerald-500/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-20 left-1/3 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-400/6 rounded-full blur-[140px]" />

        {/* Dynamic Interactive Mouse Spotlight */}
        <div className="hero-mouse-spotlight absolute inset-0" />
      </div>

      {/* LAYER 1: Interactive Canvas Particle Network */}
      <ParticleNetwork className="z-[1]" />

      {/* LAYER 2: Cinematic 3D WebGL Digital Wave (Flows behind portrait in lower 20-25%) */}
      <DigitalWave mousePos={mousePos} className="z-[2]" />

      {/* LAYERS 3-6: Main Hero Asymmetric Balanced Split (Left ~52%, Right ~48%) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full flex-1 flex flex-col justify-center">
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 py-4 sm:py-6 w-full"
        >
          {/* Left Column: ~52% (Headline, Pill Actions, Tech Highlights, Scroll Bar) */}
          <div className="w-full lg:w-[52%] z-[25] order-2 lg:order-1 flex flex-col justify-center">
            <HeroActions
              onOpenResume={handleOpenResumeModal}
              onExploreWork={handleExploreWork}
              onConnect={handleConnect}
            />
          </div>

          {/* Right Column: ~48% (Enlarged Portrait with Red Halo, Rings & Badges) */}
          <div className="w-full lg:w-[48%] z-[15] order-1 lg:order-2 flex items-center justify-center lg:justify-end">
            <HeroPortrait />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
