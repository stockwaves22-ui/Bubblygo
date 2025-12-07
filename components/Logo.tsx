import React, { useState } from 'react';
import { Icons } from './Icons';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  const [imgError, setImgError] = useState(false);

  // Using the thumbnail endpoint is often more reliable for embedding than the export=view link
  const googleDriveUrl = "https://drive.google.com/thumbnail?id=1vVHYdO2LTKzbzxsE_aj2QGZZJW7-aa99&sz=w1000";

  if (imgError) {
     return (
        <div className={`flex items-center gap-2 font-bold text-2xl tracking-tight ${className}`}>
           <div className="bg-brand-100 dark:bg-brand-900 p-1.5 rounded-full text-brand-600 dark:text-brand-400">
             <Icons.Droplet size={20} fill="currentColor" />
           </div>
           <span className="text-slate-900 dark:text-white">Bubbly<span className="text-brand-500">Go</span></span>
        </div>
     );
  }

  return (
    <div className={`select-none inline-block ${className}`} aria-label="BubblyGo Logo">
      <img 
        src={googleDriveUrl}
        alt="BubblyGo Logo" 
        className="h-full w-auto object-contain"
        onError={() => setImgError(true)}
      />
    </div>
  );
};