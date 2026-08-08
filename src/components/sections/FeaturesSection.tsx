'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Eyebrow from '@/components/ui/Eyebrow';
import DashboardFloatingUI from './DashboardFloatingUI';
import { ArrowRight, ShieldCheck, Activity, Zap, PieChart } from 'lucide-react';

const features = [
  {
    number: '01',
    title: 'Secure and Easy Transactions',
    icon: ShieldCheck,
    desc: 'Instant peer-to-peer and global settlements backed by end-to-end multi-party computation.',
  },
  {
    number: '02',
    title: 'Real-Time Financial Monitoring',
    icon: Activity,
    desc: 'Sub-millisecond telemetry tracking every dollar entering or leaving your ecosystem.',
  },
  {
    number: '03',
    title: 'Fast & EASY TRANSACTIONS',
    icon: Zap,
    desc: 'One-tap cross-border transfers across 140 currencies with guaranteed zero markup fees.',
  },
  {
    number: '04',
    title: 'Comprehensive Financial Planning',
    icon: PieChart,
    desc: 'Automated AI rules for high-yield vault allocation, tax harvesting, and budget limits.',
  },
];

export default function FeaturesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-24 md:py-36 relative overflow-hidden border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Section Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <Eyebrow variant="orange">FEATURES</Eyebrow>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.95]">
              ALL-IN-ONE PLATFORM <br />
              <span className="text-[#FF4A0A]">FOR SAVINGS</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Simplify your financial life by securely connecting your accounts, automatically categorizing transactions, and generating real-time wealth telemetry.
            </p>
          </div>
        </div>

        {/* Content Layout: Left Features List + Floating Dashboard UI Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Horizontal Feature List Rows */}
          <div className="lg:col-span-7 flex flex-col border-t border-white/15">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const isHovered = hoveredIdx === idx;

              return (
                <motion.div
                  key={feature.number}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`group relative py-8 px-4 sm:px-6 border-b border-white/15 transition-all duration-300 cursor-pointer flex flex-col gap-3 ${
                    isHovered ? 'bg-white/5' : 'bg-transparent'
                  }`}
                >
                  {/* Left Accent Bar on Hover */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF4A0A]"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-zinc-500 font-bold text-lg md:text-xl group-hover:text-[#FF4A0A] transition-colors">
                        {feature.number}
                      </span>
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-zinc-400 group-hover:text-[#FF4A0A] transition-colors" />
                        <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl tracking-tight uppercase group-hover:translate-x-2 transition-transform duration-300">
                          {feature.title}
                        </h3>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#FF4A0A] flex items-center justify-center transition-colors duration-300">
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm pl-12 max-w-xl group-hover:text-zinc-300 transition-colors">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Floating Finance Dashboard Component */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <DashboardFloatingUI />
          </div>
        </div>
      </div>
    </section>
  );
}
