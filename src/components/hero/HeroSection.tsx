'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import FloatingCards3D from './FloatingCards3D';
import ActiveUsersBadge from './ActiveUsersBadge';
import HeroSteps from './HeroSteps';
import Eyebrow from '@/components/ui/Eyebrow';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-black text-white flex flex-col justify-between pt-8 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4A0A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full px-5 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Column: Heading & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6 z-10">
          <Eyebrow variant="orange">
            TRUSTED PROTECTION & EXPERT GUIDANCE
          </Eyebrow>

          <p className="text-zinc-400 text-sm md:text-base max-w-md font-normal leading-relaxed">
            Trusted Protection and Expert Guidance for Your Finances. Elevate your financial freedom with intelligent digital banking.
          </p>

          {/* Huge Hero Headline */}
          <div className="flex flex-col">
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-tighter uppercase leading-[0.88] text-white">
              SECURE YOUR
            </h1>
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-tighter uppercase leading-[0.88] text-[#FF4A0A] drop-shadow-lg">
              FINANCIAL FUTURE
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="/signup" variant="primary" size="lg">
              GET STARTED
            </Button>
            <Button href="/features" variant="outline" size="lg" showArrow={true}>
              EXPLORE PLATFORM
            </Button>
          </div>
        </div>

        {/* Center / Right: 3D Floating Financial Cards */}
        <div className="lg:col-span-4 flex items-center justify-center z-10 my-4 lg:my-0">
          <FloatingCards3D />
        </div>

        {/* Right Side: 3-step vertical interaction */}
        <div className="lg:col-span-2 hidden xl:flex flex-col items-end z-10">
          <HeroSteps />
        </div>
      </div>

      {/* Hero Bottom Row: Active Users Badge & Scroll Indicator */}
      <div className="max-w-[1440px] mx-auto w-full px-5 md:px-8 lg:px-12 flex flex-wrap justify-between items-end gap-6 z-10 pt-8 border-t border-white/10">
        <ActiveUsersBadge />

        <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <span>SCROLL TO DISCOVER</span>
          <div className="w-5 h-8 rounded-full border border-zinc-700 p-1 flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-[#FF4A0A]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
