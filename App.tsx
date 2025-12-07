import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { StainGuru } from './components/StainGuru';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookClick = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Header onBookNow={handleBookClick} />
      
      <main className="flex-grow">
        <Hero onBookNow={handleBookClick} />
        <Services />
        <HowItWorks />
        
        {/* About Us Mini Section */}
        <section className="py-24 bg-white relative overflow-hidden">
             {/* Decorative background blob */}
            <div className="absolute -left-20 top-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                <div className="flex-1 w-full">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-200 rounded-3xl transform -rotate-2"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1517677208171-0bc67c9d1945?q=80&w=2070&auto=format&fit=crop" 
                            alt="BubblyGo Mandya Facility" 
                            className="rounded-3xl shadow-2xl w-full relative z-10" 
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <span className="text-brand-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Story</span>
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Bringing Professional Laundry Care to Mandya</h2>
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                        Started right here in <strong>Mandya</strong>, BubblyGo was born from a simple desire: to give families in our city more free time. We know that between work, traffic, and family, doing laundry is the last thing you want to worry about.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        Whether it's the red soil stains from the field or coffee spills on your office shirt, our expert team in Vidya Nagar uses advanced technology and eco-friendly detergents to make your clothes look brand new.
                    </p>
                    <button onClick={handleBookClick} className="text-brand-600 font-bold border-b-2 border-brand-600 hover:text-brand-700 hover:border-brand-700 transition pb-1">
                        Schedule a Pickup Today &rarr;
                    </button>
                </div>
            </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      {/* Floating Buttons */}
      <StainGuru />
      <WhatsAppButton />
    </div>
  );
}

export default App;