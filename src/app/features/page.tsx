'use client';

import React, { useState } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { ShieldCheck, Activity, Zap, PieChart, Lock, Globe, RefreshCw, ArrowRight } from 'lucide-react';

const allFeatures = [
  {
    id: 'secure-tx',
    title: 'Secure & Instant Transactions',
    category: 'SECURITY',
    icon: ShieldCheck,
    desc: 'Execute sub-second settlements worldwide with multi-signature authorization and end-to-end zero-knowledge encryption.',
    stat: '0.00ms',
    statLabel: 'Latency',
  },
  {
    id: 'realtime-monitoring',
    title: 'Real-Time Financial Telemetry',
    category: 'ANALYTICS',
    icon: Activity,
    desc: 'Live activity streams feed AI categorization engine, alerting you to abnormal spikes or subscriptions instantaneously.',
    stat: '100%',
    statLabel: 'Accuracy',
  },
  {
    id: 'smart-vaults',
    title: 'Automated High-Yield Savings Vaults',
    category: 'SAVINGS',
    icon: PieChart,
    desc: 'Auto-sweep excess liquidity into high-yield 5.2% APY compound vaults with daily interest distribution.',
    stat: '5.2%',
    statLabel: 'Target APY',
  },
  {
    id: 'global-clearing',
    title: 'Multi-Currency Global Clearing',
    category: 'PAYMENTS',
    icon: Globe,
    desc: 'Hold, convert, and transact in 40+ fiat currencies and stable assets at spot interbank exchange rates.',
    stat: '140+',
    statLabel: 'Corridors',
  },
  {
    id: 'fraud-shield',
    title: 'AI Zero-Day Fraud Prevention',
    category: 'SECURITY',
    icon: Lock,
    desc: 'Predictive neural networks block suspicious digital card attempts before authorization requests hit merchant gateways.',
    stat: '99.99%',
    statLabel: 'Uptime',
  },
  {
    id: 'auto-rebalance',
    title: 'Automated Portfolio Rebalancing',
    category: 'INVESTMENT',
    icon: RefreshCw,
    desc: 'Set rule-based triggers to rebalance cash reserves, equities, and inflation hedges automatically.',
    stat: 'Auto',
    statLabel: 'Rebalance',
  },
];

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'SECURITY', 'ANALYTICS', 'SAVINGS', 'PAYMENTS'];

  const filteredFeatures =
    activeCategory === 'ALL'
      ? allFeatures
      : allFeatures.filter((f) => f.category === activeCategory);

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Page Header */}
        <div className="flex flex-col items-start gap-6 py-12 border-b border-white/10">
          <Eyebrow variant="orange">PRODUCT FEATURES</Eyebrow>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
            ENGINEERED FOR <br />
            <span className="text-[#FF4A0A]">UNRIVALED PRECISION</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Explore Finguard's full suite of automated financial tools, real-time telemetry modules, and bank-grade security protocols.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-3 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-[#FF4A0A] text-white shadow-lg shadow-[#FF4A0A]/30'
                    : 'bg-white/5 text-zinc-400 border border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
          {filteredFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#FF4A0A] transition-all flex flex-col justify-between h-[340px] group"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF4A0A]/10 text-[#FF4A0A] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-2xl font-black text-[#FF4A0A] block">
                      {feature.stat}
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase">
                      {feature.statLabel}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-1">
                    {feature.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-3 group-hover:text-[#FF4A0A] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Footer Section */}
        <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-r from-orange-600 to-[#FF4A0A] text-white flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl">
          <div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight">
              READY TO ELEVATE YOUR BANKING?
            </h2>
            <p className="text-white/80 text-sm mt-2">
              Create your Finguard account in under 2 minutes. No credit check required.
            </p>
          </div>
          <Button href="/signup" variant="secondary" size="lg">
            OPEN ACCOUNT NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
