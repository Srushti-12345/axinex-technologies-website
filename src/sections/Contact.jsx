import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader.jsx';

export default function Contact() {
  return (
    <section id="contact" className="section-shell relative overflow-hidden pb-28">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-plasma/18 blur-3xl" />
      <div className="absolute bottom-12 right-0 h-80 w-80 rounded-full bg-ion/16 blur-3xl" />
      <SectionHeader
        eyebrow="Contact"
        title="Connect with Axinex Technologies."
        text="Start a conversation about customized software, mobile applications, web platforms, responsive websites, quality assurance, and long-term digital transformation."
      />
      <div className="relative z-10 mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div data-reveal className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-8 shadow-neon backdrop-blur-2xl">
          <h3 className="font-display text-3xl font-semibold">Start a project conversation</h3>
          <p className="mt-4 leading-7 text-white/60">Axinex Technologies serves businesses, institutions, and government organizations with customized IT solutions.</p>
          <div className="mt-9 grid gap-5">
            {[
              { icon: Mail, label: 'Software solutions inquiries' },
              { icon: Phone, label: 'Project consultation and support' },
              { icon: MapPin, label: 'Businesses, institutions, and government organizations' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ion/10 text-ion">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-white/70">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <motion.form
          data-reveal
          whileHover={{ boxShadow: '0 0 70px rgba(0,217,255,0.16)' }}
          className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6 shadow-neon backdrop-blur-2xl sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <input className="holo-input" placeholder="Name" />
            <input className="holo-input" placeholder="Email" type="email" />
          </div>
          <input className="holo-input mt-5" placeholder="Company / Project" />
          <textarea className="holo-input mt-5 min-h-40 resize-none py-4" placeholder="Project requirement" />
          <button type="button" className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-ion/40 bg-gradient-to-r from-plasma/70 via-ion/60 to-flux/70 px-6 py-4 font-semibold text-white shadow-neon transition hover:-translate-y-1">
            Submit Inquiry
            <Send className="h-5 w-5" />
          </button>
        </motion.form>
      </div>
      <footer className="relative z-10 mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
        <span>© 2026 Axinex Technologies. Service-based software solutions.</span>
        <a href="#hero" className="flex items-center gap-2 text-ion hover:text-white">
          Back to orbit <ArrowUpRight className="h-4 w-4" />
        </a>
      </footer>
    </section>
  );
}
