import React from 'react';
import { Icons } from './Icons';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id?: string) => {
    e.preventDefault();
    if (id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-14 w-auto">
                {/* We pass text-white so the "Bubblygo" text turns white, but the circle stays yellow */}
                <Logo className="h-full w-auto text-white" />
              </div>
            </div>
            <p className="text-base text-slate-400 leading-relaxed mb-6">
              Mandya's most trusted laundry partner. We bring premium fabric care right to your doorstep, so you can enjoy the sweetness of Sugar City!
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition cursor-pointer">
                <span className="font-bold text-xs text-white">FB</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition cursor-pointer">
                <span className="font-bold text-xs text-white">IG</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition cursor-pointer">
                <span className="font-bold text-xs text-white">TW</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-base">
              <li><a href="#" onClick={(e) => handleNavClick(e)} className="hover:text-brand-400 transition flex items-center gap-2"><Icons.CheckCircle size={14} className="opacity-0 hover:opacity-100 transition" /> Home</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-brand-400 transition flex items-center gap-2"><Icons.CheckCircle size={14} className="opacity-0 hover:opacity-100 transition" /> Services</a></li>
              <li><a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="hover:text-brand-400 transition flex items-center gap-2"><Icons.CheckCircle size={14} className="opacity-0 hover:opacity-100 transition" /> How It Works</a></li>
              <li><a href="#" className="hover:text-brand-400 transition flex items-center gap-2"><Icons.CheckCircle size={14} className="opacity-0 hover:opacity-100 transition" /> Contact Us</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Serving Mandya</h4>
             <ul className="space-y-3 text-base">
              <li className="flex items-center gap-3">
                <Icons.MapPin size={16} className="text-brand-500" /> Vidya Nagar
              </li>
              <li className="flex items-center gap-3">
                <Icons.MapPin size={16} className="text-brand-500" /> Sugar Town
              </li>
              <li className="flex items-center gap-3">
                <Icons.MapPin size={16} className="text-brand-500" /> Ashok Nagar
              </li>
              <li className="flex items-center gap-3">
                <Icons.MapPin size={16} className="text-brand-500" /> VV Nagar & More
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
             <ul className="space-y-6 text-base">
               <li className="flex items-start gap-4">
                 <div className="bg-slate-800 p-2 rounded-lg text-brand-500"><Icons.Phone size={20} /></div>
                 <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Call Us</p>
                    <span className="text-white">+91 98765 43210</span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="bg-slate-800 p-2 rounded-lg text-brand-500"><Icons.MapPin size={20} /></div>
                 <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Visit Us</p>
                    <span className="text-slate-300">#42, 1st Main Road,<br/>Vidya Nagar, Mandya - 571401</span>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} BubblyGo Laundry Mandya. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};