import React, { useEffect, useRef } from 'react';
import { isTouchDevice, prefersReducedMotion } from '../../animations/animationUtils';

export const IntroReactiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const isTouch = isTouchDevice();
    const isReduced = prefersReducedMotion();

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates (interpolated for smooth delayed tracking)
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      lastMoveX: width / 2,
      lastMoveY: height / 2,
      active: false,
      opacity: 0,
    };

    // Parallax offset
    let parallax = { x: 0, y: 0 };

    // Device-dependent particle count
    const isTablet = width >= 768 && width < 1024;
    const isMobile = width < 768;
    const particleCount = isMobile ? 22 : isTablet ? 36 : 56;

    // Colors
    const colors = ['#36D9F5', '#35E6B0', '#D8FF58'];

    interface Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
      pulseVal: number;
    }

    const particles: Particle[] = [];

    // Initialize particles across viewport
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.4 + 1.1,
        color: colors[Math.random() > 0.85 ? 2 : Math.random() > 0.45 ? 1 : 0],
        alpha: Math.random() * 0.45 + 0.35,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseVal: Math.random() * Math.PI * 2,
      });
    }

    // Cursor Trail Sparks
    interface TrailSpark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      life: number;
    }

    const trailSparks: TrailSpark[] = [];

    // Energy Field Ripples
    interface EnergyRipple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      color: string;
    }

    const ripples: EnergyRipple[] = [];
    let lastRippleTime = 0;

    // Mouse Listeners (Desktop only)
    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      const distMoved = Math.hypot(e.clientX - mouse.lastMoveX, e.clientY - mouse.lastMoveY);

      // Spawn subtle cursor trail sparks (rate-limited)
      if (distMoved > 9 && trailSparks.length < 18 && !isReduced) {
        trailSparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 1.5 + 1.0,
          color: Math.random() > 0.5 ? '#36D9F5' : '#35E6B0',
          life: 1.0,
        });
        mouse.lastMoveX = e.clientX;
        mouse.lastMoveY = e.clientY;

        // Subtle digital energy ripple on cursor movement
        const now = performance.now();
        if (now - lastRippleTime > 320 && ripples.length < 3) {
          ripples.push({
            x: e.clientX,
            y: e.clientY,
            radius: 12,
            maxRadius: 110,
            alpha: 0.16,
            color: '#36D9F5',
          });
          lastRippleTime = now;
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    if (!isTouch) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    // Resize Handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Page Visibility to pause rendering loop when hidden
    let isPageVisible = true;
    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Animation Loop
    let animationFrameId: number;

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isPageVisible) return;

      ctx.clearRect(0, 0, width, height);

      // 1. Smooth mouse coordinate interpolation (Delayed tracking)
      if (!isTouch && !isReduced) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
        mouse.opacity += ((mouse.active ? 1 : 0) - mouse.opacity) * 0.05;

        // Background Parallax calculation
        parallax.x += ((mouse.x - width / 2) * 0.02 - parallax.x) * 0.05;
        parallax.y += ((mouse.y - height / 2) * 0.02 - parallax.y) * 0.05;
      }

      // 2. Interactive Cursor Spotlight (Cyan & Emerald with electric-lime rim)
      if (mouse.opacity > 0.01 && !isTouch && !isReduced) {
        const spotlightRadius = Math.min(width, height) * 0.38;
        const spotGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          spotlightRadius
        );

        spotGrad.addColorStop(0, `rgba(54, 217, 245, ${0.11 * mouse.opacity})`);
        spotGrad.addColorStop(0.35, `rgba(53, 230, 176, ${0.06 * mouse.opacity})`);
        spotGrad.addColorStop(0.7, `rgba(216, 255, 88, ${0.02 * mouse.opacity})`);
        spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, spotlightRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Subtle Digital Energy Field Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 1.8;
        r.alpha *= 0.94;

        if (r.alpha <= 0.005 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.strokeStyle = `rgba(54, 217, 245, ${r.alpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // 4. Update & Render Particle Network
      const connectionDist = isMobile ? 85 : 115;
      const repulsionRadius = 135;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Ambient gentle drift
        p.pulseVal += p.pulseSpeed;
        p.baseX += p.vx;
        p.baseY += p.vy;

        // Wrap around bounds softly
        if (p.baseX < -20) p.baseX = width + 20;
        if (p.baseX > width + 20) p.baseX = -20;
        if (p.baseY < -20) p.baseY = height + 20;
        if (p.baseY > height + 20) p.baseY = -20;

        // Mouse Repulsion Physics (Smooth fluid displacement & return)
        if (!isTouch && !isReduced && mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < repulsionRadius && dist > 0.1) {
            const force = (repulsionRadius - dist) / repulsionRadius;
            p.x += (dx / dist) * force * 4.2;
            p.y += (dy / dist) * force * 4.2;
          }
        }

        // Smooth spring return to equilibrium
        p.x += (p.baseX + parallax.x - p.x) * 0.06;
        p.y += (p.baseY + parallax.y - p.y) * 0.06;

        // Particle drawing
        const currentAlpha = p.alpha + Math.sin(p.pulseVal) * 0.15;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.15, Math.min(0.9, currentAlpha));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connecting lines to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < connectionDist) {
            const lineAlpha = (1 - dist / connectionDist) * 0.18;
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;

      // 5. Subtle Particle Cursor Trail (Sparks fading naturally)
      for (let i = trailSparks.length - 1; i >= 0; i--) {
        const spark = trailSparks[i];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.life -= 0.038;

        if (spark.life <= 0) {
          trailSparks.splice(i, 1);
          continue;
        }

        ctx.fillStyle = spark.color;
        ctx.globalAlpha = spark.life * 0.6;
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.radius * spark.life, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
    };

    render();

    // Clean up on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (!isTouch) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 select-none"
    />
  );
};

