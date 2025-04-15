import React from "react";
import "../components/css/About.css";

const Skills: React.FC = () => {
  return (
    <section className="w-full bg-[#F4F1EC] px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 font-serif text-black relative overflow-hidden">
      {/* 渐变背景效果 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#B2FFFF] via-transparent to-[#B2FFFF] opacity-30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 分隔线 */}
        <div className="h-[1px] w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] bg-gray-300 mb-6 sm:mb-8" />

        {/* 标题 */}
        <h2 className="about-title mb-8 sm:mb-12 md:mb-16">Skills</h2>

        {/* 白色容器 */}
        <div className="bg-white border border-black p-6 sm:p-8 md:p-10 lg:p-12 relative">
          {/* 关闭按钮 */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border border-black flex items-center justify-center">
            <span className="transform rotate-45 text-lg sm:text-xl">+</span>
          </div>

          {/* 技能网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-12 sm:gap-y-16 md:gap-y-20">
            {/* 技能 1 */}
            <div>
              <h3 className="flex items-baseline gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl">1.</span>
                <span className="font-serif italic" style={{ fontFamily: 'Times New Roman' }}>End-to-end Product Design</span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-sans text-gray-700 leading-relaxed sm:leading-normal max-w-[95%] sm:max-w-[90%]">
                I lead the full design process—from uncovering user insights to delivering polished, production-ready solutions—with a focus on collaboration, clarity, and impact.
              </p>
            </div>

            {/* 技能 2 */}
            <div>
              <h3 className="flex items-baseline gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl">2.</span>
                <span className="font-serif italic" style={{ fontFamily: 'Times New Roman' }}>User Experience Design</span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-sans text-gray-700 leading-relaxed sm:leading-normal max-w-[95%] sm:max-w-[90%]">
                I craft thoughtful, user-centered experiences by simplifying complexity, shaping intuitive flows, and continuously iterating based on real user feedback.
              </p>
            </div>

            {/* 技能 3 */}
            <div>
              <h3 className="flex items-baseline gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl">3.</span>
                <span className="font-serif italic" style={{ fontFamily: 'Times New Roman' }}>Interface Design</span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-sans text-gray-700 leading-relaxed sm:leading-normal max-w-[95%] sm:max-w-[90%]">
                I bring ideas to life through clean, consistent, and visually engaging interfaces that not only look good but feel effortless to use.
              </p>
            </div>

            {/* 技能 4 */}
            <div>
              <h3 className="flex items-baseline gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl">4.</span>
                <span className="font-serif italic" style={{ fontFamily: 'Times New Roman' }}>Product Strategy</span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-sans text-gray-700 leading-relaxed sm:leading-normal max-w-[95%] sm:max-w-[90%]">
                I connect design decisions to business goals, helping teams prioritize the right problems and shape product direction with clarity and purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

