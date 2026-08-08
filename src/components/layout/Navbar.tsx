'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Shield, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const navLinks = [
  { name: 'Products', href: '/features' },
  { name: 'Features', href: '/features' },
  { name: 'Benefits', href: '/benefits' },
  { name: 'Partners', href: '/partners' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 z-50">
            <div className="w-10 h-10 rounded-xl bg-[#FF4A0A] flex items-center justify-center text-white font-bold shadow-lg shadow-[#FF4A0A]/30 group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-5 h-5 fill-current stroke-[2.5]" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter uppercase text-white group-hover:text-[#FF4A0A] transition-colors duration-300">
              FINGUARD<span className="text-[#FF4A0A]">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8 bg-white/5 border border-white/10 px-7 py-2.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-white py-1 ${
                    isActive ? 'text-white' : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF4A0A] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/login"
              className="text-xs md:text-sm font-semibold tracking-wider uppercase text-zinc-300 hover:text-white transition-colors px-3 py-2"
            >
              Log In
            </Link>
            <Button href="/signup" variant="primary" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-50 w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF4A0A]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 bg-black flex flex-col justify-between p-8 pt-28 md:p-16 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono text-[#FF4A0A] tracking-widest uppercase">
                NAVIGATION MENU
              </span>
              <nav className="flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      className="text-3xl md:text-5xl font-display font-black tracking-tight uppercase hover:text-[#FF4A0A] transition-colors flex items-center justify-between group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-7 h-7 text-zinc-600 group-hover:text-[#FF4A0A] group-hover:translate-x-2 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-6 pt-8 border-t border-zinc-800">
              <div className="flex gap-4">
                <Button href="/signup" variant="primary" size="md" className="w-full justify-center">
                  Get Started Now
                </Button>
                <Button href="/login" variant="dark" size="md" className="w-full justify-center">
                  Log In
                </Button>
              </div>
              <p className="text-xs text-zinc-500 font-mono text-center">
                © 2026 FINGUARD INC. ALL RIGHTS RESERVED.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
