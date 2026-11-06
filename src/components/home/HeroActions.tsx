import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Mail, FileDown, Cpu, Layers, FlaskConical } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';
import { MagneticButton } from '../common/MagneticButton';
import { fadeUpVariants } from '../../animations/heroVariants';

interface HeroActionsProps {
  onOpenResume: () => void;
  onExploreWork: () => void;
  onConnect: () => void;
}

export const HeroActions: React.FC<HeroActionsProps> = ({
  onOpenResume,
  onExploreWork,
  onConnect,
}) => {
  return (
    <div className="space-y-8 lg:space-y-10 text-left">
      {/* 1. Main Supporting Headline (From Reference Image) */}
      <motion.h1
        variants={fadeUpVariants}
        className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight max-w-2xl"
      >
        I build intelligent systems, explore emerging technologies, and transform complex ideas into meaningful digital products.
      </motion.h1>

      {/* 2. Interactive CTA Action Buttons (From Reference Image) */}
      <motion.div
        variants={fadeUpVariants}
        className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
      >
        {/* Primary CTA: Explore My Work (Electric Lime Filled Pill) */}
        <MagneticButton strength={0.25}>
          <button
            onClick={onExploreWork}
            className="px-6 py-3.5 rounded-full bg-lime-brand text-dark-950 font-mono font-bold text-xs sm:text-sm flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(216,255,88,0.35)] transition-all cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-dark-950" />
            <span>Explore My Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </MagneticButton>

        {/* Secondary CTA: Let's Connect */}
        <MagneticButton strength={0.2}>
          <button
            onClick={onConnect}
            className="px-5 py-3.5 rounded-full bg-dark-900/90 border border-white/15 text-slate-200 hover:text-white hover:border-cyan-400 font-mono text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Let's Connect</span>
          </button>
        </MagneticButton>

        {/* Tertiary CTA: Download Resume */}
        <MagneticButton strength={0.2}>
          <button
            onClick={onOpenResume}
            className="px-5 py-3.5 rounded-full bg-dark-900/90 border border-white/15 text-slate-200 hover:text-white hover:border-emerald-400 font-mono text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
          >
            <FileDown className="w-4 h-4 text-emerald-400" />
            <span>Download Resume</span>
          </button>
        </MagneticButton>
      </motion.div>

      {/* 3. Technology Highlights Grid (3 Columns From Reference Image) */}
      <motion.div
        variants={fadeUpVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10 max-w-2xl"
      >
        {/* Column 1: AI/ML */}
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-lime-brand/10 border border-lime-brand/25 text-lime-brand shrink-0">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white font-editorial">
              AI/ML
            </h4>
            <p className="text-[11px] font-mono text-slate-400">
              Modeling · GenAI · NLP
            </p>
          </div>
        </div>

        {/* Column 2: Full-Stack */}
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-cyan-400/10 border border-cyan-400/25 text-cyan-400 shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white font-editorial">
              Full-Stack
            </h4>
            <p className="text-[11px] font-mono text-slate-400">
              React · Node · FastAPI
            </p>
          </div>
        </div>

        {/* Column 3: Research */}
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-emerald-400/10 border border-emerald-400/25 text-emerald-400 shrink-0">
            <FlaskConical className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white font-editorial">
              Research
            </h4>
            <p className="text-[11px] font-mono text-slate-400">
              Healthcare AI · Cybersecurity
            </p>
          </div>
        </div>
      </motion.div>

      {/* 4. Scroll Navigation Bar */}
      <motion.div variants={fadeUpVariants} className="pt-2">
        <ScrollIndicator onScrollClick={onExploreWork} />
      </motion.div>
    </div>
  );
};
