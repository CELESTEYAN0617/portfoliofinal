import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
}

const InteractiveLines: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[][]>([]);
  const animationFrameId = useRef<number>();
  const animationPoint = useRef({ x: 0, y: 0 });
  const time = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * pixelRatio;
      canvas.height = rect.height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      initGrid();
    };

    const initGrid = () => {
      const gridSize = 30;
      const cols = Math.floor(canvas.width / gridSize) + 2;
      const rows = Math.floor(canvas.height / gridSize) + 2;

      points.current = [];
      for (let i = 0; i < cols; i++) {
        const col: Point[] = [];
        for (let j = 0; j < rows; j++) {
          col.push({
            x: i * gridSize,
            y: j * gridSize,
            baseX: i * gridSize,
            baseY: j * gridSize,
            vx: 0,
            vy: 0
          });
        }
        points.current.push(col);
      }
    };

    const updateAnimationPoint = () => {
      const width = canvas.width;
      const height = canvas.height;
      time.current += 0.005;
      
      // Create a circular motion path
      const radius = Math.min(width, height) * 0.3;
      const centerX = width * 0.5;
      const centerY = height * 0.5;
      
      // Add some variety to the motion
      const baseX = centerX + Math.cos(time.current * 0.8) * radius;
      const baseY = centerY + Math.sin(time.current * 0.6) * radius;
      
      // Add secondary motion with slower speed
      animationPoint.current = {
        x: baseX + Math.sin(time.current * 1.2) * 50,
        y: baseY + Math.cos(time.current * 1.0) * 50
      };
    };

    const updatePoints = () => {
      const friction = 0.85;
      const springStrength = 0.1;
      const radius = 250;
      const strength = 0.15;

      updateAnimationPoint();

      for (let i = 0; i < points.current.length; i++) {
        for (let j = 0; j < points.current[i].length; j++) {
          const point = points.current[i][j];
          
          // Animation point influence
          const dx = animationPoint.current.x - point.x;
          const dy = animationPoint.current.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < radius) {
            const force = (1 - distance / radius) * strength;
            point.vx += dx * force;
            point.vy += dy * force;
          }

          // Spring force back to original position
          const springX = (point.baseX - point.x) * springStrength;
          const springY = (point.baseY - point.y) * springStrength;
          
          point.vx += springX;
          point.vy += springY;

          // Apply velocity with friction
          point.vx *= friction;
          point.vy *= friction;
          
          // Update position
          point.x += point.vx;
          point.y += point.vy;
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updatePoints();

      // Draw lines
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.lineWidth = 1.2;

      // Vertical lines
      for (let i = 0; i < points.current.length; i++) {
        ctx.beginPath();
        ctx.moveTo(points.current[i][0].x, points.current[i][0].y);
        
        for (let j = 1; j < points.current[i].length; j++) {
          const point = points.current[i][j];
          const prevPoint = points.current[i][j - 1];
          const xc = (point.x + prevPoint.x) / 2;
          const yc = (point.y + prevPoint.y) / 2;
          
          ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, xc, yc);
        }
        ctx.stroke();
      }

      // Horizontal lines
      for (let j = 0; j < points.current[0].length; j++) {
        ctx.beginPath();
        ctx.moveTo(points.current[0][j].x, points.current[0][j].y);
        
        for (let i = 1; i < points.current.length; i++) {
          const point = points.current[i][j];
          const prevPoint = points.current[i - 1][j];
          const xc = (point.x + prevPoint.x) / 2;
          const yc = (point.y + prevPoint.y) / 2;
          
          ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, xc, yc);
        }
        ctx.stroke();
      }

      // Draw animation point
      ctx.beginPath();
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.arc(animationPoint.current.x, animationPoint.current.y, 8, 0, Math.PI * 2);
      ctx.fill();

      // Draw glowing effect
      const gradient = ctx.createRadialGradient(
        animationPoint.current.x, 
        animationPoint.current.y, 
        0,
        animationPoint.current.x, 
        animationPoint.current.y, 
        25
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(animationPoint.current.x, animationPoint.current.y, 35, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId.current = requestAnimationFrame(animate);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        background: '#ffffff',
      }}
    />
  );
};

export default InteractiveLines;
