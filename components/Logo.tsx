import React, { useState } from 'react';
import { Icons } from './Icons';
import { CONTENT } from '../content';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
     return (
        <div className={`flex items-center gap-2 font-bold text-2xl tracking-tight ${className}`}>
           <div className="bg-brand-100 p-1.5 rounded-full text-brand-600">
             <Icons.Droplet size={20} fill="currentColor" />
           </div>
           <span className="text-slate-900">Bubbly<span className="text-brand-500">Go</span></span>
        </div>
     );
  }

  return (
    <div className={`select-none inline-block ${className}`} aria-label={`${CONTENT.global.name} Logo`}>
      <img 
        src={CONTENT.global.logoUrl}
        alt={`${CONTENT.global.name} Logo`} 
        className="h-full w-auto object-contain"
        onError={() => setImgError(true)}
      />
    </div>
  );
};