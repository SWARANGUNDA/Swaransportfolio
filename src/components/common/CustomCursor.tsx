import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports fine hover pointer
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseEnterInteractive = () => setIsHovered(true);
    const onMouseLeaveInteractive = () => setIsHovered(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Attach listeners to interactive elements
    const attachHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, input, textarea, select, [data-interactive="true"]');
      targets.forEach((target) => {
        target.addEventListener('mouseenter', onMouseEnterInteractive);
        target.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };

    attachHoverListeners();
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block overflow-hidden">
      {/* Outer subtle following ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-lime-brand/50 pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? 'rgba(212, 255, 50, 0.12)' : 'transparent',
          borderColor: isHovered ? '#d4ff32' : 'rgba(212, 255, 50, 0.4)',
          scale: isClicked ? 0.8 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 400,
          mass: 0.4,
        }}
      />
      {/* Center pinpoint */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-lime-brand rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 600,
          mass: 0.1,
        }}
      />
    </div>
  );
};

