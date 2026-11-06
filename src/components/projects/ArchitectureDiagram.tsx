import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArchitectureNode } from '../../types/portfolio';
import { ArrowRight, ArrowDown, CheckCircle2, ShieldCheck, Cpu, Database, Activity, Sparkles } from 'lucide-react';

interface ArchitectureDiagramProps {
  nodes?: ArchitectureNode[];
  accentColor?: string;
  projectNumber: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  nodes,
  accentColor = '#10b981',
  projectNumber,
}) => {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);

  if (!nodes || nodes.length === 0) return null;

  const activeNode = nodes[selectedNodeIndex] || nodes[0];

  return (
    <div className="rounded-2xl border border-white/10 bg-dark-950/90 tech-grid p-5 sm:p-6 space-y-6 relative overflow-hidden">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-2.5 h-2.5 rounded-full animate-ping"
            style={{ backgroundColor: accentColor }}
          />
          <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-bold">
            Interactive Architecture Pipeline // Project {projectNumber}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {nodes.filter((n) => n.status === 'Implemented').length} Implemented
          </span>
          {nodes.filter((n) => n.status !== 'Implemented').length > 0 && (
            <span className="px-2.5 py-0.5 rounded-full bg-lime-brand/10 text-lime-brand border border-lime-brand/30">
              {nodes.filter((n) => n.status !== 'Implemented').length} Blueprint
            </span>
          )}
        </div>
      </div>

      {/* Interactive Node Conduit (Horizontal scroll on desktop, vertical on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
        {nodes.map((node, index) => {
          const isSelected = selectedNodeIndex === index;
          const isImplemented = node.status === 'Implemented';

          return (
            <div key={index} className="flex flex-col relative group">
              <button
                type="button"
                onClick={() => setSelectedNodeIndex(index)}
                className={`p-3.5 rounded-xl text-left transition-all h-full flex flex-col justify-between border cursor-pointer ${
                  isSelected
                    ? 'bg-dark-900 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.1)] ring-1 ring-white/20'
                    : 'bg-dark-900/60 border-white/10 hover:border-white/25 hover:bg-dark-900/90'
                }`}
                style={
                  isSelected
                    ? { borderColor: accentColor, boxShadow: `0 0 20px ${accentColor}33` }
                    : {}
                }
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5">
                    <span className="font-bold text-white">STAGE {node.step}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[9px] ${
                        isImplemented
                          ? 'bg-emerald-500/15 text-emerald-400'
                          : 'bg-amber-500/15 text-amber-400'
                      }`}
                    >
                      {isImplemented ? 'READY' : 'PLAN'}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white text-xs leading-snug line-clamp-2">
                    {node.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 line-clamp-1 mt-1 font-mono">
                    {node.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mt-2.5 pt-2 border-t border-white/5">
                  {node.tech.slice(0, 2).map((t, tidx) => (
                    <span
                      key={tidx}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-dark-950 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>

              {/* Connecting arrow for desktop */}
              {index < nodes.length - 1 && (
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-slate-600">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Node Detailed Inspection Deck */}
      <motion.div
        key={selectedNodeIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="p-4 sm:p-5 rounded-xl bg-dark-900/90 border border-white/15 space-y-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-mono font-bold px-2 py-0.5 rounded"
              style={{ backgroundColor: `${accentColor}22`, color: accentColor }}
            >
              STAGE {activeNode.step} INSPECTION
            </span>
            <span className="font-editorial text-sm sm:text-base font-bold text-white">
              {activeNode.name}
            </span>
          </div>
          <span
            className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full ${
              activeNode.status === 'Implemented'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
            }`}
          >
            ● {activeNode.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-8 space-y-1.5 text-xs text-slate-300 leading-relaxed font-light">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
              Functional Sub-System Role:
            </span>
            <p className="text-white font-medium">{activeNode.role}</p>
            <p className="text-slate-300 text-xs pt-1">{activeNode.details}</p>
          </div>

          <div className="md:col-span-4 bg-dark-950 p-3 rounded-lg border border-white/10 space-y-1.5">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
              Technologies & Tooling:
            </span>
            <div className="flex flex-wrap gap-1">
              {activeNode.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

