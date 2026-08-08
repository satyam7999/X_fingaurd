'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState<string>('ALL');

  const categories = ['ALL', 'PRODUCT', 'INSIGHTS', 'SECURITY', 'MARKETS'];

  const filteredPosts =
    activeCat === 'ALL' ? blogPosts : blogPosts.filter((p) => p.category === activeCat);

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-6 py-12 border-b border-white/10">
          <Eyebrow variant="orange">JOURNAL & EDITORIAL</Eyebrow>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
            FINTECH INSIGHTS <br />
            <span className="text-[#FF4A0A]">& MARKET PERSPECTIVES</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Thought leadership, product updates, and technical deep dives from the engineers and economists at Finguard.
          </p>

          <div className="flex flex-wrap gap-3 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                  activeCat === cat
                    ? 'bg-[#FF4A0A] text-white shadow-lg shadow-[#FF4A0A]/30'
                    : 'bg-white/5 text-zinc-400 border border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#FF4A0A] transition-all flex flex-col justify-between h-[360px] group cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-zinc-500 mb-4">
                  <span className="text-[#FF4A0A] font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mb-3 group-hover:text-[#FF4A0A] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-zinc-400">By {post.author}</span>
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#FF4A0A] text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
