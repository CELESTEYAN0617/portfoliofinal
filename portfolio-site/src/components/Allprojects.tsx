import React from "react";
import { Link } from "react-router-dom";
import "../components/css/Projects.css";

const Allprojects: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <div className="max-w-6xl mx-auto px-16 py-20">
        <div className="mt-28 text-center">
          <h2 className="about-title text-5xl">All Projects</h2>
        </div>

        <div className="grid grid-cols-3 gap-12 mt-20">
          {/* Project 1 */}
          <Link to="/projects/pawmeet" className="group">
            <div className="relative overflow-hidden rounded-lg border border-black bg-white transition-all duration-300 hover:shadow-lg">
              <img 
                src="/pawmeet.png" 
                alt="PAWMEET Application" 
                className="w-full h-64 object-cover"
              />
              <div className="p-7">
                <h3 className="text-3xl font-semibold">PAWMEET Application</h3>
                <p className="text-xl text-gray-600 mt-4">UI & UX</p>
              </div>
            </div>
          </Link>

          {/* Project 2 */}
          <Link to="/projects/infosafe" className="group">
            <div className="relative overflow-hidden rounded-lg border border-black bg-white transition-all duration-300 hover:shadow-lg">
              <img 
                src="/infosafe.png" 
                alt="InfoSafe Application" 
                className="w-full h-64 object-cover"
              />
              <div className="p-7">
                <h3 className="text-3xl font-semibold">InfoSafe Application</h3>
                <p className="text-xl text-gray-600 mt-4">Web Design</p>
              </div>
            </div>
          </Link>

          {/* Project 3 */}
          <Link to="/projects/witness" className="group">
            <div className="relative overflow-hidden rounded-lg border border-black bg-white transition-all duration-300 hover:shadow-lg">
              <img 
                src="/witness.png" 
                alt="Urban Legend Application" 
                className="w-full h-64 object-cover"
              />
              <div className="p-7">
                <h3 className="text-3xl font-semibold">Urban Legend Application</h3>
                <p className="text-xl text-gray-600 mt-4">UI & UX</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Other Projects Section */}
        <div className="grid grid-cols-1 gap-12 mt-20">
          <Link to="/otherp" className="group" onClick={scrollToTop}>
            <div className="relative overflow-hidden rounded-lg border border-black bg-white transition-all duration-300 hover:shadow-lg">
              <img 
                src="/cardall.png" 
                alt="Brand Design" 
                className="w-full h-96 object-cover"
              />
              <div className="p-7">
                <h3 className="text-3xl font-semibold">CELESTE'S OTHER PROJECTS</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Allprojects;
