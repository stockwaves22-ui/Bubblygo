import React from 'react';
import { Icons } from './Icons';
import { CONTENT } from '../content';

interface HeroProps {
  onBookNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  const { hero } = CONTENT;

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-to-br from-brand-50 via-white to-brand-100 pt-32 pb-20 overflow-hidden">
      {/* Decorative Bubbles */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-brand-200 rounded-full opacity-30 blur-xl bubble-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-30 blur-xl bubble-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-blue-300 rounded-full opacity-40 blur-lg bubble-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10 gap-12">
        <div className="flex-1 text-center lg:text-left animate-fade-in-up">
          {/* Popping Green GPS Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-wide text-brand-700 bg-white border border-brand-100 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            {hero.badge}
          </div>
          
          {/* One Line Headline - Bigger on Mobile */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              {hero.titlePart1}
            </span> {hero.titlePart2}
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={onBookNow}
              className="px-10 py-5 bg-brand-600 text-white font-bold rounded-full shadow-brand-500/30 shadow-lg hover:bg-brand-700 hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
            >
              <Icons.Truck size={24} />
              {hero.buttonText}
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-sm font-medium text-slate-500">
            {hero.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="p-1 bg-green-100 rounded-full text-green-600"><Icons.CheckCircle size={14} /></div>
                {feature}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-lg lg:max-w-xl relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white transform rotate-1 hover:rotate-0 transition duration-700 ease-out group">
            {/* Editable Image from Content */}
            <img 
              src={hero.mainImage} 
              alt="Fresh Laundry Stack" 
              className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
            />
            {/* Floating Card - Improved */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl p-5 rounded-2xl flex items-center gap-5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-white/20">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center text-yellow-600 shrink-0 border border-yellow-200">
                    <Icons.Sparkles size={28} />
                </div>
                <div className="flex-1">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Our Mission</p>
                    <p className="text-lg font-bold text-slate-900 leading-none">Delivering Smiles</p>
                </div>
                <div className="hidden sm:flex h-10 w-10 bg-brand-500 rounded-full items-center justify-center text-white shadow-lg shadow-brand-500/30 animate-pulse">
                    <Icons.CheckCircle size={20} />
                </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-brand-200/50 rounded-[2.5rem] -rotate-3"></div>
        </div>
      </div>
    </section>
  );
};