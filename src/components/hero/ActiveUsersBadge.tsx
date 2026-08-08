'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ActiveUsersBadge() {
  const avatars = [
    { name: 'Kelly Williams', bg: 'bg-gradient-to-tr from-amber-400 to-orange-500', initial: 'KW' },
    { name: 'John Terry', bg: 'bg-gradient-to-tr from-blue-500 to-indigo-600', initial: 'JT' },
    { name: 'Caitlin Clark', bg: 'bg-gradient-to-tr from-emerald-400 to-teal-600', initial: 'CC' },
    { name: 'David Miller', bg: 'bg-gradient-to-tr from-purple-500 to-pink-600', initial: 'DM' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="inline-flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300 group cursor-default"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-[#FF4A0A] animate-ping" />
          <span>ACTIVE USERS</span>
        </div>
        <span className="font-display font-black text-2xl md:text-3xl text-white tracking-tight">
          95K<span className="text-[#FF4A0A]">+</span>
        </span>
      </div>

      <div className="h-8 w-[1px] bg-white/15" />

      <div className="flex items-center -space-x-3">
        {avatars.map((avatar, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4, scale: 1.1, zIndex: 10 }}
            className={`w-9 h-9 rounded-full ${avatar.bg} border-2 border-black flex items-center justify-center text-[10px] font-bold text-white shadow-md cursor-pointer transition-all`}
            title={avatar.name}
          >
            {avatar.initial}
          </motion.div>
        ))}
        <div className="w-9 h-9 rounded-full bg-[#FF4A0A] border-2 border-black flex items-center justify-center text-[10px] font-extrabold text-white">
          +99
        </div>
      </div>
    </motion.div>
  );
}
