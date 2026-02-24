"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from '../components/Preloader';

export default function Template({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('preloader_shown');
    }
    return true;
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloader_shown', 'true');
    setShowPreloader(false);
  };

  return (
    <AnimatePresence mode="wait">
      {showPreloader ? (
        <Preloader key="preloader" onComplete={handlePreloaderComplete} />
      ) : (
        <motion.div 
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
