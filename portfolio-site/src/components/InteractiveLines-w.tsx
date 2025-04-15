'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface InteractiveLinesProps {
  className?: string;
}

const InteractiveLines: React.FC<InteractiveLinesProps> = ({ className = '' }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.7,
      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div ref={ref} className={`relative w-full h-full pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 600"
        className="absolute inset-0"
        preserveAspectRatio="none"
      >
        {/* Glow filter definition */}
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Main cross lines - Solid */}
        <motion.path
          d="M0,0 L1000,600"
          stroke="#FF0000"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          variants={lineVariants}
          initial="hidden"
          animate={controls}
        />
        <motion.path
          d="M1000,0 L0,600"
          stroke="#FF0000"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          variants={lineVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.3 }}
        />
        
        {/* Dense diagonal lines - Dashed */}
        <motion.path
          d="M100,0 L900,600"
          stroke="#FF0000"
          strokeWidth="1"
          strokeDasharray="5,5"
          fill="none"
          filter="url(#glow)"
          variants={lineVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.4 }}
        />
        <motion.path
          d="M900,0 L100,600"
          stroke="#FF0000"
          strokeWidth="1"
          strokeDasharray="5,5"
          fill="none"
          filter="url(#glow)"
          variants={lineVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.5 }}
        />

        {/* Decorative lines - Solid */}
        <motion.path
          d="M250,0 L750,600"
          stroke="#000000"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
          variants={lineVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.6 }}
        />
        <motion.path
          d="M750,0 L250,600"
          stroke="#000000"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
          variants={lineVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.7 }}
        />

        {/* Additional dense lines - Dashed */}
        <motion.path
          d="M150,0 L850,600"
          stroke="#000000"
          strokeWidth="0.8"
          strokeDasharray="3,3"
          fill="none"
          filter="url(#glow)"
          variants={lineVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.8 }}
        />
        <motion.path
          d="M850,0 L150,600"
          stroke="#000000"
          strokeWidth="0.8"
          strokeDasharray="3,3"
          fill="none"
          filter="url(#glow)"
          variants={lineVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.9 }}
        />

        {/* Center circle - Dashed */}
        <motion.circle
          cx="500"
          cy="300"
          r="100"
          stroke="#FF0000"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          filter="url(#glow)"
          variants={lineVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 1.2 }}
        />

        {/* Concentric circles - Dashed */}
        <motion.circle
          cx="500"
          cy="300"
          r="150"
          stroke="#000000"
          strokeWidth="1"
          strokeDasharray="4,4"
          fill="none"
          filter="url(#glow)"
          variants={lineVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 1.3 }}
        />
        <motion.circle
          cx="500"
          cy="300"
          r="200"
          stroke="#FF0000"
          strokeWidth="1"
          strokeDasharray="6,6"
          fill="none"
          filter="url(#glow)"
          variants={lineVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 1.4 }}
        />
      </svg>
    </div>
  );
};

export default InteractiveLines;
