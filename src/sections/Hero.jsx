import { motion } from 'framer-motion';
import { ArrowDown, Cpu, Sparkles } from 'lucide-react';
import HolographicScene from '../components/three/HolographicScene.jsx';
import { fadeUp, stagger } from '../utils/motion.js';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28">
      <HolographicScene />
      <div className="mesh-grid absolute inset-0 opacity-70" />
      <div className="spotlight absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-void to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center justify-center px-4 pb-20 sm:px-6">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="w-full max-w-4xl lg:-translate-x-24">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-ion/30 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100 shadow-neon backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-ion" />
            Service-based software solutions
          </motion.div>
          <motion.h1 variants={fadeUp} className="hologram-text font-display text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-8xl">
            Axinex Technologies
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="typing mt-7 max-w-2xl text-lg leading-8 text-cyan-50/70 sm:text-2xl"
          >
            From custom software development to AI automation, Axinex delivers future-ready digital solutions tailored for startups and enterprises.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="glass-button group">
              Explore Solutions
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-1" />
            </a>
            <a href="#contact" className="glass-button glass-button-secondary">
              Start Your Project
              <Cpu className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2.1, duration: 1.7, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-white/15 bg-white/[0.05] p-3 backdrop-blur-xl md:block"
      >
        <ArrowDown className="h-5 w-5 text-ion" />
      </motion.a>
    </section>
  );
}
