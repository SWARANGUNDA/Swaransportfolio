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

  const rotateX = useTransform(springY, [-0.5, 0.5], ['3.5deg', '-3.5deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-3.5deg', '3.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice() || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(normX);
    y.set(normY);
    setParallaxOffset({ x: normX * 16, y: normY * 16 });
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
      className="relative flex items-center justify-center select-none perspective-1200 z-[15]"
      style={{
        width: 'clamp(380px, 40vw, 600px)',
        maxWidth: '100%',
      }}
    >
      {/* LAYER 3: Circular Crimson Ambient Halo (Behind Orbital Rings & Portrait) */}
      <div
        className="portrait-red-halo absolute rounded-full pointer-events-none z-[10]"
        style={{
          width: 'clamp(360px, 38vw, 540px)',
          height: 'clamp(360px, 38vw, 540px)',
          top: '3%',
          left: '50%',
          transform: `translate(calc(-50% + ${parallaxOffset.x * -0.2}px), ${parallaxOffset.y * -0.2}px)`,
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

      {/* LAYER 5: Authentic Portrait with Feathered Radial Mask (Zero Rectangular Boundaries) */}
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
              maxHeight: 'min(78vh, 640px)',
              // Circular feathered radial mask dissolves the solid red studio corners into 0% opacity
              // while preserving 100% of face, hair, eyes, ears, shoulders, tie, and suit
              WebkitMaskImage:
                'radial-gradient(circle at 50% 46%, black 50%, rgba(0, 0, 0, 0.88) 60%, rgba(0, 0, 0, 0.35) 68%, transparent 74%)',
              maskImage:
                'radial-gradient(circle at 50% 46%, black 50%, rgba(0, 0, 0, 0.88) 60%, rgba(0, 0, 0, 0.35) 68%, transparent 74%)',
              transform: `translate(${parallaxOffset.x * 0.12}px, ${parallaxOffset.y * 0.12}px)`,
            }}
          />

          {/* Subtle Specular Lighting Sweep */}
          <div
            className="lighting-sweep"
            style={{
              WebkitMaskImage:
                'radial-gradient(circle at 50% 46%, black 50%, rgba(0, 0, 0, 0.88) 60%, rgba(0, 0, 0, 0.35) 68%, transparent 74%)',
              maskImage:
                'radial-gradient(circle at 50% 46%, black 50%, rgba(0, 0, 0, 0.88) 60%, rgba(0, 0, 0, 0.35) 68%, transparent 74%)',
            }}
          />
        </div>
      </motion.div>

      {/* LAYER 6: Floating Technology Badges (Positioned around silhouette in negative space) */}
      <FloatingBadges parallaxOffset={parallaxOffset} />
    </div>
  );
};
