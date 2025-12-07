import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CONTENT } from './content';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const { about } = CONTENT;

  const handleBookClick = () => {
    setSelectedService(''); // Reset if opened from generic button
    setIsBookingOpen(true);
  };

  const handleServiceSelect = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  // Helper to parse markdown-style bold text e.g. **Sugar City**
  const parseText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Header onBookNow={handleBookClick} />
      
      <main className="flex-grow">
        <Hero onBookNow={handleBookClick} />
        <Services onBookService={handleServiceSelect} />
        <HowItWorks />
        
        {/* About Us Mini Section - Refined Layout (Text Only) */}
        <section className="py-24 bg-white relative overflow-hidden">
             {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-brand-600 font-bold uppercase tracking-wider text-sm mb-4 block">{about.sectionTitle}</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">{about.headline}</h2>
                    <p className="text-slate-600 mb-8 text-lg md:text-xl leading-relaxed">
                        {parseText(about.paragraph1)}
                    </p>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10">
                        {parseText(about.paragraph2)}
                    </p>
                    <button onClick={handleBookClick} className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
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
        initialService={selectedService} 
      />

      {/* Floating Buttons */}
      <WhatsAppButton />
    </div>
  );
}

export default App;