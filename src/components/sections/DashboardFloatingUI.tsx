'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock, XCircle, ArrowUpRight, Filter, Download } from 'lucide-react';

const invoices = [
  {
    name: 'Kelly Williams',
    avatar: 'KW',
    bg: 'bg-orange-500',
    date: 'Aug 08, 2026',
    amount: '$4,250.00',
    status: 'SUCCESS',
    statusBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    icon: CheckCircle2,
  },
  {
    name: 'John Terry',
    avatar: 'JT',
    bg: 'bg-blue-600',
    date: 'Aug 07, 2026',
    amount: '$1,890.50',
    status: 'PENDING',
    statusBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    icon: Clock,
  },
  {
    name: 'Caitlin Clark',
    avatar: 'CC',
    bg: 'bg-purple-600',
    date: 'Aug 05, 2026',
    amount: '$940.00',
    status: 'CANCELLED',
    statusBg: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
    icon: XCircle,
  },
];

export default function DashboardFloatingUI() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full max-w-lg bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-zinc-200 text-zinc-900 select-none z-20"
      data-cursor="card"
    >
      {/* Dashboard Top Bar */}
      <div className="flex justify-between items-center pb-5 border-b border-zinc-100">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase">
            FINANCIAL MONITORING
          </span>
          <h4 className="font-display font-bold text-xl text-zinc-900 tracking-tight">
            Latest Invoices
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 transition-colors text-zinc-600">
            <Filter className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 transition-colors text-zinc-600">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Breakdown Bar */}
      <div className="py-5">
        <div className="flex justify-between items-center text-xs font-semibold mb-2 text-zinc-600">
          <span>Allocation & Breakdown</span>
          <span className="font-mono text-zinc-900">Total $128,450.00</span>
        </div>

        {/* Multi-segmented Progress Bar */}
        <div className="h-3 w-full bg-zinc-100 rounded-full overflow-hidden flex gap-1 p-0.5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '67%' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-full bg-[#FF4A0A] rounded-full"
            title="Success: 67%"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '14%' }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-full bg-amber-400 rounded-full"
            title="Pending: 14%"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '19%' }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-full bg-zinc-800 rounded-full"
            title="Reserve: 19%"
          />
        </div>

        <div className="flex items-center gap-6 mt-3 text-xs font-medium text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4A0A]" />
            <span>Success 67%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span>Pending 14%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <span>Reserved 19%</span>
          </div>
        </div>
      </div>

      {/* Customer Rows List */}
      <div className="flex flex-col gap-3 pt-2">
        {invoices.map((inv, idx) => {
          const StatusIcon = inv.icon;
          return (
            <motion.div
              key={inv.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50 hover:bg-zinc-100/80 transition-all border border-zinc-100"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${inv.bg} text-white font-bold flex items-center justify-center text-xs shadow-sm`}
                >
                  {inv.avatar}
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-zinc-900 leading-none">
                    {inv.name}
                  </h5>
                  <span className="text-[11px] text-zinc-400 font-mono leading-none mt-1 inline-block">
                    {inv.date}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-sm text-zinc-900">
                  {inv.amount}
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider border ${inv.statusBg}`}
                >
                  <StatusIcon className="w-3 h-3" />
                  {inv.status}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
