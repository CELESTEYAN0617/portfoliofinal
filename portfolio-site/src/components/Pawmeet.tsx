import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue, useDragControls, useInView } from "framer-motion";
import Header from "./Header";
import InteractiveLines from "./InteractiveLines-p";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Pawmeet: React.FC = () => {
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 400], [0, -200]);
  const xSpring = useSpring(scrollX, { stiffness: 100, damping: 30 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);
  const topImages = ["/p-1.png", "/p-2.png", "/p-3.png"];
  const designImages = ["/p_1.png", "/p_2.png", "/p_3.png", "/p_4.png"];
  const dragControls = useDragControls();
  const dragX = useMotionValue(0);

  // Add refs for each section
  const heroRef = useRef(null);
  const uiSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const typographySectionRef = useRef(null);
  const designSectionRef = useRef(null);

  // Add inView hooks for each section
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const uiSectionInView = useInView(uiSectionRef, { once: true, amount: 0.3 });
  const aboutSectionInView = useInView(aboutSectionRef, { once: true, amount: 0.3 });
  const typographySectionInView = useInView(typographySectionRef, { once: true, amount: 0.3 });
  const designSectionInView = useInView(designSectionRef, { once: true, amount: 0.3 });

  // Auto-rotation effect for top images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % topImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Simple navigation functions
  const goToNextSlide = () => {
    setCurrentDesignIndex((currentDesignIndex + 1) % designImages.length);
  };

  const goToPrevSlide = () => {
    setCurrentDesignIndex((currentDesignIndex - 1 + designImages.length) % designImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentDesignIndex(index);
  };

  const scrollToProjects = () => {
    window.location.href = '/';
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="relative min-h-screen bg-[#F4F1EC]">
      <Header />
      <motion.section 
        ref={heroRef}
        className="relative w-full min-h-[100vh] h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
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
              src="/card1.png" 
              alt="Card" 
              className="w-40 sm:w-60 md:w-80 h-auto"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
            />
          </motion.div>
        </div>
        <motion.h1
          className="relative z-10 text-[40vw] sm:text-[35vw] md:text-[30vw] font-serif font-bold text-right mt-[45vh] md:mt-[25vh] pr-[5vw] whitespace-nowrap"
          style={{ x: xSpring }}
        >
          PAWMEET
        </motion.h1>
      </motion.section>
      
      <motion.section 
        ref={uiSectionRef}
        className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] bg-gradient-to-b from-[#8BE644] via-[#F5F2ED] via-[#F5F2ED] via-[#F5F2ED] via-[#F5F2ED] to-[#F5F2ED] py-10 px-4 sm:px-8 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: uiSectionInView ? 1 : 0, y: uiSectionInView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        {/* Background paw prints */}
        <div className="absolute w-[180px] sm:w-[230px] md:w-[280px] h-[180px] sm:h-[230px] md:h-[280px] left-4 sm:left-10 md:left-20 bottom-4 sm:bottom-10 md:bottom-20 rotate-[-15deg]">
          <img 
            src="/p-bg.png" 
            alt="Background Paw Print" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute w-[180px] sm:w-[230px] md:w-[280px] h-[180px] sm:h-[230px] md:h-[280px] right-4 sm:right-10 md:right-20 top-4 sm:top-10 md:top-20 rotate-[15deg]">
          <img 
            src="/p-bg.png" 
            alt="Background Paw Print" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute top-4 sm:top-10 w-full overflow-hidden">
          <motion.div 
            className="whitespace-nowrap text-xl sm:text-2xl md:text-4xl font-light italic font-inter text-black"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Front-end and Back-end Development
          </motion.div>
        </div>
        
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
            className="absolute -top-20 sm:-top-32 md:-top-40 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] z-20"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                src={topImages[currentImageIndex]}
                alt={`Project Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
                loading="eager"
                decoding="sync"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              />
            </AnimatePresence>
          </motion.div>
          <h1 className="text-[60px] sm:text-[90px] md:text-[120px] font-semibold italic font-inter">UI/UX DESIGN</h1>
        </div>
      </motion.section>

      <motion.section 
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: uiSectionInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/p-bg2.png" 
          alt="Background" 
          className="w-full h-full object-cover object-center"
        />
      </motion.section>

      <motion.section 
        ref={aboutSectionRef}
        className="relative w-full min-h-screen bg-[#F5F5F0] py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: aboutSectionInView ? 1 : 0, y: aboutSectionInView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 pl-0 md:pl-32 -mt-0 md:-mt-20">
            <div className="w-40 sm:w-60 md:w-80 h-[2px] bg-[#8BE644] mb-4 sm:mb-6 md:mb-8"></div>
            <div className="flex items-center gap-4 mb-4 sm:mb-6 md:mb-8">
              <img 
                src="/paw.png" 
                alt="Paw Icon" 
                className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12"
              />
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">About</h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed italic text-gray-700">
              "PAWMEET" is a pet social networking app designed to help pet owners find 
              compatible playmates for their pets and connect within a pet-friendly community. 
              Users can help their pets match playmates, arrange playdates, access 
              pet-related services.
            </p>
          </div>
          
          <div className="flex-1 flex justify-center mt-8 md:mt-0">
            <div className="relative w-[180px] sm:w-[220px] md:w-[250px]">
              <img 
                src="/p-mobile.png" 
                alt="Phone Mockup" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        ref={typographySectionRef}
        className="relative w-full min-h-screen bg-[#F5F5F0] px-4 sm:px-6 md:px-8 -mt-20 md:-mt-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: typographySectionInView ? 1 : 0, y: typographySectionInView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Typography Section */}
          <div className="mb-10 sm:mb-16 md:mb-20 -ml-0 md:-ml-40">
            <div className="w-40 sm:w-60 md:w-80 h-[2px] bg-[#8BE644] mb-4 ml-0 md:ml-8 mt-4 md:mt-8"></div>
            <div className="grid gap-8 sm:gap-12 md:gap-16">
              <div className="font-epilogue">
                <h3 className="text-[6vw] sm:text-[7vw] md:text-[8vw] tracking-wide italic font-bold mb-4">AaBbCcDdEeFfGgHhIiJjKkLl</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 italic ml-0 md:ml-20">Epilogue</p>
              </div>
              <div>
                <h3 className="font-inter text-[6vw] sm:text-[7vw] md:text-[8vw] tracking-wide mb-4">AaBbCcDdEeFfGgHhIiJjKkLl</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 italic ml-0 md:ml-20">Inter</p>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="mb-10 sm:mb-16 md:mb-20">
            <div className="flex flex-col md:flex-row w-full gap-4 sm:gap-6 md:gap-8">
              <div className="w-full md:w-[40%] grid grid-cols-2 gap-4 sm:gap-6 md:gap-10">
                <div className="w-full h-24 sm:h-32 md:h-40 bg-[#1E1E1E] relative rounded-[16px]">
                  <span className="absolute bottom-1 left-1 text-white text-xs">#1E1E1E</span>
                </div>
                <div className="w-full h-24 sm:h-32 md:h-40 bg-[#BCEF94] border border-black relative rounded-[16px]">
                  <span className="absolute bottom-1 left-1 text-black text-xs">#BCEF94</span>
                </div>
                <div className="w-full h-24 sm:h-32 md:h-40 bg-[#F2F2F2] border border-black relative rounded-[16px]">
                  <span className="absolute bottom-1 left-1 text-black text-xs">#F2F2F2</span>
                </div>
                <div className="w-full h-24 sm:h-32 md:h-40 bg-[#61BC19] relative rounded-[16px]">
                  <span className="absolute bottom-1 left-1 text-white text-xs">#61BC19</span>
                </div>
              </div>
              <div className="w-full md:w-[60%] h-[240px] sm:h-[300px] md:h-[360px] bg-[#8BE644] flex items-center justify-center relative rounded-[16px]">
                <img 
                  src="/paw-white.png" 
                  alt="White Paw" 
                  className="w-40 sm:w-50 md:w-60 h-40 sm:h-50 md:h-60 object-contain"
                />
                <span className="absolute bottom-1 left-1 text-black text-xs">#8BE644</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div 
        ref={designSectionRef}
        className="w-screen -mx-4 sm:-mx-6 md:-mx-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: designSectionInView ? 1 : 0, y: designSectionInView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-black p-8 sm:p-16 md:p-24 rounded-lg shadow-lg w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDesignIndex}
                className="absolute flex justify-center items-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img
                  src={designImages[currentDesignIndex]}
                  alt={`Design ${currentDesignIndex + 1}`}
                  className="h-[300px] sm:h-[400px] md:h-[500px] w-auto object-contain"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation overlay buttons */}
            <button 
              onClick={goToPrevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#BCEF94]/70 hover:bg-[#BCEF94]/90 text-black w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center border-2 border-white/80 transition-all z-10 shadow-md text-xl sm:text-2xl rounded-[10px]"
              aria-label="Previous design"
            >
              &lt;
            </button>
            <button 
              onClick={goToNextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#BCEF94]/70 hover:bg-[#BCEF94]/90 text-black w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center border-2 border-white/80 transition-all z-10 shadow-md text-xl sm:text-2xl rounded-[10px]"
              aria-label="Next design"
            >
              &gt;
            </button>
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-4 sm:mt-6 gap-4 items-center">
          <div className="flex gap-2 items-center">
            {designImages.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-[4px] ${index === currentDesignIndex ? 'bg-[#8BE644]/90 border border-white/80' : 'bg-gray-400/70 border border-white/60'}`}
                aria-label={`Go to design ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-6 sm:mt-8 mb-12 sm:mb-16 md:mb-24">
          <Link 
            to="/all-projects"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="bg-[#BCEF94]/90 text-black border border-black/90 px-8 sm:px-12 md:px-20 py-3 sm:py-4 font-serif text-sm sm:text-base font-medium transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_0_0_rgba(0,0,0,0.8)] hover:bg-[#BCEF94] active:translate-y-0 active:shadow-[0_1px_0_0_rgba(0,0,0,0.8)] rounded-[20px]"
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Pawmeet; 