import React from 'react';
import { Icons } from './Icons';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Wash & Fold',
    description: 'Perfect for daily wear. We wash, dry, and neatly fold your clothes.',
    price: '₹60 / kg',
    iconName: 'Shirt',
  },
  {
    id: '2',
    title: 'Wash & Iron',
    description: 'Crisp steam ironing. Ideal for office shirts, uniforms, and formal wear.',
    price: '₹25 / item',
    iconName: 'Wind',
  },
  {
    id: '3',
    title: 'Dry Cleaning',
    description: 'Premium care for Silk Sarees, Suits, and heavy blankets.',
    price: 'From ₹150',
    iconName: 'Sparkles',
  },
  {
    id: '4',
    title: 'Express Delivery',
    description: 'Need it fast? Get 6-hour turnaround for urgent requirements.',
    price: '1.5x Fare',
    iconName: 'Clock',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Premium Care for Your Clothes</h2>
          <p className="text-lg text-slate-600">
            We understand the value of your garments. From your favorite Kanchipuram silk saree to your daily cotton shirts, we handle everything with care in Mandya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const IconComponent = Icons[service.iconName];
            
            return (
              <div 
                key={service.id} 
                className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-brand-100 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md transition-transform group-hover:scale-110 ${
                    idx === 0 ? 'bg-blue-500' : 
                    idx === 1 ? 'bg-cyan-500' : 
                    idx === 2 ? 'bg-purple-500' : 'bg-orange-500'
                }`}>
                  <IconComponent size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100">
                   <div className="text-xl font-bold text-brand-700">
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