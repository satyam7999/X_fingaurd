'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Wifi, ShieldCheck, Zap } from 'lucide-react';

export default function FloatingCards3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position values for 3D parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] h-[460px] md:h-[520px] flex items-center justify-center perspective-1000 select-none cursor-pointer"
      data-cursor="card"
    >
      {/* Upper-Right Floating Orange 3D Decorative Geometry Shapes */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 45, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-4 z-30 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-tr from-[#FF4A0A] to-[#FF8555] shadow-2xl shadow-[#FF4A0A]/50 border border-white/20 backdrop-blur-md rotate-12 flex items-center justify-center"
      >
        <Zap className="w-8 h-8 text-white fill-current" />
      </motion.div>

      <motion.div
        animate={{
          y: [12, -12, 12],
          rotate: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-28 z-20 w-10 h-10 rounded-xl bg-[#FF4A0A]/40 border border-[#FF4A0A]/60 backdrop-blur-lg"
      />

      {/* Main 3D Card Stack */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-full h-full preserve-3d flex items-center justify-center"
      >
        {/* CARD 3: Light Gray / Platinum Card (Back) */}
        <motion.div
          animate={{
            y: [5, -10, 5],
            rotateZ: [-12, -8, -12],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="absolute w-[280px] sm:w-[340px] md:w-[380px] h-[170px] sm:h-[200px] md:h-[230px] rounded-3xl p-6 shadow-2xl backdrop-blur-xl border border-white/40 card-gray-gradient text-zinc-900 flex flex-col justify-between -translate-y-24 translate-x-12 -rotate-12 opacity-85"
        >
          <div className="flex justify-between items-start">
            <span className="font-display font-bold tracking-widest text-xs uppercase opacity-70">
              PLATINUM VAULT
            </span>
            <Wifi className="w-6 h-6 opacity-60" />
          </div>
          <div className="font-mono text-sm sm:text-base tracking-widest font-semibold">
            •••• •••• •••• 8842
          </div>
          <div className="flex justify-between items-end text-xs font-mono">
            <div>
              <div className="opacity-50 text-[9px]">HOLDER</div>
              <div className="font-semibold">ALEXANDER R.</div>
            </div>
            <div className="font-bold text-sm">VISA</div>
          </div>
        </motion.div>

        {/* CARD 2: Black Premium Obsidian Card (Middle) */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
            rotateZ: [6, 10, 6],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="absolute w-[290px] sm:w-[350px] md:w-[390px] h-[180px] sm:h-[210px] md:h-[240px] rounded-3xl p-6 sm:p-7 shadow-2xl card-black-gradient border border-white/15 text-white flex flex-col justify-between translate-y-8 -translate-x-10 rotate-6"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FF4A0A]" />
              <span className="font-display font-bold tracking-wider text-xs uppercase text-zinc-300">
                OBSIDIAN PRO
              </span>
            </div>
            <div className="w-9 h-7 rounded-md bg-amber-400/20 border border-amber-300/30 flex items-center justify-center">
              <div className="w-5 h-4 bg-amber-400/60 rounded-[3px]" />
            </div>
          </div>
          <div className="font-mono text-base sm:text-lg tracking-[0.25em] font-medium text-zinc-200">
            4912 8820 1094 3019
          </div>
          <div className="flex justify-between items-end text-xs font-mono text-zinc-400">
            <div>
              <div className="text-[9px] uppercase tracking-wider text-zinc-500">EXPIRES</div>
              <div className="text-white font-semibold">08/29</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 rounded-full bg-red-500/80" />
              <div className="w-5 h-5 rounded-full bg-amber-500/80 -ml-2" />
            </div>
          </div>
        </motion.div>

        {/* CARD 1: Signature Orange Finguard Card (Front Focal Point) */}
        <motion.div
          animate={{
            y: [-12, 12, -12],
            rotateZ: [-2, 2, -2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[300px] sm:w-[360px] md:w-[410px] h-[190px] sm:h-[220px] md:h-[250px] rounded-3xl p-7 sm:p-8 shadow-2xl shadow-[#FF4A0A]/40 card-orange-gradient text-white flex flex-col justify-between border border-white/30 z-20 hover:scale-105 transition-transform duration-500"
        >
          {/* Metallic gloss overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />

          <div className="flex justify-between items-start z-10">
            <div>
              <span className="font-display font-black tracking-tighter text-xl sm:text-2xl uppercase">
                FINGUARD<span className="text-black">.</span>
              </span>
              <p className="text-[10px] font-mono tracking-widest text-white/80 uppercase">
                PREMIUM DIGITAL BANKING
              </p>
            </div>
            <Wifi className="w-7 h-7 text-white" />
          </div>

          <div className="z-10 flex items-center justify-between">
            <div className="w-11 h-8 rounded-lg bg-gradient-to-r from-amber-200 to-amber-400 p-1 flex items-center justify-between border border-amber-500/40 shadow-inner">
              <div className="w-3 h-full border-r border-amber-600/40" />
              <div className="w-3 h-full border-l border-amber-600/40" />
            </div>
            <span className="font-mono text-xs tracking-widest bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
              CONTACTLESS
            </span>
          </div>

          <div className="z-10 font-mono text-lg sm:text-xl md:text-2xl tracking-[0.2em] font-semibold text-white drop-shadow">
            5540 9201 4410 9901
          </div>

          <div className="z-10 flex justify-between items-end text-xs font-mono">
            <div>
              <div className="text-[9px] uppercase text-white/70">CARD HOLDER</div>
              <div className="font-bold tracking-wider text-sm">KELLY WILLIAMS</div>
            </div>
            <div className="text-right">
              <div className="text-[9px] uppercase text-white/70">VALID THRU</div>
              <div className="font-bold text-sm">12/28</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
