import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../components/css/BlobCursor.css"; // 添加新的CSS文件

const BlobCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isInBlackArea, setIsInBlackArea] = useState(false);

  useEffect(() => {
    // 添加全局样式来隐藏默认光标
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';
    
    // 添加到所有可交互元素
    const elements = document.querySelectorAll('a, button, input, [role="button"]');
    elements.forEach(el => {
      (el as HTMLElement).style.cursor = 'none';
    });
    
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // 检查是否在黑色区域
      const blackArea = document.querySelector('.bg-black');
      if (blackArea) {
        const rect = blackArea.getBoundingClientRect();
        setIsInBlackArea(
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') {
        setIsHovered(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
      elements.forEach(el => {
        (el as HTMLElement).style.cursor = 'auto';
      });
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const blobVariants = {
    default: {
      borderRadius: [
        "35% 65% 65% 35% / 35% 30% 70% 65%",
        "65% 35% 30% 70% / 65% 65% 35% 35%",
        "35% 65% 65% 35% / 65% 35% 65% 35%",
        "65% 35% 35% 65% / 35% 65% 35% 65%"
      ],
      rotate: [0, 90, 180, 270, 360],
      transition: {
        duration: 20,        // 增加动画时长
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1], // 使用 cubic-bezier 缓动函数
        times: [0, 0.25, 0.5, 0.75, 1]
      }
    },
    hover: {
      borderRadius: [
        "30% 70% 70% 30% / 30% 30% 70% 70%",
        "70% 30% 30% 70% / 70% 70% 30% 30%",
        "30% 70% 70% 30% / 70% 30% 70% 30%",
        "70% 30% 30% 70% / 30% 70% 30% 70%"
      ],
      scale: 1.2,
      rotate: [0, 90, 180, 270, 360],
      transition: {
        duration: 15,        // 悬停时稍快
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1],
        times: [0, 0.25, 0.5, 0.75, 1]
      }
    }
  };

  return (
    <>
      {/* 光标点 */}
      <div
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: isInBlackArea ? 'white' : 'black',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          top: position.y - 5,
          left: position.x - 5,
          transition: 'transform 0.1s ease'
        }}
      />

      {/* blob 效果 */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0"
        style={{ zIndex: 9998 }}
        animate={{
          x: position.x - 25,
          y: position.y - 25,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          mass: 0.8,
          restDelta: 0.001
        }}
      >
        <motion.div 
          style={{
            width: '50px',
            height: '50px',
            border: `1px solid ${isInBlackArea ? 'white' : 'black'}`,
            backgroundColor: isInBlackArea ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          }}
          initial="default"
          animate={isHovered ? "hover" : "default"}
          variants={blobVariants}
        />
        {/* 添加延迟跟随的第二个 blob */}
        <motion.div 
          style={{
            width: '50px',
            height: '50px',
            border: `1px solid ${isInBlackArea ? 'white' : 'black'}`,
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0.5,
          }}
          initial="default"
          animate={isHovered ? "hover" : "default"}
          variants={blobVariants}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 30,
            mass: 1.5,
            delay: 0.1
          }}
        />
      </motion.div>
    </>
  );
};

export default BlobCursor;
