import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'emerald' | 'lime' | 'violet' | 'slate';
  depth?: number;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  depth = 15,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [`${depth}deg`, `-${depth}deg`]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [`-${depth}deg`, `${depth}deg`]);

  // For the specular glare coordinates
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mousePosX = (e.clientX - rect.left) / width - 0.5;
    const mousePosY = (e.clientY - rect.top) / height - 0.5;

    x.set(mousePosX);
    y.set(mousePosY);

    setGlarePos({
      x: ((e.clientX - rect.left) / width) * 100,
      y: ((e.clientY - rect.top) / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const glowStyles = {
    cyan: 'hover:shadow-[0_0_35px_rgba(54,217,245,0.16)] hover:border-cyan-400/40',
    emerald: 'hover:shadow-[0_0_35px_rgba(53,230,176,0.16)] hover:border-emerald-400/40',
    lime: 'hover:shadow-[0_0_35px_rgba(216,255,88,0.16)] hover:border-lime-brand/40',
    violet: 'hover:shadow-[0_0_35px_rgba(167,139,250,0.16)] hover:border-violet-400/40',
    slate: 'hover:shadow-[0_0_35px_rgba(22,36,43,0.3)] hover:border-white/15',
  };

  return (
    <div className="perspective-1200 w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative transition-all duration-300 rounded-3xl ${glowStyles[glowColor]} ${className}`}
      >
        {/* Children with 3D depth */}
        <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
          {children}
        </div>

        {/* Dynamic Specular Glare Layer */}
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.12), transparent 60%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

