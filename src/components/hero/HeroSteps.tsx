'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Selecting your provider',
    desc: 'Connect your primary banking or crypto provider with bank-grade 256-bit encryption.',
  },
  {
    number: '02',
    title: 'Set Up Your Account',
    desc: 'Customize smart savings vaults, security protocols, and automated budget caps.',
  },
  {
    number: '03',
    title: 'Enjoy Seamless Banking',
    desc: 'Unlock zero FX markups, real-time transaction telemetry, and 2% cashback.',
  },
];

export default function HeroSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="flex flex-col gap-6 w-full max-w-xs">
      <div className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-1">
        GETTING STARTED — 3 STEPS
      </div>

      <div className="flex flex-col gap-4">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          return (
            <motion.div
              key={step.number}
              onClick={() => setActiveStep(index)}
              className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-white/10 border-[#FF4A0A] shadow-lg shadow-[#FF4A0A]/10'
                  : 'bg-white/5 border-white/10 hover:border-white/20 opacity-70 hover:opacity-100'
              }`}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`font-mono font-bold text-lg ${
                    isActive ? 'text-[#FF4A0A]' : 'text-zinc-500'
                  }`}
                >
                  {step.number}
                </span>
                <span
                  className={`font-display font-bold text-sm tracking-tight ${
                    isActive ? 'text-white' : 'text-zinc-300'
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {isActive && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-xs text-zinc-400 pl-9 leading-relaxed"
                >
                  {step.desc}
                </motion.p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
