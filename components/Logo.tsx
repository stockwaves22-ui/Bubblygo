import React, { useState } from 'react';
import { CONTENT } from '../content';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  const [imgError, setImgError] = useState(false);
  const { logoUrl } = CONTENT.global;

  // Use the custom SVG logo if no URL is provided or if the image fails to load
  if (!logoUrl || imgError) {
     return (
        <div className={`flex items-center gap-2.5 ${className}`}>
           {/* Custom Icon: Two bubbles merging */}
           <div className="relative w-8 h-8 flex-shrink-0">
              <div className="absolute inset-0 bg-brand-500 rounded-full opacity-20 animate-pulse"></div>
              <svg viewBox="0 0 100 100" className="w-full h-full text-brand-600" fill="currentColor">
                {/* Large Bubble */}
                <circle cx="40" cy="60" r="35" className="text-brand-600" opacity="1" />
                {/* Small Bubble overlapping */}
                <circle cx="70" cy="35" r="25" className="text-brand-400" opacity="0.9" />
                {/* Highlight/Shine */}
                <path d="M 25 50 Q 30 30 50 25" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.4" />
              </svg>
           </div>
           
           {/* Text Logo */}
           <div className="flex flex-col justify-center h-full">
             <span className="font-sans font-bold text-xl leading-none tracking-tight text-slate-900">
               Bubbly<span className="text-brand-600">Go</span>
             </span>
           </div>
        </div>
     );
  }

  return (
    <div className={`select-none inline-block ${className}`} aria-label={`${CONTENT.global.name} Logo`}>
      <img 
        src={logoUrl}
        alt={`${CONTENT.global.name} Logo`} 
        className="h-full w-auto object-contain"
        onError={() => setImgError(true)}
      />
    </div>
  );
};