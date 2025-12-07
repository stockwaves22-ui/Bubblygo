import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { Logo } from './Logo';

interface HeaderProps {
    onBookNow: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={(e) => handleNavClick(e)} className="flex items-center gap-2 group">
          <div className="h-12 w-auto">
             <Logo className="h-full w-auto" />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" onClick={(e) => handleNavClick(e)} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition">Home</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition">Services</a>
          <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition">How It Works</a>
          <button 
            onClick={onBookNow}
            className="px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-full hover:bg-brand-700 transition shadow-md"
          >
            Book Pickup
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <Icons.X size={28} /> : <Icons.Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 animate-fade-in">
           <a href="#" className="text-lg font-medium text-slate-700" onClick={(e) => handleNavClick(e)}>Home</a>
           <a href="#services" className="text-lg font-medium text-slate-700" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
           <a href="#how-it-works" className="text-lg font-medium text-slate-700" onClick={(e) => handleNavClick(e, 'how-it-works')}>How It Works</a>
           <hr className="border-slate-100" />
           <button 
             onClick={() => {
                onBookNow();
                setMobileMenuOpen(false);
             }}
             className="w-full py-3 bg-brand-600 text-white font-semibold rounded-lg"
           >
             Book Pickup
           </button>
        </div>
      )}
    </header>
  );
};