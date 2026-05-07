import { motion } from 'framer-motion';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import { processSteps } from '../data/siteData.js';

export default function Process() {
  return (
    <section id="process" className="section-shell">
      <SectionHeader
        eyebrow="Execution"
        title="A clear delivery path from requirement analysis to maintenance."
        text="From analysis and UI/UX to development, testing, deployment, and ongoing support, every phase is structured for clarity and dependable execution."
      />
      <div className="relative mt-16">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-ion via-plasma to-flux md:block" />
        <div className="grid gap-5">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              data-reveal
              whileHover={{ x: 8 }}
              className="relative grid gap-5 rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-5 shadow-neon backdrop-blur-2xl md:ml-14 md:grid-cols-[8rem_1fr] md:p-7"
            >
              <div className="absolute -left-[3.25rem] top-7 hidden h-10 w-10 place-items-center rounded-full border border-ion/40 bg-void text-xs font-bold text-ion shadow-neon md:grid">
                {index + 1}
              </div>
              <div>
                <div className="font-display text-4xl font-semibold text-white/20">{step.step}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.28em] text-ion">phase</div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-white/60">{step.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
