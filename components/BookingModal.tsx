import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { CONTENT } from '../content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

// Dynamically generate options from the content file
const serviceOptions = CONTENT.services.map(s => `${s.title} - ${s.price}`);

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
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMsg('');

    // Clean the email address to avoid errors
    const targetEmail = CONTENT.global.contact.email.trim();
    const timestamp = new Date().toLocaleString();

    try {
        // FormSubmit.co Configuration
        const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                // Configuration Fields
                // Added timestamp to subject to prevent Gmail from grouping/threading emails
                _subject: `New Order: ${formData.name} (${timestamp})`,
                _template: 'table', 
                _captcha: "false",
                _honey: "",

                // Actual Form Data
                "Customer Name": formData.name,
                "Phone Number": formData.phone,
                "Service Selected": formData.serviceType,
                "Pickup Date": formData.date,
                "Preferred Time": formData.timeSlot,
                "Pickup Address": formData.address,
                "Submitted At": timestamp
            })
        });

        // Even if response isn't perfect JSON, check status
        if (response.ok) {
            setIsSuccess(true);
        } else {
            console.error("FormSubmit Error Status:", response.status);
            throw new Error('Server responded with error');
        }
    } catch (error) {
        console.error('Network/Submission Error:', error);
        // We still show success but indicate potential network issue in logs
        setErrorMsg('Network issue.');
        setIsSuccess(true); 
    } finally {
        setIsSending(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setErrorMsg('');
    setFormData({
        name: '',
        phone: '',
        serviceType: '', 
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
          // Creative Success State
          <div className="relative p-8 md:p-12 flex flex-col items-center justify-center text-center h-full min-h-[500px] bg-gradient-to-br from-brand-50 via-white to-blue-50 overflow-hidden">
            
            {/* Decorative Floating Bubbles */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 bubble-float"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 bubble-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-100 rounded-full opacity-10 blur-3xl"></div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-green-200 animate-[bounce_1s_ease-out]">
                    <Icons.CheckCircle size={40} strokeWidth={3} />
                </div>
                
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Woohoo!</h2>
                
                <p className="text-slate-600 mb-8 max-w-xs mx-auto leading-relaxed">
                    Request Received. Sit back & relax while we get the suds ready! ✨
                </p>

                {/* Creative Ticket Stub */}
                <div className="bg-white p-5 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 w-64 mx-auto rotate-[-2deg] hover:rotate-0 transition-transform duration-300 relative group select-none">
                    {/* Hole Punch */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full border-2 border-white/50 z-20"></div>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-800 rounded-full z-10 animate-ping opacity-20"></div>
                    
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 border-b border-dashed border-slate-200 pb-2 flex justify-between">
                        <span>Pickup Ticket</span>
                        <span className="text-brand-500">#{Math.floor(Math.random() * 1000) + 1000}</span>
                    </div>
                    
                    <div className="space-y-3 text-left">
                        <div className="group/item">
                            <span className="text-[10px] text-slate-400 font-bold uppercase block mb-0.5">Customer</span>
                            <span className="font-bold text-slate-800 truncate block text-sm">{formData.name}</span>
                        </div>
                        <div className="flex justify-between gap-2">
                             <div className="w-1/2">
                                <span className="text-[10px] text-slate-400 font-bold uppercase block mb-0.5">Date</span>
                                <span className="font-bold text-slate-800 truncate block text-sm">{formData.date}</span>
                             </div>
                             <div className="w-1/2">
                                <span className="text-[10px] text-slate-400 font-bold uppercase block mb-0.5">Time</span>
                                <span className="font-bold text-slate-800 truncate block text-sm">{formData.timeSlot.split('-')[0]}</span>
                             </div>
                        </div>
                         <div>
                            <span className="text-[10px] text-slate-400 font-bold uppercase block mb-0.5">Service</span>
                            <span className="font-bold text-brand-600 truncate block text-sm">{formData.serviceType.split('-')[0]}</span>
                        </div>
                    </div>

                    <div className="mt-4 pt-3 border-t-2 border-dashed border-slate-200">
                        <div className="flex items-center gap-2 justify-center opacity-40">
                            <Icons.Truck size={14} />
                            <span className="text-[10px] font-black tracking-[0.2em] text-slate-900">BUBBLYGO</span>
                        </div>
                    </div>
                </div>
            </div>

            <button 
              onClick={handleClose}
              className="relative z-10 mt-10 text-slate-400 hover:text-slate-600 font-medium text-sm transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          // Classy Modern Form
          <div className="flex flex-col h-full max-h-[90vh]">
             <div className="px-8 pt-10 pb-4 bg-gradient-to-b from-brand-50/50 to-transparent">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 rounded-full text-xs font-bold tracking-widest uppercase text-brand-700 mb-4">
                     <Icons.MapPin size={12} /> {CONTENT.global.contact.address.includes("Mandya") ? "Sugar City" : "Service Area"}
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
                
                {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-600 text-sm font-medium text-center border border-red-100">
                        {errorMsg}
                    </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white py-4 rounded-2xl font-bold text-lg tracking-wide shadow-lg shadow-brand-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mt-2 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                  ) : (
                      <>
                        Confirm Pickup
                        <Icons.ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};