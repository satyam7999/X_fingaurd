'use client';

import React from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import PartnersSection from '@/components/sections/PartnersSection';
import { Network, Cpu, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function PartnersPage() {
  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-6 py-12 border-b border-white/10">
          <Eyebrow variant="orange">ECOSYSTEM PARTNERS</Eyebrow>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
            GLOBAL CLEARING <br />
            <span className="text-[#FF4A0A]">NETWORKS & ALLIANCES</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Finguard collaborates with tier-1 central settlement networks, payment providers, and security auditors to ensure instantaneous liquidity and zero downtime.
          </p>
        </div>

        <PartnersSection />

        {/* Integration Showcase */}
        <div className="py-20 border-t border-white/10">
          <div className="mb-12">
            <Eyebrow variant="light">DEVELOPER INTEGRATIONS</Eyebrow>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight mt-4">
              POWERED BY INSTITUTIONAL APIs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 flex flex-col justify-between h-[280px]">
              <Network className="w-10 h-10 text-[#FF4A0A]" />
              <div>
                <h3 className="font-display font-bold text-2xl uppercase mb-2">REST & Webhook APIs</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Real-time webhook notifications for payment events, balance changes, and fraud flags.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 flex flex-col justify-between h-[280px]">
              <Cpu className="w-10 h-10 text-[#FF4A0A]" />
              <div>
                <h3 className="font-display font-bold text-2xl uppercase mb-2">Automated SDKs</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Pre-built SDKs for Node.js, Python, Go, and React Native for rapid enterprise onboarding.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 flex flex-col justify-between h-[280px]">
              <ShieldCheck className="w-10 h-10 text-[#FF4A0A]" />
              <div>
                <h3 className="font-display font-bold text-2xl uppercase mb-2">SOC 2 Type II Certified</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Annual independent security audits and PCI-DSS Level 1 compliance guarantee total safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
