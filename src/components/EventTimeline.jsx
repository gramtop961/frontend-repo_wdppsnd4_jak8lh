import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, School } from 'lucide-react';

const stages = [
  {
    title: 'Round 1 – Idea Submission',
    mode: 'Online',
    icon: Laptop,
    period: 'Oct 20 – Oct 30, 2025',
    desc: 'Submit a concise concept note, problem statement, and solution approach. Judged on clarity, feasibility, and impact.'
  },
  {
    title: 'Result Declaration',
    mode: 'Online',
    icon: Laptop,
    period: 'Nov 2, 2025',
    desc: 'Shortlisted teams announced. Onboarding and theme deep-dives shared with finalists.'
  },
  {
    title: 'Final 24-hour Hackathon',
    mode: 'Hybrid',
    icon: School,
    period: 'Nov 9 – Nov 10, 2025',
    desc: 'Build, iterate and present. Attend workshops, get mentored, and demo to jury. Both online and on-campus tracks available.'
  }
];

export default function EventTimeline() {
  const [active, setActive] = useState(null);

  const ActiveIcon = active !== null ? stages[active]?.icon : null;

  return (
    <section id="timeline" className="relative w-full bg-[#0A0A0A] py-20 text-[#EAEAEA]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Event Flow</h2>

        <div className="no-scrollbar relative -mx-6 overflow-x-auto px-6">
          <div className="flex min-w-full gap-6">
            {stages.map((s, idx) => (
              <motion.button
                key={s.title}
                onClick={() => setActive(idx)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="group relative min-w-[260px] rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_40px_rgba(0,255,198,0.07)] backdrop-blur-md focus:outline-none"
              >
                <div className="mb-3 flex items-center gap-2 text-[#00FFC6]">
                  <s.icon className="h-5 w-5" />
                  <span className="text-xs uppercase tracking-wide text-white/70">{s.mode}</span>
                </div>
                <div className="text-lg font-semibold">{s.title}</div>
                <div className="mt-1 text-sm text-white/70">{s.period}</div>
                <div className="pointer-events-none absolute -bottom-4 left-1/2 h-2 w-[140%] -translate-x-1/2 bg-gradient-to-r from-[#00FFC6]/0 via-[#00FFC6]/30 to-[#8A2BE2]/0 blur-md" />
              </motion.button>
            ))}
          </div>
          <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-[#00FFC6]/20 via-white/10 to-[#8A2BE2]/20" />
        </div>

        <AnimatePresence>
          {active !== null && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
              onClick={() => setActive(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="max-w-lg rounded-2xl border border-white/10 bg-[#0B0B0B] p-6 text-white shadow-2xl backdrop-blur-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-2 flex items-center gap-2 text-[#00FFC6]">
                  {ActiveIcon && <ActiveIcon className="h-5 w-5" />}
                  <span className="text-xs uppercase tracking-wide text-white/70">{stages[active]?.mode}</span>
                </div>
                <div className="text-xl font-semibold">{stages[active]?.title}</div>
                <div className="mt-1 text-sm text-white/70">{stages[active]?.period}</div>
                <p className="mt-4 text-white/85">{stages[active]?.desc}</p>
                <button
                  onClick={() => setActive(null)}
                  className="mt-6 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:border-white/25 hover:bg-white/10"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
