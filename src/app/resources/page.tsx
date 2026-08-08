'use client';

import React, { useState } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { BookOpen, FileText, HelpCircle, ChevronDown, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'How does Finguard ensure zero foreign exchange markups?',
    a: 'We clear transactions directly through local liquidity corridors using interbank spot rates provided by central clearing nodes, bypassing legacy bank spreads.',
  },
  {
    q: 'Is my money protected if Finguard experiences an outage?',
    a: 'Yes. All USD balances are held in segregated, pass-through FDIC-insured accounts at partner banking institutions. Deposits are insured up to $250,000 per user.',
  },
  {
    q: 'How quickly can I issue a new digital payment card?',
    a: 'Virtual cards can be created instantly in your dashboard within 5 seconds and added directly to Apple Pay or Google Pay.',
  },
  {
    q: 'Can I connect Finguard to accounting platforms like QuickBooks or Xero?',
    a: 'Yes, Finguard provides native API integrations and automated daily CSV feeds for all major accounting and ERP platforms.',
  },
];

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-6 py-12 border-b border-white/10">
          <Eyebrow variant="orange">RESOURCES & EDUCATION</Eyebrow>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
            FINANCIAL INTELLIGENCE <br />
            <span className="text-[#FF4A0A]">& KNOWLEDGE HUB</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Access institutional research papers, wealth optimization guides, market telemetry reports, and answers to common questions.
          </p>
        </div>

        {/* Ebooks & Guides Row */}
        <div className="py-16 border-b border-white/10">
          <div className="mb-10">
            <Eyebrow variant="light">FEATURED GUIDES</Eyebrow>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight mt-3">
              REPORTS & WHITEPAPERS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 flex flex-col justify-between h-[300px]">
              <div className="w-10 h-10 rounded-xl bg-[#FF4A0A]/10 text-[#FF4A0A] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">2026 WHITEPAPER</span>
                <h3 className="font-display font-bold text-xl uppercase tracking-tight mt-1 mb-2">
                  The Future of Autonomous Treasury Management
                </h3>
                <p className="text-zinc-400 text-xs">
                  An institutional breakdown of multi-currency liquidity sweep rules.
                </p>
              </div>
              <button className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF4A0A] uppercase hover:underline">
                <Download className="w-4 h-4" /> Download PDF (2.4 MB)
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 flex flex-col justify-between h-[300px]">
              <div className="w-10 h-10 rounded-xl bg-[#FF4A0A]/10 text-[#FF4A0A] flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">PLAYBOOK</span>
                <h3 className="font-display font-bold text-xl uppercase tracking-tight mt-1 mb-2">
                  Maximizing High-Yield Compound Vaults
                </h3>
                <p className="text-zinc-400 text-xs">
                  How to structure cash reserves to compound yield daily without locking capital.
                </p>
              </div>
              <button className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF4A0A] uppercase hover:underline">
                <Download className="w-4 h-4" /> Download PDF (1.8 MB)
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 flex flex-col justify-between h-[300px]">
              <div className="w-10 h-10 rounded-xl bg-[#FF4A0A]/10 text-[#FF4A0A] flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">SECURITY GUIDE</span>
                <h3 className="font-display font-bold text-xl uppercase tracking-tight mt-1 mb-2">
                  Zero-Trust Financial Hygiene
                </h3>
                <p className="text-zinc-400 text-xs">
                  Best practices for securing multi-user corporate permissions and biometrics.
                </p>
              </div>
              <button className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF4A0A] uppercase hover:underline">
                <Download className="w-4 h-4" /> Download PDF (3.1 MB)
              </button>
            </div>
          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="py-16">
          <div className="mb-10">
            <Eyebrow variant="orange">FREQUENTLY ASKED QUESTIONS</Eyebrow>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight mt-3">
              EVERYTHING YOU NEED TO KNOW
            </h2>
          </div>

          <div className="flex flex-col gap-4 max-w-4xl">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-[#111111] border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 font-display font-bold text-lg sm:text-xl uppercase"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FF4A0A] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
