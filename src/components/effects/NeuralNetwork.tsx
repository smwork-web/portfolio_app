import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Node {
  x: number;
  y: number;
  connections: number[];
}

export const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodes = useRef<Node[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    // Initialize nodes
    const initNodes = () => {
      nodes.current = Array.from({ length: 20 }, (_, i) => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        connections: Array.from({ length: 3 }, () => 
          Math.floor(Math.random() * 20)
        ),
      }));
    };

    const drawNetwork = (time: number) => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Draw connections
      nodes.current.forEach((node, i) => {
        node.connections.forEach(targetIndex => {
          const target = nodes.current[targetIndex];
          const gradient = ctx.createLinearGradient(
            node.x, node.y, target.x, target.y
          );
          
          gradient.addColorStop(0, 'rgba(66, 153, 225, 0.1)');
          gradient.addColorStop(1, 'rgba(147, 51, 234, 0.1)');
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.current.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(66, 153, 225, 0.5)';
        ctx.fill();
      });

      // Animate nodes
      nodes.current = nodes.current.map(node => ({
        ...node,
        x: node.x + Math.sin(time * 0.001 + node.y * 0.1) * 0.5,
        y: node.y + Math.cos(time * 0.001 + node.x * 0.1) * 0.5,
      }));

      animationFrameId.current = requestAnimationFrame(drawNetwork);
    };

    resizeCanvas();
    initNodes();
    drawNetwork(0);

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};