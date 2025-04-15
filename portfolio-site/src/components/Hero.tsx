import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import InteractiveLines from "./InteractiveLines";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 400], [100, -200]);
  const xSpring = useSpring(x, { stiffness: 100, damping: 30 });

  return (
    <section className="relative w-full min-h-[100vh] h-screen overflow-hidden bg-white flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <InteractiveLines />
      </div>

      <motion.h1
        className="relative z-10 text-[40vw] sm:text-[35vw] md:text-[30vw] lg:text-[25vw] font-serif font-bold text-right mt-[70vh] sm:mt-[65vh] md:mt-[80vh] lg:mt-[55vh] pr-[5vw] sm:pr-[8vw] md:pr-[10vw] lg:pr-[12vw] whitespace-nowrap"
        style={{ x: xSpring }}
      >
        CELESTE
      </motion.h1>
    </section>
  );
};

export default Hero;
