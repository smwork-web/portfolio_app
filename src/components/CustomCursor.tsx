import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{ type: "spring", mass: 0.2, stiffness: 100 }}
    >
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 rounded-full border-2 border-white" />
        <div className="absolute inset-2 rounded-full bg-white opacity-30" />
        {isPointer && (
          <div className="absolute inset-0 rounded-full border-2 border-white animate-ping" />
        )}
      </div>
    </motion.div>
  );
};