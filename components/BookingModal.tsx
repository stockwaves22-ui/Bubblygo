import React, { useState } from 'react';
import { Icons } from './Icons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      alert("Booking Request Received! Our Mandya team will call you shortly.");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all">
      <div className="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl overflow-hidden relative animate-fade-in-up">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-slate-100 p-2 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition"
        >
          <Icons.X size={20} />
        </button>
        
        <div className="bg-gradient-to-r from-brand-600 to-brand-500 p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Schedule Pickup</h2>
          <p className="text-brand-100">We serve all areas in Mandya!</p>
        </div>

        <div className="p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                 <Icons.CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
              <p className="text-slate-600">Our rider will contact you shortly to confirm.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input required type="text" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition" placeholder="Enter your name" />
              </div>
              
              <div className="grid grid-cols-2 gap-5">
                 <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Mobile Number</label>
                    <input required type="tel" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition" placeholder="98765 43210" />
                 </div>
                 <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Select Area</label>
                    <select required className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition text-slate-700">
                        <option value="">Choose Area</option>
                        <option>Vidya Nagar</option>
                        <option>Sugar Town</option>
                        <option>Ashok Nagar</option>
                        <option>VV Nagar</option>
                        <option>Subhash Nagar</option>
                        <option>Chamundeshwari Nagar</option>
                        <option>Nehru Nagar</option>
                        <option>Others</option>
                    </select>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                 <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Date</label>
                    <input required type="date" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition text-slate-700" />
                 </div>
                 <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Time Slot</label>
                    <select className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition text-slate-700">
                        <option>Morning (9 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Evening (4 PM - 8 PM)</option>
                    </select>
                 </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Detailed Address</label>
                <textarea required rows={2} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition resize-none" placeholder="#123, 1st Cross, Near Park..." />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/30 transform active:scale-95"
              >
                Confirm Pickup
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};