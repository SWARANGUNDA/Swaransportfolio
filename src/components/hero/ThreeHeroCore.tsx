import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCw, Box, Orbit, Cpu, Eye } from 'lucide-react';

export const ThreeHeroCore: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [currentMode, setCurrentMode] = useState<'neural' | 'torus' | 'particles'>('neural');
  const [isWireframe, setIsWireframe] = useState(true);
  const [polyCount, setPolyCount] = useState(1280);

  // References for scene mutation
  const sceneRef = useRef<THREE.Scene | null>(null);
  const coreGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const innerMeshRef = useRef<THREE.Mesh | null>(null);
  const outerMeshRef = useRef<THREE.Mesh | null>(null);
  const pointLight1Ref = useRef<THREE.PointLight | null>(null);
  const pointLight2Ref = useRef<THREE.PointLight | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Multi-Chromatic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const lightCyan = new THREE.PointLight(0x00f5ff, 50, 50);
    lightCyan.position.set(4, 3, 4);
    scene.add(lightCyan);
    pointLight1Ref.current = lightCyan;

    const lightPink = new THREE.PointLight(0xff007a, 50, 50);
    lightPink.position.set(-4, -3, 3);
    scene.add(lightPink);
    pointLight2Ref.current = lightPink;

    const lightGold = new THREE.PointLight(0xfbbf24, 30, 50);
    lightGold.position.set(0, 4, -2);
    scene.add(lightGold);

    const lightLime = new THREE.PointLight(0xd4ff32, 35, 50);
    lightLime.position.set(0, -4, 2);
    scene.add(lightLime);

    // 3. Central 3D Group
    const group = new THREE.Group();
    scene.add(group);
    coreGroupRef.current = group;

    // Build Initial Geometries based on mode
    const buildGeometries = (mode: 'neural' | 'torus' | 'particles', wireframe: boolean) => {
      // Clear existing children from group
      while (group.children.length > 0) {
        const obj = group.children[0];
        group.remove(obj);
        if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose();
      }

      if (mode === 'neural') {
        // Outer Icosahedron
        const outerGeo = new THREE.IcosahedronGeometry(1.6, 2);
        const outerMat = new THREE.MeshStandardMaterial({
          color: 0x00f5ff,
          wireframe: wireframe,
          roughness: 0.2,
          metalness: 0.8,
          emissive: 0x003344,
          emissiveIntensity: 0.3,
        });
        const outerMesh = new THREE.Mesh(outerGeo, outerMat);
        group.add(outerMesh);
        outerMeshRef.current = outerMesh;

        // Inner Polyhedron
        const innerGeo = new THREE.OctahedronGeometry(0.9, 1);
        const innerMat = new THREE.MeshStandardMaterial({
          color: 0xff007a,
          wireframe: wireframe,
          roughness: 0.1,
          metalness: 0.9,
          emissive: 0x330018,
          emissiveIntensity: 0.4,
        });
        const innerMesh = new THREE.Mesh(innerGeo, innerMat);
        group.add(innerMesh);
        innerMeshRef.current = innerMesh;

        setPolyCount(outerGeo.attributes.position.count + innerGeo.attributes.position.count);
      } else if (mode === 'torus') {
        // Torus Knot
        const torusGeo = new THREE.TorusKnotGeometry(1.1, 0.32, 128, 32);
        const torusMat = new THREE.MeshStandardMaterial({
          color: 0x8b5cf6,
          wireframe: wireframe,
          roughness: 0.15,
          metalness: 0.85,
          emissive: 0x1f0b4a,
          emissiveIntensity: 0.5,
        });
        const torusMesh = new THREE.Mesh(torusGeo, torusMat);
        group.add(torusMesh);
        outerMeshRef.current = torusMesh;
        setPolyCount(torusGeo.attributes.position.count);
      } else {
        // Deep Particle Sphere
        const sphereGeo = new THREE.SphereGeometry(1.5, 32, 32);
        const sphereMat = new THREE.MeshStandardMaterial({
          color: 0x00ff87,
          wireframe: wireframe,
          roughness: 0.3,
          metalness: 0.7,
          emissive: 0x003318,
          emissiveIntensity: 0.4,
        });
        const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
        group.add(sphereMesh);
        outerMeshRef.current = sphereMesh;
        setPolyCount(sphereGeo.attributes.position.count);
      }

      // Add Orbiting Halo Rings
      const ringGeo = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xd4ff32 });
      const ring1 = new THREE.Mesh(ringGeo, ringMat);
      ring1.rotation.x = Math.PI / 3;
      group.add(ring1);

      const ring2Geo = new THREE.TorusGeometry(2.3, 0.015, 16, 100);
      const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x00f5ff });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.y = Math.PI / 4;
      group.add(ring2);
    };

    buildGeometries(currentMode, isWireframe);

    // 4. Background 3D Particle Cloud
    const particleCount = 600;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x00f5ff), // Cyan
      new THREE.Color(0xff007a), // Magenta
      new THREE.Color(0xd4ff32), // Lime
      new THREE.Color(0x8b5cf6), // Violet
      new THREE.Color(0xfbbf24), // Gold
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 5. Mouse Interaction with Inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / width - 0.5;
      const normY = (e.clientY - rect.top) / height - 0.5;

      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        group.rotation.y += deltaX * 0.01;
        group.rotation.x += deltaY * 0.01;
        prevMousePos = { x: e.clientX, y: e.clientY };
      } else {
        targetX = normX * 1.5;
        targetY = normY * 1.5;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // 6. Animation Loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera lag
      if (!isDragging) {
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;
        group.rotation.y += 0.006;
        group.rotation.x = mouseY * 0.5;
        group.rotation.z = mouseX * 0.3;
      }

      // Rotate particle cloud opposite direction
      if (particlesRef.current) {
        particlesRef.current.rotation.y = -elapsedTime * 0.04;
        particlesRef.current.rotation.x = Math.sin(elapsedTime * 0.1) * 0.05;
      }

      // Counter-rotate inner mesh if present
      if (innerMeshRef.current) {
        innerMeshRef.current.rotation.x = elapsedTime * 0.8;
        innerMeshRef.current.rotation.y = -elapsedTime * 0.6;
      }

      // Orbit point lights around core for dynamic specular reflections
      if (pointLight1Ref.current) {
        pointLight1Ref.current.position.x = Math.sin(elapsedTime) * 4;
        pointLight1Ref.current.position.z = Math.cos(elapsedTime) * 4;
      }
      if (pointLight2Ref.current) {
        pointLight2Ref.current.position.x = -Math.sin(elapsedTime * 0.8) * 4;
        pointLight2Ref.current.position.y = Math.cos(elapsedTime * 0.8) * 3;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [currentMode, isWireframe]);

  return (
    <div className="relative w-full max-w-[540px] aspect-square mx-auto flex flex-col items-center justify-center p-3 select-none">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing relative"
      >
        {/* Floating Controls HUD Overlay */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-auto">
          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-900/80 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono text-cyan-400 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold tracking-wider">WEBGL 3D ACTIVE</span>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center gap-1.5 bg-dark-950/80 backdrop-blur-md p-1 rounded-xl border border-white/10 font-mono text-[10px]">
            <button
              onClick={() => setCurrentMode('neural')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                currentMode === 'neural'
                  ? 'bg-gradient-to-r from-cyan-500 to-lime-brand text-dark-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              NEURAL
            </button>
            <button
              onClick={() => setCurrentMode('torus')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                currentMode === 'torus'
                  ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              KNOT
            </button>
            <button
              onClick={() => setCurrentMode('particles')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                currentMode === 'particles'
                  ? 'bg-gradient-to-r from-emerald-400 to-cyan-500 text-dark-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              SPHERE
            </button>
          </div>
        </div>

        {/* Bottom Floating Telemetry Bar */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-auto bg-dark-900/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 text-[11px] font-mono text-slate-300">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsWireframe(!isWireframe)}
              className="flex items-center gap-1.5 text-xs text-lime-brand hover:underline font-semibold"
            >
              <Box className="w-3.5 h-3.5" />
              <span>{isWireframe ? 'SOLID' : 'WIREFRAME'}</span>
            </button>
            <span className="text-white/20">|</span>
            <span className="text-slate-400">Drag to spin 3D</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-500">Verts:</span>
            <span className="text-cyan-400 font-bold">{polyCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

