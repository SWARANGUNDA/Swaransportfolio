import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  ExternalLink,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Layers,
  Lightbulb,
  Compass,
  AlertTriangle,
  Code2,
  FileText,
  Sliders,
  ChevronRight,
  Maximize2,
  Shield,
  HelpCircle
} from 'lucide-react';
import { Project } from '../../types/portfolio';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import {
  TelemedicineMockup,
  SrdcMockup,
  LumovitaMockup,
  SamvaadMockup,
} from './ProjectMockups';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigateProject?: (direction: 'prev' | 'next') => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNavigateProject,
  hasPrev = true,
  hasNext = true,
}) => {
  const [activeTab, setActiveTab] = useState<'case-study' | 'architecture' | 'implementation' | 'demo'>('case-study');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          onClose();
        }
      }
      if (e.key === 'ArrowLeft' && onNavigateProject && hasPrev) {
        onNavigateProject('prev');
      }
      if (e.key === 'ArrowRight' && onNavigateProject && hasNext) {
        onNavigateProject('next');
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNavigateProject, hasPrev, hasNext, lightboxImage]);

  if (!project) return null;

  const renderProjectMockup = () => {
    switch (project.id) {
      case 'telemedicine-microbiome':
        return <TelemedicineMockup />;
      case 'srdc-ransomware-nlp':
        return <SrdcMockup />;
      case 'lumovita-wound-healing':
        return <LumovitaMockup />;
      case 'samvaad-social-platform':
        return <SamvaadMockup />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-dark-950/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-6xl bg-dark-900 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-4 sm:my-6 max-h-[92vh] flex flex-col"
        >
          {/* Header Command Bar */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 bg-dark-950/95 backdrop-blur-md sticky top-0 z-30">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/10 text-white font-bold border border-white/10">
                CASE STUDY {project.number}
              </span>
              <span className="text-xs font-mono text-cyan-400 hidden sm:inline">
                {project.category}
              </span>
              <span className="text-[11px] font-mono text-slate-400 hidden md:inline">
                · {project.badge}
              </span>
            </div>

            {/* Quick Actions & Navigation */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Previous / Next Switcher */}
              {onNavigateProject && (
                <div className="hidden sm:flex items-center rounded-xl bg-dark-800 border border-white/10 p-0.5">
                  <button
                    onClick={() => onNavigateProject('prev')}
                    disabled={!hasPrev}
                    title="Previous Project (Left Arrow)"
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] font-mono px-2 text-slate-400">
                    {project.number} / 04
                  </span>
                  <button
                    onClick={() => onNavigateProject('next')}
                    disabled={!hasNext}
                    title="Next Project (Right Arrow)"
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* GitHub Button */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl border border-white/10 bg-dark-800 hover:bg-dark-700 text-xs font-mono text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Section Navigation Tabs */}
          <div className="flex items-center gap-1 px-4 sm:px-8 py-2.5 border-b border-white/10 bg-dark-900/90 font-mono text-xs overflow-x-auto select-none">
            <button
              onClick={() => setActiveTab('case-study')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'case-study'
                  ? 'bg-gradient-to-r from-cyan-400 to-lime-brand text-dark-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              A–D // CASE STUDY & MOTIVATION
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'architecture'
                  ? 'bg-gradient-to-r from-cyan-400 to-lime-brand text-dark-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              E–G // SYSTEM ARCHITECTURE
            </button>
            <button
              onClick={() => setActiveTab('implementation')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'implementation'
                  ? 'bg-gradient-to-r from-cyan-400 to-lime-brand text-dark-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              H–J // ENGINEERING & DECISIONS
            </button>
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'demo'
                  ? 'bg-gradient-to-r from-cyan-400 to-lime-brand text-dark-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              K–M // DEMO & FUTURE WORK
            </button>
          </div>

          {/* Scrollable Case Study Body */}
          <div className="p-4 sm:p-8 md:p-10 overflow-y-auto space-y-10 text-slate-300">
            {/* Project Header Banner */}
            <div className="space-y-3 border-b border-white/10 pb-6">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400">
                <span className="text-cyan-400 font-semibold">{project.category}</span>
                <span>•</span>
                <span>STATUS: {project.status}</span>
                {project.githubStatus && (
                  <>
                    <span>•</span>
                    <span className="text-emerald-400">{project.githubStatus}</span>
                  </>
                )}
              </div>
              <h1 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="font-mono text-sm sm:text-base text-cyan-300 font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* TAB 1: CASE STUDY & MOTIVATION (Sections A, B, C, D) */}
            {activeTab === 'case-study' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* A. Project Overview */}
                <div className="p-6 rounded-2xl bg-dark-950/80 border border-white/10 space-y-3">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                    // SECTION A: PROJECT OVERVIEW
                  </span>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                    {project.overview}
                  </p>
                </div>

                {/* B. Problem Statement & C. Motivation Split Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* B. Problem Statement */}
                  <div className="p-6 rounded-2xl bg-dark-950/80 border border-rose-500/20 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-bold uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4" />
                      <span>SECTION B: PROBLEM STATEMENT</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {project.problemStatement}
                    </p>
                  </div>

                  {/* C. Motivation */}
                  <div className="p-6 rounded-2xl bg-dark-950/80 border border-amber-500/20 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                      <Lightbulb className="w-4 h-4" />
                      <span>SECTION C: ENGINEERING MOTIVATION</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {project.motivation}
                    </p>
                  </div>
                </div>

                {/* D. Proposed Solution */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-transparent border border-cyan-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>SECTION D: PROPOSED ARCHITECTURAL SOLUTION</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                    {project.proposedSolution}
                  </p>
                </div>

                {/* Next Tab Callout */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className="px-5 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-xs font-mono text-cyan-300 border border-cyan-500/30 flex items-center gap-2 transition-all"
                  >
                    <span>Proceed to System Architecture (Sections E–G)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* TAB 2: SYSTEM ARCHITECTURE & TECH STACK (Sections E, F, G) */}
            {activeTab === 'architecture' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* E. System Architecture Interactive Pipeline Diagram */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                      // SECTION E: SYSTEM ARCHITECTURE & DATA FLOW
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Visual Pipeline Model
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {project.architecture.overview}
                  </p>

                  {/* Interactive Pipeline Diagram */}
                  <ArchitectureDiagram
                    nodes={project.architecture.pipelineNodes}
                    accentColor={project.accentColor}
                    projectNumber={project.number}
                  />
                </div>

                {/* Layered Architecture Detail Cards */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    Multi-Tier Layer Specification:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.architecture.layers.map((layer, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-dark-950/80 border border-white/10 space-y-3 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">
                            TIER 0{idx + 1}
                          </span>
                          <h4 className="font-semibold text-white text-sm mb-2">
                            {layer.name}
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed font-light">
                            {layer.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1 pt-3 border-t border-white/5">
                          {layer.tech.map((t, tidx) => (
                            <span
                              key={tidx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* F. Technology Stack */}
                <div className="p-6 rounded-2xl bg-dark-950/80 border border-white/10 space-y-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                    // SECTION F: TECHNOLOGY STACK & LIBRARIES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tidx) => (
                      <span
                        key={tidx}
                        className="text-xs font-mono px-3 py-1.5 rounded-xl bg-dark-900 text-slate-200 border border-white/15 flex items-center gap-1.5"
                      >
                        <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* G. Core Features */}
                <div className="p-6 rounded-2xl bg-dark-950/80 border border-white/10 space-y-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                    // SECTION G: CORE SYSTEM CAPABILITIES & FEATURES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-dark-900 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Tab Callout */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setActiveTab('implementation')}
                    className="px-5 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-xs font-mono text-cyan-300 border border-cyan-500/30 flex items-center gap-2 transition-all"
                  >
                    <span>Proceed to Implementation & Decisions (Sections H–J)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* TAB 3: IMPLEMENTATION, CHALLENGES & DECISIONS (Sections H, I, J) */}
            {activeTab === 'implementation' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* H. Swaran's Implementation & Role */}
                <div className="p-6 rounded-2xl bg-dark-950/90 border border-cyan-500/30 space-y-4 shadow-lg">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                      // SECTION H: SWARAN'S ROLE & INDEPENDENT CONTRIBUTIONS
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      Primary Engineer
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                    {project.swaranContribution.map((contrib, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Distinction of Status: Implemented vs. Proposed */}
                {project.implementationNotes && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2 text-xs">
                      <span className="font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                        ✓ Implemented in Current Codebase
                      </span>
                      <ul className="space-y-1.5 text-slate-300">
                        {project.implementationNotes.implemented.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2 text-xs">
                      <span className="font-mono text-amber-400 font-bold uppercase tracking-wider block">
                        ⚡ Architectural Blueprint / Proposed Extensions
                      </span>
                      <ul className="space-y-1.5 text-slate-300">
                        {project.implementationNotes.proposed.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* I. Technical Challenges & Engineering Solutions */}
                {project.technicalChallenges && project.technicalChallenges.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                      // SECTION I: TECHNICAL CHALLENGES & OVERCOMING BOTTLENECKS
                    </span>
                    <div className="grid grid-cols-1 gap-4">
                      {project.technicalChallenges.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-dark-950/80 border border-white/10 space-y-2.5"
                        >
                          <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-semibold">
                            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                            <span>Challenge 0{idx + 1}: {item.challenge}</span>
                          </div>
                          <div className="p-3.5 rounded-xl bg-dark-900 border border-emerald-500/20 text-xs text-slate-300 leading-relaxed font-light flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-emerald-400 font-mono block mb-1">
                                Applied Engineering Solution:
                              </strong>
                              <span>{item.solution}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* J. Engineering Decisions & Architectural Rationale */}
                {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                      // SECTION J: KEY ENGINEERING DECISIONS & TRADE-OFFS
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.engineeringDecisions.map((dec, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-dark-950/80 border border-white/10 space-y-2"
                        >
                          <span className="text-xs font-mono text-cyan-400 font-bold block">
                            Decision 0{idx + 1}: {dec.decision}
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed font-light">
                            <strong className="text-slate-400 font-mono block mb-0.5">
                              Architectural Rationale:
                            </strong>
                            {dec.rationale}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Next Tab Callout */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setActiveTab('demo')}
                    className="px-5 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-xs font-mono text-cyan-300 border border-cyan-500/30 flex items-center gap-2 transition-all"
                  >
                    <span>Proceed to Demos, Verification & Future Work (Sections K–M)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* TAB 4: DEMONSTRATION, ACCURACY NOTICE, ROADMAP & REPO (Sections K, L, M) */}
            {activeTab === 'demo' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* K. Demonstration & Interactive Preview */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                      // SECTION K: SCREENSHOTS & FUNCTIONAL DEMONSTRATION
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Interactive Visual Component
                    </span>
                  </div>

                  {/* Authenticity Demo Notice Alert */}
                  {project.demoNotice && (
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-3">
                      <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        <strong className="text-white font-medium">Authenticity & Data Accuracy Notice: </strong>
                        {project.demoNotice}
                      </p>
                    </div>
                  )}

                  {/* Render Visual Mockup / Device Image */}
                  <div className="p-2 sm:p-4 rounded-3xl bg-dark-950 border border-white/10 shadow-2xl">
                    {renderProjectMockup()}
                  </div>
                </div>

                {/* L. Future Improvements & Next Milestones */}
                <div className="p-6 rounded-2xl bg-dark-950/80 border border-white/10 space-y-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                    // SECTION L: FUTURE IMPROVEMENTS & RESEARCH ROADMAP
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.futureImprovements.map((imp, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-dark-900 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <Compass className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{imp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* M. GitHub & Live Demo Hub */}
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-dark-900 to-emerald-500/10 border border-cyan-500/30 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                      // SECTION M: REPOSITORY & DEMO VERIFICATION
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.githubStatus || 'Verified Project Code'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    Source code repositories and architecture documentation for this system are maintained on GitHub. Technical recruiters and researchers can inspect code artifacts or request repository access directly:
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-lime-brand to-emerald-400 text-dark-950 text-xs font-mono font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,245,255,0.3)]"
                    >
                      <Github className="w-4 h-4" />
                      <span>ACCESS GITHUB REPOSITORY</span>
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 text-slate-200 border border-white/10 text-xs font-mono flex items-center gap-2 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-cyan-400" />
                        <span>{project.liveDemoStatus || 'View Demonstration'}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
        >
          <img
            src={lightboxImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain border border-white/20 shadow-2xl"
          />
        </div>
      )}
    </AnimatePresence>
  );
};
