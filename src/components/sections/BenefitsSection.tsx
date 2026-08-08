'use client';

import { motion } from 'framer-motion';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { CheckCircle, Shield, Plane, Percent, CreditCard } from 'lucide-react';

const benefits = [
  {
    title: '2% Unlimited Cashback',
    desc: 'Get 2% instant cashback on all domestic and international purchases credited directly to your Vault.',
    icon: Percent,
  },
  {
    title: 'Exclusive Travel Privileges',
    desc: 'Access exclusive travel deals and discounts on flights, luxury hotels, and airport lounge access.',
    icon: Plane,
  },
  {
    title: 'Comprehensive Protection',
    desc: 'Includes emergency travel insurance, zero liability protection, and extended 90-day purchase warranties.',
    icon: Shield,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white text-zinc-900 py-24 md:py-36 overflow-hidden border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Floating overlapping Finguard cards composition */}
        <div className="lg:col-span-6 relative flex items-center justify-center h-[420px] md:h-[480px]">
          <div className="relative w-full max-w-[440px] h-full flex items-center justify-center">
            {/* Background Card */}
            <motion.div
              animate={{
                y: [10, -10, 10],
                rotate: [-8, -4, -8],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[320px] md:w-[380px] h-[210px] md:h-[240px] rounded-3xl bg-black text-white p-7 shadow-2xl border border-zinc-800 -translate-y-8 -translate-x-6 rotate-[-8deg] flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <span className="font-display font-bold tracking-widest text-xs uppercase text-zinc-400">
                  TRAVEL PASS
                </span>
                <CreditCard className="w-6 h-6 text-[#FF4A0A]" />
              </div>
              <div className="font-mono text-lg tracking-widest text-zinc-300">
                4000 •••• •••• 9918
              </div>
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>KELLY WILLIAMS</span>
                <span>VIP PASS</span>
              </div>
            </motion.div>

            {/* Foreground Signature Orange Card */}
            <motion.div
              animate={{
                y: [-12, 12, -12],
                rotate: [4, 8, 4],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[330px] md:w-[390px] h-[220px] md:h-[250px] rounded-3xl card-orange-gradient text-white p-8 shadow-2xl shadow-[#FF4A0A]/40 border border-white/30 translate-y-6 translate-x-4 rotate-[6deg] z-10 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <span className="font-display font-black text-2xl tracking-tight uppercase">
                  FINGUARD<span className="text-black">.</span>
                </span>
                <span className="bg-white/20 text-xs font-mono font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                  WORLD ELITE
                </span>
              </div>
              <div className="font-mono text-xl md:text-2xl tracking-[0.2em] font-bold">
                5540 9201 4410 9901
              </div>
              <div className="flex justify-between items-end text-xs font-mono">
                <div>
                  <div className="text-[9px] uppercase text-white/70">MEMBER</div>
                  <div className="font-bold text-sm">KELLY WILLIAMS</div>
                </div>
                <div className="font-bold text-lg">VISA</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Benefits Content & Checklist */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          <Eyebrow variant="dark">BENEFITS</Eyebrow>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.95]">
            SHOPPING ON <br />
            <span className="text-[#FF4A0A]">INTERNATIONAL</span>
          </h2>

          <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
            Spend seamlessly around the globe without hidden currency exchange penalties, bank markups, or international transaction fees.
          </p>

          <div className="flex flex-col gap-5 w-full my-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-zinc-100 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF4A0A]/10 text-[#FF4A0A] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-zinc-900 tracking-tight">
                      {b.title}
                    </h4>
                    <p className="text-zinc-600 text-sm mt-0.5 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Button href="/benefits" variant="primary" size="lg">
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
}
