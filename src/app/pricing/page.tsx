'use client';

import React, { useState } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { Check, X, Shield, Zap, Sparkles } from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center gap-6 py-12 border-b border-white/10">
          <Eyebrow variant="orange">TRANSPARENT PRICING</Eyebrow>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
            SIMPLE PLANS FOR <br />
            <span className="text-[#FF4A0A]">EVERY FINANCIAL GOAL</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            No hidden fees, no balance minimums, and instant activation. Choose the plan that fits your wealth strategy.
          </p>

          {/* Toggle Monthly / Annual */}
          <div className="flex items-center gap-4 bg-[#111111] p-1.5 rounded-full border border-white/10 mt-4">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                !isAnnual ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all flex items-center gap-2 ${
                isAnnual ? 'bg-[#FF4A0A] text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Yearly Billing</span>
              <span className="bg-black text-white text-[9px] px-2 py-0.5 rounded-full font-sans">SAVE 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-16">
          {/* Plan 1: Essential */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#111111] border border-white/10 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                ESSENTIAL
              </span>
              <h3 className="font-display font-black text-3xl uppercase tracking-tight mb-4">
                Starter Vault
              </h3>
              <div className="flex items-baseline gap-1 my-6">
                <span className="font-display font-black text-6xl">$0</span>
                <span className="text-zinc-400 text-xs font-mono">/ FOREVER</span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed mb-8">
                Essential banking tools for personal transfers and automated budget tracking.
              </p>

              <div className="flex flex-col gap-3 pt-6 border-t border-white/10 text-xs">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#FF4A0A]" />
                  <span>Standard Digital Finguard Card</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#FF4A0A]" />
                  <span>1.5% APY Savings Vault</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#FF4A0A]" />
                  <span>Standard ATM Withdrawals</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-600">
                  <X className="w-4 h-4" />
                  <span>Zero FX Markup (1% Fee)</span>
                </div>
              </div>
            </div>

            <Button href="/signup" variant="dark" size="md" className="w-full justify-center mt-8">
              GET STARTED FREE
            </Button>
          </div>

          {/* Plan 2: Premium (Signature Orange Featured Card) */}
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#FF4A0A] to-orange-700 text-white shadow-2xl shadow-[#FF4A0A]/30 border border-white/30 flex flex-col justify-between h-full relative lg:-translate-y-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-[#FF4A0A] text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-1 rounded-full border border-[#FF4A0A]">
              MOST POPULAR
            </div>

            <div>
              <span className="text-xs font-mono text-white/80 uppercase tracking-widest block mb-2">
                OBSIDIAN PRO
              </span>
              <h3 className="font-display font-black text-3xl uppercase tracking-tight mb-4">
                Premium Elite
              </h3>
              <div className="flex items-baseline gap-1 my-6">
                <span className="font-display font-black text-6xl">
                  ${isAnnual ? '15' : '19'}
                </span>
                <span className="text-white/80 text-xs font-mono">/ MONTH</span>
              </div>
              <p className="text-white/90 text-xs leading-relaxed mb-8">
                Maximum privileges, 2% cashback, zero FX fees, and exclusive lounge access.
              </p>

              <div className="flex flex-col gap-3 pt-6 border-t border-white/20 text-xs">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-black" />
                  <span className="font-bold">Metal Obsidian & Signature Orange Card</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-black" />
                  <span className="font-bold">5.2% High-Yield APY Vault</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-black" />
                  <span>2% Unlimited Cashback</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-black" />
                  <span>Zero Foreign Exchange Markups</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-black" />
                  <span>1,300+ Airport Lounge Passes</span>
                </div>
              </div>
            </div>

            <Button href="/signup" variant="secondary" size="md" className="w-full justify-center mt-8 shadow-xl">
              UPGRADE TO OBSIDIAN
            </Button>
          </div>

          {/* Plan 3: Business */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#111111] border border-white/10 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                ENTERPRISE
              </span>
              <h3 className="font-display font-black text-3xl uppercase tracking-tight mb-4">
                Corporate Treasury
              </h3>
              <div className="flex items-baseline gap-1 my-6">
                <span className="font-display font-black text-6xl">
                  ${isAnnual ? '65' : '79'}
                </span>
                <span className="text-zinc-400 text-xs font-mono">/ MONTH</span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed mb-8">
                Designed for high-volume companies, multi-user permissions, and corporate cards.
              </p>

              <div className="flex flex-col gap-3 pt-6 border-t border-white/10 text-xs">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#FF4A0A]" />
                  <span>Unlimited Employee Corporate Cards</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#FF4A0A]" />
                  <span>Sub-account Payroll Automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#FF4A0A]" />
                  <span>Dedicated Institutional Account Manager</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#FF4A0A]" />
                  <span>Custom REST API & Webhook Integrations</span>
                </div>
              </div>
            </div>

            <Button href="/signup" variant="dark" size="md" className="w-full justify-center mt-8">
              CONTACT SALES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
