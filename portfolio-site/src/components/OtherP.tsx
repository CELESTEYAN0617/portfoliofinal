import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import InteractiveLines from "./InteractiveLines-pro";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

const OtherP: React.FC = () => {
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 400], [0, -200]);
  const xSpring = useSpring(scrollX, { stiffness: 100, damping: 30 });
  const navigate = useNavigate();
  
  // Add ref for hero section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const handleBackClick = () => {
    navigate('/all-projects');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative w-full min-h-[100vh] h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Interactive Background for Hero only */}
        <div className="absolute inset-0 z-0 opacity-50">
          <InteractiveLines />
        </div>

        <motion.h1
          className="relative z-10 text-[35vw] sm:text-[30vw] md:text-[25vw] lg:text-[20vw] font-serif font-bold text-right mt-[65vh] md:mt-[45vh] pr-[5vw] whitespace-nowrap"
          style={{ x: xSpring }}
        >
          PROJECTS
        </motion.h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute top-[28vh] w-full overflow-hidden">
            <motion.div 
              className="whitespace-nowrap"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 italic">A collection of my creative works spanning branding, web games, and interactive experiences&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;A collection of my creative works spanning branding, web games, and interactive experiences&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</span>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#F4F1EC] to-transparent z-40"></div>
      </motion.section>

      {/* Projects Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16 mt-0 relative z-50">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {/* Web Game Design Section */}
          <div className="rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-500">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">Web Game Design</h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 md:mb-8 max-w-4xl">
                "ECHO" is a web-based rhythm game created in 2024 that transforms sound into an interactive journey. Players tap, sing, or react to music cues to unlock dynamic visuals and immerse themselves in a world shaped by echoing beats.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl w-full">
                <img 
                  src="/echo.jpg" 
                  alt="ECHO Game Start Screen" 
                  className="w-full rounded-xl hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="/echo2.jpg" 
                  alt="ECHO Game Gameplay" 
                  className="w-full rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <a 
                href="http://echo-game-e13971803ea1.herokuapp.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 md:mt-8 w-full sm:w-3/4 md:w-1/2 bg-black text-white py-3 md:py-4 px-8 md:px-12 rounded-lg transition-all duration-300 hover:bg-[#B2FFFF] hover:text-black inline-block text-center"
              >
                GAME START
              </a>
            </div>
          </div>

          {/* Interactive Game Design Section */}
          <div className="rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-500">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="md:col-span-5 flex flex-col justify-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 md:mb-6">Interactive Game Design</h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  As a traditional platformer game, players will make sound to guide a turkey through a kitchen, and the ultimate goal is to survive. By controlling the levels of sound(or voice), the turkey can perform a jump or a double jump to avoid utensils. If the turkey bumps into any utensils, the health count will decrease. Collecting treats will give you scores. If the health has depleted, it's a game over.
                </p>
              </div>
              <div className="md:col-span-7">
                <img 
                  src="/turkey1.jpg" 
                  alt="Little Turkey Adventure Game" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>
            
            {/* Video/Demo Section */}
            <div className="w-full mt-6 md:mt-8">
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/9o9zZP1ZsTY"
                  title="Little Turkey Adventure Game Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Branding Design Section */}
          <div className="rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-500">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              <div className="md:col-span-7 bg-gray-100 p-4 sm:p-6 rounded-lg">
                <img 
                  src="/branding1.jpg" 
                  alt="Skateboard and Daiquiri Branding Design" 
                  className="w-full rounded-lg"
                />
              </div>
              <div className="md:col-span-5 flex flex-col">
                <div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-1 font-light">Branding Design</h2>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    Collecting my branding design for some famous bands, such as Johnnie Walker and Havana Club. Showing my illustration and design for those brands.
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="w-full md:w-2/3">
                    <img 
                      src="/branding2.jpg" 
                      alt="Havana Club Illustration" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-600 text-sm mb-4">
                      I am also as an illustrator or a graphic design at the same time.
                    </p>
                    <div className="h-px bg-gray-300 mb-4"></div>
                    <p className="text-xs text-gray-600">
                      My illustration for the well-known<br />
                      brand Havana Club<br />
                      2023 in Shanghai, China
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8 text-center">
        <button 
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 text-black transition-transform hover:scale-110"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 sm:h-6 sm:w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M15 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Back to All Projects
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OtherP;
