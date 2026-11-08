import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { isTouchDevice, prefersReducedMotion } from '../../animations/animationUtils';

interface DigitalWaveProps {
  className?: string;
  mousePos?: { x: number; y: number };
}

export const DigitalWave: React.FC<DigitalWaveProps> = ({
  className = '',
  mousePos = { x: 0, y: 0 },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseTargetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    mouseTargetRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect device scale for responsive particle grid
    const isMobile = window.innerWidth < 768;
    const reducedMotion = prefersReducedMotion();

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      54,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    // Lower camera angle to create dramatic, sweeping landscape perspective
    camera.position.set(0, 3.2, 7.8);
    camera.lookAt(0, 0.35, 0);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    container.appendChild(renderer.domElement);

    // Dense High-Definition Particle Grid (Luminous flowing ribbons)
    const cols = isMobile ? 72 : 120;
    const rows = isMobile ? 36 : 64;
    const numParticles = cols * rows;

    const positions = new Float32Array(numParticles * 3);
    const colors = new Float32Array(numParticles * 3);
    const originalY = new Float32Array(numParticles);
    const baseColors = new Float32Array(numParticles * 3);

    // Vibrant design token colors
    const colorCyan = new THREE.Color('#36D9F5');
    const colorEmerald = new THREE.Color('#35E6B0');
    const colorLime = new THREE.Color('#D8FF58');

    // Populate initial grid coordinates
    const spacingX = isMobile ? 0.32 : 0.23;
    const spacingZ = isMobile ? 0.32 : 0.22;
    const offsetX = (cols * spacingX) / 2;
    const offsetZ = (rows * spacingZ) / 2;

    let idx = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacingX - offsetX;
        const z = j * spacingZ - offsetZ;
        const y = 0;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;
        originalY[idx] = y;

        // Tri-color gradient: Cyan on left, transitioning through Emerald into Lime highlights
        const t = (i / cols + j / rows) * 0.5;
        const particleColor = new THREE.Color();
        if (t < 0.45) {
          particleColor.lerpColors(colorCyan, colorEmerald, t / 0.45);
        } else {
          particleColor.lerpColors(colorEmerald, colorLime, (t - 0.45) / 0.55);
        }

        colors[idx * 3] = particleColor.r;
        colors[idx * 3 + 1] = particleColor.g;
        colors[idx * 3 + 2] = particleColor.b;

        baseColors[idx * 3] = particleColor.r;
        baseColors[idx * 3 + 1] = particleColor.g;
        baseColors[idx * 3 + 2] = particleColor.b;

        idx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // High-resolution soft-radial particle texture with luminous core
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.35, 'rgba(255, 255, 255, 0.98)');
      gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
    }
    const texture = new THREE.CanvasTexture(canvas);

    // Points material with luminous additive blending
    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.18 : 0.16,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.96,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    particleSystem.position.y = -0.7;
    scene.add(particleSystem);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    let mouseInfluenceX = 0;
    let mouseInfluenceY = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = reducedMotion ? 1 : clock.getElapsedTime() * 0.75;
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const colAttr = geometry.attributes.color as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      const colArray = colAttr.array as Float32Array;

      // Smooth mouse follow
      mouseInfluenceX += (mouseTargetRef.current.x - mouseInfluenceX) * 0.045;
      mouseInfluenceY += (mouseTargetRef.current.y - mouseInfluenceY) * 0.045;

      let pIdx = 0;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = posArray[pIdx * 3];
          const z = posArray[pIdx * 3 + 2];

          // 1. Primary dramatic rolling swell
          const swell = Math.sin(x * 0.32 + elapsedTime * 1.3) * 1.25;
          // 2. High cross-wave creating elevated ridges
          const ridges = Math.cos(z * 0.36 + elapsedTime * 1.0) * 0.95;
          // 3. Dynamic organic undulation
          const ripple = Math.sin((x * 0.65 + z * 0.45) * 0.32 + elapsedTime * 1.6) * 0.5;
          // 4. Travelling luminous crest surge
          const crestPulse = Math.sin(x * 0.24 - elapsedTime * 2.0) * 0.38;

          // Interactive mouse wave lift
          const distToMouse = Math.hypot(
            x - mouseInfluenceX * 7.5,
            z - mouseInfluenceY * 3.8
          );
          const mouseLift = Math.exp(-distToMouse * 0.42) * 0.8;

          const totalHeight = swell + ridges + ripple + crestPulse + mouseLift;
          posArray[pIdx * 3 + 1] = totalHeight;

          // Luminous crest highlight: Peak vertices dynamically glow with electric lime
          const peakRatio = Math.max(0, Math.min(1, (totalHeight - 0.4) / 1.5));
          if (peakRatio > 0) {
            colArray[pIdx * 3] = baseColors[pIdx * 3] * (1 - peakRatio) + colorLime.r * peakRatio;
            colArray[pIdx * 3 + 1] = baseColors[pIdx * 3 + 1] * (1 - peakRatio) + colorLime.g * peakRatio;
            colArray[pIdx * 3 + 2] = baseColors[pIdx * 3 + 2] * (1 - peakRatio) + colorLime.b * peakRatio;
          } else {
            colArray[pIdx * 3] = baseColors[pIdx * 3];
            colArray[pIdx * 3 + 1] = baseColors[pIdx * 3 + 1];
            colArray[pIdx * 3 + 2] = baseColors[pIdx * 3 + 2];
          }

          pIdx++;
        }
      }

      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      // Subtle global tilt following mouse
      particleSystem.rotation.y = mouseInfluenceX * 0.07;
      particleSystem.rotation.x = mouseInfluenceY * 0.035;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Clean up Three.js resources on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-x-0 bottom-0 h-[380px] sm:h-[450px] lg:h-[520px] xl:h-[560px] pointer-events-none select-none z-[2] overflow-hidden ${className}`}
    >
      {/* Soft top fade so luminous crest peaks remain brilliant */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-midnight/70 to-transparent pointer-events-none z-10" />
      {/* Subtle edge fade */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-midnight/50 to-transparent pointer-events-none z-10" />
      {/* Bottom Gradient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-midnight to-transparent pointer-events-none z-10" />
    </div>
  );
};
