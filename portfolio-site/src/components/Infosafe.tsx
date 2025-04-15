import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "./Header";
import InteractiveLines from "./InteractiveLines-i";
import Footer from "./Footer";

const Infosafe: React.FC = () => {
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 400], [0, -200]);
  const xSpring = useSpring(scrollX, { stiffness: 100, damping: 30 });
  const heroRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToProjects = () => {
    window.location.href = '/all-projects';
  };

  useEffect(() => {
    console.log('Infosafe component mounted');
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let isHovering = false;
    let mouseX = 0;
    let mouseY = 0;
    let points: { x: number; y: number }[] = [];
    const maxPoints = 20;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      // Add new point
      points.push({ x: mouseX, y: mouseY });
      
      // Keep only the last maxPoints points
      if (points.length > maxPoints) {
        points.shift();
      }
    };

    const handleMouseEnter = () => {
      isHovering = true;
      points = [];
    };

    const handleMouseLeave = () => {
      isHovering = false;
      points = [];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const drawGlowingLine = () => {
      if (!isHovering || points.length < 2) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the main line
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = '#FFB800';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw glow effect
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = '#FFB800';
      ctx.shadowColor = '#FFB800';
      ctx.shadowBlur = 15;
      ctx.lineWidth = 1;
      ctx.stroke();

      requestAnimationFrame(drawGlowingLine);
    };

    drawGlowingLine();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F4F1EC]">
      <Header />
      <motion.section 
        ref={heroRef}
        className="relative w-full min-h-[100vh] h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <InteractiveLines />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative z-20 translate-y-50"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.img 
              src="/card2.png" 
              alt="Infosafe" 
              className="w-80 h-auto"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              onError={(e) => {
                console.error('Error loading image:', e);
                e.currentTarget.src = '/placeholder.png';
              }}
            />
          </motion.div>
        </div>
        <motion.h1
          className="relative z-10 text-[40vw] md:text-[35vw] lg:text-[30vw] font-serif font-bold text-right mt-[45vh] md:mt-[25vh] pr-[5vw] whitespace-nowrap"
          style={{ x: xSpring }}
        >
          INFOSAFE
        </motion.h1>
      </motion.section>
      
      {/* Gradient Section */}
      <motion.section 
        className="relative w-full h-[600px] bg-gradient-to-b from-[#FFB800] via-[#F4F1EC] via-[#F4F1EC] via-[#F4F1EC] via-[#F4F1EC] to-[#F4F1EC] py-10 px-8 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Mouse drawing effect */}
        <div 
          className="absolute inset-0 cursor-crosshair z-30"
          onMouseMove={(e) => {
            const lastSquare = e.currentTarget.lastElementChild;
            if (lastSquare) {
              const lastRect = lastSquare.getBoundingClientRect();
              const distance = Math.sqrt(
                Math.pow(e.clientX - lastRect.left, 2) + 
                Math.pow(e.clientY - lastRect.top, 2)
              );

              // Only create new square if distance is greater than 20px
              if (distance < 20) return;
            }

            const square = document.createElement('div');
            square.className = 'absolute w-2 h-2 bg-[#FFB800] z-30';
            square.style.left = `${e.clientX}px`;
            square.style.top = `${e.clientY}px`;
            square.style.boxShadow = '0 0 10px #FFB800, 0 0 20px #FFB800';
            square.style.opacity = '0.8';
            e.currentTarget.appendChild(square);

            // Remove square after 2 seconds
            setTimeout(() => {
              square.remove();
            }, 2000);
          }}
        />

        <div className="absolute top-10 w-full overflow-hidden z-20">
          <motion.div 
            className="whitespace-nowrap text-4xl font-light italic font-inter text-black"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Web Design and Development
          </motion.div>
        </div>
        
        <div className="relative flex items-center justify-center z-10">
          <h1 className="text-[120px] font-semibold italic font-inter">Web Design and Development</h1>
        </div>
      </motion.section>

      {/* About and Login Portal Section */}
      <section className="w-full min-h-screen bg-[#F4F1EC] py-10 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Section */}
          <div className="space-y-8 flex flex-col justify-end">
            <h2 className="text-5xl font-bold font-serif">About</h2>
            <p className="text-lg text-gray-700">
              A real-time platform for reporting and sharing incidents, enabling users to
              document emergencies or concerns and enhance community safety.
            </p>
            <div className="bg-yellow-400 p-6 rounded-lg">
              <p className="font-medium">
                Goal: Enhance community safety awareness and responsiveness.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/info.png"
                alt="IN4SAFE"
                className="w-2.2/4 mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Login Portal Image */}
          <div className="flex items-end justify-center mt-20 overflow-visible relative">
            <img
              src="/info-1.png"
              alt="IN4SAFE Login Portal"
              className="w-[180%] rounded-lg shadow-lg absolute"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full min-h-screen bg-black py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="h-1 w-[500px] bg-yellow-400 rounded mb-20"></div>

          {/* User Flow Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            {/* Left Part */}
            <div className="text-white">
              <h2 className="text-7xl font-serif mb-6">User Flow</h2>
              <p className="text-xl text-gray-300">
                The basic information architecture and user flow at the minimum viable product stage.
              </p>
            </div>
            {/* Right Part */}
            <div className="flex items-center justify-center">
              <img
                src="/info-flow.png"
                alt="User Flow Diagram"
                className="w-3/4"
              />
            </div>
          </div>

          {/* Target Users Section */}
          <div className="bg-[#F4F1EC] py-20 px-8 rounded-lg">
            <h2 className="text-5xl font-serif text-black mb-16">Target Users</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <img
                  src="/info-user1.png"
                  alt="Community residents"
                  className="w-68"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/info-user2.png"
                  alt="Community managers"
                  className="w-68"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/info-user3.png"
                  alt="Public safety organizations"
                  className="w-68"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="w-full bg-[#F4F1EC] py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif text-black mb-16">Wireframe Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/info-1.png"
                alt="Gallery image 1"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/info-2.png"
                alt="Gallery image 2"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/info-3.png"
                alt="Gallery image 3"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/info-4.png"
                alt="Gallery image 4"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/info-5.png"
                alt="Gallery image 5"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/info-6.png"
                alt="Gallery image 6"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/info-7.png"
                alt="Gallery image 7"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/info-8.png"
                alt="Gallery image 8"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* View All Projects Button */}
      <div className="w-full bg-[#F4F1EC] py-12 pb-24 flex justify-center">
        <button 
          onClick={scrollToProjects}
          className="bg-[#FFB800] text-black border border-black rounded-full px-10 py-4 font-serif text-base font-medium transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_0_0_#000000] active:translate-y-0 active:shadow-[0_1px_0_0_#000000]"
        >
          VIEW ALL PROJECTS
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Infosafe; 