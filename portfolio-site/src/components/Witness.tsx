import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "./Header";
import InteractiveLines from "./InteractiveLines-w";
import Footer from "./Footer";

// Add animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const Witness: React.FC = () => {
  const { scrollY } = useScroll();
  const scrollX = useTransform(scrollY, [0, 400], [0, -200]);
  const xSpring = useSpring(scrollX, { stiffness: 100, damping: 30 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const designImages = [
    "/wit-1.png", 
    "/wit-2.png", 
    "/wit-3.png", 
    "/wit-4.png", 
    "/wit-5.png",
    "/wit-6.png",
    "/wit-7.png",
    "/wit-8.png",
    "/wit-9.png",
    "/wit-10.png",
    "/wit-11.png"
  ];
  
  // Add refs for sections
  const heroRef = useRef(null);
  const uiSectionRef = useRef(null);
  const typographySectionRef = useRef(null);
  
  // Add inView hooks for sections
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const uiSectionInView = useInView(uiSectionRef, { once: true, amount: 0.3 });
  const typographySectionInView = useInView(typographySectionRef, { once: true, amount: 0.3 });

  // Auto-rotation effect for design images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % designImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
        <div className="absolute inset-0 z-0">
          <InteractiveLines />
        </div>
        <motion.h1
          className="relative z-10 text-[40vw] md:text-[35vw] lg:text-[30vw] font-serif font-bold text-right mt-[45vh] md:mt-[25vh] pr-[5vw] whitespace-nowrap"
          style={{ x: xSpring }}
        >
          WITNESS
        </motion.h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative z-50"
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
              src="/card3.png" 
              alt="Card" 
              className="w-48 sm:w-64 md:w-80 h-auto"
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
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#F4F1EC] to-transparent z-40"></div>
      </motion.section>

      <motion.section 
        className="relative w-full min-h-screen bg-[#F4F1EC] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 -mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="w-40 sm:w-60 md:w-80 h-[2px] bg-[#F0584E] mb-6 sm:mb-8"></motion.div>
          <motion.div variants={itemVariants} className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <img 
              src="/eye.png" 
              alt="Eye Icon" 
              className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Interactive Demo</h2>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="w-full aspect-video rounded-lg overflow-hidden shadow-2xl border-2 border-[#F0584E]/20"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/9o9zZP1ZsTY"
              title="Witness Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section 
        ref={uiSectionRef}
        className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] bg-gradient-to-b from-[#F0584E] via-[#F5F2ED] via-[#F5F2ED] via-[#F5F2ED] via-[#F5F2ED] to-[#F5F2ED] py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: uiSectionInView ? 1 : 0, y: uiSectionInView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        {/* Background eye icons */}
        {[...Array(5)].map((_, i) => {
          const size = Math.random() * 300 + 100; // Random size between 100px and 400px
          const scale = Math.random() * 0.3 + 0.7; // Random scale between 0.7x and 1x
          const opacity = Math.random() * 0.2 + 0.1; // Random opacity between 0.1 and 0.3
          return (
            <motion.div
              key={i}
              className="absolute bg-[#F0584E] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
              }}
              animate={{
                scale: [1, scale, 1],
                opacity: [opacity * 0.7, opacity, opacity * 0.7],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: [0.4, 0, 0.2, 1],
                times: [0, 0.5, 1]
              }}
            />
          );
        })}

        <div className="absolute top-6 sm:top-8 md:top-10 w-full overflow-hidden">
          <motion.div 
            className="whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light italic font-inter text-black"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            User Interface & User Experience Design
          </motion.div>
        </div>
        
        <div className="relative flex items-center justify-center z-10">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
            className="absolute -top-32 sm:-top-36 md:-top-40 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] z-20"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                src={designImages[currentImageIndex]}
                alt={`Witness Design ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px] font-semibold italic font-inter">UI/UX DESIGN</h1>
        </div>
      </motion.section>

      <motion.section
        className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F1EC]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <motion.div variants={itemVariants}>
              <div className="w-60 h-[2px] bg-[#F0584E] mb-8"></div>
              <h2 className="text-4xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-gray-700 mb-8">
                Witness is an interactive storytelling app that brings urban legends to life through immersive UI/UX design. Blending folklore with modern design, the project focuses on crafting engaging, mysterious digital experiences where users don't just read the story — they become part of it.
              </p>
              <motion.ul variants={containerVariants} className="space-y-4">
                <motion.li variants={itemVariants} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-black mt-2 mr-4"></div>
                  <p className="text-lg text-gray-700">Narrative-driven UI system tailored for suspense and exploration</p>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-black mt-2 mr-4"></div>
                  <p className="text-lg text-gray-700">Immersive sound, motion, and transitions to deepen emotional impact</p>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-black mt-2 mr-4"></div>
                  <p className="text-lg text-gray-700">User-centered interactions designed for both curiosity and accessibility</p>
                </motion.li>
              </motion.ul>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 bg-[#E8E4DD] rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                variants={containerVariants}
                className="relative z-10 bg-white p-8 rounded-lg shadow-xl"
              >
                <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6">Key Features</motion.h3>
                <motion.div variants={containerVariants} className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white mr-3">1</div>
                      <h4 className="text-xl font-semibold">Dark Folklore Aesthetic</h4>
                    </div>
                    <p className="text-gray-600 ml-11">A cinematic visual style combining eerie illustration, rich contrast, and atmospheric typography to evoke suspense and curiosity.</p>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white mr-3">2</div>
                      <h4 className="text-xl font-semibold">Interactive Storytelling</h4>
                    </div>
                    <p className="text-gray-600 ml-11">Dynamic animations, branching narratives, and touch-based interactions that invite users to explore hidden layers of each urban legend.</p>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white mr-3">3</div>
                      <h4 className="text-xl font-semibold">Accessibility for All</h4>
                    </div>
                    <p className="text-gray-600 ml-11">Designed with WCAG-compliant features such as adjustable text, voice narration, and alternative input support, ensuring everyone can uncover the mystery.</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        ref={typographySectionRef}
        className="relative w-full min-h-screen bg-[#F5F5F0] px-4 sm:px-6 md:px-8 -mt-20 sm:-mt-32 md:-mt-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: typographySectionInView ? 1 : 0, y: typographySectionInView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16 md:mb-20 -ml-12 sm:-ml-16 md:-ml-24">
            <div className="w-40 sm:w-60 md:w-80 h-[2px] bg-[#F0584E] mb-4 ml-12 sm:ml-16 md:ml-24 mt-4 sm:mt-6 md:mt-8"></div>
            <motion.div variants={containerVariants} className="grid gap-8 sm:gap-12 md:gap-16">
              <motion.div variants={itemVariants}>
                <h3 
                  style={{ 
                    fontFamily: "'Jolly Lodger', cursive",
                    fontSize: "clamp(2rem, 8vw, 6rem)",
                    letterSpacing: "0.25em",
                    marginBottom: "1rem",
                    fontStyle: "italic"
                  }}
                >
                  AaBbCcDdEeFfGgHhIiJjKkLl
                </h3>
                <p 
                  style={{ 
                    fontFamily: "'Jolly Lodger', cursive",
                    fontSize: "clamp(1rem, 1.25rem, 1.5rem)",
                    lineHeight: "1.75rem",
                    color: "rgb(75 85 99)",
                    marginLeft: "3rem sm:ml-4 md:ml-6",
                    fontStyle: "italic"
                  }}
                >
                  Jolly Lodger
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="font-mina text-[clamp(2rem, 8vw, 6rem)] tracking-wide mb-4 italic">AaBbCcDdEeFfGgHhIiJjKkLl</h3>
                <p className="text-lg sm:text-xl text-gray-600 ml-12 sm:ml-16 md:ml-24 font-mina italic">Mina</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} className="flex flex-col md:flex-row w-full gap-4 sm:gap-6 md:gap-8">
            <motion.div variants={itemVariants} className="w-full md:w-[40%] grid grid-cols-2 gap-4 sm:gap-6 md:gap-10">
              <motion.div 
                variants={itemVariants}
                className="w-full h-32 sm:h-36 md:h-40 bg-[#1E1E1E] relative rounded-[16px]"
              >
                <span className="absolute bottom-1 left-1 text-white text-xs">#1E1E1E</span>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="w-full h-32 sm:h-36 md:h-40 bg-[#F0584E] relative rounded-[16px]"
              >
                <span className="absolute bottom-1 left-1 text-white text-xs">#F0584E</span>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="w-full h-32 sm:h-36 md:h-40 bg-[#F2F2F2] border border-black relative rounded-[16px]"
              >
                <span className="absolute bottom-1 left-1 text-black text-xs">#F2F2F2</span>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="w-full h-32 sm:h-36 md:h-40 bg-[#E8E4DD] border border-black relative rounded-[16px]"
              >
                <span className="absolute bottom-1 left-1 text-black text-xs">#E8E4DD</span>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="w-full md:w-[60%] h-[240px] sm:h-[300px] md:h-[360px] bg-[#F0584E] flex items-center justify-center relative rounded-[16px]"
            >
              <img 
                src="/eye-white.png" 
                alt="White Eye" 
                className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 object-contain"
              />
              <span className="absolute bottom-1 left-1 text-white text-xs">#EA4335</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <div className="flex justify-center mt-12 sm:mt-16 md:mt-20 mb-20 sm:mb-32 md:mb-40">
        <Link 
          to="/all-projects"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="bg-[#EA4335]/90 text-white border border-black/90 px-12 sm:px-16 md:px-20 py-3 sm:py-4 font-serif text-sm sm:text-base font-medium transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_0_0_rgba(0,0,0,0.8)] hover:bg-[#F0584E] active:translate-y-0 active:shadow-[0_1px_0_0_rgba(0,0,0,0.8)] rounded-[20px]"
        >
          VIEW ALL PROJECTS
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Witness; 