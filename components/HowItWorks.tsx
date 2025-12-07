import React from 'react';
import { Icons } from './Icons';
import { CONTENT } from '../content';

export const HowItWorks: React.FC = () => {
  const steps = CONTENT.howItWorks;

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">What We Do</h2>
             <div className="h-1.5 w-24 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start justify-between relative gap-12 lg:gap-0 px-4">
                
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-12 left-16 right-16 h-1 bg-slate-100 -z-10">
                    <div className="h-full w-full bg-gradient-to-r from-transparent via-brand-200 to-transparent opacity-50"></div>
                </div>

                {steps.map((step, index) => {
                    // @ts-ignore
                    const IconComponent = Icons[step.iconName] || Icons.CheckCircle;
                    const isLast = index === steps.length - 1;

                    return (
                        <div key={step.id} className="flex-1 flex flex-col items-center relative group w-full">
                            
                            {step.id === 3 ? (
                                /* Washing Machine Animation */
                                <div className="w-24 h-24 bg-white rounded-2xl border-[3px] border-slate-200 shadow-xl flex items-center justify-center relative overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-300 z-10">
                                    {/* Machine UI */}
                                    <div className="absolute top-2 right-2 flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                                    </div>
                                    {/* Drum */}
                                    <div className="w-16 h-16 rounded-full border-[3px] border-slate-300 bg-slate-50 flex items-center justify-center overflow-hidden relative">
                                        {/* Water */}
                                        <div className="absolute bottom-0 w-full h-1/2 bg-blue-400/30 animate-pulse"></div>
                                        {/* Spinning Shirt */}
                                        <div className="animate-[spin_2s_linear_infinite]">
                                           <Icons.Shirt size={22} className="text-brand-600" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Standard Icon Circle */
                                <div className="w-24 h-24 bg-white rounded-full border-[3px] border-slate-200 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 z-10">
                                     <div className={
                                         step.id === 1 ? 'group-hover:animate-tap' : 
                                         step.id === 2 ? 'group-hover:animate-drive' : 
                                         step.id === 4 ? 'group-hover:animate-bounce' : ''
                                     }>
                                         <IconComponent 
                                            size={32} 
                                            className="text-brand-600" 
                                         />
                                     </div>
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-slate-500 font-medium">{step.description}</p>
                            
                            {/* Mobile Arrow */}
                            {!isLast && (
                                <div className="lg:hidden mt-8 text-slate-300">
                                    <Icons.ArrowDown size={24} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};