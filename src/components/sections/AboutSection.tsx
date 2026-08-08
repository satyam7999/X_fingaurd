'use client';

import { motion } from 'framer-motion';
import Eyebrow from '@/components/ui/Eyebrow';
import { Users, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-white text-zinc-900 py-24 md:py-32 overflow-hidden border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <Eyebrow variant="dark">ABOUT US</Eyebrow>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.95]">
              GETTING TO <br />
              <span className="text-[#FF4A0A]">KNOW FINGUARD</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              Finguard is a modern digital financial ecosystem engineered for security, speed, and absolute clarity. We unite automated portfolio tracking, international transfers, and high-yield savings into one unified platform.
            </p>
          </div>
        </div>

        {/* 3 Statistics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1: Large Orange Card (500K users) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-3xl bg-[#FF4A0A] text-white flex flex-col justify-between h-[360px] md:h-[420px] shadow-xl shadow-[#FF4A0A]/20 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white text-[#FF4A0A] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="font-display font-black text-6xl md:text-7xl lg:text-8xl tracking-tight mb-2">
                500K<span className="text-black">+</span>
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight mb-2">
                Active Users Worldwide
              </h3>
              <p className="text-white/80 text-xs md:text-sm font-medium">
                Empowering half a million individuals and enterprises to safeguard and compound wealth daily.
              </p>
            </div>
          </motion.div>

          {/* CARD 2: Black Card (98% Satisfaction / Security) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 md:p-10 rounded-3xl bg-black text-white flex flex-col justify-between h-[360px] md:h-[420px] shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-zinc-800"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#FF4A0A]" />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="font-display font-black text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FF4A0A] mb-2">
                98<span className="text-white">%</span>
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight mb-2 text-white">
                Customer Security Score
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm">
                Industry-leading security telemetry with instant zero-day fraud prevention and instant lock features.
              </p>
            </div>
          </motion.div>

          {/* CARD 3: Light Gray Card (24K Partner Institutions) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 md:p-10 rounded-3xl bg-[#F2F2F2] text-zinc-900 flex flex-col justify-between h-[360px] md:h-[420px] border border-zinc-300/70 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-zinc-300/80 backdrop-blur-md flex items-center justify-center">
                <Award className="w-6 h-6 text-zinc-900" />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="font-display font-black text-6xl md:text-7xl lg:text-8xl tracking-tight mb-2 text-zinc-900">
                24K<span className="text-[#FF4A0A]">+</span>
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight mb-2 text-zinc-900">
                Global Financial Networks
              </h3>
              <p className="text-zinc-600 text-xs md:text-sm">
                Direct integration with over 24,000 global banking nodes and real-time payment corridors.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
