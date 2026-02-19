import React, { useState, useEffect } from 'react';
import BookingModal from './BookingModal';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update navigation links for Next.js routing
  const getHref = (link: string) => {
    if (link === 'About') return '/about';
    if (link === 'Services') return '/services';
    if (link === 'Treatments') return '/treatments';
    if (link === 'Contact') return '/contact';
    // For other sections, we might want to stay on the home page or navigate there
    if (link === 'Stories') return `/#${link.toLowerCase()}`;
    return '#';
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? 'bg-cream/80 backdrop-blur-md border-b border-brand-black/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo / Brand */}
          <div className="flex-1 md:flex-none md:w-32">
             <Link href="/" className={`font-heading text-2xl tracking-wide font-bold uppercase transition-colors ${scrolled || mobileMenuOpen ? 'text-brand-black' : 'text-brand-black'}`}>
               Optimal<span className="text-brand-orange">.</span>
             </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12 absolute left-1/2 transform -translate-x-1/2">
            {NAVIGATION_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={getHref(link.name)}
                className="text-sm uppercase tracking-widest text-brand-black/80 hover:text-brand-orange transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-black focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
           {/* Placeholder for balance on right side desktop */}
           <div className="hidden md:block w-32 text-right">
              <button onClick={() => setBookingModalOpen(true)} className="text-xs font-bold uppercase tracking-widest border-b border-brand-black/20 pb-1 hover:border-brand-orange transition-colors">
                Book Now
              </button>
           </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[70px] z-40 bg-cream/95 backdrop-blur-xl h-screen flex flex-col items-center justify-center space-y-8 md:hidden"
          >
             {NAVIGATION_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={getHref(link.name)}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-4xl text-brand-black hover:text-brand-orange transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8">
               <button 
                onClick={() => {setMobileMenuOpen(false); setBookingModalOpen(true);}}
                className="px-8 py-3 bg-brand-black text-cream uppercase tracking-widest text-sm"
               >
                 Book Appointment
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
};

export default Navbar;