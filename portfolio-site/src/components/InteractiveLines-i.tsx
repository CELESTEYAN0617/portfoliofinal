import React from 'react';
import { motion } from 'framer-motion';

const InteractiveLines: React.FC = () => {
  // Generate random positions and sizes for points
  const generateRandomPoints = (count: number) => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 70 + 20, // Random size between 20 and 50
      delay: Math.random() * 1 + 1.2,
    }));
  };

  const points = generateRandomPoints(10); // Generate 10 random points

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Horizontal Lines */}
        <motion.div
          className="absolute top-1/6 left-0 w-full h-[0.5px] sm:h-[1px] bg-black"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.div
          className="absolute top-1/3 left-0 w-full h-[0.5px] sm:h-[1px] bg-black"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-0 w-full h-[0.5px] sm:h-[1px] bg-black"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.div
          className="absolute top-2/3 left-0 w-full h-[0.5px] sm:h-[1px] bg-black"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
        <motion.div
          className="absolute top-5/6 left-0 w-full h-[0.5px] sm:h-[1px] bg-black"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        />

        {/* Vertical Lines */}
        <motion.div
          className="absolute top-0 left-1/4 w-[0.5px] sm:w-[1px] h-full bg-black"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.div
          className="absolute top-0 left-1/2 w-[0.5px] sm:w-[1px] h-full bg-black"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.div
          className="absolute top-0 left-3/4 w-[0.5px] sm:w-[1px] h-full bg-black"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Dashed Lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-[0.5px] sm:h-[1px]"
          style={{ 
            backgroundImage: 'linear-gradient(to right, black 50%, transparent 50%)',
            backgroundSize: '10px 1px',
            backgroundRepeat: 'repeat-x'
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.div
          className="absolute top-0 left-1/3 w-[0.5px] sm:w-[1px] h-full"
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, black 50%, transparent 50%)',
            backgroundSize: '1px 10px',
            backgroundRepeat: 'repeat-y'
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Random Golden Points */}
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-[#FFB800]"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: `clamp(10px, ${point.size}px, 70px)`,
              height: `clamp(10px, ${point.size}px, 70px)`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: point.delay,
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InteractiveLines;
