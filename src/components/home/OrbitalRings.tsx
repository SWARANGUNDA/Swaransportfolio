import React from 'react';

interface OrbitalRingsProps {
  parallaxOffset?: { x: number; y: number };
}

export const OrbitalRings: React.FC<OrbitalRingsProps> = ({
  parallaxOffset = { x: 0, y: 0 },
}) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none flex items-center justify-center select-none"
      style={{
        transform: `translate(${parallaxOffset.x * 0.3}px, ${parallaxOffset.y * 0.3}px)`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      <svg
        className="w-[126%] sm:w-[134%] h-[126%] sm:h-[134%] max-w-[720px] max-h-[720px] -translate-y-4"
        viewBox="0 0 540 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Crisp Cyan to Emerald Ring Gradient */}
          <linearGradient id="orbitGradCyanEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#36D9F5" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#D8FF58" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#35E6B0" stopOpacity="0.75" />
          </linearGradient>

          {/* Golden Amber & Red Ambient Ring Gradient */}
          <linearGradient id="orbitGradGoldRed" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#EF4444" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#36D9F5" stopOpacity="0.35" />
          </linearGradient>

          <filter id="orbitalGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Outer Technical Orbit Ring (Rotates Clockwise) */}
        <g className="animate-spin-slow origin-center">
          <circle
            cx="270"
            cy="270"
            r="240"
            stroke="url(#orbitGradCyanEmerald)"
            strokeWidth="1.2"
            strokeDasharray="8 16"
            opacity="0.8"
          />
          {/* Glowing Satellite Node 1 (Top) */}
          <circle
            cx="270"
            cy="30"
            r="3.5"
            fill="#36D9F5"
            filter="url(#orbitalGlow)"
          />
          <circle cx="270" cy="30" r="1.5" fill="#FFFFFF" />

          {/* Glowing Satellite Node 2 (Right) */}
          <circle
            cx="510"
            cy="270"
            r="3"
            fill="#D8FF58"
            filter="url(#orbitalGlow)"
          />
        </g>

        {/* 2. Middle Fine Tech Ring (Rotates Counter-Clockwise) */}
        <g className="animate-spin-reverse-slow origin-center">
          <circle
            cx="270"
            cy="270"
            r="205"
            stroke="url(#orbitGradGoldRed)"
            strokeWidth="1"
            strokeDasharray="3 10"
            opacity="0.65"
          />
          {/* Glowing Satellite Node 3 (Left) */}
          <circle
            cx="65"
            cy="270"
            r="3"
            fill="#F59E0B"
            filter="url(#orbitalGlow)"
          />
          <circle cx="65" cy="270" r="1.2" fill="#FFFFFF" />
        </g>

        {/* 3. Subtle Inner Guide Ring */}
        <circle
          cx="270"
          cy="270"
          r="170"
          stroke="rgba(54, 217, 245, 0.2)"
          strokeWidth="0.8"
          strokeDasharray="2 6"
        />

        {/* Technical Coordinate Tick Marks */}
        <line x1="270" y1="8" x2="270" y2="22" stroke="#36D9F5" strokeWidth="1.5" opacity="0.7" />
        <line x1="270" y1="518" x2="270" y2="532" stroke="#36D9F5" strokeWidth="1.5" opacity="0.7" />
        <line x1="8" y1="270" x2="22" y2="270" stroke="#35E6B0" strokeWidth="1.5" opacity="0.7" />
        <line x1="518" y1="270" x2="532" y2="270" stroke="#35E6B0" strokeWidth="1.5" opacity="0.7" />
      </svg>
    </div>
  );
};
