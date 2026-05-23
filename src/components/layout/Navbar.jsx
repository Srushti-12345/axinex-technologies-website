import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../../data/siteData.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 120], ['rgba(2,2,10,0)', 'rgba(2,2,10,0.72)']);
  const borderColor = useTransform(scrollY, [0, 120], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.12)']);

  return (
    <motion.header
      style={{ background, borderColor }}
      className="fixed left-0 right-0 top-0 z-50 border-b px-4 py-4 backdrop-blur-2xl sm:px-6"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#hero" className="group flex items-center gap-3">
          <span className="flex h-11 w-32 items-center justify-center overflow-hidden rounded-full border border-ion/40 bg-white px-4 shadow-neon sm:w-36">
            <img src="/assets/axinex-logo-transparent.png" alt="Axinex Technologies" className="block h-auto w-full object-contain" />
          </span>
        </a>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            Contact
          </a>
        </div>
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.07] lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-4 grid max-w-7xl gap-2 rounded-2xl border border-white/10 bg-ink/95 p-3 shadow-neon lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item}
              onClick={() => setOpen(false)}
              href={`#${item.toLowerCase()}`}
              className="rounded-xl px-4 py-3 text-sm uppercase tracking-[0.2em] text-white/70 hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="rounded-xl px-4 py-3 text-sm uppercase tracking-[0.2em] text-white/70 hover:bg-white/10 hover:text-white"
          >
            Contact
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
