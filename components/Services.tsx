import React from 'react';
import { Icons } from './Icons';
import { CONTENT } from '../content';

interface ServicesProps {
    onBookService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm bg-brand-50 px-3 py-1 rounded-full">Our Pricing</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4 mb-6">Simple, Transparent Rates</h2>
          <p className="text-lg text-slate-600">
            Professional care for every fabric. Choose the service that fits your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTENT.services.map((service) => {
            // @ts-ignore - Dynamic icon mapping
            const IconComponent = Icons[service.iconName] || Icons.Shirt;
            const isExpress = service.isExpress;
            
            return (
              <div 
                key={service.id} 
                onClick={() => onBookService(service.title)}
                className={`group p-8 rounded-[2rem] border transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden ${
                  isExpress 
                  ? 'bg-gradient-to-br from-brand-900 to-slate-900 text-white border-transparent shadow-xl' 
                  : 'bg-white border-slate-100 hover:border-brand-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Click indicator hint on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                      isExpress ? 'bg-white/10 text-brand-300' : 'bg-brand-50 text-brand-600'
                  }`}>
                    <IconComponent size={28} />
                  </div>
                  {isExpress && (
                    <span className="px-3 py-1 bg-brand-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                      Fast
                    </span>
                  )}
                </div>

                <h3 className={`text-xl font-bold mb-3 ${isExpress ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
                <p className={`mb-8 leading-relaxed flex-grow ${isExpress ? 'text-slate-300' : 'text-slate-500'}`}>
                  {service.description}
                </p>
                
                <div className={`mt-auto pt-6 border-t ${isExpress ? 'border-white/10' : 'border-slate-100'} flex items-center justify-between`}>
                   <span className={`text-sm font-medium ${isExpress ? 'text-brand-300' : 'text-slate-400'}`}>Starting at</span>
                   <div className={`text-2xl font-bold ${isExpress ? 'text-white' : 'text-brand-700'}`}>
                    {service.price}
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};