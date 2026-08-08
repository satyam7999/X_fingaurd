'use client';

import React from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { Percent, Plane, ShieldCheck, Zap, Sparkles, HeartHandshake } from 'lucide-react';

const benefitCards = [
  {
    title: '2% Unlimited Cashback',
    desc: 'Earn 2% cashback automatically on every card swipe, online order, or travel booking.',
    icon: Percent,
    highlight: '2% CASHBACK',
  },
  {
    title: 'Global Travel Lounge Access',
    desc: 'Complimentary entrance to 1,300+ VIP airport lounges worldwide with Priority Pass integration.',
    icon: Plane,
    highlight: '1,300+ LOUNGES',
  },
  {
    title: 'Zero FX Foreign Exchange Fees',
    desc: 'Pay zero foreign transaction fees or markup spreads when purchasing abroad.',
    icon: Zap,
    highlight: '0% MARKUP',
  },
  {
    title: 'Comprehensive Travel Insurance',
    desc: 'Up to $1,000,000 in emergency medical, trip cancellation, and lost luggage insurance.',
    icon: ShieldCheck,
    highlight: '$1M COVERAGE',
  },
  {
    title: 'Exclusive VIP Concierge',
    desc: '24/7 personal assistant for dining reservations, concert tickets, and bespoke travel itineraries.',
    icon: Sparkles,
    highlight: '24/7 ASSISTANT',
  },
  {
    title: 'Buyer Protection Guarantee',
    desc: 'Extended 90-day purchase protection against accidental damage or theft on all purchases.',
    icon: HeartHandshake,
    highlight: '90-DAY COVER',
  },
];

export default function BenefitsPage() {
  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-6 py-12 border-b border-white/10">
          <Eyebrow variant="orange">MEMBERSHIP BENEFITS</Eyebrow>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
            UNCOMPROMISING <br />
            <span className="text-[#FF4A0A]">PRIVILEGES & REWARDS</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Every Finguard account comes backed by world-class perks, travel protection, and cashback incentives designed to elevate your standard of living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
          {benefitCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#FF4A0A] transition-all flex flex-col justify-between h-[320px] group"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF4A0A]/10 text-[#FF4A0A] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF4A0A] bg-[#FF4A0A]/10 px-3 py-1 rounded-full border border-[#FF4A0A]/20">
                    {card.highlight}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-3 group-hover:text-[#FF4A0A] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-12 rounded-3xl bg-[#111111] border border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl uppercase">Ready to claim your perks?</h3>
            <p className="text-zinc-400 text-xs mt-1">Upgrade to Finguard Obsidian Pro or Platinum Vault today.</p>
          </div>
          <Button href="/signup" variant="primary" size="md">
            CLAIM YOUR CARDS
          </Button>
        </div>
      </div>
    </div>
  );
}
