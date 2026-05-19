import { motion } from 'framer-motion';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import TiltCard from '../components/shared/TiltCard.jsx';
import { services } from '../data/siteData.js';

export default function Services() {
  return (
    <section id="services" className="section-shell">
      <SectionHeader
        eyebrow="Capabilities"
        title="Core services engineered for modern digital transformation."
        text="The company provides customized software, mobile applications, web applications, responsive websites, and quality assurance through a reliable delivery model."
      />
      <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <TiltCard key={service.title} className="service-card min-h-80">
              <div className="flex items-center gap-5">
                <div className={`relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} shadow-neon`}>
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-60 blur-[1px]" />
                  <Icon className="relative h-8 w-8 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]" />
                </div>
                <h3 className="font-display text-2xl font-semibold leading-tight">{service.title}</h3>
              </div>
              <p className="mt-7 leading-7 text-white/60">{service.text}</p>
              <motion.div
                initial={{ width: '35%' }}
                whileHover={{ width: '100%' }}
                className={`mt-8 h-px bg-gradient-to-r ${service.accent}`}
              />
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
