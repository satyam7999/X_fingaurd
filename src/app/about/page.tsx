'use client';

import React from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { Shield, Target, Zap, Globe, Award, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Absolute Transparency',
    desc: 'Zero hidden fees, zero FX markups, and real-time fee breakdowns before every settlement.',
    icon: Shield,
  },
  {
    title: 'Bank-Grade Security',
    desc: 'Multi-party computation, biometrics, and instant account freezes protect every penny.',
    icon: Lock,
  },
  {
    title: 'Sub-Millisecond Speed',
    desc: 'Global clearing rails optimized for instant peer-to-peer and corporate transfers.',
    icon: Zap,
  },
  {
    title: 'Global Accessibility',
    desc: 'Multi-currency accounts supporting 140+ countries and global payment networks.',
    icon: Globe,
  },
];

const leaders = [
  { name: 'KELLY WILLIAMS', role: 'Chief Executive Officer', bg: 'bg-orange-600', initial: 'KW' },
  { name: 'JOHN TERRY', role: 'Chief Technology Officer', bg: 'bg-blue-600', initial: 'JT' },
  { name: 'CAITLIN CLARK', role: 'Head of Product Design', bg: 'bg-purple-600', initial: 'CC' },
  { name: 'DAVID MILLER', role: 'VP of Security & Risk', bg: 'bg-emerald-600', initial: 'DM' },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Header Hero */}
        <div className="flex flex-col items-start gap-6 py-12 border-b border-white/10">
          <Eyebrow variant="orange">ABOUT FINGUARD</Eyebrow>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
            REDEFINING MODERN <br />
            <span className="text-[#FF4A0A]">FINANCIAL FREEDOM</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Founded in 2024, Finguard was built on a simple premise: financial management should be frictionless, transparent, and effortlessly intelligent.
          </p>
        </div>

        {/* Core Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 border-b border-white/10 items-center">
          <div className="flex flex-col gap-6">
            <Eyebrow variant="light">OUR MISSION</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-tight">
              PROTECTING WEALTH WHILE ACCELERATING GROWTH
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              We empower over 500,000 global users to take absolute command of their capital. Through institutional-grade encryption and automated liquidity optimization, Finguard transforms banking into a strategic asset.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 flex flex-col justify-between h-[220px]">
              <span className="font-display font-black text-5xl text-[#FF4A0A]">$14B+</span>
              <span className="text-xs font-mono text-zinc-400 uppercase">Annual Transaction Volume</span>
            </div>
            <div className="p-8 rounded-3xl bg-[#FF4A0A] text-white flex flex-col justify-between h-[220px]">
              <span className="font-display font-black text-5xl text-black">140+</span>
              <span className="text-xs font-mono text-white/90 uppercase">Countries Supported</span>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="py-20 border-b border-white/10">
          <div className="mb-12">
            <Eyebrow variant="orange">OUR PRINCIPLES</Eyebrow>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight mt-4">
              WHY THOUSANDS TRUST FINGUARD
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#FF4A0A] transition-all flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FF4A0A]/10 text-[#FF4A0A] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="py-20">
          <div className="mb-12">
            <Eyebrow variant="light">EXECUTIVE TEAM</Eyebrow>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight mt-4">
              MEET THE VISIONARIES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="p-6 rounded-3xl bg-[#111111] border border-white/10 flex flex-col gap-6 items-center text-center group hover:bg-white/5 transition-all"
              >
                <div
                  className={`w-24 h-24 rounded-full ${leader.bg} text-white font-black text-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
                >
                  {leader.initial}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase">
                    {leader.name}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400 mt-1 block">
                    {leader.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
