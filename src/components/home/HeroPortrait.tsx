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

  // Spring physics for smooth cursor parallax without jitter
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ['3deg', '-3deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-3deg', '3deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice() || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(normX);
    y.set(normY);
    setParallaxOffset({ x: normX * 14, y: normY * 14 });
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
      // Lifted upward slightly so shoulders and chest are framed above the wave
      className="relative flex items-center justify-center select-none perspective-1200 z-[15] -translate-y-4 sm:-translate-y-6 lg:-translate-y-8"
      style={{
        width: 'clamp(400px, 40vw, 600px)',
        maxWidth: '100%',
      }}
    >
      {/* LAYER 3: Symmetrical Circular Crimson Ambient Halo (Centered directly behind the head) */}
      <div
        className="portrait-red-halo absolute rounded-full pointer-events-none z-[10]"
        style={{
          width: 'clamp(440px, 44vw, 580px)',
          height: 'clamp(440px, 44vw, 580px)',
          top: '36%',
          left: '50%',
          transform: `translate(calc(-50% + ${parallaxOffset.x * -0.2}px), calc(-50% + ${parallaxOffset.y * -0.2}px))`,
        }}
      />

      {/* LAYER 4: SVG Concentric Orbital Rings (Visible outside portrait silhouette) */}
      <div
        className="absolute inset-0 pointer-events-none z-[12] flex items-center justify-center -translate-y-4 sm:-translate-y-6"
        style={{
          transform: `translate(${parallaxOffset.x * 0.25}px, ${parallaxOffset.y * 0.25}px)`,
        }}
      >
        <OrbitalRings parallaxOffset={parallaxOffset} />
      </div>

      {/* LAYER 5: Authentic Portrait with Seamless Zero-Artifact Background */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full flex items-center justify-center z-[15]"
      >
        <div className="relative w-full flex items-center justify-center">
          <motion.img
            src={portfolioData.personal.avatarUrl || '/swaran-transparent.png'}
            alt={portfolioData.personal.name}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-auto object-contain object-top filter brightness-100 contrast-105 pointer-events-none"
            style={{
              maxHeight: 'min(76vh, 620px)',
              // Clean linear fade at the bottom allows suit to integrate naturally into digital wave
              WebkitMaskImage:
                'linear-gradient(to bottom, black 80%, rgba(0, 0, 0, 0.7) 90%, transparent 100%)',
              maskImage:
                'linear-gradient(to bottom, black 80%, rgba(0, 0, 0, 0.7) 90%, transparent 100%)',
              transform: `translate(${parallaxOffset.x * 0.12}px, ${parallaxOffset.y * 0.12}px)`,
            }}
          />

          {/* Subtle Specular Lighting Sweep */}
          <div
            className="lighting-sweep"
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, black 80%, rgba(0, 0, 0, 0.7) 90%, transparent 100%)',
              maskImage:
                'linear-gradient(to bottom, black 80%, rgba(0, 0, 0, 0.7) 90%, transparent 100%)',
            }}
          />
        </div>
      </motion.div>

      {/* LAYER 6: Floating Technology Badges (Clean negative space positioning) */}
      <FloatingBadges parallaxOffset={parallaxOffset} />
    </div>
  );
};
