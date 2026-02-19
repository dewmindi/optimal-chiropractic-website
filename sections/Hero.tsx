import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const heroImages = [
  '/ChiropracticAdjustment.webp',
  '/ChiropracticAssessment.webp',
  '/PostureCorrection.webp',
  '/YStrapAdjustment.webp',
  '/SpinalOrthotics.webp',
];

const Hero: React.FC = () => {
  const [currentSubIndex, setCurrentSubIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubIndex((prev) => (prev + 1) % HERO_CONTENT.rotatingSubHeadlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('/Chiropractic-assessment-treatement.webp')"}}>
      <div className="absolute inset-0 bg-brand-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-brand-orange uppercase tracking-[0.3em] text-sm font-semibold mb-6">
             {HERO_CONTENT.headline}
          </p>
          <h1 className="font-heading text-white text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
            Optimal Chiropractic
          </h1>
        </motion.div>

        {/* Rotating Subheadline */}
        <div className="h-8 ">
           <AnimatePresence mode='wait'>
            <motion.p
              key={currentSubIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white/80 text-lg md:text-xl font-light tracking-wide absolute w-full left-0 right-0"
            >
              {HERO_CONTENT.rotatingSubHeadlines[currentSubIndex]}
            </motion.p>
           </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white">
        <span className="text-xs uppercase tracking-widest text-white/60">{HERO_CONTENT.cta}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-white/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;