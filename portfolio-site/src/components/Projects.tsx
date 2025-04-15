import React, { useState, useEffect } from "react";
import "../components/css/Projects.css";

type ProjectItem = {
  title: string;
  subtitle: string;
  image: string;
  url: string;
};

const projectList: ProjectItem[] = [
  {
    title: "'PAWMEET' Application",
    subtitle: "UI & UX",
    image: "pawmeet.png",
    url: "/projects/pawmeet"
  },
  {
    title: "InfoSafe Application",
    subtitle: "Web Design",
    image: "infosafe.png",
    url: "/projects/infosafe"
  },
  {
    title: "WITNESS",
    subtitle: "User Interface & User Experience Design",
    image: "witness.png",
    url: "/projects/witness"
  }
];

const Projects: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="projects"
      className="w-full px-4 md:px-6 py-16 md:py-10 bg-[#f3f2ea] text-black font-serif"
    >
      <div className="max-w-6xl mx-auto">
        {/* Wrap divider and title in a div, ensure left alignment */}
        <div className="-mt-10 text-left"> 
          <div className="h-[1px] w-full max-w-[250px] bg-gray-300 mb-8" />
          <h2 className="projects-title">Projects</h2>
        </div>

        {/* Project list container - Added border, white background, and close button */}
        <div className="relative overflow-hidden border border-black bg-white">
          {/* Vertical Separator Line - Made darker */}
          <span className="absolute top-0.4 right-12 h-10 w-px bg-gray-500 z-10"></span>
          {/* Close button */}
          <button className="absolute top-2 right-2 p-1 text-gray-500 hover:text-black z-10">
            {/* Increased SVG size */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 项目列表 - Added top padding */}
          <div className="relative z-10 pt-10"> 
            {projectList.map((item, idx) => (
              <div
                key={idx}
                className={`group relative px-4 md:px-6 py-8 md:py-14 border-t border-black transition-all duration-300 hover:bg-gradient-to-b hover:from-[#B2FFFF] hover:via-white hover:to-[#B2FFFF] cursor-pointer`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => window.location.href = item.url}
              >
                <h3 className="text-2xl md:text-3xl font-semibold font-serif tracking-wider pl-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-1 font-sans">{item.subtitle}</p>
                {/* Image container */}
                <div 
                  className={`fixed opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[9999] pointer-events-none ${idx === 2 ? '-mt-8' : ''}`}
                  style={{
                    left: `${mousePosition.x + 20}px`,
                    top: `${mousePosition.y - 100}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <img 
                    src={`${process.env.PUBLIC_URL}/${item.image}`} 
                    alt={item.title}
                    className="max-w-[500px] max-h-[500px] rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
