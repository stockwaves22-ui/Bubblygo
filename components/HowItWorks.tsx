import React from 'react';
import { Icons } from './Icons';
import { Step } from '../types';

const steps: Step[] = [
  {
    id: 1,
    title: 'Book Online',
    description: 'Select your service and preferred pickup time via our app or website.',
    iconName: 'Phone',
  },
  {
    id: 2,
    title: 'We Pickup',
    description: 'Our driver arrives at your doorstep with custom laundry bags.',
    iconName: 'Truck',
  },
  {
    id: 3,
    title: 'We Wash',
    description: 'Your clothes are processed using premium, eco-friendly detergents.',
    iconName: 'Droplet',
  },
  {
    id: 4,
    title: 'Delivery',
    description: 'Fresh, clean, and neatly packed clothes delivered back to you.',
    iconName: 'CheckCircle',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm">Process</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => {
             const IconComponent = Icons[step.iconName];
             return (
              <div key={step.id} className="relative flex flex-col items-center text-center group">
                
                {/* Desktop Horizontal Line (Only connect to next item) */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-1 bg-slate-200 -z-10 transform translate-x-1/2">
                    <div className="h-full bg-brand-200 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                )}

                {/* Icon Circle */}
                <div className="w-20 h-20 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center text-slate-400 shadow-sm mb-6 z-10 transition-all duration-300 group-hover:border-brand-500 group-hover:text-brand-600 group-hover:scale-110 group-hover:shadow-lg lg:group-hover:-translate-y-2">
                   <IconComponent size={32} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">{step.title}</h3>
                <p className="text-slate-600 text-sm max-w-xs leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile Vertical Line */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-12 left-1/2 w-1 h-12 bg-slate-200 -translate-x-1/2 flex flex-col justify-center items-center overflow-hidden">
                     <div className="w-full h-full bg-brand-200 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                  </div>
                )}
              </div>
             );
          })}
        </div>
      </div>
    </section>
  );
};