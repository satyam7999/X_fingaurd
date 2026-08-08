'use client';

import React from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { ShieldCheck, Lock, Eye, FileText, Cpu, AlertTriangle } from 'lucide-react';

const securityPillars = [
  {
    title: 'AES-256 & TLS 1.3 Encryption',
    desc: 'All data at rest and in transit is encrypted using military-grade AES-256 keys with perfect forward secrecy.',
    icon: Lock,
  },
  {
    title: 'Multi-Party Computation (MPC)',
    desc: 'Private keys are fragmented across isolated cryptographic nodes, removing single points of failure.',
    icon: Cpu,
  },
  {
    title: 'Zero-Trust Biometric Auth',
    desc: 'Instant WebAuthn, FaceID, and hardware key security protocols protect every account access attempt.',
    icon: Eye,
  },
  {
    title: 'FDIC Pass-Through Coverage',
    desc: 'Eligible USD cash deposits are protected up to $250,000 via our FDIC-insured partner banking network.',
    icon: ShieldCheck,
  },
];

export default function SecurityPage() {
  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-6 py-12 border-b border-white/10">
          <Eyebrow variant="orange">INSTITUTIONAL SECURITY</Eyebrow>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
            BANK-GRADE PROTECTION <br />
            <span className="text-[#FF4A0A]">WITHOUT COMPROMISE</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Your assets are safeguarded by institutional cryptographic standards, real-time threat intelligence, and continuous zero-day vulnerability scanning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          {securityPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-8 rounded-3xl bg-[#111111] border border-white/10 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF4A0A]/10 text-[#FF4A0A] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="p-12 rounded-3xl bg-zinc-900 border border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xs font-mono text-[#FF4A0A] uppercase tracking-widest">
              BUG BOUNTY PROGRAM
            </span>
            <h3 className="font-display font-bold text-2xl uppercase mt-1">
              Found a Security Concern?
            </h3>
            <p className="text-zinc-400 text-xs mt-1">
              We reward security researchers up to $50,000 for responsible vulnerability disclosures.
            </p>
          </div>
          <Button href="/contact" variant="outline" size="md">
            REPORT DISCLOSURE
          </Button>
        </div>
      </div>
    </div>
  );
}
