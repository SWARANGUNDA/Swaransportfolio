import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

interface NotFoundProps {
  onReturnHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-950 text-slate-100 p-6 relative overflow-hidden font-mono">
      {/* Ambient background glow */}
      <div className="absolute w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full p-8 sm:p-10 rounded-3xl bg-dark-900 border border-white/10 text-center space-y-6 shadow-2xl relative z-10"
      >
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs text-rose-400 tracking-widest uppercase">
            // ERROR CODE: 404_LATENT_SPACE_MISSING
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-black text-white">
            Node Not Found.
          </h1>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            The requested architectural vector or route does not exist in this neural deployment.
          </p>
        </div>

        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={onReturnHome}
            className="px-6 py-3 rounded-xl bg-lime-brand text-dark-950 font-semibold text-xs flex items-center gap-2 hover:bg-lime-hover transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

