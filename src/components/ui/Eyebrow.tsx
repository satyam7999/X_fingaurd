import React from 'react';
import { cn } from '@/lib/utils';

interface EyebrowProps {
  children: React.ReactNode;
  variant?: 'orange' | 'dark' | 'light';
  className?: string;
}

export default function Eyebrow({
  children,
  variant = 'orange',
  className = '',
}: EyebrowProps) {
  const variantStyles = {
    orange: 'bg-[#FF4A0A]/10 text-[#FF4A0A] border-[#FF4A0A]/30',
    dark: 'bg-black/5 text-zinc-900 border-zinc-300',
    light: 'bg-white/10 text-white border-white/20',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] md:text-xs font-mono font-semibold tracking-widest uppercase border',
        variantStyles[variant],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      <span>{children}</span>
    </div>
  );
}
