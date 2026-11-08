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
    // Camera positioned for sweeping panoramic perspective across undulating wave crests
    camera.position.set(0, 3.1, 7.2);
    camera.lookAt(0, -0.22, 0);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    container.appendChild(renderer.domElement);

    // Particle Grid Dimensions: Dense high-definition field for multiple continuous wave ribbons
    const cols = isMobile ? 90 : 164;
    const rows = isMobile ? 38 : 70;
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
    const spacingX = isMobile ? 0.28 : 0.17;
    const spacingZ = isMobile ? 0.32 : 0.21;
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

        // Progressive multi-spectral color mapping matching reference image
        const normX = i / (cols - 1);
        const particleColor = new THREE.Color();
        if (normX < 0.38) {
          // Left: Cyan to Emerald
          particleColor.lerpColors(colorCyan, colorEmerald, normX / 0.38);
        } else if (normX < 0.72) {
          // Center: Emerald to bright Electric Lime on crests
          particleColor.lerpColors(colorEmerald, colorLime, (normX - 0.38) / 0.34);
        } else {
          // Right: Electric Lime transitioning to Emerald
          particleColor.lerpColors(colorLime, colorEmerald, (normX - 0.72) / 0.28);
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
      gradient.addColorStop(0.28, 'rgba(255, 255, 255, 0.95)');
      gradient.addColorStop(0.65, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
    }
    const texture = new THREE.CanvasTexture(canvas);

    // Points material with luminous additive blending & crisp high-density size
    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.12 : 0.095,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.96,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    particleSystem.position.y = -1.0;
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

          // MULTI-HARMONIC LAYERED WAVEFORM (Multiple rolling crests & ribbons)
          // 1. Primary rolling swell (3-4 distinct crests across screen width)
          const swell = Math.sin(x * 0.76 + elapsedTime * 1.35) * 0.74;
          // 2. Transverse undulating depth ribbon (creates cascading ridges across Z depth)
          const transverseRibbon = Math.cos(z * 0.82 + x * 0.36 + elapsedTime * 1.15) * 0.58;
          // 3. Diagonal cross wave creating rich crest peaks and valleys
          const diagonalWave = Math.sin(x * 1.12 + z * 0.62 - elapsedTime * 1.7) * 0.44;
          // 4. Fine high-frequency organic ripple
          const ripple = Math.sin((x * 1.55 - z * 0.88) + elapsedTime * 2.25) * 0.22;
          // 5. Travelling luminous energy swell pulse
          const energyPulse = Math.sin(x * 0.48 - z * 0.32 - elapsedTime * 2.7) * 0.2;

          // Interactive mouse wave lift
          const distToMouse = Math.hypot(
            x - mouseInfluenceX * 8.5,
            z - mouseInfluenceY * 4.2
          );
          const mouseLift = Math.exp(-distToMouse * 0.4) * 0.65;

          const totalHeight = (swell + transverseRibbon + diagonalWave + ripple + energyPulse) * 1.12 + mouseLift;
          posArray[pIdx * 3 + 1] = totalHeight;

          // Dynamic luminous crest highlight:
          // Peak ridges dynamically light up with electric lime, while troughs have deeper mood
          const peakRatio = Math.max(0, Math.min(1, (totalHeight - 0.25) / 1.05));
          if (peakRatio > 0) {
            colArray[pIdx * 3] = baseColors[pIdx * 3] * (1 - peakRatio * 0.88) + colorLime.r * (peakRatio * 0.88);
            colArray[pIdx * 3 + 1] = baseColors[pIdx * 3 + 1] * (1 - peakRatio * 0.88) + colorLime.g * (peakRatio * 0.88);
            colArray[pIdx * 3 + 2] = baseColors[pIdx * 3 + 2] * (1 - peakRatio * 0.88) + colorLime.b * (peakRatio * 0.88);
          } else {
            const troughDim = Math.max(0.42, 1 + totalHeight * 0.28);
            colArray[pIdx * 3] = baseColors[pIdx * 3] * troughDim;
            colArray[pIdx * 3 + 1] = baseColors[pIdx * 3 + 1] * troughDim;
            colArray[pIdx * 3 + 2] = baseColors[pIdx * 3 + 2] * troughDim;
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
      className={`absolute inset-x-0 bottom-0 h-[300px] sm:h-[360px] lg:h-[430px] pointer-events-none select-none z-[2] overflow-hidden ${className}`}
    >
      {/* Top Gradient Fade to soften the wave as it reaches content */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-midnight via-midnight/50 to-transparent pointer-events-none z-10" />
      {/* Left Subtle Edge Fade */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-midnight/50 to-transparent pointer-events-none z-10" />
      {/* Bottom Gradient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-midnight to-transparent pointer-events-none z-10" />
    </div>
  );
};
