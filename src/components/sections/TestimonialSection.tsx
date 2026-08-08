'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Eyebrow from '@/components/ui/Eyebrow';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'Finguard has completely transformed the way I manage my finances. The real-time updates and personalized advice have been invaluable.',
    author: 'Kelly Williams',
    role: 'Head of Design, Layers',
    avatar: 'KW',
    bg: 'bg-gradient-to-tr from-amber-500 to-orange-600',
  },
  {
    id: 2,
    quote:
      'The zero foreign exchange markup and instant cross-border settlement save our remote organization tens of thousands every quarter.',
    author: 'Marcus Vance',
    role: 'Chief Technology Officer, Veloce',
    avatar: 'MV',
    bg: 'bg-gradient-to-tr from-blue-600 to-indigo-700',
  },
  {
    id: 3,
    quote:
      'As a high-volume trader, security and sub-millisecond execution are non-negotiable. Finguard sets the standard in modern digital banking.',
    author: 'Elena Rostova',
    role: 'Managing Partner, Apex Capital',
    avatar: 'ER',
    bg: 'bg-gradient-to-tr from-emerald-500 to-teal-700',
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-[#F2F2F2] text-zinc-900 py-24 md:py-36 border-t border-zinc-300">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8 mb-12">
          <Eyebrow variant="dark">WHAT THEY SAY ABOUT US</Eyebrow>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="flex flex-col gap-8"
                >
                  <blockquote className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-zinc-900">
                    &quot;{current.quote}&quot;
                  </blockquote>

                  <div className="flex items-center gap-4 pt-4">
                    <div
                      className={`w-14 h-14 rounded-full ${current.bg} text-white font-bold flex items-center justify-center text-lg shadow-md`}
                    >
                      {current.avatar}
                    </div>
                    <div>
                      <h4 className="font-display font-black text-xl text-zinc-900 tracking-tight">
                        {current.author}
                      </h4>
                      <p className="text-zinc-600 text-sm font-medium">
                        {current.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Giant Orange Quote Icon */}
            <div className="lg:col-span-2 hidden lg:flex justify-end text-[#FF4A0A] opacity-80">
              <Quote className="w-28 h-28 stroke-[1.5]" />
            </div>
          </div>
        </div>

        {/* Controls Row */}
        <div className="flex justify-between items-center pt-8 border-t border-zinc-300">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-500">
            <span className="text-[#FF4A0A] font-extrabold text-base">0{currentIndex + 1}</span> / 0{testimonials.length}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-zinc-300 flex items-center justify-center text-zinc-900 hover:bg-black hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#FF4A0A] text-white flex items-center justify-center hover:bg-[#e03e00] transition-colors duration-300 shadow-md shadow-[#FF4A0A]/30"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
