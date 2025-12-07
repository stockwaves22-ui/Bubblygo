import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const serviceOptions = [
  "Wash & Fold - ₹60/kg",
  "Wash & Iron - ₹90/kg",
  "Steam Ironing - ₹30/pc",
  "Dry Cleaning - Starts ₹200",
  "Express Wash & Fold - ₹120/kg",
  "Express Wash & Iron - ₹150/kg",
];

const timeSlots = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM"
];

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    date: '',
    timeSlot: timeSlots[0],
    address: ''
  });

  // Pre-select service when modal opens or initialService changes
  useEffect(() => {
    if (isOpen && initialService) {
      // Find the best matching option
      const matchingOption = serviceOptions.find(opt => opt.startsWith(initialService));
      if (matchingOption) {
        setFormData(prev => ({ ...prev, serviceType: matchingOption }));
      }
    }
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSuccess(true);
    }, 600);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({
        name: '',
        phone: '',
        serviceType: '', // Reset logic handled by effect on open
        date: '',
        timeSlot: timeSlots[0],
        address: ''
    });
    onClose();
  };

  const inputClasses = "w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-brand-100 focus:border-brand-500 outline-none transition-all duration-300 text-slate-900 placeholder-slate-400";
  const labelClasses = "block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all">
      <div className="bg-white w-full max-w-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[2rem] overflow-hidden relative animate-fade-in-up border border-white/50">
        
        {/* Simple Minimal Close Button */}
        <button 
          onClick={handleClose} 
          className="absolute top-6 right-6 text-slate-400 hover:text-brand-600 transition-colors z-20 bg-slate-50 p-2 rounded-full"
        >
          <Icons.X size={20} strokeWidth={2.5} />
        </button>
        
        {isSuccess ? (
          // Classy Success State
          <div className="p-12 flex flex-col items-center justify-center text-center h-full min-h-[500px] bg-gradient-to-b from-brand-50 to-white">
            <div className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-8 border-4 border-white shadow-xl animate-bounce-slow">
              <Icons.CheckCircle size={40} strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pickup Scheduled!</h2>
            <p className="text-slate-600 mb-10 leading-relaxed max-w-xs mx-auto text-lg">
              We've received your request. Our agent will call you shortly to confirm.
            </p>
            <button 
              onClick={handleClose}
              className="px-12 py-4 bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold tracking-wide rounded-2xl hover:shadow-lg hover:shadow-brand-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        ) : (
          // Classy Modern Form
          <div className="flex flex-col h-full max-h-[90vh]">
             <div className="px-8 pt-10 pb-4 bg-gradient-to-b from-brand-50/50 to-transparent">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 rounded-full text-xs font-bold tracking-widest uppercase text-brand-700 mb-4">
                     <Icons.MapPin size={12} /> Sugar City
                 </div>
                 <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Schedule Pickup</h2>
                 <p className="text-slate-500 mt-2 font-medium">Quick & easy laundry service at your doorstep.</p>
             </div>

            <div className="px-8 pb-8 pt-2 overflow-y-auto custom-scrollbar">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-5">
                  <div className="group">
                    <label className={labelClasses}>Your Details</label>
                    <div className="space-y-4">
                        <input 
                        required 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text" 
                        className={inputClasses} 
                        placeholder="Full Name" 
                        />
                        <input 
                        required 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel" 
                        className={inputClasses} 
                        placeholder="Mobile Number" 
                        />
                    </div>
                  </div>
                </div>

                <div>
                   <label className={labelClasses}>Service Type</label>
                   <div className="relative">
                        <select 
                            required 
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                        >
                            <option value="">Select a service...</option>
                            {serviceOptions.map((option, idx) => (
                            <option key={idx} value={option}>{option}</option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <Icons.ArrowDown size={18} />
                        </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className={labelClasses}>Date</label>
                        <div className="relative">
                            {/* 
                                CSS Trick for native date picker:
                                1. We hide the default calendar indicator icon but expand its clickable area to cover the entire input.
                                2. This ensures clicking anywhere on the input triggers the native picker.
                                3. We place our custom icon absolutely positioned behind or with pointer-events-none.
                            */}
                            <input 
                                required 
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                type="date" 
                                className={`${inputClasses} text-sm cursor-pointer pr-10 relative z-10 
                                [&::-webkit-calendar-picker-indicator]:opacity-0 
                                [&::-webkit-calendar-picker-indicator]:absolute 
                                [&::-webkit-calendar-picker-indicator]:w-full 
                                [&::-webkit-calendar-picker-indicator]:h-full 
                                [&::-webkit-calendar-picker-indicator]:top-0 
                                [&::-webkit-calendar-picker-indicator]:left-0 
                                [&::-webkit-calendar-picker-indicator]:cursor-pointer`}
                            />
                             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 z-0">
                                <Icons.Calendar size={18} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        <label className={labelClasses}>Time</label>
                        <div className="relative">
                            <select 
                            name="timeSlot"
                            value={formData.timeSlot}
                            onChange={handleChange}
                            className={`${inputClasses} appearance-none text-sm cursor-pointer pr-10`}
                            >
                                {timeSlots.map((slot) => (
                                    <option key={slot} value={slot}>{slot}</option>
                                ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                <Icons.Clock size={16} />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                  <label className={labelClasses}>Pickup Address</label>
                  <textarea 
                    required 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={2} 
                    className={`${inputClasses} resize-none`} 
                    placeholder="#42, Vidya Nagar..." 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white py-4 rounded-2xl font-bold text-lg tracking-wide shadow-lg shadow-brand-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mt-2 flex items-center justify-center gap-2 group"
                >
                  Confirm Pickup
                  <Icons.ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};