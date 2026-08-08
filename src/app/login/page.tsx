'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Shield, Eye, EyeOff, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logged in successfully as ${email}`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-5">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#111111]">
        {/* Left Side: Brand Visual & Card Graphic */}
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
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-tight">
              WELCOME BACK TO YOUR FINANCIAL FORTRESS.
            </h2>
            <p className="text-white/80 text-xs mt-3 leading-relaxed">
              Access your multi-currency vaults, live transaction telemetry, and 5.2% APY savings account.
            </p>
          </div>

          <div className="text-[10px] font-mono text-white/70 uppercase z-10">
            SECURED BY 256-BIT ENCRYPTION & ZERO-KNOWLEDGE PROTOCOL
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="lg:col-span-7 p-8 md:p-12 bg-black flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="font-display font-black text-3xl uppercase tracking-tight">LOG IN TO FINGUARD</h2>
            <p className="text-zinc-400 text-xs mt-1">Enter your credential tokens below to proceed.</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-zinc-400 uppercase">EMAIL ADDRESS</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full bg-[#111111] border border-white/15 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#FF4A0A] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <label className="text-zinc-400 uppercase">PASSWORD</label>
                <a href="#" className="text-[#FF4A0A] hover:underline">FORGOT PASSWORD?</a>
              </div>
              <div className="relative">
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#111111] border border-white/15 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#FF4A0A] transition-colors pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 my-1">
              <input type="checkbox" id="remember" className="accent-[#FF4A0A] rounded w-4 h-4 cursor-pointer" />
              <label htmlFor="remember" className="text-xs text-zinc-400 cursor-pointer">Remember this hardware device for 30 days</label>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full justify-center mt-2">
              LOG IN NOW
            </Button>
          </form>

          {/* Social Passkey Placeholders */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4 text-center">
            <span className="text-[10px] font-mono text-zinc-500 uppercase">OR CONTINUED WITH BIOMETRICS</span>
            <div className="grid grid-cols-2 gap-4">
              <button className="py-3 px-4 rounded-2xl bg-[#111111] border border-white/10 hover:border-white/30 text-xs font-semibold flex items-center justify-center gap-2 transition-all">
                Apple Passkey
              </button>
              <button className="py-3 px-4 rounded-2xl bg-[#111111] border border-white/10 hover:border-white/30 text-xs font-semibold flex items-center justify-center gap-2 transition-all">
                Google Security
              </button>
            </div>
            <p className="text-xs text-zinc-400 mt-2">
              Don&apos;t have a Finguard account?{' '}
              <Link href="/signup" className="text-[#FF4A0A] font-bold hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
