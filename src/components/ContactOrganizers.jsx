import { motion } from 'framer-motion';
import { Mail, Phone, Users } from 'lucide-react';

export default function ContactOrganizers() {
  return (
    <section id="contact" className="relative w-full bg-[#0A0A0A] py-24 text-[#EAEAEA]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,rgba(138,43,226,0.12),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Contact Organizers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, type: 'spring', stiffness: 120, damping: 18 }}
            className="mt-2 text-white/70"
          >
            Questions, partnerships, or sponsorships — we’d love to talk.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Faculty Mentors */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_40px_rgba(0,255,198,0.06)]"
          >
            <div className="pointer-events-none absolute -inset-px opacity-60 blur-2xl bg-gradient-to-br from-[#00FFC6]/20 to-[#8A2BE2]/20" />
            <div className="relative mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#00FFC6]/20 to-[#8A2BE2]/20 ring-1 ring-white/10">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Faculty Mentors</h3>
            </div>
            <ul className="relative space-y-3 text-white/80">
              <li>
                <div className="font-medium text-white">Dr. Manjeet Kaur</div>
                <div className="text-sm text-white/70">Faculty Coordinator, Mathematics Dept.</div>
              </li>
              <li>
                <div className="font-medium text-white">Mr. Virmani Sir</div>
                <div className="text-sm text-white/70">Event Advisor</div>
              </li>
            </ul>
          </motion.div>

          {/* Student Coordinators */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.05, type: 'spring', stiffness: 140, damping: 18 }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_40px_rgba(0,255,198,0.06)]"
          >
            <div className="pointer-events-none absolute -inset-px opacity-60 blur-2xl bg-gradient-to-br from-[#8A2BE2]/20 to-[#00FFC6]/20" />
            <div className="relative mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#8A2BE2]/20 to-[#00FFC6]/20 ring-1 ring-white/10">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Student Coordinators</h3>
            </div>
            <ul className="relative space-y-4 text-white/80">
              <li>
                <div className="font-medium text-white">Hariom Gupta</div>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/70">
                  <a href="tel:+91XXXXXXXX" className="inline-flex items-center gap-1 hover:text-[#00FFC6]"><Phone className="h-4 w-4" /><span>+91 XXXXXXXX</span></a>
                  <a href="mailto:hariom@example.com" className="inline-flex items-center gap-1 hover:text-[#8A2BE2]"><Mail className="h-4 w-4" /><span>hariom@example.com</span></a>
                </div>
              </li>
              <li>
                <div className="font-medium text-white">Core Infinity Society Team</div>
                <a href="mailto:infinitysociety.gtbit@gmail.com" className="mt-1 inline-flex items-center gap-1 text-sm text-white/70 hover:text-[#8A2BE2]"><Mail className="h-4 w-4" /><span>infinitysociety.gtbit@gmail.com</span></a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
