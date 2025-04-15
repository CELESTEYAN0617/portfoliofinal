import React from "react";
import { Link } from "react-router-dom";
import "../components/css/About.css";

const OtherProjects: React.FC = () => {
  return (
    <section className="bg-[#F4F1EC] px-4 sm:px-8 py-12 sm:py-16 font-serif text-black">
      <div className="max-w-6xl mx-auto">
        <div className="mt-0 md:-mt-10">
          <div className="h-[1px] w-full max-w-[300px] bg-gray-300 mb-8" />
          <h2 className="about-title">Other Projects</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center relative mt-12 md:mt-24 gap-8 md:gap-4">
          <div className="relative z-10 transition-all duration-300 ease-in-out hover:scale-110 md:hover:scale-125 hover:z-30 hover:-rotate-6">
            <img 
              src="/card4.png" 
              alt="Brand Design" 
              className="w-56 sm:w-64 md:w-72 transform -rotate-12"
            />
            <div className="text-center mt-4 text-lg sm:text-xl font-bold scale-100 transform -rotate-12">BRAND DESIGN</div>
          </div>
          <div className="relative z-20 transition-all duration-300 ease-in-out hover:scale-110 md:hover:scale-125 hover:z-30">
            <img 
              src="/card5.png" 
              alt="Web Game" 
              className="w-56 sm:w-64 md:w-72"
            />
            <div className="text-center mt-4 text-lg sm:text-xl font-bold scale-100">WEB GAME</div>
          </div>
          <div className="relative z-10 transition-all duration-300 ease-in-out hover:scale-110 md:hover:scale-125 hover:z-30 hover:rotate-6">
            <img 
              src="/card6.png" 
              alt="NFT World" 
              className="w-56 sm:w-64 md:w-72 transform rotate-12"
            />
            <div className="text-center mt-4 text-lg sm:text-xl font-bold scale-100 transform rotate-12">INTERACTIVE GAME</div>
          </div>
        </div>

        <div className="flex justify-center mt-12 md:mt-24">
          <Link 
            to="/all-projects"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-[#B2FFFF] text-black border border-black rounded-full px-8 sm:px-12 md:px-16 py-3 sm:py-4 font-serif text-sm sm:text-base font-medium transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_0_0_#000000] active:translate-y-0 active:shadow-[0_1px_0_0_#000000]"
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
