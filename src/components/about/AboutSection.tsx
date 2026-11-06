import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { Card3D } from '../common/Card3D';
import {
  Code,
  Brain,
  Layers,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { bio, education } = portfolioData.personal;
  const [activeTab, setActiveTab] = useState<'story' | 'foundations' | 'academics'>('story');

  const tenets = [
    {
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      glow: 'cyan' as const,
      badge: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
      title: 'Intelligent Systems Architecture',
      desc: 'Developing models that do not stop at theoretical metrics, but integrate into scalable production workflows.',
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      glow: 'emerald' as const,
      badge: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      title: 'Full-Cycle Engineering',
      desc: 'Spanning every layer from relational schema design and async REST APIs to high-fidelity frontend interactions.',
    },
    {
      icon: <Code className="w-5 h-5 text-emerald-400" />,
      glow: 'emerald' as const,
      badge: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      title: 'Systems & Algorithmic Rigor',
      desc: 'Grounding high-level AI paradigms in solid computer science, operating systems, data structures, and C/Python fundamentals.',
    },
    {
      icon: <Compass className="w-5 h-5 text-violet-400" />,
      glow: 'violet' as const,
      badge: 'border-violet-500/30 text-violet-400 bg-violet-500/10',
      title: 'Research Curiosity & Innovation',
      desc: 'Relentlessly unpacking academic papers in NLP, biomedical AI, and malware semantics to formulate novel applications.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-dark-950/70">
      <div className="section-divider absolute top-0 inset-x-0" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeading
          number="// 01"
          category="BACKGROUND & PHILOSOPHY"
          title="Curiosity drives me. Creation defines me."
          subtitle="Engineering intelligent software systems where data science, machine learning models, and human-facing applications intersect."
        />

        {/* Tab switcher for editorial navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 bg-dark-900/90 rounded-2xl border border-white/10 w-fit backdrop-blur-md">
          <button
            onClick={() => setActiveTab('story')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all ${
              activeTab === 'story'
                ? 'bg-gradient-to-r from-cyan-400 to-lime-brand text-dark-950 font-bold shadow-[0_0_15px_rgba(0,245,255,0.3)]'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            01 // PERSONAL STORY
          </button>
          <button
            onClick={() => setActiveTab('foundations')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all ${
              activeTab === 'foundations'
                ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-dark-950 font-bold shadow-[0_0_15px_rgba(53,230,176,0.3)]'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            02 // CORE TENETS
          </button>
          <button
            onClick={() => setActiveTab('academics')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all ${
              activeTab === 'academics'
                ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-dark-950 font-bold shadow-[0_0_15px_rgba(0,255,135,0.3)]'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            03 // ACADEMIC RECORD
          </button>
        </div>

        {/* Tab 1: Personal Story */}
        {activeTab === 'story' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6 text-slate-300 font-light leading-relaxed text-base sm:text-lg">
              <div className="p-8 rounded-3xl bg-dark-900/80 backdrop-blur-xl border border-white/10 space-y-4 shadow-2xl">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-semibold">
                  // THE ENGINEERING DRIVE
                </span>
                {bio.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-slate-300 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 border border-cyan-500/30 text-slate-200 text-sm flex items-start gap-3 shadow-lg">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white font-medium">Core Mission:</strong> Building technology that transforms complex academic research into tangible products that solve meaningful human problems in health, security, and connectivity.
                </p>
              </div>
            </div>

            {/* Quick Specs Sidebar with 3D Depth */}
            <div className="lg:col-span-5 space-y-4">
              <Card3D glowColor="cyan" depth={12}>
                <div className="p-7 rounded-3xl bg-dark-900/90 backdrop-blur-xl border border-white/10 space-y-5 shadow-2xl">
                  <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                    <img
                      src={portfolioData.personal.avatarUrl || '/swaran-avatar.png'}
                      alt={portfolioData.personal.name}
                      className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-cyan-400/50 shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                    />
                    <div>
                      <h4 className="font-editorial text-lg font-bold text-white">
                        {portfolioData.personal.name}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400">
                        AI/ML Engineer & Full-Stack Dev
                      </p>
                      <p className="text-[11px] font-mono text-slate-400">
                        Keshav Memorial Inst. of Tech
                      </p>
                    </div>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-white flex items-center justify-between border-b border-white/10 pb-3">
                    <span>DISCIPLINE SNAPSHOT</span>
                    <span className="text-xs font-mono text-cyan-400">KMIT CSE</span>
                  </h3>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-400">Current Standing:</span>
                      <span className="text-white font-semibold">B.Tech 3rd/4th Year</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-400">Institution:</span>
                      <span className="text-white text-right">Keshav Memorial Inst. of Tech</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-400">Cumulative GPA:</span>
                      <span className="text-gradient-cyan-lime font-black text-base">8.7 / 10.0</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-400">Specialization:</span>
                      <span className="text-cyan-300 font-semibold">AI / ML & Full-Stack</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Location:</span>
                      <span className="text-white">Hyderabad, Telangana</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#projects"
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-lime-brand to-emerald-400 text-dark-950 text-xs font-mono font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(0,245,255,0.3)]"
                    >
                      <span>EXPLORE ALL 4 ARCHITECTURES</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card3D>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Core Tenets */}
        {activeTab === 'foundations' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {tenets.map((item, idx) => (
              <Card3D key={idx} glowColor={item.glow} depth={10}>
                <div className="p-7 rounded-3xl bg-dark-900/80 backdrop-blur-xl border border-white/10 space-y-4 shadow-xl h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-dark-950 border border-white/10 shadow-inner">
                        {item.icon}
                      </div>
                      <span className={`text-[10px] font-mono px-3 py-1 rounded-full border font-semibold ${item.badge}`}>
                        TENET 0{idx + 1}
                      </span>
                    </div>
                    <h4 className="font-editorial text-xl font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Card3D>
            ))}
          </motion.div>
        )}

        {/* Tab 3: Academics */}
        {activeTab === 'academics' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card3D glowColor="cyan" depth={8}>
              <div className="p-8 sm:p-10 rounded-3xl bg-dark-900/90 backdrop-blur-xl border border-white/10 space-y-6 shadow-2xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-lime-brand/20 border border-cyan-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,245,255,0.2)]">
                      <GraduationCap className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-editorial text-2xl font-bold text-white">
                        {education.institution}
                      </h3>
                      <p className="text-xs font-mono text-cyan-300 mt-0.5">{education.location}</p>
                    </div>
                  </div>
                  <div className="font-mono text-right">
                    <span className="text-xs text-slate-400 block">Academic Timeline</span>
                    <span className="text-sm font-semibold text-white">{education.period}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-dark-950 border border-white/5 shadow-inner">
                    <span className="text-xs font-mono text-slate-400 block mb-1">PROGRAM</span>
                    <span className="font-bold text-white text-base font-editorial">B.Tech Computer Science</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-dark-950 border border-cyan-500/30 shadow-[0_0_20px_rgba(0,245,255,0.1)]">
                    <span className="text-xs font-mono text-cyan-400 block mb-1">ACADEMIC CGPA</span>
                    <span className="font-extrabold text-gradient-cyan-lime text-2xl font-editorial">{education.cgpa} / {education.cgpaScale}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-dark-950 border border-white/5 shadow-inner">
                    <span className="text-xs font-mono text-slate-400 block mb-1">AFFILIATION</span>
                    <span className="font-bold text-white text-base font-editorial">JNTUH Accredited</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-semibold">
                    // COMPREHENSIVE CURRICULUM HIGHLIGHTS
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    Rigorous coursework spanning Data Structures, Advanced Algorithms, Operating Systems, Database Management Systems, Object-Oriented Software Engineering, Artificial Intelligence, Machine Learning, Computer Networks, and Cloud Infrastructure.
                  </p>
                </div>
              </div>
            </Card3D>
          </motion.div>
        )}
      </div>
    </section>
  );
};
