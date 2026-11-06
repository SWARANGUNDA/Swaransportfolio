import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  variant = 'primary',
  download,
  target,
  rel,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Subtle magnetic strength
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-medium text-sm md:text-base px-6 py-3.5 rounded-full transition-all duration-300 select-none group overflow-hidden cursor-pointer';

  const variantStyles = {
    primary:
      'bg-lime-brand text-dark-950 hover:bg-lime-hover shadow-[0_0_20px_rgba(212,255,50,0.25)] hover:shadow-[0_0_30px_rgba(212,255,50,0.45)] font-semibold',
    secondary:
      'bg-dark-800 text-slate-100 border border-white/10 hover:border-lime-brand/50 hover:text-lime-brand hover:bg-dark-700/80',
    outline:
      'border border-slate-700 text-slate-200 hover:border-lime-brand hover:text-lime-brand bg-transparent',
    ghost:
      'text-slate-300 hover:text-lime-brand hover:bg-white/5',
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 150, mass: 0.1 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      data-interactive="true"
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} className="inline-block">
      {content}
    </div>
  );
};

