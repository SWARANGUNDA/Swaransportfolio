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
        className="w-[124%] sm:w-[132%] h-[124%] sm:h-[132%] max-w-[700px] max-h-[700px] -translate-y-2"
        viewBox="0 0 540 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 1. Crisp Cyan to Emerald Ring Gradient */}
          <linearGradient id="orbitGradCyanEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#36D9F5" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#D8FF58" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#35E6B0" stopOpacity="0.85" />
          </linearGradient>

          {/* 2. Luminous Golden Amber & Lime Track Gradient (Crisp, visible orbit) */}
          <linearGradient id="orbitGradGold" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#F59E0B" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#D8FF58" stopOpacity="0.85" />
          </linearGradient>

          <filter id="orbitalGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
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
            strokeWidth="1.3"
            strokeDasharray="8 14"
            opacity="0.85"
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

        {/* 2. Middle Golden-Amber Orbital Ring (Rotates Counter-Clockwise - Crisp & clearly visible track) */}
        <g className="animate-spin-reverse-slow origin-center">
          <circle
            cx="270"
            cy="270"
            r="215"
            stroke="url(#orbitGradGold)"
            strokeWidth="1.4"
            strokeDasharray="4 8"
            opacity="0.88"
          />
          {/* Glowing Satellite Node 3: Rides clearly along this crisp golden track */}
          <circle
            cx="55"
            cy="270"
            r="3.5"
            fill="#FBBF24"
            filter="url(#orbitalGlow)"
          />
          <circle cx="55" cy="270" r="1.5" fill="#FFFFFF" />

          {/* Opposite Accent Node on the same track */}
          <circle
            cx="485"
            cy="270"
            r="2.5"
            fill="#D8FF58"
            filter="url(#orbitalGlow)"
          />
        </g>

        {/* 3. Subtle Inner Guide Ring */}
        <circle
          cx="270"
          cy="270"
          r="190"
          stroke="rgba(216, 255, 88, 0.2)"
          strokeWidth="0.8"
          strokeDasharray="3 6"
        />
      </svg>
    </div>
  );
};
