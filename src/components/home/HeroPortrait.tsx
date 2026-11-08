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
      // Lifted upward by -translate-y-8 to -translate-y-12 so shoulders and chest are framed above the wave
      className="relative flex items-center justify-center select-none perspective-1200 z-[15] -translate-y-6 sm:-translate-y-8 lg:-translate-y-12"
      style={{
        width: 'clamp(360px, 38vw, 560px)',
        maxWidth: '100%',
      }}
    >
      {/* LAYER 3: Symmetrical Circular Crimson Ambient Halo (Centered directly behind the head - No rightward smear) */}
      <div
        className="portrait-red-halo absolute rounded-full pointer-events-none z-[10]"
        style={{
          width: 'clamp(340px, 35vw, 470px)',
          height: 'clamp(340px, 35vw, 470px)',
          top: '30%',
          left: '50%',
          transform: `translate(calc(-50% + ${parallaxOffset.x * -0.2}px), calc(-50% + ${parallaxOffset.y * -0.2}px))`,
        }}
      />

      {/* LAYER 4: SVG Concentric Orbital Rings (Visible outside portrait silhouette) */}
      <div
        className="absolute inset-0 pointer-events-none z-[12] flex items-center justify-center"
        style={{
          transform: `translate(${parallaxOffset.x * 0.25}px, ${parallaxOffset.y * 0.25}px)`,
        }}
      >
        <OrbitalRings parallaxOffset={parallaxOffset} />
      </div>

      {/* LAYER 5: Authentic Portrait with Elliptical Radial Feathering (Full shoulders, chest & suit visible) */}
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
            src={portfolioData.personal.avatarUrl || '/swaran-avatar.png'}
            alt={portfolioData.personal.name}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-auto object-contain object-top filter brightness-100 contrast-105 pointer-events-none"
            style={{
              maxHeight: 'min(74vh, 600px)',
              // Elliptical radial mask preserves 100% of hair, face, neck, collar, both broad shoulders and suit jacket
              WebkitMaskImage:
                'radial-gradient(ellipse 68% 74% at 50% 38%, black 58%, rgba(0, 0, 0, 0.9) 68%, rgba(0, 0, 0, 0.2) 78%, transparent 84%)',
              maskImage:
                'radial-gradient(ellipse 68% 74% at 50% 38%, black 58%, rgba(0, 0, 0, 0.9) 68%, rgba(0, 0, 0, 0.2) 78%, transparent 84%)',
              transform: `translate(${parallaxOffset.x * 0.12}px, ${parallaxOffset.y * 0.12}px)`,
            }}
          />

          {/* Subtle Specular Lighting Sweep */}
          <div
            className="lighting-sweep"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 68% 74% at 50% 38%, black 58%, rgba(0, 0, 0, 0.9) 68%, rgba(0, 0, 0, 0.2) 78%, transparent 84%)',
              maskImage:
                'radial-gradient(ellipse 68% 74% at 50% 38%, black 58%, rgba(0, 0, 0, 0.9) 68%, rgba(0, 0, 0, 0.2) 78%, transparent 84%)',
            }}
          />
        </div>
      </motion.div>

      {/* LAYER 6: Floating Technology Badges (Clean negative space positioning) */}
      <FloatingBadges parallaxOffset={parallaxOffset} />
    </div>
  );
};
