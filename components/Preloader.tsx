import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  // Number of vertebrae to display
  const vertebraeCount = 18;
  const vertebrae = Array.from({ length: vertebraeCount });

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1000; // 2.5s simulated load

    const frame = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(frame);
      } else {
        setTimeout(onComplete, 600);
      }
    };

    requestAnimationFrame(frame);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative h-[400px] w-40 flex flex-col justify-between py-4">
        {vertebrae.map((_, i) => {
            // Fill from bottom (highest index) to top (lowest index)
            const indexFromBottom = vertebraeCount - 1 - i;
            const threshold = (indexFromBottom / vertebraeCount) * 100;
            const isFilled = progress > threshold;

            return (
                <div key={i} className="w-full flex-1 flex justify-center items-center">
                    <Vertebra isFilled={isFilled} index={i} />
                </div>
            );
        })}
      </div>
      
      <div className="mt-10 overflow-hidden text-center">
        <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading text-3xl text-brand-black tracking-widest uppercase"
        >
            Optimal
            <span className="text-brand-orange mx-1">.</span>
            Care
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="mt-2 text-xs text-brand-black font-mono uppercase tracking-[0.2em]"
        >
          Aligning {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  );
};

const Vertebra = ({ isFilled, index }: { isFilled: boolean; index: number }) => {
  // Vary width slightly for anatomical look (wider at bottom/top, narrower in middle)
  // Simple heuristic: middle indices narrower
  const width = 50 + (Math.abs(index - 9) * 2); 

  return (
    <svg width="80" height="18" viewBox="0 0 80 18" className="overflow-visible">
        <defs>
            <filter id={`glow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        
        {/* Animated Group */}
        <motion.g
          initial={false}
          animate={{
            scale: isFilled ? 1.1 : 1,
            opacity: isFilled ? 1 : 0.3
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Outline / Base Shape */}
          <path 
              d={`M${40 - width/2},9 Q${40 - width/4},2 40,4 Q${40 + width/4},2 ${40 + width/2},9 Q${40 + width/4},16 40,14 Q${40 - width/4},16 ${40 - width/2},9 Z`}
              fill={isFilled ? "#f49421" : "transparent"}
              stroke={isFilled ? "#f49421" : "#000000"}
              strokeWidth={isFilled ? "0" : "1.5"}
              className="transition-colors duration-300"
          />
          
          {/* Glow for filled state */}
          {isFilled && (
              <path 
                  d={`M${40 - width/2},9 Q${40 - width/4},2 40,4 Q${40 + width/4},2 ${40 + width/2},9 Q${40 + width/4},16 40,14 Q${40 - width/4},16 ${40 - width/2},9 Z`}
                  fill="#f49421"
                  filter={`url(#glow-${index})`}
                  opacity="0.4"
              />
          )}
        </motion.g>
    </svg>
  );
};

export default Preloader;