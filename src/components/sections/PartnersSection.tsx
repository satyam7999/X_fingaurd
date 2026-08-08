'use client';

import { motion } from 'framer-motion';
import Eyebrow from '@/components/ui/Eyebrow';

const partners = [
  { name: 'Apple Pay', category: 'Mobile Payments', tag: 'OFFICIAL PARTNER' },
  { name: 'PayPal', category: 'Global Settlement', tag: 'DIRECT GATEWAY' },
  { name: 'Google Pay', category: 'Digital Wallet', tag: 'NFC PROTOCOL' },
  { name: 'Visa Direct', category: 'Payment Network', tag: 'INSTANT PAY' },
  { name: 'Mastercard', category: 'Global Clearing', tag: 'ENTERPRISE' },
  { name: 'Stripe', category: 'Infrastructure', tag: 'API CONNECT' },
  { name: 'Plaid', category: 'Open Banking', tag: 'BANK AUTH' },
  { name: 'Coinbase', category: 'Digital Assets', tag: 'LIQUIDITY' },
];

export default function PartnersSection() {
  return (
    <section className="bg-black text-white py-24 md:py-36 relative overflow-hidden border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Top Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <Eyebrow variant="orange">OUR TRUSTED PARTNERS</Eyebrow>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.95]">
              REAL-TIME FINANCIAL <br />
              <span className="text-[#FF4A0A]">MONITORING</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-baseline gap-3">
              <span className="font-display font-black text-5xl md:text-7xl text-[#FF4A0A]">
                98%
              </span>
              <span className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
                Partnership Satisfaction Rate
              </span>
            </div>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Partners are happy with our collaboration, seamless API integration, and enterprise-grade reliability across major settlement networks.
            </p>
          </div>
        </div>

        {/* Grid of Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-[#111111] hover:bg-[#FF4A0A] border border-white/10 hover:border-[#FF4A0A] transition-all duration-300 group flex flex-col justify-between h-[220px] shadow-lg cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/10 text-zinc-300 group-hover:bg-black/30 group-hover:text-white transition-colors">
                  {partner.tag}
                </span>
                <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
              </div>

              <div>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-white/80 transition-colors uppercase block mb-1">
                  {partner.category}
                </span>
                <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight text-white uppercase group-hover:scale-105 origin-left transition-transform duration-300">
                  {partner.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
