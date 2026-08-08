'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ArrowUpRight, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FF4A0A] text-white pt-20 pb-12 overflow-hidden relative selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        {/* Top Call to Action Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-16 border-b border-white/20">
          <div className="lg:col-span-8 flex flex-col items-start gap-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest bg-black/20 px-3.5 py-1.5 rounded-full">
              START YOUR FINANCIAL FREEDOM
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.95]">
              READY TO TAKE <br />
              CONTROL OF YOUR <br />
              FINANCIAL FUTURE?
            </h2>
          </div>

          <div className="lg:col-span-4 flex items-center lg:justify-end">
            <Button href="/signup" variant="secondary" size="lg" className="shadow-2xl">
              GET STARTED NOW
            </Button>
          </div>
        </div>

        {/* Oversized Finguard Wordmark Spanning Viewport */}
        <div className="py-12 my-4 overflow-hidden select-none border-b border-white/20">
          <h1 className="font-display font-black text-[15vw] leading-none tracking-tighter uppercase text-white/95 text-center whitespace-nowrap">
            FINGUARD<span className="text-black">.</span>
          </h1>
        </div>

        {/* Multi-Column Links Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 text-sm font-medium">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white">
                <Shield className="w-5 h-5 fill-current" />
              </div>
              <span className="font-display font-black text-2xl tracking-tighter uppercase">
                FINGUARD
              </span>
            </Link>
            <p className="text-white/80 text-xs leading-relaxed max-w-xs">
              Next-generation digital banking engineered with bank-grade security, instant global transfers, and high-yield vault compounding.
            </p>
          </div>

          {/* Features Column */}
          <div className="flex flex-col gap-3">
            <span className="font-display font-bold uppercase text-xs tracking-wider text-black">
              Features
            </span>
            <Link href="/features" className="hover:underline opacity-90 hover:opacity-100">
              Benefits
            </Link>
            <Link href="/partners" className="hover:underline opacity-90 hover:opacity-100">
              Collaboration
            </Link>
            <Link href="/security" className="hover:underline opacity-90 hover:opacity-100">
              Data Management
            </Link>
            <Link href="/features" className="hover:underline opacity-90 hover:opacity-100">
              Integrations
            </Link>
            <Link href="/security" className="hover:underline opacity-90 hover:opacity-100">
              Security
            </Link>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-3">
            <span className="font-display font-bold uppercase text-xs tracking-wider text-black">
              Company
            </span>
            <Link href="/about" className="hover:underline opacity-90 hover:opacity-100">
              About Us
            </Link>
            <Link href="/blog" className="hover:underline opacity-90 hover:opacity-100">
              Blog & News
            </Link>
            <Link href="/about" className="hover:underline opacity-90 hover:opacity-100">
              Careers
            </Link>
            <Link href="/security" className="hover:underline opacity-90 hover:opacity-100">
              Cookie Policy
            </Link>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-3">
            <span className="font-display font-bold uppercase text-xs tracking-wider text-black">
              Resources
            </span>
            <Link href="/resources" className="hover:underline opacity-90 hover:opacity-100">
              Customers
            </Link>
            <Link href="/resources" className="hover:underline opacity-90 hover:opacity-100">
              Strategies
            </Link>
            <Link href="/resources" className="hover:underline opacity-90 hover:opacity-100">
              Ebooks & Guides
            </Link>
            <Link href="/resources" className="hover:underline opacity-90 hover:opacity-100">
              Webinars
            </Link>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-3">
            <span className="font-display font-bold uppercase text-xs tracking-wider text-black">
              Support
            </span>
            <Link href="/contact" className="hover:underline opacity-90 hover:opacity-100">
              Help Center
            </Link>
            <Link href="/contact" className="hover:underline opacity-90 hover:opacity-100">
              Contact Us
            </Link>
            <Link href="/pricing" className="hover:underline opacity-90 hover:opacity-100">
              Pricing Plans
            </Link>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/90 font-mono">
          <div>© 2026 FINGUARD INC. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <Link href="/security" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/security" className="hover:underline">
              Security Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
