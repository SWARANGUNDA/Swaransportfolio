import React from 'react';
import { Activity, ShieldAlert, Sun, MessageSquare, Layers, Cpu, CheckCircle2, TrendingUp, Zap, Sparkles, Terminal, Shield } from 'lucide-react';

export const TelemedicineMockup: React.FC = () => {
  return (
    <div className="w-full bg-dark-950/95 rounded-3xl border border-emerald-500/25 p-5 sm:p-6 font-mono text-xs text-slate-300 shadow-[0_0_35px_rgba(53,230,176,0.12)] space-y-4 relative overflow-hidden tech-grid">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Top dashboard header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white text-sm font-editorial block">BIO-SYNTHESIS ENGINE</span>
            <span className="text-[10px] text-emerald-400">Multi-Modal Healthcare AI · Clinical Surface</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 font-semibold">
            SHAP: Active
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-semibold">
            Tri-Model Ensemble
          </span>
        </div>
      </div>

      {/* Grid of Clinical Metrics */}
      <div className="grid grid-cols-3 gap-2.5 text-[11px]">
        <div className="p-3 rounded-2xl bg-dark-900 border border-emerald-500/20 shadow-inner">
          <span className="text-slate-400 block text-[10px]">MICROBIOME DIVERSITY</span>
          <span className="text-emerald-400 font-bold text-lg font-editorial">F/B 1.42</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">Shannon Index: 3.84</span>
        </div>
        <div className="p-3 rounded-2xl bg-dark-900 border border-cyan-500/20 shadow-inner">
          <span className="text-slate-400 block text-[10px]">METABOLIC RISK INDEX</span>
          <span className="text-cyan-400 font-bold text-lg font-editorial">0.18</span>
          <span className="text-[9px] text-cyan-400 block mt-0.5">Calibrated Low Profile</span>
        </div>
        <div className="p-3 rounded-2xl bg-dark-900 border border-emerald-500/20 shadow-inner">
          <span className="text-slate-400 block text-[10px]">WEARABLE HRV</span>
          <span className="text-emerald-400 font-bold text-lg font-editorial">68 ms</span>
          <span className="text-[9px] text-slate-400 block mt-0.5">Vagal Tone Balance</span>
        </div>
      </div>

      {/* Simulated SHAP Feature Attribution Graph */}
      <div className="p-3.5 rounded-2xl bg-dark-900/90 border border-white/10 space-y-2.5">
        <div className="flex justify-between text-[11px] font-semibold text-slate-300">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>SHAP Feature Attribution Matrix</span>
          </span>
          <span className="text-emerald-400">TreeExplainer Model</span>
        </div>
        <div className="space-y-2 text-[10px]">
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Faecalibacterium prausnitzii Abundance</span>
              <span className="text-emerald-400 font-bold">+0.42 (Protective)</span>
            </div>
            <div className="h-1.5 w-full bg-dark-950 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" style={{ width: '78%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>High-Sensitivity C-Reactive Protein (hs-CRP)</span>
              <span className="text-cyan-400 font-bold">+0.28 (Marker)</span>
            </div>
            <div className="h-1.5 w-full bg-dark-950 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" style={{ width: '52%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Circadian Sleep Continuity Ratio</span>
              <span className="text-slate-400 font-bold">+0.14 (Baseline)</span>
            </div>
            <div className="h-1.5 w-full bg-dark-950 rounded-full overflow-hidden">
              <div className="h-full bg-slate-600 rounded-full" style={{ width: '30%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Generated LLM Clinical Excerpt */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-dark-900 to-cyan-500/10 border border-emerald-500/25 text-[11px] leading-relaxed">
        <div className="text-emerald-300 font-bold mb-1 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Domain LLM Clinical Narrative Output:
        </div>
        <p className="text-slate-300 italic text-[11px]">
          "Biomarker integration reveals balanced commensal microbial diversity with steady nocturnal autonomic recovery. Feature contribution indicates optimal prebiotic dietary adherence."
        </p>
      </div>
    </div>
  );
};

export const SrdcMockup: React.FC = () => {
  return (
    <div className="w-full bg-dark-950/95 rounded-3xl border border-cyan-500/25 p-5 sm:p-6 font-mono text-xs text-slate-300 shadow-[0_0_35px_rgba(54,217,245,0.12)] space-y-4 relative overflow-hidden tech-grid">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-cyan-500/15 text-cyan-400">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white text-sm font-editorial block">SRDC DEFENSE CONSOLE</span>
            <span className="text-[10px] text-cyan-400">Security NLP · Deep Navy Architecture</span>
          </div>
        </div>
        <div className="text-[10px] text-cyan-300 border border-cyan-500/25 px-3 py-1 rounded-full bg-cyan-500/10 font-semibold">
          FINE-TUNED GPT-2
        </div>
      </div>

      {/* Opcode Stream & Tokenization */}
      <div className="p-3.5 rounded-2xl bg-dark-900 border border-white/10 space-y-2">
        <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
          <span>BINARY DISASSEMBLY & OPCODES</span>
          <span className="text-cyan-400">BPE Instruction Encoding</span>
        </div>
        <div className="bg-dark-950 p-3 rounded-xl text-[10px] text-slate-300 font-mono space-y-1.5 border border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">0x0040102A:</span>
              <span className="text-cyan-400 font-semibold">MOV EAX, [ESP+4]</span>
            </div>
            <span className="text-slate-500">Token: 1042</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">0x0040102F:</span>
              <span className="text-cyan-300 font-semibold">CALL CryptAcquireContextW</span>
            </div>
            <span className="text-cyan-400 font-bold">ATTENTION: 0.94</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">0x00401034:</span>
              <span className="text-slate-300 font-semibold">CALL CryptGenRandom</span>
            </div>
            <span className="text-emerald-400 font-bold">KEY_GEN FLOW</span>
          </div>
        </div>
      </div>

      {/* Model Attention & Classification Breakdown */}
      <div className="grid grid-cols-2 gap-2.5 text-[11px]">
        <div className="p-3 rounded-2xl bg-dark-900 border border-cyan-500/20">
          <span className="text-slate-400 block text-[10px]">PREDICTED STRAIN</span>
          <span className="text-cyan-300 font-bold text-base font-editorial">Ransomware Strain</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">High Attention Activation</span>
        </div>
        <div className="p-3 rounded-2xl bg-dark-900 border border-cyan-500/20">
          <span className="text-slate-400 block text-[10px]">EMBEDDING SPACE</span>
          <span className="text-white font-bold text-base font-editorial">768-Dim Latent</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">Dense Classification Head</span>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-dark-900 border border-white/10 text-[10px] text-slate-300 flex items-center justify-between">
        <span className="text-slate-400">Trained on Specialized Cybersecurity Execution Corpus</span>
        <span className="text-cyan-400 font-bold">PyTorch · CUDA</span>
      </div>
    </div>
  );
};

export const SamvaadMockup: React.FC = () => {
  return (
    <div className="w-full bg-dark-950/95 rounded-3xl border border-emerald-500/25 p-5 sm:p-6 font-mono text-xs text-slate-300 shadow-[0_0_35px_rgba(53,230,176,0.12)] space-y-4 relative overflow-hidden tech-grid">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white text-sm font-editorial block">SAMVAAD FEED CORE</span>
            <span className="text-[10px] text-emerald-400">Full-Stack Social Architecture · Modern Interface</span>
          </div>
        </div>
        <div className="text-[10px] text-cyan-300 border border-cyan-500/25 px-3 py-1 rounded-full bg-cyan-500/10 font-semibold">
          React · Vite · Node · Postgres
        </div>
      </div>

      {/* Mock Social Post Item */}
      <div className="p-4 rounded-2xl bg-dark-900 border border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-400 flex items-center justify-center font-bold text-xs text-dark-950 font-editorial">
              SG
            </div>
            <div>
              <span className="text-white font-semibold text-xs block">Swaran Gunda</span>
              <span className="text-[10px] text-slate-400">@swaran · 10m ago</span>
            </div>
          </div>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 font-semibold">
            #FullStackEngineering
          </span>
        </div>

        <p className="text-slate-300 text-[11px] leading-relaxed">
          Optimistic client updates deployed on Samvaad. UI state transitions trigger instantaneously while asynchronous workers persist relational graphs in PostgreSQL.
        </p>

        <div className="flex items-center gap-5 text-[10px] text-slate-400 pt-2 border-t border-white/5">
          <span className="flex items-center gap-1.5 text-cyan-400 cursor-pointer">
            <MessageSquare className="w-3.5 h-3.5" /> 24 Replies
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400 cursor-pointer">
            <TrendingUp className="w-3.5 h-3.5" /> 182 Impressions
          </span>
          <span className="text-slate-500 ml-auto">Indexed Query Routing</span>
        </div>
      </div>

      {/* Backend Latency Telemetry */}
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2.5 rounded-xl bg-dark-900 border border-emerald-500/20">
          <span className="text-slate-400 block">API Roundtrip:</span>
          <span className="text-emerald-400 font-bold">24ms (Express & Node.js)</span>
        </div>
        <div className="p-2.5 rounded-xl bg-dark-900 border border-cyan-500/20">
          <span className="text-slate-400 block">Client Bundle:</span>
          <span className="text-cyan-300 font-bold">Vite Tree-Shaken ESM</span>
        </div>
      </div>
    </div>
  );
};

export const LumovitaMockup: React.FC = () => {
  return (
    <div className="w-full bg-dark-950/95 rounded-3xl border border-lime-brand/25 p-5 font-mono text-xs text-slate-300 shadow-[0_0_35px_rgba(216,255,88,0.12)] space-y-4 relative overflow-hidden tech-grid">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-lime-brand/8 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-lime-brand/15 text-lime-brand">
            <Sun className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white text-sm font-editorial block">LUMOVITA HARDWARE PROTOTYPE</span>
            <span className="text-[10px] text-lime-brand">Soft Lime & Clean Medical Accents</span>
          </div>
        </div>
        <span className="text-[10px] text-lime-brand border border-lime-brand/25 px-3 py-1 rounded-full bg-lime-brand/10 font-semibold">
          Hardware Innovation
        </span>
      </div>

      {/* Device Photo & Telemetry Split */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center">
        {/* Real Device Illustration */}
        <div className="sm:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 bg-dark-900 group">
          <img
            src="/lumovita.jpg"
            alt="LUMOVITA Solar-Powered Wound Healing Device"
            className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent">
            <span className="text-[9px] font-mono text-lime-brand block font-semibold">
              // SOLAR-POWERED APPARATUS
            </span>
          </div>
        </div>

        {/* Dual Wavelength Parameters */}
        <div className="sm:col-span-7 space-y-2">
          <div className="p-2.5 rounded-xl bg-dark-900 border border-lime-brand/25 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-lime-brand font-bold text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-lime-brand shadow-[0_0_6px_#D8FF58]" />
                660 nm (Red Light)
              </span>
              <span className="text-[10px] text-white font-semibold">4.5 J/cm²</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Target: Dermal epithelialization & fibroblast cellular migration
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-dark-900 border border-emerald-500/25 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-emerald-400 font-bold text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#35E6B0]" />
                850 nm (Near-IR)
              </span>
              <span className="text-[10px] text-white font-semibold">6.0 J/cm²</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Target: Subcutaneous mitochondrial ATP regeneration
            </p>
          </div>
        </div>
      </div>

      {/* Solar Harvesting Telemetry */}
      <div className="p-3 rounded-2xl bg-dark-900 border border-white/10 space-y-1.5">
        <div className="flex justify-between text-[11px] font-semibold text-slate-300">
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-lime-brand" />
            <span>Off-Grid Solar Energy Harvesting Unit</span>
          </span>
          <span className="text-lime-brand font-bold">Autonomous Power</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-xl bg-dark-950 border border-white/5">
            <span className="text-slate-400 block text-[9px]">Battery Reserve</span>
            <span className="text-emerald-400 font-bold text-xs">94%</span>
          </div>
          <div className="p-2 rounded-xl bg-dark-950 border border-white/5">
            <span className="text-slate-400 block text-[9px]">Session Timer</span>
            <span className="text-lime-brand font-bold text-xs">15:00 min</span>
          </div>
          <div className="p-2 rounded-xl bg-dark-950 border border-white/5">
            <span className="text-slate-400 block text-[9px]">Operating Temp</span>
            <span className="text-cyan-400 font-bold text-xs">34.2 °C</span>
          </div>
        </div>
      </div>
    </div>
  );
};
