import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Circle {
  x: number;
  y: number;
  size: number;
}

interface Line {
  x: number;
  y: number;
  angle: number;
  length: number;
}

interface Elements {
  circles: Circle[];
  lines: Line[];
}

const InteractiveLines: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate completely random positions and sizes
  const generateElements = (): Elements => {
    const elements: Elements = {
      circles: [],
      lines: []
    };

    // Generate 8 random circles
    for (let i = 0; i < 8; i++) {
      elements.circles.push({
        x: 10 + Math.random() * 80, // Random position between 10-90%
        y: 10 + Math.random() * 80,
        size: 20 + Math.random() * 180 // Random size between 20-200px
      });
    }

    // Generate 12 random lines
    for (let i = 0; i < 12; i++) {
      elements.lines.push({
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        angle: Math.random() * 360,
        length: 50 + Math.random() * 150 // Random length between 50-200px
      });
    }

    return elements;
  };

  const { circles, lines } = generateElements();

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: (clientX / window.innerWidth) * 100,
      y: (clientY / window.innerHeight) * 100
    });
  };

  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Circles */}
        {circles.map((circle, index) => {
          const distance = Math.sqrt(
            Math.pow(circle.x - mousePosition.x, 2) + 
            Math.pow(circle.y - mousePosition.y, 2)
          );
          const scale = Math.max(0.5, 1.5 - distance / 30);

          return (
            <motion.div
              key={`circle-${index}`}
              className="absolute rounded-full"
              style={{
                left: `${circle.x}%`,
                top: `${circle.y}%`,
                width: `${circle.size}px`,
                height: `${circle.size}px`,
                background: 'radial-gradient(circle, #8BE644, rgba(139, 230, 68, 0.6))',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 30px rgba(139, 230, 68, 0.8)',
              }}
              initial={{ scale: 0 }}
              animate={{ 
                scale: scale,
                rotate: Math.sin(Date.now() * 0.001 + index) * 360,
                y: Math.sin(Date.now() * 0.002 + index) * (20 + Math.random() * 10),
              }}
              transition={{
                duration: 0.3 + Math.random() * 0.2,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Lines */}
        {lines.map((line, index) => {
          const distance = Math.sqrt(
            Math.pow(line.x - mousePosition.x, 2) + 
            Math.pow(line.y - mousePosition.y, 2)
          );
          const scale = Math.max(0.5, 1.5 - distance / 30);

          return (
            <motion.div
              key={`line-${index}`}
              className="absolute origin-left"
              style={{
                left: `${line.x}%`,
                top: `${line.y}%`,
                width: `${line.length}px`,
                height: `${1 + Math.random() * 4}px`, // Random thickness between 1-5px
                background: 'linear-gradient(to right, #8BE644, rgba(139, 230, 68, 0.6))',
                transform: `rotate(${line.angle}deg)`,
                transformOrigin: '0 50%',
                boxShadow: '0 0 20px rgba(139, 230, 68, 0.8)',
              }}
              initial={{ scaleX: 0 }}
              animate={{ 
                scaleX: scale,
                rotate: line.angle + Math.sin(Date.now() * 0.001 + index) * (5 + Math.random() * 5),
                y: Math.sin(Date.now() * 0.002 + index) * (10 + Math.random() * 5),
              }}
              transition={{
                duration: 0.3 + Math.random() * 0.2,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Mouse Trail */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(139, 230, 68, 0.3), transparent 70%)',
            boxShadow: '0 0 40px rgba(139, 230, 68, 0.3)',
          }}
          animate={{
            x: mousePosition.x * window.innerWidth / 100 - 75,
            y: mousePosition.y * window.innerHeight / 100 - 75,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            type: "spring", 
            stiffness: 50, 
            damping: 20,
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </motion.div>
    </div>
  );
};

export default InteractiveLines;
