import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import {
  BrainCircuit,
  CodeXml,
  Layout,
  Server,
  Database,
  Cpu,
  Search,
  Sparkles,
  Layers,
  Zap,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return {
          icon: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
          badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
          dot: 'bg-cyan-400',
          hoverBorder: 'hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]',
        };
      case 'Programming Languages':
        return {
          icon: <CodeXml className="w-5 h-5 text-violet-400" />,
          badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
          dot: 'bg-violet-400',
          hoverBorder: 'hover:border-violet-400/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]',
        };
      case 'Frontend Engineering':
        return {
          icon: <Layout className="w-5 h-5 text-emerald-400" />,
          badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          dot: 'bg-emerald-400',
          hoverBorder: 'hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(0,255,135,0.15)]',
        };
      case 'Backend & APIs':
        return {
          icon: <Server className="w-5 h-5 text-cyan-400" />,
          badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
          dot: 'bg-cyan-400',
          hoverBorder: 'hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(54,217,245,0.15)]',
        };
      case 'Databases & Storage':
        return {
          icon: <Database className="w-5 h-5 text-emerald-400" />,
          badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          dot: 'bg-emerald-400',
          hoverBorder: 'hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(53,230,176,0.15)]',
        };
      case 'Tools & Infrastructure':
        return {
          icon: <Cpu className="w-5 h-5 text-lime-brand" />,
          badge: 'bg-lime-brand/10 text-lime-brand border-lime-brand/30',
          dot: 'bg-lime-brand',
          hoverBorder: 'hover:border-lime-brand/50 hover:shadow-[0_0_20px_rgba(216,255,88,0.15)]',
        };
      default:
        return {
          icon: <Layers className="w-5 h-5 text-slate-400" />,
          badge: 'bg-white/10 text-slate-300 border-white/20',
          dot: 'bg-cyan-400',
          hoverBorder: 'hover:border-cyan-400/40',
        };
    }
  };

  const filteredCategories = useMemo(() => {
    return portfolioData.skillCategories
      .filter((cat) =>
        selectedCategory === 'All' ? true : cat.category === selectedCategory
      )
      .map((cat) => {
        const filteredSkills = cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.focus.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...cat, skills: filteredSkills };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  const allCategories = ['All', ...portfolioData.skillCategories.map((c) => c.category)];

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-dark-950/70">
      {/* Section Divider */}
      <div className="section-divider absolute top-0 inset-x-0" />

      {/* Subtle emerald and cyan ambient gradients */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeading
          number="// 03"
          category="TECHNICAL ECOSYSTEM & STACK"
          title="Engineered with Modern Tools & First Principles."
          subtitle="Explore the technologies, deep learning architectures, frameworks, and infrastructure powering my models and applications."
        />

        {/* Controls: Search Bar & Category Filter */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-dark-900/90 border border-white/10 overflow-x-auto text-xs font-mono backdrop-blur-md">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-400 to-lime-brand text-dark-950 font-bold shadow-[0_0_15px_rgba(0,245,255,0.3)]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div className="relative min-w-[260px] md:w-80">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search PyTorch, FastAPI, Docker..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-dark-900 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all"
            />
          </div>
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {filteredCategories.map((cat, cIdx) => {
            const theme = getCategoryTheme(cat.category);

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: cIdx * 0.08 }}
                className="p-6 sm:p-8 rounded-3xl bg-dark-900/70 backdrop-blur-xl border border-white/10 space-y-6 shadow-2xl relative overflow-hidden"
              >
                {/* Category Header with Glow */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-dark-950 border border-white/10 shadow-inner">
                      {theme.icon}
                    </div>
                    <div>
                      <h3 className="font-editorial text-xl font-bold text-white tracking-wide flex items-center gap-2">
                        <span>{cat.category}</span>
                      </h3>
                      <p className="text-xs font-mono text-slate-400">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border font-semibold w-fit ${theme.badge}`}>
                    {cat.skills.length} Technologies
                  </span>
                </div>

                {/* Skills Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-4 rounded-2xl bg-dark-950/80 border border-white/5 transition-all duration-300 group flex flex-col justify-between ${theme.hoverBorder}`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-editorial text-sm font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                            {skill.highlight && (
                              <span className={`w-2 h-2 rounded-full ${theme.dot} shadow-[0_0_8px_currentColor]`} />
                            )}
                            {skill.name}
                          </span>
                          {skill.level && (
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold ${
                                skill.level === 'Core Expertise'
                                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                                  : skill.level === 'Advanced'
                                  ? 'bg-violet-500/15 text-violet-300 border border-violet-500/30'
                                  : 'bg-white/5 text-slate-400'
                              }`}
                            >
                              {skill.level}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-light">
                          {skill.focus}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="p-12 text-center rounded-3xl bg-dark-900/40 border border-white/10 font-mono text-slate-400 text-xs">
              No matching technologies found for "{searchQuery}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
