import CountUp from '../components/shared/CountUp.jsx';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import TiltCard from '../components/shared/TiltCard.jsx';
import { stats, timeline } from '../data/siteData.js';

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        eyebrow="About Axinex"
        title="Reliable, scalable, and customized IT solutions for digital transformation."
        text="Axinex Technologies is a structured, service-based software solutions provider capable of delivering customized software, mobile applications, web applications, and dynamic websites through a professional and compliant execution framework."
      />
      <div className="mt-16 grid gap-5 md:grid-cols-4">
        {stats.map((stat) => (
          <TiltCard key={stat.label} className="min-h-44">
            <div className="font-display text-5xl font-semibold text-white">
              <CountUp value={stat.value} />
              <span className="text-ion">{stat.suffix}</span>
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-white/50">{stat.label}</p>
          </TiltCard>
        ))}
      </div>
      <div className="relative mt-20 grid gap-6 lg:grid-cols-3">
        <div className="absolute left-4 top-10 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-transparent via-ion/50 to-transparent lg:block" />
        {timeline.map((item, index) => (
          <div key={item.title} data-reveal className="relative">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-full border border-ion/40 bg-ion/10 text-sm font-semibold text-ion shadow-neon">
              0{index + 1}
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-2xl">
              <div className="text-xs uppercase tracking-[0.32em] text-flux">{item.year}</div>
              <h3 className="mt-4 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/60">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
