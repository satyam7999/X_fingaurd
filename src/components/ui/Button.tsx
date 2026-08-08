'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  showArrow = true,
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-300 rounded-full group select-none overflow-hidden';

  const variantStyles = {
    primary:
      'bg-[#FF4A0A] text-white hover:bg-[#e03e00] shadow-lg shadow-[#FF4A0A]/20 hover:shadow-[#FF4A0A]/40',
    secondary: 'bg-white text-black hover:bg-zinc-200',
    dark: 'bg-[#111111] text-white hover:bg-[#222222] border border-white/10',
    outline:
      'bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/5',
  };

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs gap-2',
    md: 'px-7 py-3.5 text-xs md:text-sm gap-3',
    lg: 'px-9 py-4.5 text-sm md:text-base gap-4',
  };

  const content = (
    <span className="flex items-center gap-3 z-10">
      <span>{children}</span>
      {showArrow && (
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black/20 group-hover:bg-black/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight className="w-4 h-4 text-current" />
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <MagneticButton>
        <Link
          href={href}
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        >
          {content}
        </Link>
      </MagneticButton>
    );
  }

  return (
    <MagneticButton>
      <button
        type={type}
        onClick={onClick}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      >
        {content}
      </button>
    </MagneticButton>
  );
}
