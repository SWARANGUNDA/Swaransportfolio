/**
 * Global Animation Configuration & Easing Curves
 * Optimized for cinematic digital experiences (Awwwards caliber)
 */

export const TRANSITION_EASE = {
  cinematic: [0.16, 1, 0.3, 1] as const, // Smooth cubic-bezier for editorial reveal
  snappy: [0.25, 0.1, 0.25, 1] as const,
  gentle: [0.33, 1, 0.68, 1] as const,
  springy: { type: 'spring', stiffness: 260, damping: 20 },
  smoothSpring: { type: 'spring', stiffness: 120, damping: 14 },
};

export const TIMING = {
  navDelay: 0.0,
  navDuration: 0.6,
  portraitDelay: 0.3,
  portraitDuration: 1.1,
  headlineDelay: 0.7,
  actionsDelay: 1.1,
  badgesDelay: 1.3,
  waveDelay: 1.6,
};

