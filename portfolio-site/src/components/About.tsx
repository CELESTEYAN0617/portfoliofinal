import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/css/About.css";

const About: React.FC = () => {
  const navigate = useNavigate();

  const handleResumeClick = () => {
    navigate('/resume');
    window.scrollTo(0, 0);
  };
// 添加一个按钮，点击后跳转到resume页面
  return (
    <section
      id="about"
      className="w-full bg-[#F4F1EC] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-40 font-serif text-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* 左边部分 */}
          <div className="mt-0 md:-mt-10">
            {/* 分隔线 */}
            <div className="h-[1px] w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] bg-gray-300 mb-6 md:mb-8" />

            {/* 标题 */}
            <h2 className="about-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl">About</h2>

            {/* 左边介绍 */}
            <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-full md:max-w-[90%] mt-6 md:mt-10">
              <p className="mt-8">
                I'm <strong>Celeste</strong>, a product designer and manager,
                with experience working with new technologies.
                I deeply focus on UI/UX and product design, creating excellent
                design through our whole lives.
              </p>
            </div>
          </div>

          {/* 右边用代码生成框 */}
          <div className="w-full relative mt-8 md:mt-0 border border-black px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 pb-8 md:pb-10 text-black rounded-lg">
            <div>
              <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm md:text-base leading-relaxed font-sans font-normal">
                <p>
                  I am a seasoned graphic designer, UX/UI designer, and illustrator with over eight years of experience in painting, design, and creating impactful visual experiences. Currently, I am expanding my expertise in Interactive Multimedia at Sheridan College.
                </p>
                <p>
                  After graduating, I founded a design and illustration studio in Shanghai, collaborating with globally recognized brands like Nike，Levi's，Johnnie Walker and Havana Club etc. Additionally, I launched my NFT collection, "Girl Power," showcasing my passion for personal IP design and product development.
                </p>
                <p>
                  Today, I focus on UI/UX design, where I strive to craft seamless user experiences and stunning visual effects that align with client goals and resonate with users. Whether it's personal branding, interactive design, or innovative multimedia projects, I am committed to delivering exceptional and meaningful creative solutions.
                </p>
                <div className="flex justify-center mt-8 md:mt-10">
                  <button 
                    onClick={handleResumeClick}
                    className="px-4 sm:px-5 md:px-6 py-1 bg-[#B2FFFF] text-black border border-[#111827] rounded-[29px] font-serif text-xs sm:text-sm md:text-base font-medium h-[32px] sm:h-[34px] md:h-[38px] flex items-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_0_0_#000000] active:translate-y-0 active:shadow-[0_2px_0_0_#000000] relative"
                  >
                    SEE FULL RESUME
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
