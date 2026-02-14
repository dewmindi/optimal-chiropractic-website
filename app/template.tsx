"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from '../components/Preloader';

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" onComplete={() => setLoading(false)} />
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
