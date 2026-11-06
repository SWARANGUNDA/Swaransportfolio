import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { Card3D } from '../common/Card3D';
import { Compass, Zap, ShieldCheck, Flame, Quote, Sparkles } from 'lucide-react';

export const BeyondCodeSection: React.FC = () => {
  const { personality } = portfolioData;

  const getPillarData = (name: string, idx: number) => {
    switch (name) {
      case 'Compass':
        return {
          icon: <Compass className="w-5 h-5 text-cyan-400" />,
          glow: 'cyan' as const,
          badge: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
        };
      case 'Zap':
        return {
          icon: <Zap className="w-5 h-5 text-lime-brand" />,
          glow: 'lime' as const,
          badge: 'border-lime-brand/30 text-lime-brand bg-lime-brand/10',
        };
      case 'ShieldCheck':
        return {
          icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
          glow: 'emerald' as const,
          badge: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
        };
      case 'Flame':
        return {
          icon: <Flame className="w-5 h-5 text-cyan-400" />,
          glow: 'cyan' as const,
          badge: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
        };
      default:
        return {
          icon: <Compass className="w-5 h-5 text-cyan-400" />,
          glow: 'cyan' as const,
          badge: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
        };
    }
  };

  return (
    <section id="beyond-code" className="relative py-24 sm:py-32 bg-dark-950/70 aurora-bg">
      <div className="section-divider absolute top-0 inset-x-0" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeading
          number="// 07"
          category="PERSPECTIVE & DRIVE"
          title={personality.headline}
          subtitle="Beyond algorithms and codebases: the human curiosity, public service aspirations, and philosophical foundation steering my life's work."
        />

        {/* Featured Quote Card with Prismatic Gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-dark-900 via-dark-850 to-dark-950 border border-cyan-500/30 relative overflow-hidden mb-12 shadow-[0_0_50px_rgba(0,245,255,0.15)]"
        >
          <Quote className="w-20 h-20 text-cyan-400/10 absolute top-6 right-8 pointer-events-none" />
          <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-white font-medium italic leading-relaxed max-w-4xl relative z-10">
            {personality.quote}
          </p>
          <div className="mt-6 flex items-center gap-3 font-mono text-xs text-cyan-300">
            <span className="h-px w-10 bg-cyan-400" />
            <span className="font-bold tracking-wider">SWARAN GUNDA — CORE PERSPECTIVE</span>
          </div>
        </motion.div>

        {/* Four Core Pillars wrapped in Card3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personality.pillars.map((pillar, idx) => {
            const data = getPillarData(pillar.icon, idx);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <Card3D glowColor={data.glow} depth={10} className="h-full">
                  <div className="p-7 sm:p-8 rounded-3xl bg-dark-900/80 backdrop-blur-xl border border-white/10 space-y-3 shadow-2xl h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-2xl bg-dark-950 border border-white/10 shadow-inner">
                          {data.icon}
                        </div>
                        <span className={`text-[10px] font-mono px-3 py-1 rounded-full border font-bold ${data.badge}`}>
                          PILLAR 0{idx + 1}
                        </span>
                      </div>
                      <h4 className="font-editorial text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
