import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, fullWidth = false }) => {
  return (
    <section id={id} className={`relative py-20 md:py-32 overflow-hidden ${className}`}>
      <div className={`mx-auto ${fullWidth ? 'w-full px-0' : 'max-w-7xl px-6 md:px-12'}`}>
        {children}
      </div>
    </section>
  );
};

export const FadeIn: React.FC<{ children: ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
