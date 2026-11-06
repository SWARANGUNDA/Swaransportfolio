import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Card3D } from '../common/Card3D';
import {
  TelemedicineMockup,
  SrdcMockup,
  LumovitaMockup,
  SamvaadMockup,
} from './ProjectMockups';
import {
  ArrowUpRight,
  Github,
  Maximize2,
  Layers,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Code2,
  FileText,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = [
    'All',
    'AI / Healthcare',
    'Cybersecurity / NLP',
    'Full-Stack Web',
    'Hardware & MedTech',
  ];

  // Deep-linking hash router support for case studies
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const projId = hash.replace('#project/', '');
        const found = portfolioData.projects.find((p) => p.id === projId);
        if (found) {
          setSelectedProject(found);
        }
      } else if (!hash.startsWith('#project')) {
        setSelectedProject(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    window.location.hash = `#project/${project.id}`;
  };

  const closeProject = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project/')) {
      window.location.hash = '#projects';
    }
  };

  const navigateProject = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    const currentIndex = portfolioData.projects.findIndex(
      (p) => p.id === selectedProject.id
    );
    if (currentIndex === -1) return;
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % portfolioData.projects.length
        : (currentIndex - 1 + portfolioData.projects.length) %
          portfolioData.projects.length;
    openProject(portfolioData.projects[nextIndex]);
  };

  const filteredProjects =
    filter === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filter);

  const renderMockup = (id: string) => {
    switch (id) {
      case 'telemedicine-microbiome':
        return <TelemedicineMockup />;
      case 'srdc-ransomware-nlp':
        return <SrdcMockup />;
      case 'samvaad-social-platform':
        return <SamvaadMockup />;
      case 'lumovita-wound-healing':
        return <LumovitaMockup />;
      default:
        return null;
    }
  };

  const getProjectGlowColor = (
    id: string
  ): 'cyan' | 'emerald' | 'lime' | 'violet' | 'slate' => {
    switch (id) {
      case 'telemedicine-microbiome':
        return 'emerald'; // Emerald & Cyan clinical
      case 'srdc-ransomware-nlp':
        return 'cyan'; // Cyan & Deep Navy security
      case 'samvaad-social-platform':
        return 'cyan'; // Emerald, Cyan modern social
      case 'lumovita-wound-healing':
        return 'lime'; // Soft Lime & Emerald medtech
      default:
        return 'cyan';
    }
  };

  const getProjectHeadingGradient = (id: string) => {
    switch (id) {
      case 'telemedicine-microbiome':
        return 'group-hover:text-emerald-400';
      case 'srdc-ransomware-nlp':
        return 'group-hover:text-cyan-400';
      case 'samvaad-social-platform':
        return 'group-hover:text-emerald-400';
      case 'lumovita-wound-healing':
        return 'group-hover:text-lime-brand';
      default:
        return 'group-hover:text-cyan-400';
    }
  };

  const getProjectBadgeClass = (id: string) => {
    switch (id) {
      case 'telemedicine-microbiome':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25';
      case 'srdc-ransomware-nlp':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25';
      case 'samvaad-social-platform':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25';
      case 'lumovita-wound-healing':
        return 'bg-lime-brand/10 text-lime-brand border-lime-brand/25';
      default:
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25';
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-dark-950 tech-grid">
      {/* Cinematic Section Top Divider */}
      <div className="section-divider absolute top-0 inset-x-0" />

      {/* Subtle radial emerald/cyan ambient gradients */}
      <div className="absolute top-1/4 -left-40 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 -right-40 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeading
          number="// 02"
          category="FEATURED ARCHITECTURES & WORK"
          title="Engineered to Solve Meaningful Problems."
          subtitle="Explore in-depth engineering case studies, interactive multi-layer architecture pipelines, and production codebases spanning AI/ML, cybersecurity NLP, scalable web systems, and hardware innovations."
        />

        {/* Filter Bar with Domain Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-16 pb-4 border-b border-white/10 font-mono text-xs">
          <span className="text-slate-400 mr-2 tracking-widest uppercase font-semibold">
            DOMAIN:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-lime-brand text-dark-950 font-bold shadow-[0_0_20px_rgba(0,245,255,0.3)]'
                  : 'bg-dark-900/90 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Immersive 3D Tilt Project Showcase List */}
        <div className="space-y-24 sm:space-y-32">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            const glow = getProjectGlowColor(project.id);
            const headingGrad = getProjectHeadingGradient(project.id);
            const badgeClass = getProjectBadgeClass(project.id);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                className="group"
              >
                <Card3D glowColor={glow} depth={8}>
                  <div className="rounded-3xl bg-dark-900/80 backdrop-blur-xl border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
                    {/* Background Radial Glow */}
                    <div
                      className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[130px] pointer-events-none opacity-20 transition-opacity group-hover:opacity-40"
                      style={{ backgroundColor: project.accentColor }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                      {/* Content Column */}
                      <div
                        className={`lg:col-span-6 space-y-6 ${
                          isEven ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        {/* Top Meta Bar */}
                        <div className="flex items-center justify-between font-mono text-xs">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl font-editorial font-black text-white">
                              {project.number}
                            </span>
                            <span className="h-4 w-px bg-white/20" />
                            <span
                              className={`px-3 py-1 rounded-full border text-xs font-semibold ${badgeClass}`}
                            >
                              {project.badge}
                            </span>
                          </div>
                          <span className="text-slate-400 font-mono tracking-wider text-[11px]">
                            {project.status}
                          </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-2">
                          <h3
                            className={`font-editorial text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight transition-colors ${headingGrad}`}
                          >
                            {project.title}
                          </h3>
                          <p className="font-mono text-xs sm:text-sm text-cyan-300 font-medium">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                          {project.shortDescription}
                        </p>

                        {/* Architectural Highlights / Metrics */}
                        {project.metricsOrHighlights && (
                          <div className="grid grid-cols-2 gap-3 pt-1">
                            {project.metricsOrHighlights.map((m, midx) => (
                              <div
                                key={midx}
                                className="p-3 rounded-2xl bg-dark-950/80 border border-white/5 font-mono shadow-inner"
                              >
                                <span className="text-[10px] text-slate-400 block uppercase">
                                  {m.label}
                                </span>
                                <span className="text-xs font-bold text-white mt-0.5 block">
                                  {m.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Swaran's Role & Contribution Preview */}
                        <div className="p-3.5 rounded-2xl bg-dark-950/70 border border-white/5 space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-mono">
                            <span className="text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                              <span>Role & Core Contribution</span>
                            </span>
                            <span className="text-slate-400">Lead Engineer</span>
                          </div>
                          <ul className="space-y-1 text-xs text-slate-300">
                            {project.swaranContribution.slice(0, 2).map((c, cidx) => (
                              <li key={cidx} className="flex items-start gap-2">
                                <span className="text-cyan-400 font-bold shrink-0">•</span>
                                <span className="leading-snug">{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technology Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.technologies.slice(0, 6).map((tech, tidx) => (
                            <span
                              key={tidx}
                              className="text-xs font-mono px-3 py-1 rounded-xl bg-dark-800 text-slate-200 border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 6 && (
                            <span className="text-xs font-mono px-2 py-1 text-slate-400">
                              +{project.technologies.length - 6} more
                            </span>
                          )}
                        </div>

                        {/* Interactive Actions */}
                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                          {/* Primary View Case Study Action */}
                          <button
                            onClick={() => openProject(project)}
                            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-lime-brand to-emerald-400 text-dark-950 font-bold text-xs font-mono hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.3)] cursor-pointer"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>VIEW CASE STUDY</span>
                          </button>

                          {/* GitHub Repository Link */}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-3.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-slate-200 border border-white/10 text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer"
                            >
                              <Github className="w-4 h-4 text-cyan-400" />
                              <span>Source Code</span>
                            </a>
                          )}

                          {/* Live Demo or Blueprint Action */}
                          {project.liveDemoUrl && (
                            <button
                              onClick={() => openProject(project)}
                              className="px-4 py-3.5 rounded-xl bg-dark-950 hover:bg-dark-800 text-slate-300 border border-white/10 text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer"
                            >
                              <ExternalLink className="w-4 h-4 text-emerald-400" />
                              <span className="hidden sm:inline">Inspect Architecture</span>
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Interactive Visual Mockup Column */}
                      <div
                        className={`lg:col-span-6 ${
                          isEven ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <div className="relative group/mockup">
                          <div className="transition-transform duration-500 group-hover/mockup:scale-[1.02]">
                            {renderMockup(project.id)}
                          </div>
                          <button
                            onClick={() => openProject(project)}
                            className="absolute top-4 right-4 p-2.5 rounded-xl bg-dark-900/90 backdrop-blur-md border border-white/15 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1.5 text-xs font-mono shadow-xl cursor-pointer"
                            title="Open Detailed Case Study"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>VIEW CASE STUDY</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Global Interactive Project Case Study Reader */}
      <ProjectModal
        project={selectedProject}
        onClose={closeProject}
        onNavigateProject={navigateProject}
      />
    </section>
  );
};
