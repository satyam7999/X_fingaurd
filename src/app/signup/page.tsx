'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Shield, CheckCircle2, Lock } from 'lucide-react';

export default function SignupPage() {
  const [tier, setTier] = useState('obsidian');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Account created! Welcome to Finguard.');
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-5">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#111111]">
        {/* Left Side: Brand Visual */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#FF4A0A] to-orange-800 p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden">
          <Link href="/" className="flex items-center gap-2 z-10">
            <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white">
              <Shield className="w-5 h-5 fill-current" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter uppercase">
              FINGUARD<span className="text-black">.</span>
            </span>
          </Link>

          <div className="my-12 z-10">
            <span className="text-xs font-mono bg-black text-white px-3 py-1 rounded-full uppercase tracking-widest">
              INSTANT ACTIVATION
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-tight mt-4">
              OPEN YOUR FINGUARD VAULT IN 2 MINUTES.
            </h2>
            <div className="flex flex-col gap-3 mt-6 text-xs text-white/90 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Zero annual fees on Essential tier</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Instant virtual Visa card issuance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>FDIC pass-through protection up to $250,000</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-white/70 uppercase z-10">
            NO CREDIT IMPACT UPON APPLICATION
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="lg:col-span-7 p-8 md:p-12 bg-black flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="font-display font-black text-3xl uppercase tracking-tight">CREATE YOUR ACCOUNT</h2>
            <p className="text-zinc-400 text-xs mt-1">Select your card tier and enter account owner details.</p>
          </div>

          {/* Tier Selector */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setTier('obsidian')}
              className={`p-4 rounded-2xl border text-left transition-all ${
                tier === 'obsidian'
                  ? 'bg-[#FF4A0A]/10 border-[#FF4A0A] text-white'
                  : 'bg-[#111111] border-white/10 text-zinc-400'
              }`}
            >
              <div className="text-xs font-mono font-bold text-[#FF4A0A] uppercase">RECOMMENDED</div>
              <div className="font-display font-bold text-base text-white uppercase mt-0.5">Obsidian Pro</div>
              <div className="text-[10px] text-zinc-400 mt-1">2% Cashback + 5.2% APY</div>
            </button>

            <button
              type="button"
              onClick={() => setTier('essential')}
              className={`p-4 rounded-2xl border text-left transition-all ${
                tier === 'essential'
                  ? 'bg-white/10 border-white text-white'
                  : 'bg-[#111111] border-white/10 text-zinc-400'
              }`}
            >
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase">FREE</div>
              <div className="font-display font-bold text-base text-white uppercase mt-0.5">Essential Vault</div>
              <div className="text-[10px] text-zinc-400 mt-1">Standard Banking</div>
            </button>
          </div>

          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-zinc-400 uppercase">FIRST NAME</label>
                <input
                  required
                  type="text"
                  placeholder="Kelly"
                  className="w-full bg-[#111111] border border-white/15 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FF4A0A] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-zinc-400 uppercase">LAST NAME</label>
                <input
                  required
                  type="text"
                  placeholder="Williams"
                  className="w-full bg-[#111111] border border-white/15 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FF4A0A] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono text-zinc-400 uppercase">WORK OR PERSONAL EMAIL</label>
              <input
                required
                type="email"
                placeholder="kelly@layers.com"
                className="w-full bg-[#111111] border border-white/15 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FF4A0A] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono text-zinc-400 uppercase">CHOOSE PASSWORD</label>
              <input
                required
                type="password"
                placeholder="Minimum 8 characters"
                className="w-full bg-[#111111] border border-white/15 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FF4A0A] transition-colors"
              />
            </div>

            <div className="flex items-center gap-2 my-1">
              <input type="checkbox" required id="terms" className="accent-[#FF4A0A] rounded w-4 h-4 cursor-pointer" />
              <label htmlFor="terms" className="text-xs text-zinc-400 cursor-pointer">
                I agree to Finguard&apos;s <Link href="/security" className="text-white hover:underline">Terms of Service</Link> & <Link href="/security" className="text-white hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full justify-center mt-2">
              CREATE FINGUARD VAULT
            </Button>
          </form>

          <p className="text-xs text-zinc-400 text-center mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-[#FF4A0A] font-bold hover:underline">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
