'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fast initial progress ticker
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-black p-8 md:p-16 text-white select-none"
        >
          <div className="flex w-full justify-between items-center text-xs tracking-widest uppercase font-mono text-zinc-500">
            <span>FINGUARD — FINTECH SYSTEM</span>
            <span>SECURE GATEWAY</span>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-7xl font-extrabold tracking-tighter uppercase font-display"
            >
              FINGUARD<span className="text-[#FF4A0A]">.</span>
            </motion.h1>
            <p className="mt-2 text-xs md:text-sm text-zinc-400 tracking-widest uppercase">
              Financial Protection & Intelligence
            </p>
          </div>

          <div className="w-full max-w-md flex flex-col items-center gap-3">
            <div className="flex justify-between w-full text-xs font-mono text-zinc-400">
              <span>LOADING SYSTEM</span>
              <span className="text-[#FF4A0A] font-bold">{Math.min(100, progress)}%</span>
            </div>
            <div className="w-full h-[2px] bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#FF4A0A]"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(100, progress)}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
