import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    // The text-color is inherited from parent or defaults to slate-900.
    // Pass 'text-white' in className to make the text white.
    <div className={`select-none inline-block text-slate-900 ${className}`} aria-label="BubblyGo Logo">
      <svg 
        viewBox="0 0 340 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Bright Yellow Circle - Fixed Color */}
        <circle cx="50" cy="50" r="42" fill="#FFF500" />
        
        {/* Text - Uses currentColor to adapt to header/footer */}
        <text 
          x="35" 
          y="75" 
          fill="currentColor" 
          fontFamily="'Times New Roman', Times, serif" 
          fontWeight="bold" 
          fontSize="80" 
          letterSpacing="-3"
        >
          Bubblygo
        </text>
      </svg>
    </div>
  );
};