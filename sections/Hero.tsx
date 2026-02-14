import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  const [currentSubIndex, setCurrentSubIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]); // Parallax effect
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubIndex((prev) => (prev + 1) % HERO_CONTENT.rotatingSubHeadlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-cream/40 z-10 mix-blend-overlay"></div>
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Chiropractic Care" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/30 to-transparent z-10"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-brand-orange uppercase tracking-[0.3em] text-sm font-semibold mb-6">
             {HERO_CONTENT.headline}
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-brand-black leading-tight mb-8">
            Optimal Chiropractic
          </h1>
        </motion.div>

        {/* Rotating Subheadline */}
        <div className="h-8 overflow-hidden relative">
           <AnimatePresence mode='wait'>
            <motion.p
              key={currentSubIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-slate font-sans text-lg md:text-xl font-light tracking-wide absolute w-full left-0 right-0"
            >
              {HERO_CONTENT.rotatingSubHeadlines[currentSubIndex]}
            </motion.p>
           </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-black/60">{HERO_CONTENT.cta}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-brand-black/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;