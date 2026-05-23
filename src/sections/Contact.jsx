import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, Code2, Headphones, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { navItems } from '../data/siteData.js';

const addressLines = ['Sr No. 92, 1A/2/1, Lane No. 2', 'Sanket Park, Hadapsar', 'Pune - 411060'];
const address = addressLines.join(', ');
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const instagramUrl = 'https://www.instagram.com/axinex_technologies?igsh=OHpsajNvOWMxOXlx';
const linkedInUrl = 'https://www.linkedin.com/company/117764245/';
const inquiryPoints = [
  { icon: Code2, text: 'Software solutions inquiries' },
  { icon: Headphones, text: 'Project consultation and support' },
  { icon: Building2, text: 'Businesses, institutions, and government organizations' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell relative overflow-hidden pb-12">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-plasma/18 blur-3xl" />
      <div className="absolute bottom-12 right-0 h-80 w-80 rounded-full bg-ion/16 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          data-reveal
          className="mx-auto mb-8 flex w-fit rounded-full border border-ion/30 bg-ion/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-ion shadow-neon"
        >
          Contact
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <motion.aside
            data-reveal
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-6 shadow-neon backdrop-blur-2xl sm:p-8"
          >
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-plasma/18 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-ion/12 blur-3xl" />
            <div className="relative">
              <h3 className="mb-5 font-display text-2xl font-semibold text-white sm:text-3xl">
                Start a Project Conversation
              </h3>
              <div className="grid gap-4">
              {inquiryPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.text} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-white/72">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ion/30 bg-ion/10 text-ion shadow-neon">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-medium leading-6">{point.text}</span>
                  </div>
                );
              })}
              </div>
            </div>
          </motion.aside>

          <motion.form
            data-reveal
            whileHover={{ boxShadow: '0 0 70px rgba(0,217,255,0.16)' }}
            className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-5 shadow-neon backdrop-blur-2xl sm:p-8"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-ion/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-flux/12 blur-3xl" />
            <div className="relative grid gap-5 lg:grid-cols-[1fr_1fr]">
              <div className="grid gap-5">
                <input className="holo-input" placeholder="Name" />
                <input className="holo-input" placeholder="Email" type="email" />
                <input className="holo-input" placeholder="Mobile Number" type="tel" />
              </div>
              <textarea className="holo-input min-h-52 resize-none py-4 lg:min-h-full" placeholder="Message" />
            </div>
            <div className="relative mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 text-sm text-white/45">
                <span className="h-2 w-2 rounded-full bg-flux shadow-[0_0_18px_rgba(255,43,214,0.7)]" />
                Future-ready project inquiries
              </div>
              <button type="button" className="flex items-center justify-center gap-3 rounded-2xl border border-ion/40 bg-gradient-to-r from-plasma/70 via-ion/60 to-flux/70 px-6 py-4 font-semibold text-white shadow-neon transition hover:-translate-y-1 sm:min-w-56">
                Submit Inquiry
                <Send className="h-5 w-5" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      <footer className="relative z-10 mt-20 rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-6 shadow-neon backdrop-blur-2xl sm:p-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_1.1fr]">
          <div>
            <a href="#hero" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-36 items-center overflow-hidden rounded-full border border-ion/40 bg-white/[0.92] px-4 shadow-neon">
                <img src="/assets/axinex-logo-cropped.jpeg" alt="Axinex Technologies" className="h-full w-full object-contain" />
              </span>
            </a>
            <p className="mt-6 max-w-sm leading-7 text-white/60">
              {addressLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </p>
            <div className="mt-6 flex gap-3">
              <a aria-label="Instagram" href={instagramUrl} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white/70 transition hover:-translate-y-1 hover:border-flux/50 hover:text-flux">
                <Instagram className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href={linkedInUrl} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white/70 transition hover:-translate-y-1 hover:border-ion/50 hover:text-ion">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="Open location in Google Maps" href={mapUrl} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white/70 transition hover:-translate-y-1 hover:border-volt/50 hover:text-volt">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-ion">Navigation</h3>
            <div className="mt-6 grid gap-3">
              {[...navItems, 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white/62 transition hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-ion">Contact Details</h3>
            <div className="mt-6 grid gap-4 text-white/62">
              <a href="tel:+919172551655" className="flex items-center gap-3 transition hover:text-white">
                <Phone className="h-5 w-5 shrink-0 text-ion" />
                +91 9172551655
              </a>
              <a href="mailto:axinex.technologies@gmail.com" className="flex items-center gap-3 break-all transition hover:text-white">
                <Mail className="h-5 w-5 shrink-0 text-ion" />
                axinex.technologies@gmail.com
              </a>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:-translate-y-1 hover:border-ion/35 hover:text-white">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-ion" />
                <span>{addressLines.join(', ')}</span>
              </a>
              <a href="#hero" className="group inline-flex items-center justify-self-start rounded-full border border-ion/30 bg-ion/10 px-4 py-3 font-semibold text-ion shadow-neon transition hover:-translate-y-1 hover:border-ion/60 hover:text-white">
                Back to Orbit
                <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
          (c) 2026 Axinex Technologies. Future-ready digital solutions.
        </div>
      </footer>
    </section>
  );
}
