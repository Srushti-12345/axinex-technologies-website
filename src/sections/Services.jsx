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
      <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <TiltCard key={service.title} className="service-card min-h-80">
              <div className={`mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} shadow-neon`}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-white/60">{service.text}</p>
              <motion.div
                initial={{ width: '35%' }}
                whileHover={{ width: '100%' }}
                className={`mt-8 h-px bg-gradient-to-r ${service.accent}`}
              />
              <div className="mt-5 text-xs uppercase tracking-[0.28em] text-white/40">hover to refract</div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
