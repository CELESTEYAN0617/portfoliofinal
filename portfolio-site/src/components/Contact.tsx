import React from "react";
import { Link } from "react-router-dom";
import "../components/css/About.css";

const Contact: React.FC = () => {
  return (
    <section className="w-full bg-[#F4F1EC] px-4 md:px-6 py-12 md:py-20 lg:py-40 font-serif text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 md:gap-12 items-start">
          {/* 左边部分 */}
          <div className="mt-0 md:-mt-10">
            {/* 分隔线 */}
            <div className="h-[1px] w-full max-w-[300px] bg-gray-300 mb-6 md:mb-8" />

            {/* 标题 */}
            <h2 className="about-title">Get in Touch</h2>

            {/* 左边介绍文字 */}
            <div className="space-y-4 text-base md:text-lg leading-relaxed font-sans max-w-full md:max-w-[90%] mt-6 md:mt-10">
              <p>
                If you want to chat about a project — email me on{" "}
                <a
                  href="mailto:yanxi19980617@gmail.com"
                  className="underline hover:opacity-80"
                >
                  yanxi19980617@gmail.com
                </a>
              </p>
              <p>
                I can help you find dream product design and build a strong product
                strategy for your business. Currently based in Ontario, Canada.
              </p>
            </div>
          </div>

          {/* 右边部分 */}
          <div className="flex flex-col items-start justify-start space-y-6 pt-6 md:pt-10 md:pl-0 lg:pl-60">
            <div className="flex flex-col items-start gap-4 text-xl md:text-2xl w-full">
              <a href="https://www.linkedin.com/in/xi-y-celeste0617" target="_blank" rel="noopener noreferrer" className="font-inter font-bold transition-colors hover:text-[#B2FFFF] w-full">LinkedIn</a>
              <a href="https://www.instagram.com/celeste_tattooer/" target="_blank" rel="noopener noreferrer" className="font-inter font-bold transition-colors hover:text-[#B2FFFF] w-full">Instagram</a>
              <a href="https://x.com/CelesteeeeeeY" target="_blank" rel="noopener noreferrer" className="font-inter font-bold transition-colors hover:text-[#B2FFFF] w-full">Twitter</a>
              <a href="https://github.com/CELESTEYAN0617" target="_blank" rel="noopener noreferrer" className="font-inter font-bold transition-colors hover:text-[#B2FFFF] w-full">Github</a>
            </div>

            <Link 
              to="/contact" 
              onClick={() => window.scrollTo(0, 0)}
              className="mt-4 md:mt-0 px-6 md:px-8 py-2 md:py-3 bg-[#B2FFFF] text-black border border-black rounded-full font-serif text-sm font-medium transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_0_0_#000000] active:translate-y-0 active:shadow-[0_2px_0_0_#000000] w-full md:w-auto text-center"
            >
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
