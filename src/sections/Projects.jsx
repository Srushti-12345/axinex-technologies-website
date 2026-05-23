import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import { projects } from '../data/siteData.js';

export default function Projects() {
  const scroller = useRef(null);
  const scrollShowcase = (direction) => {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({
      left: direction * Math.min(node.clientWidth * 0.86, 520),
      behavior: 'smooth',
    });
  };

  return (
    <section id="projects" className="section-shell overflow-hidden">
      <SectionHeader
        eyebrow="Showcase"
        title="Digital capabilities designed to strengthen operations and engagement."
        text="A cinematic view of the solutions Axinex Technologies delivers across software, mobile, web applications, and responsive websites."
      />

      <div className="mt-12 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Previous showcase card"
          onClick={() => scrollShowcase(-1)}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white/70 shadow-neon backdrop-blur-xl transition hover:-translate-y-1 hover:border-ion/50 hover:text-ion"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next showcase card"
          onClick={() => scrollShowcase(1)}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white/70 shadow-neon backdrop-blur-xl transition hover:-translate-y-1 hover:border-ion/50 hover:text-ion"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={scroller}
        className="showcase-scroller -mx-4 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-8 pt-4 sm:-mx-6 sm:gap-6 sm:px-6"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -18, scale: 1.035 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="group relative h-[27rem] w-[84vw] max-w-[31rem] shrink-0 snap-center overflow-hidden rounded-[1.6rem] border border-white/12 bg-white/[0.055] p-5 shadow-neon backdrop-blur-2xl sm:h-[30rem] sm:w-[30rem] sm:p-6"
          >
            <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(155,92,255,0.24),transparent_35%,rgba(0,217,255,0.18)_62%,rgba(255,43,214,0.2))] opacity-70" />
            <div className="absolute inset-8 rounded-full bg-ion/10 blur-3xl transition duration-500 group-hover:bg-flux/16" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.34em] text-ion">{project.kicker}</div>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">{project.title}</h3>
                <p className="mt-5 leading-8 text-white/60">{project.text}</p>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div className="font-display text-4xl font-semibold text-white/90 sm:text-5xl">0{index + 1}</div>
                <div className="rounded-full border border-volt/30 bg-volt/10 px-3 py-2 text-xs font-semibold text-emerald-100 sm:px-4 sm:text-sm">
                  {project.metric}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
