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
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubIndex((prev) => (prev + 1) % HERO_CONTENT.rotatingSubHeadlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stripVariants: Variants = {
    initial: { y: '100%', opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.5, // Staggered delay
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // A nice ease-out quint
      },
    }),
  };

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden">
      {/* Image Strips Background */}
      <div className="absolute inset-0 z-0 grid grid-cols-5 h-full">
        {heroImages.map((src, i) => (
          <motion.div 
            key={src}
            className="relative h-full overflow-hidden"
            custom={i}
            initial="initial"
            animate="animate"
            variants={stripVariants}
          >
            <img 
              src={src} 
              alt={`Hero image ${i + 1}`} 
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-brand-black/50"></div>
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/30 to-transparent z-10"></div>

      {/* Content */}
      <motion.div 
        style={{ y: yText }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-brand-orange uppercase tracking-[0.3em] text-sm font-semibold mb-6">
             {HERO_CONTENT.headline}
          </p>
          <h1 className="font-heading text-white text-5xl md:text-7xl lg:text-8xl text-brand-black leading-tight mb-8">
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
              className="text-slate font-sans text-white text-lg md:text-xl font-light tracking-wide absolute w-full left-0 right-0"
            >
              {HERO_CONTENT.rotatingSubHeadlines[currentSubIndex]}
            </motion.p>
           </AnimatePresence>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity: opacityText }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white"
      >
        <span className="text-[10px] text-white uppercase tracking-widest text-brand-black/60">{HERO_CONTENT.cta}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;