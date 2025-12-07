import React from 'react';
import { Icons } from './Icons';
import { Logo } from './Logo';
import { CONTENT } from '../content';

export const Footer: React.FC = () => {
  const { contact, socials } = CONTENT.global;

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
    <footer className="bg-white text-slate-600 pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand & Socials */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-14 w-auto">
                <div className="text-slate-900 h-full w-auto">
                    <Logo className="h-full w-auto" />
                </div>
              </div>
            </div>
            <p className="text-base text-slate-500 leading-relaxed mb-6 max-w-sm">
              Mandya's most trusted laundry partner. We bring premium fabric care right to your doorstep, so you can enjoy the sweetness of Sugar City!
            </p>
            <div className="flex gap-4">
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition cursor-pointer" aria-label="Facebook">
                <Icons.Facebook size={20} />
              </a>
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition cursor-pointer" aria-label="Instagram">
                <Icons.Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-slate-900 font-bold text-lg mb-6">Serving Sugar City</h4>
            <p className="mb-4 text-slate-500">
              We cover the entire Mandya city limits for pickup and delivery.
            </p>
             <ul className="space-y-3 text-base">
              <li className="flex items-center gap-3">
                <Icons.MapPin size={16} className="text-brand-600" /> Mandya City
              </li>
              <li className="flex items-center gap-3">
                <Icons.Clock size={16} className="text-brand-600" /> 8:00 AM - 8:00 PM
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="text-slate-900 font-bold text-lg mb-6">Get in Touch</h4>
             <ul className="space-y-6 text-base">
               <li className="flex items-start gap-4">
                 <div className="bg-brand-50 p-2 rounded-lg text-brand-600"><Icons.Phone size={20} /></div>
                 <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Call / WhatsApp</p>
                    <a href={`https://wa.me/${contact.whatsappNumber}`} className="text-slate-800 font-medium hover:text-brand-600 transition">{contact.displayPhone}</a>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="bg-brand-50 p-2 rounded-lg text-brand-600"><Icons.Send size={20} /></div>
                 <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Email Us</p>
                    <a href={`mailto:${contact.email}`} className="text-slate-600 hover:text-brand-600 transition break-all">{contact.email}</a>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="bg-brand-50 p-2 rounded-lg text-brand-600"><Icons.MapPin size={20} /></div>
                 <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Address</p>
                    <p className="text-slate-600 text-sm">{contact.address}</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 text-center text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} {CONTENT.global.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};