import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="flex-1 py-20 md:py-32 lg:py-44 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start">
          <img 
            src="/photo.png" 
            alt="Profile Photo" 
            className="w-32 h-auto sm:w-40 object-cover rounded-lg"
          />
          <div className="mt-4 sm:mt-10 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold">CELESTE Y</h1>
            <div className="mt-2 text-gray-600 text-sm sm:text-base">
              <span>CELL: 2898881703</span>
              <span className="mx-2">•</span>
              <span>E-MAIL: <a href="mailto:yanxi19980617@gmail.com" className="text-[#0ED4D4] hover:underline">yanxi19980617@gmail.com</a></span>
              <div>
                <span>LOCATION: Ontario, Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#0ED4D4] mb-4">EDUCATION</h2>
          <div className="mb-4">
            <div className="font-semibold">Bachelor of Fine Arts</div>
            <div className="text-gray-600">Xi'an Academy of Fine Arts, Xi'an City, China</div>
            <div className="text-gray-600">2016-2020</div>
          </div>
          <div>
            <div className="font-semibold">Sheridan College</div>
            <div className="text-gray-600">Interactive Media Management</div>
            <div className="text-gray-600">2024-2025</div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#0ED4D4] mb-4">SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Product Design</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
                <li>Designed Web Interfaces</li>
                <li>UI/UX Experience</li>
                <li>Interactive Prototypes</li>
              </ul>

              <h3 className="font-semibold mt-4 mb-2">Design and Art</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
                <li>Graphic Design</li>
                <li>Illustration</li>
              </ul>

              <h3 className="font-semibold mt-4 mb-2">Product Management</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
                <li>Created Project Timelines</li>
                <li>Product Life-cycle Management</li>
                <li>Team Management</li>
                <li>Problem solving</li>
                <li>Work in Interdisciplinary Teams</li>
              </ul>

              <h3 className="font-semibold mt-4 mb-2">Product Engineering</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
                <li>Web Design</li>
                <li>Front-end and Back-end technical</li>
                <li>Mobile and Web Development</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Software</h3>
              <div className="mb-4">
                <h4 className="font-semibold">Design:</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
                  <li>Figma</li>
                  <li>Adobe Creative Cloud (Illustrator, Photoshop, XD)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold">Management:</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
                  <li>Asana</li>
                  <li>Figma</li>
                  <li>Teams</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Engineering:</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
                  <li>JavaScript</li>
                  <li>Html</li>
                  <li>React</li>
                  <li>Database</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#0ED4D4] mb-4">EXPERIENCE</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm sm:text-base">Company 1 'TEN Art Studio', Shanghai, China</h3>
              <div className="text-gray-600 text-sm sm:text-base">from 202012 to 202103 (Designer and Art Manager)</div>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base">Company 2 'Welcome To the Future' Art Studio, Shanghai, China</h3>
              <div className="text-gray-600 text-sm sm:text-base">from 202106 to 202204 (Illustrator and Visual Artist)</div>
              <div className="text-gray-600 text-sm sm:text-base">-Worked as an illustrator and cooperate with many international brands such as Nike, Levis, Johnnie Walker in 2022.</div>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base">Company 3 Changzhou Zhenxin Art Training Co., Ltd, China</h3>
              <div className="text-gray-600 text-sm sm:text-base">from 202207 to 202402 (Graphic Designer and Manager)</div>
            </div>
          </div>
        </div>

        {/* LinkedIn Section */}
        <div>
          <h2 className="text-xl font-semibold text-[#3CDEDE] mb-4">LINKEDIN</h2>
          <a href="https://www.linkedin.com/in/xi-y-celeste0617" className="text-[#0ED4D4] hover:underline text-sm sm:text-base">
            www.linkedin.com/in/xi-y-celeste0617
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
