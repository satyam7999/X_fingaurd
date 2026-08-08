'use client';

import React, { useState } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-6 py-12 border-b border-white/10">
          <Eyebrow variant="orange">GET IN TOUCH</Eyebrow>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
            LET&apos;S TALK ABOUT YOUR <br />
            <span className="text-[#FF4A0A]">FINANCIAL FUTURE</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Our institutional advisory team, client support agents, and security team are available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#111111] p-8 md:p-12 rounded-3xl border border-white/10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#FF4A0A]/20 text-[#FF4A0A] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-3xl uppercase">MESSAGE TRANSMITTED</h3>
                <p className="text-zinc-400 text-sm max-w-md">
                  Thank you for reaching out. A dedicated Finguard account strategist will contact you within 2 hours.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline" size="sm" className="mt-4">
                  SEND ANOTHER MESSAGE
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-zinc-400 uppercase">FULL NAME</label>
                    <input
                      required
                      type="text"
                      placeholder="Kelly Williams"
                      className="w-full bg-black/60 border border-white/15 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#FF4A0A] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-zinc-400 uppercase">EMAIL ADDRESS</label>
                    <input
                      required
                      type="email"
                      placeholder="kelly@layers.com"
                      className="w-full bg-black/60 border border-white/15 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#FF4A0A] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-zinc-400 uppercase">COMPANY / ORGANIZATION</label>
                    <input
                      type="text"
                      placeholder="Layers Inc."
                      className="w-full bg-black/60 border border-white/15 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#FF4A0A] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-zinc-400 uppercase">SUBJECT</label>
                    <input
                      required
                      type="text"
                      placeholder="Institutional Treasury Account"
                      className="w-full bg-black/60 border border-white/15 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#FF4A0A] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-zinc-400 uppercase">MESSAGE</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your financial goals or questions..."
                    className="w-full bg-black/60 border border-white/15 rounded-2xl p-5 text-white text-sm focus:outline-none focus:border-[#FF4A0A] transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full justify-center mt-2">
                  SUBMIT INQUIRY
                </Button>
              </form>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-8">
              <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#FF4A0A]/10 text-[#FF4A0A] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">24/7 SUPPORT</span>
                  <h4 className="font-display font-bold text-xl uppercase text-white">support@finguard.com</h4>
                  <p className="text-zinc-400 text-xs mt-1">Average response time: &lt; 15 minutes.</p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#FF4A0A]/10 text-[#FF4A0A] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">DIRECT PHONE</span>
                  <h4 className="font-display font-bold text-xl uppercase text-white">+1 (800) 884-3464</h4>
                  <p className="text-zinc-400 text-xs mt-1">Toll-free international concierge line.</p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#FF4A0A]/10 text-[#FF4A0A] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">HEADQUARTERS</span>
                  <h4 className="font-display font-bold text-xl uppercase text-white">New York & London</h4>
                  <p className="text-zinc-400 text-xs mt-1">100 Financial Plaza, 44th Floor, NY 10005.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
