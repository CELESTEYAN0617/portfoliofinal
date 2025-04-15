import React from 'react';

interface ColorPaletteProps {
  colors: string[];
  logo?: string;
  displayAreaColor?: string;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ 
  colors = ['#FE542F', '#EB2071', '#910C9E', '#3C47F3'],
  logo,
  displayAreaColor = '#FE542F'
}) => {
  return (
    <div className="mb-20">
      <div className="flex w-full">
        {/* Grid of color blocks */}
        <div className="flex-1 flex justify-center">
          <div className="grid grid-cols-2 gap-6">
            {colors.map((color, index) => (
              <div 
                key={index}
                className="w-32 h-32 border border-black"
                style={{ 
                  backgroundColor: color,
                  borderColor: color === '#FFFFFF' || color === '#F2F2F2' ? '#000000' : 'transparent'
                }}
              >
                <div className="flex justify-end p-2">
                  <span className="text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">
                    {color.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Large display area */}
        <div className="flex-1 flex justify-center">
          <div 
            className="relative w-[600px] h-[220px] flex items-center justify-center"
            style={{ backgroundColor: displayAreaColor }}
          >
            {logo && (
              <img 
                src={logo}
                alt="Display Logo"
                className="w-32 h-32 invert"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette; 