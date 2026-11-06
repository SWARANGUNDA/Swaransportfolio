import React from 'react';
import { motion } from 'framer-motion';

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
        transform: `translate(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px)`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      <svg
        className="w-[125%] h-[125%] max-w-[620px] max-h-[620px]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Golden-Amber & Cyan Ring Gradient */}
          <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#36D9F5" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#D8FF58" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#35E6B0" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#EF4444" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#36D9F5" stopOpacity="0.2" />
          </linearGradient>

          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Tech Ring with Dashes (Rotates Clockwise) */}
        <g className="animate-spin-slow origin-center">
          <circle
            cx="250"
            cy="250"
            r="215"
            stroke="url(#ringGrad1)"
            strokeWidth="1.2"
            strokeDasharray="6 14"
            opacity="0.65"
          />
          {/* Orbital Satellite Node 1 */}
          <circle
            cx="250"
            cy="35"
            r="3.5"
            fill="#36D9F5"
            filter="url(#nodeGlow)"
          />
          <circle cx="250" cy="35" r="1.5" fill="#FFFFFF" />

          {/* Orbital Satellite Node 2 */}
          <circle
            cx="465"
            cy="250"
            r="2.5"
            fill="#D8FF58"
            filter="url(#nodeGlow)"
          />
        </g>

        {/* Middle Fine Ring with Golden-Orange Tone (Rotates Counter-Clockwise) */}
        <g className="animate-spin-reverse-slow origin-center">
          <circle
            cx="250"
            cy="250"
            r="185"
            stroke="url(#ringGrad2)"
            strokeWidth="1"
            strokeDasharray="2 8"
            opacity="0.5"
          />
          {/* Orbital Satellite Node 3 */}
          <circle
            cx="65"
            cy="250"
            r="3"
            fill="#F59E0B"
            filter="url(#nodeGlow)"
          />
        </g>

        {/* Inner Subtle Guide Ring */}
        <circle
          cx="250"
          cy="250"
          r="155"
          stroke="rgba(54, 217, 245, 0.12)"
          strokeWidth="0.8"
        />

        {/* Technical Coordinate Crosshairs & Markers */}
        <line
          x1="250"
          y1="10"
          x2="250"
          y2="24"
          stroke="#36D9F5"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <line
          x1="250"
          y1="476"
          x2="250"
          y2="490"
          stroke="#36D9F5"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <line
          x1="10"
          y1="250"
          x2="24"
          y2="250"
          stroke="#35E6B0"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <line
          x1="476"
          y1="250"
          x2="490"
          y2="250"
          stroke="#35E6B0"
          strokeWidth="1.5"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};
