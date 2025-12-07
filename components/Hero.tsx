import React from 'react';
import { Icons } from './Icons';

interface HeroProps {
  onBookNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  const scrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const element = document.getElementById('how-it-works');
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-to-br from-brand-50 via-white to-brand-100 pt-32 pb-20 overflow-hidden">
      {/* Decorative Bubbles */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-brand-200 rounded-full opacity-30 blur-xl bubble-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-30 blur-xl bubble-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-blue-300 rounded-full opacity-40 blur-lg bubble-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10 gap-12">
        <div className="flex-1 text-center lg:text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-wide text-brand-700 bg-white border border-brand-100 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Serving All of Mandya
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Laundry Done <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              Without the Stress
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            From <strong>Vidya Nagar</strong> to <strong>Sugar Town</strong>, we pick up, wash, iron, and deliver within 24 hours. Enjoy your free time!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={onBookNow}
              className="px-8 py-4 bg-brand-600 text-white font-bold rounded-full shadow-brand-500/30 shadow-lg hover:bg-brand-700 hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Icons.Truck size={22} />
              Book Pickup Now
            </button>
            <a 
              href="#how-it-works"
              onClick={scrollToHowItWorks}
              className="px-8 py-4 bg-white text-slate-700 font-bold rounded-full shadow-sm hover:bg-gray-50 hover:shadow-md transition border border-slate-200 flex items-center justify-center"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-green-100 rounded-full text-green-600"><Icons.CheckCircle size={14} /></div>
              Hygienic Wash
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 bg-green-100 rounded-full text-green-600"><Icons.CheckCircle size={14} /></div>
              Next Day Delivery
            </div>
             <div className="flex items-center gap-2">
              <div className="p-1 bg-green-100 rounded-full text-green-600"><Icons.CheckCircle size={14} /></div>
              Affordable Rates
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-lg lg:max-w-xl relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white transform rotate-1 hover:rotate-0 transition duration-700 ease-out">
            <img 
              src="https://images.unsplash.com/photo-1545173168-9f1947eebb8f?q=80&w=2071&auto=format&fit=crop" 
              alt="Fresh Laundry in Mandya" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl flex items-center gap-4 shadow-lg">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0">
                    <Icons.Sparkles size={24} />
                </div>
                <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Current Status</p>
                    <p className="text-base font-bold text-slate-900">Delivering Smiles to Mandya!</p>
                </div>
            </div>
          </div>
          
          {/* Background decoration behind image */}
          <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-brand-200/50 rounded-[2.5rem] -rotate-3"></div>
        </div>
      </div>
    </section>
  );
};