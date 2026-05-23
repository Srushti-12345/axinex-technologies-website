import { AnimatePresence, motion } from 'framer-motion';
import { Code2, Linkedin, Mail, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const architects = [
  {
    name: 'Srushti Tingane',
    role: 'Frontend Developer',
    image: '/assets/srushti-tingane.jpeg',
    linkedin:
      'https://www.linkedin.com/in/srushti-tingane-97387327b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    email: 'mailto:srushtitingane25@gmail.com',
  },
  {
    name: 'Aafreen Khan',
    role: 'Frontend Developer',
    image: '/assets/aafreen-khan.jpeg',
    linkedin: 'https://www.linkedin.com/in/aafreen-khan-170562314',
    email: 'mailto:aafreenk7106@gmail.com',
  },
  {
    name: 'Rahul Jangir',
    role: 'Backend Developer',
    image: '/assets/rahul-jangir.jpeg',
    linkedin: 'https://www.linkedin.com/in/rahul-jangir-17197b2a3/',
    email: 'mailto:rahul.n.jangir@gmail.com',
  },
  {
    name: 'Dhananjay Shirse',
    role: 'Backend Developer',
    image: '/assets/dhananjay-shirse.jpeg',
    linkedin: 'https://www.linkedin.com/in/dhananjay-shirse-90960a321',
    email: 'mailto:dhananjayshirse7777@outlook.com',
  },
  {
    name: 'Anih Joshi',
    role: 'Frontend Developer',
    image: '/assets/anih-joshi.jpeg',
    linkedin: 'https://www.linkedin.com/in/anih-joshi-2a7ab5309',
    email: 'mailto:anihjoshi31@gmail.com',
  },
];

function ArchitectCard({ architect, index }) {
  const initials = architect.name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return (
    <motion.article
      initial={{ opacity: 0, y: 26, filter: 'blur(12px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.62, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative mx-auto w-full max-w-[18.5rem] min-w-0 overflow-hidden rounded-[1.55rem] border border-white/12 bg-white/[0.055] p-4 shadow-neon backdrop-blur-2xl sm:max-w-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,217,255,0.16),transparent_46%),linear-gradient(135deg,rgba(155,92,255,0.11),transparent,rgba(255,43,214,0.12))] opacity-80" />
      <button
        type="button"
        className="relative block w-full max-w-full overflow-hidden rounded-[1.2rem] border border-white/10 bg-void/70"
        aria-label={`${architect.name} portrait`}
      >
        {architect.image ? (
          <motion.img
            src={architect.image}
            alt={architect.name}
            whileHover={{ scale: 1.045 }}
            whileTap={{ scale: 0.985 }}
            className="aspect-[4/5] w-full max-w-full object-cover object-center grayscale transition duration-700 ease-out group-hover:grayscale-0 group-hover:saturate-125"
          />
        ) : (
          <motion.div
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: 0.985 }}
            className="grid aspect-[4/5] w-full max-w-full place-items-center bg-gradient-to-br from-white/10 via-ion/10 to-flux/10 grayscale transition duration-700 group-hover:grayscale-0"
          >
            <div className="grid h-28 w-28 place-items-center rounded-full border border-ion/35 bg-void/70 font-display text-4xl font-semibold text-white shadow-neon">
              {initials}
            </div>
          </motion.div>
        )}
      </button>

      <div className="relative pt-5">
        <h3 className="font-display whitespace-nowrap text-xl font-semibold leading-tight text-white xl:text-[1.35rem]">{architect.name}</h3>
        <p className="mt-2 text-sm font-semibold text-ion">{architect.role}</p>
        <div className="mt-5 flex gap-3">
          <a
            href={architect.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${architect.name} LinkedIn`}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white/70 transition hover:-translate-y-1 hover:border-ion/50 hover:text-ion hover:shadow-neon"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={architect.email}
            aria-label={`${architect.name} email`}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white/70 transition hover:-translate-y-1 hover:border-flux/50 hover:text-flux hover:shadow-magenta"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function DeveloperPortal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('architects') === '1') setOpen(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    document.documentElement.classList.toggle('architects-open', open);
    return () => {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('architects-open');
    };
  }, [open]);

  return (
    <>
      <motion.button
        type="button"
        aria-label="Open Digital Architects"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-5 left-5 z-50 flex items-center gap-3 rounded-full border border-ion/30 bg-void/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-50 shadow-neon backdrop-blur-2xl transition hover:-translate-y-1 hover:border-flux/50 hover:bg-white/[0.08] sm:bottom-6 sm:left-6"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-plasma/70 via-ion/60 to-flux/70 shadow-neon">
          <Code2 className="h-4 w-4 text-white" />
        </span>
        <span className="hidden sm:inline">Digital Architects</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            data-lenis-prevent
            onWheel={(event) => event.stopPropagation()}
            onTouchMove={(event) => event.stopPropagation()}
            className="architects-overlay fixed inset-0 z-[95] h-[100dvh] overflow-y-scroll overscroll-contain bg-void/88 px-4 py-6 backdrop-blur-2xl sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_14%,rgba(0,217,255,0.18),transparent_28%),radial-gradient(circle_at_74%_70%,rgba(255,43,214,0.16),transparent_30%)]" />
            <div className="mesh-grid absolute inset-0 opacity-30" />

            <div className="relative mx-auto min-h-[calc(100dvh-3rem)] w-full max-w-7xl overflow-x-hidden py-4 sm:py-8 lg:grid lg:place-items-center">
              <motion.div
                initial={{ opacity: 0, y: 34, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto w-full max-w-[calc(100vw-2rem)] overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.055] p-5 shadow-neon backdrop-blur-2xl sm:max-w-full sm:p-8 lg:p-10"
              >
                <button
                  type="button"
                  aria-label="Close Digital Architects"
                  onClick={() => setOpen(false)}
                  className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.07] text-white/70 transition hover:border-ion/50 hover:text-white sm:right-4 sm:top-4 sm:h-11 sm:w-11"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="mx-auto max-w-3xl px-2 text-center sm:px-10">
                  <div className="mb-5 inline-flex items-center justify-center gap-3 rounded-full border border-ion/30 bg-ion/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-50 shadow-neon">
                    <Sparkles className="h-4 w-4 text-ion" />
                    Digital Architects
                  </div>
                  <h2 className="hologram-text font-display text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                    The team behind the experience
                  </h2>
                  <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg">
                    A creative engineering team crafting elegant interfaces, intelligent systems, and immersive digital
                    experiences for Axinex Technologies.
                  </p>
                </div>

                <div className="mt-10 grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
                  {architects.map((architect, index) => (
                    <ArchitectCard key={architect.email} architect={architect} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
