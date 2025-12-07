import React from 'react';
import { Icons } from './Icons';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden flex items-center justify-center">
       {/* Minimal Background Accents */}
       <div className="absolute top-0 left-0 w-full h-full">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-[100px]"></div>
       </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto border border-white/10 bg-white/5 backdrop-blur-md rounded-[3rem] p-12 shadow-2xl">
            <div className="flex justify-center gap-2 text-brand-400 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                    <Icons.Star key={s} fill="currentColor" size={36} className="drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                ))}
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6 tracking-tight text-white">
                Our <span className="italic text-brand-400">Promise</span>.
            </h2>
            
            <p className="text-slate-300 text-lg md:text-xl font-light tracking-wide max-w-lg mx-auto leading-relaxed">
                Mandya's newest premium laundry service is here. We are committed to delivering 5-star care for your clothes.
            </p>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-slate-400 uppercase tracking-widest font-semibold">
                <span>Trusted Choice</span>
                <span className="hidden md:block w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                <span>Premium Quality Guaranteed</span>
            </div>
        </div>
      </div>
    </section>
  );
};