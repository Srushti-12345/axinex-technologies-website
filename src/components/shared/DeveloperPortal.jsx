import { AnimatePresence, motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const developer = {
  name: 'Srushti Tingane',
  role: 'Front-end Developer',
  image: '/assets/srushti-tingane.jpeg',
  github: 'https://github.com/Srushti-12345',
  linkedin: 'https://www.linkedin.com/in/srushti-tingane-97387327b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  email: 'mailto:srushtitingane25@gmail.com',
};

export default function DeveloperPortal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.button
        type="button"
        aria-label="Open developer profile"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-5 left-5 z-50 flex items-center gap-3 rounded-full border border-ion/30 bg-void/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-50 shadow-neon backdrop-blur-2xl transition hover:-translate-y-1 hover:border-flux/50 hover:bg-white/[0.08] sm:bottom-6 sm:left-6"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-plasma/70 via-ion/60 to-flux/70 shadow-neon">
          <Code2 className="h-4 w-4 text-white" />
        </span>
        <span className="hidden sm:inline">Developer</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] overflow-y-auto bg-void/88 px-4 py-6 backdrop-blur-2xl sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(0,217,255,0.18),transparent_28%),radial-gradient(circle_at_74%_70%,rgba(255,43,214,0.16),transparent_30%)]" />
            <div className="mesh-grid absolute inset-0 opacity-30" />

            <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.055] p-5 shadow-neon backdrop-blur-2xl sm:p-8 lg:p-10"
              >
                <button
                  type="button"
                  aria-label="Close developer profile"
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.07] text-white/70 transition hover:border-ion/50 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div className="relative mx-auto w-full max-w-md">
                    <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-plasma/35 via-ion/25 to-flux/35 blur-2xl" />
                    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-void/70 p-3">
                      <img
                        src={developer.image}
                        alt="Srushti Tingane"
                        className="aspect-[4/5] w-full rounded-[1.2rem] object-cover object-center grayscale"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-ion/30 bg-ion/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-50 shadow-neon">
                      <Sparkles className="h-4 w-4 text-ion" />
                      Developer Profile
                    </div>
                    <h2 className="hologram-text font-display text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                      {developer.name}
                    </h2>
                    <p className="mt-5 text-xl font-semibold text-ion sm:text-2xl">{developer.role}</p>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
                      Crafted the front-end experience for this Axinex Technologies website with a focus on responsive layouts,
                      premium motion, holographic visuals, and a polished company profile presentation.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      {[
                        { label: 'GitHub', href: developer.github, icon: Github },
                        { label: 'LinkedIn', href: developer.linkedin, icon: Linkedin },
                        { label: 'Email', href: developer.email, icon: Mail },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            target={item.label === 'Email' ? undefined : '_blank'}
                            rel={item.label === 'Email' ? undefined : 'noreferrer'}
                            aria-label={item.label}
                            className="grid h-12 w-12 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white/70 shadow-neon backdrop-blur-xl transition hover:-translate-y-1 hover:border-ion/50 hover:text-ion"
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </div>

                    <div className="mt-8 rounded-[1.35rem] border border-white/10 bg-void/50 p-5">
                      <div className="text-xs uppercase tracking-[0.3em] text-flux">Credits</div>
                      <div className="mt-4 flex items-center justify-between gap-4">
                        <div>
                          <div className="font-display text-2xl font-semibold">Front-end Development</div>
                          <div className="mt-1 text-white/58">{developer.name}</div>
                        </div>
                        <Code2 className="h-5 w-5 shrink-0 text-ion" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
