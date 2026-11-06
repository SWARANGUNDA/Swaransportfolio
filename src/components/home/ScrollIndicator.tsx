import React from 'react';
import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  onScrollClick?: () => void;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ onScrollClick }) => {
  const handleClick = () => {
    if (onScrollClick) {
      onScrollClick();
    } else {
      const el = document.querySelector('#projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-4 text-xs font-mono select-none">
      {/* Interactive Mouse Indicator Button */}
      <button
        onClick={handleClick}
        className="flex items-center gap-2 text-slate-400 hover:text-lime-brand transition-colors group cursor-pointer"
        aria-label="Scroll to exploration"
      >
        <span className="text-[10px] tracking-widest text-slate-400 group-hover:text-lime-brand transition-colors uppercase font-semibold">
          SCROLL
        </span>

        {/* Animated Mouse Icon */}
        <div className="w-4 h-6 rounded-full border border-slate-500 group-hover:border-lime-brand flex justify-center p-1 transition-colors">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-cyan-400 group-hover:bg-lime-brand"
          />
        </div>
      </button>

      {/* Horizontal Progress Bar */}
      <div className="hidden sm:block w-16 h-[2px] bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1/2 h-full bg-gradient-to-r from-cyan-400 to-lime-brand rounded-full"
        />
      </div>

      {/* Navigation Breadcrumbs */}
      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono tracking-widest uppercase">
        <a href="#projects" className="hover:text-cyan-400 transition-colors">
          EXPLORE
        </a>
        <span className="text-slate-600">/</span>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">
          PROJECTS
        </a>
        <span className="text-slate-600">/</span>
        <a href="#research" className="hover:text-cyan-400 transition-colors">
          RESEARCH
        </a>
        <span className="text-slate-600">/</span>
        <a href="#journey" className="hover:text-cyan-400 transition-colors">
          JOURNEY
        </a>
      </div>
    </div>
  );
};
