'use client';

import React, { use } from 'react';
import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from 'lucide-react';
import { blogPosts } from '../page';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = use(params);
  const post =
    blogPosts.find((p) => p.slug === resolvedParams.slug) || blogPosts[0];

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="max-w-[900px] mx-auto px-5 md:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#FF4A0A] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO JOURNAL
        </Link>

        <div className="flex flex-col gap-6 pb-8 border-b border-white/10">
          <Eyebrow variant="orange">{post.category}</Eyebrow>
          <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tighter uppercase leading-[1.05]">
            {post.title}
          </h1>

          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-4 border-t border-white/10">
            <div className="flex items-center gap-4">
              <span>By {post.author}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="py-12 flex flex-col gap-6 text-zinc-300 text-base md:text-lg leading-relaxed font-sans">
          <p className="font-semibold text-white text-xl leading-snug">
            {post.excerpt}
          </p>

          <h2 className="font-display font-bold text-2xl md:text-3xl text-white uppercase mt-6 tracking-tight">
            1. The Liquidity Problem in Traditional Banking
          </h2>
          <p>
            For decades, retail and commercial banking infrastructure relied on end-of-day batch processing and legacy SWIFT network messaging. Cash reserves remained locked in non-yield accounts while clearing nodes took 48 to 72 hours to settle cross-border transactions.
          </p>
          <p>
            Finguard eliminates this latency by deploying zero-knowledge cryptographic verification over distributed liquidity nodes. Transactions complete in less than 50 milliseconds with deterministic finality.
          </p>

          <blockquote className="my-6 p-8 rounded-3xl bg-[#111111] border-l-4 border-[#FF4A0A] font-display font-bold text-xl md:text-2xl text-white uppercase italic">
            "Automated liquidity sweeps ensure that uninvested cash never sits idle, compounding yield every single second."
          </blockquote>

          <h2 className="font-display font-bold text-2xl md:text-3xl text-white uppercase mt-6 tracking-tight">
            2. Institutional Security Meets Personal Command
          </h2>
          <p>
            By combining multi-party computation with real-time zero-day neural network anomaly detection, users gain institutional-level security without cumbersome manual verification steps.
          </p>
        </div>

        {/* Article Footer CTA */}
        <div className="mt-12 p-8 rounded-3xl bg-[#111111] border border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="font-display font-bold text-xl uppercase">Enjoyed this article?</h4>
            <p className="text-zinc-400 text-xs mt-1">Subscribe to the weekly Finguard Market Telemetry digest.</p>
          </div>
          <Button href="/signup" variant="primary" size="md">
            SUBSCRIBE NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
