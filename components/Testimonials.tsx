import React from 'react';
import { Icons } from './Icons';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: '1',
    name: 'Lakshmi Gowda',
    role: 'Vidya Nagar',
    comment: 'Finally a reliable laundry service in Mandya! They took great care of my silk sarees. Highly recommended.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    role: 'Sugar Town',
    comment: 'Super convenient. The pickup boy was on time, and the clothes came back neatly packed. Pricing is very reasonable.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '3',
    name: 'Priya Shetty',
    role: 'Ashok Nagar',
    comment: 'I use their Wash & Iron service for my husband\'s office wear. It saves me so much time every week!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
       {/* Background Patterns */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Mandya Loves BubblyGo</h2>
          <div className="flex justify-center gap-1 text-accent-500 mb-4">
            {[1, 2, 3, 4, 5].map((s) => <Icons.Star key={s} fill="currentColor" size={28} />)}
          </div>
          <p className="text-slate-300 text-lg">Trusted by hundreds of families in your neighborhood</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-brand-500 transition duration-300">
              <div className="mb-6">
                <Icons.Sparkles className="text-brand-400" size={32} />
              </div>
              
              <p className="text-slate-200 text-lg mb-8 leading-relaxed">
                "{review.comment}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-500 object-cover"
                />
                <div>
                  <h4 className="font-bold text-white text-lg">{review.name}</h4>
                  <div className="flex items-center gap-1 text-sm text-brand-300">
                    <Icons.MapPin size={12} />
                    <span>{review.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};