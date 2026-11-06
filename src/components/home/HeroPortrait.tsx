import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { OrbitalRings } from './OrbitalRings';
import { FloatingBadges } from './FloatingBadges';
import { portfolioData } from '../../data/portfolioData';
import { isTouchDevice } from '../../animations/animationUtils';

interface HeroPortraitProps {
  onHoverStateChange?: (hovered: boolean) => void;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ onHoverStateChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  // Spring physics for smooth cursor parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice() || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(normX);
    y.set(normY);
    setParallaxOffset({ x: normX * 24, y: normY * 24 });
  };

  const handleMouseEnter = () => {
    onHoverStateChange?.(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setParallaxOffset({ x: 0, y: 0 });
    onHoverStateChange?.(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] lg:max-w-[540px] aspect-[4/5] mx-auto flex items-center justify-center select-none perspective-1200"
    >
      {/* 1. Concentric Animated Orbital Rings */}
      <OrbitalRings parallaxOffset={parallaxOffset} />

      {/* 2. Floating Technology Badges (4 Quadrants) */}
      <FloatingBadges parallaxOffset={parallaxOffset} />

      {/* 3. Central 3D Portrait Composition */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-[300px] sm:w-[350px] lg:w-[400px] aspect-square flex items-center justify-center z-10"
      >
        {/* CRITICAL: Vibrant Crimson Red Ambient Backlight Halo (From Reference Image) */}
        <div
          className="portrait-red-halo absolute -inset-6 sm:-inset-10 rounded-full pointer-events-none"
          style={{
            transform: `translate(${parallaxOffset.x * -0.2}px, ${parallaxOffset.y * -0.2}px)`,
          }}
        />

        {/* Outer Circular Boundary with Subtle Glowing Edge */}
        <div className="relative w-full h-full rounded-full overflow-hidden border border-red-500/30 shadow-[0_0_60px_rgba(235,30,30,0.35)] bg-gradient-to-b from-dark-950/20 to-dark-950 flex items-center justify-center">
          {/* Swaran's Authentic Portrait Asset */}
          <motion.img
            src={portfolioData.personal.avatarUrl || '/swaran-avatar.png'}
            alt={portfolioData.personal.name}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover object-top filter brightness-100 contrast-105"
            style={{
              transform: `translate(${parallaxOffset.x * 0.15}px, ${parallaxOffset.y * 0.15}px) scale(1.02)`,
            }}
          />

          {/* Vignette Gradients: Blends shoulders & bottom into midnight background */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-midnight via-midnight/70 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/30 via-transparent to-transparent pointer-events-none" />

          {/* Cinematic Lighting Sweep */}
          <div className="lighting-sweep" />
        </div>
      </motion.div>
    </div>
  );
};
