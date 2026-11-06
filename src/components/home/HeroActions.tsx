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
    <div className="space-y-6 sm:space-y-8 text-left z-[25]">
      {/* 1. Main Supporting Headline (Refined to 2-3 lines on desktop with controlled max-w) */}
      <motion.p
        variants={fadeUpVariants}
        className="font-editorial text-xl sm:text-2xl lg:text-[25px] xl:text-[27px] font-semibold text-slate-100 tracking-tight leading-[1.38] max-w-xl"
      >
        I build intelligent systems, explore emerging technologies, and transform complex ideas into meaningful digital products.
      </motion.p>

      {/* 2. Interactive CTA Action Buttons (Refined hierarchy & desktop horizontal alignment) */}
      <motion.div
        variants={fadeUpVariants}
        className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-1"
      >
        {/* Primary CTA: Explore My Work (Electric Lime Filled Pill) */}
        <MagneticButton strength={0.2}>
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-lime-brand text-dark-950 font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_24px_rgba(216,255,88,0.38)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
          >
            <Play className="w-3.5 h-3.5 fill-dark-950" />
            <span>Explore My Work</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </MagneticButton>

        {/* Secondary CTA: Let's Connect (Dark Transparent Pill with Subtle Border) */}
        <MagneticButton strength={0.15}>
          <button
            onClick={onConnect}
            className="w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-dark-900/60 backdrop-blur-md border border-white/15 text-slate-200 hover:text-white hover:border-cyan-400/60 hover:bg-dark-800/80 font-mono text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Let's Connect</span>
          </button>
        </MagneticButton>

        {/* Tertiary CTA: Download Resume (Subtle text-link / micro-button, no heavy border) */}
        <button
          onClick={onOpenResume}
          className="w-full sm:w-auto px-3 py-2 text-slate-300 hover:text-emerald-400 font-mono text-xs flex items-center justify-center sm:justify-start gap-1.5 transition-colors cursor-pointer group hover:underline"
        >
          <FileDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          <span>Download Resume</span>
        </button>
      </motion.div>

      {/* 3. Technology Highlights Grid (3 Columns) */}
      <motion.div
        variants={fadeUpVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 border-t border-white/10 max-w-xl"
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
              Healthcare AI · Security
            </p>
          </div>
        </div>
      </motion.div>

      {/* 4. Scroll Navigation Bar */}
      <motion.div variants={fadeUpVariants} className="pt-1">
        <ScrollIndicator onScrollClick={onExploreWork} />
      </motion.div>
    </div>
  );
};
