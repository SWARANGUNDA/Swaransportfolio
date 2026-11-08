import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Mail, FileDown, Cpu, Layers, FlaskConical } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';
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
    <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-left z-[25] max-w-2xl">
      {/* 1. Professional Eyebrow Badge */}
      <motion.div
        variants={fadeUpVariants}
        className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-dark-900/80 backdrop-blur-md shadow-[0_0_15px_rgba(54,217,245,0.12)] w-fit"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-cyan-400 to-lime-brand" />
        </span>
        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-slate-300">
          <span className="text-cyan-400 font-semibold">AI/ML ENGINEER</span> · KMIT CSE · FULL-STACK
        </span>
      </motion.div>

      {/* 2. Main Hero Headline */}
      <motion.div variants={fadeUpVariants} className="space-y-1 sm:space-y-1.5">
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[50px] font-black tracking-tight leading-[1.06] uppercase">
          <span className="block text-slate-100">
            I DON'T JUST WRITE CODE.
          </span>
          <span className="block text-lime-brand text-glow-lime">
            I BUILD WHAT'S NEXT.
          </span>
        </h1>
      </motion.div>

      {/* 3. Supporting Introduction */}
      <motion.p
        variants={fadeUpVariants}
        className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl"
      >
        I build intelligent systems, explore emerging technologies, and transform complex ideas into meaningful digital products.
      </motion.p>

      {/* 4. Interactive CTA Action Buttons (Standardized 46px Height, font-mono bold text-xs) */}
      <motion.div
        variants={fadeUpVariants}
        className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-3.5 pt-1 flex-wrap xl:flex-nowrap"
      >
        {/* Button 1: Explore My Work */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onExploreWork}
          className="h-[46px] px-5 sm:px-6 rounded-full bg-lime-brand text-dark-950 font-mono font-bold text-xs flex items-center justify-center gap-2 hover:shadow-[0_0_24px_rgba(216,255,88,0.45)] transition-all cursor-pointer whitespace-nowrap group shrink-0"
        >
          <Play className="w-3.5 h-3.5 fill-dark-950" />
          <span className="whitespace-nowrap">Explore My Work</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.button>

        {/* Button 2: Let's Connect */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onConnect}
          className="h-[46px] px-5 sm:px-6 rounded-full bg-dark-900/80 backdrop-blur-md border border-cyan-500/35 text-white hover:text-cyan-300 hover:border-cyan-400 hover:bg-dark-800/90 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.4)]"
        >
          <Mail className="w-3.5 h-3.5 text-cyan-400" />
          <span className="whitespace-nowrap">Let's Connect</span>
        </motion.button>

        {/* Button 3: Download Resume */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpenResume}
          className="h-[46px] px-5 sm:px-6 rounded-full bg-dark-900/80 backdrop-blur-md border border-cyan-500/35 text-white hover:text-cyan-300 hover:border-cyan-400 hover:bg-dark-800/90 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.4)]"
        >
          <FileDown className="w-3.5 h-3.5 text-cyan-400" />
          <span className="whitespace-nowrap">Download Resume</span>
        </motion.button>
      </motion.div>

      {/* 5. Technology Highlights Grid (Protected with glass backing so wave dots never obscure text) */}
      <motion.div
        variants={fadeUpVariants}
        className="bg-midnight/70 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-white/5 max-w-xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">
          {/* Column 1: AI/ML */}
          <div className="flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-lime-brand/10 border border-lime-brand/25 text-lime-brand shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white font-editorial">
                AI/ML
              </h4>
              <p className="text-[11px] font-mono text-slate-300 whitespace-nowrap font-medium">
                Modeling · GenAI · NLP
              </p>
            </div>
          </div>

          {/* Column 2: Full-Stack */}
          <div className="flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/25 text-cyan-400 shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white font-editorial">
                Full-Stack
              </h4>
              <p className="text-[11px] font-mono text-slate-300 whitespace-nowrap font-medium">
                React · Node · FastAPI
              </p>
            </div>
          </div>

          {/* Column 3: Research */}
          <div className="flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-400/10 border border-emerald-400/25 text-emerald-400 shrink-0">
              <FlaskConical className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white font-editorial">
                Research
              </h4>
              <p className="text-[11px] font-mono text-slate-300 whitespace-nowrap font-medium">
                Healthcare AI · Security
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 6. Scroll Navigation Bar */}
      <motion.div variants={fadeUpVariants} className="pt-0.5">
        <ScrollIndicator onScrollClick={onExploreWork} />
      </motion.div>
    </div>
  );
};
