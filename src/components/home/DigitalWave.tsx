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
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 4.2, 8.5);
    camera.lookAt(0, -0.5, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    container.appendChild(renderer.domElement);

    // Particle Grid Dimensions
    const cols = isMobile ? 50 : 90;
    const rows = isMobile ? 30 : 55;
    const numParticles = cols * rows;

    const positions = new Float32Array(numParticles * 3);
    const colors = new Float32Array(numParticles * 3);
    const originalY = new Float32Array(numParticles);

    // Color definitions from design system
    const colorCyan = new THREE.Color('#36D9F5');
    const colorEmerald = new THREE.Color('#35E6B0');
    const colorLime = new THREE.Color('#D8FF58');

    // Populate initial grid coordinates
    const spacingX = isMobile ? 0.35 : 0.28;
    const spacingZ = isMobile ? 0.35 : 0.26;
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

        // Color interpolation based on position
        const t = (i / cols + j / rows) * 0.5;
        const particleColor = new THREE.Color();
        if (t < 0.5) {
          particleColor.lerpColors(colorCyan, colorEmerald, t * 2);
        } else {
          particleColor.lerpColors(colorEmerald, colorLime, (t - 0.5) * 2);
        }

        colors[idx * 3] = particleColor.r;
        colors[idx * 3 + 1] = particleColor.g;
        colors[idx * 3 + 2] = particleColor.b;

        idx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(54, 217, 245, 0.85)');
      gradient.addColorStop(0.7, 'rgba(53, 230, 176, 0.35)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.18 : 0.14,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    particleSystem.position.y = -1.8;
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
      const posArray = posAttr.array as Float32Array;

      // Smooth mouse follow
      mouseInfluenceX += (mouseTargetRef.current.x - mouseInfluenceX) * 0.05;
      mouseInfluenceY += (mouseTargetRef.current.y - mouseInfluenceY) * 0.05;

      let pIdx = 0;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = posArray[pIdx * 3];
          const z = posArray[pIdx * 3 + 2];

          // Compound procedural undulating waves
          const wave1 = Math.sin(x * 0.45 + elapsedTime * 1.8) * 0.45;
          const wave2 = Math.cos(z * 0.55 + elapsedTime * 1.4) * 0.35;
          const wave3 = Math.sin((x + z) * 0.3 + elapsedTime * 2.2) * 0.25;

          // Interactive mouse wave lift
          const distToMouse = Math.hypot(
            x - mouseInfluenceX * 8,
            z - mouseInfluenceY * 4
          );
          const mouseLift = Math.exp(-distToMouse * 0.4) * 0.6;

          posArray[pIdx * 3 + 1] = wave1 + wave2 + wave3 + mouseLift;

          pIdx++;
        }
      }

      posAttr.needsUpdate = true;

      // Slight global tilt following mouse
      particleSystem.rotation.y = mouseInfluenceX * 0.08;
      particleSystem.rotation.x = mouseInfluenceY * 0.04;

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
      className={`absolute inset-x-0 bottom-0 h-[380px] sm:h-[440px] lg:h-[500px] pointer-events-none select-none z-0 overflow-hidden ${className}`}
    >
      {/* Top Gradient Fade to prevent wave from obscuring main text */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-midnight via-midnight/60 to-transparent pointer-events-none z-10" />
      {/* Bottom Gradient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-midnight to-transparent pointer-events-none z-10" />
    </div>
  );
};
