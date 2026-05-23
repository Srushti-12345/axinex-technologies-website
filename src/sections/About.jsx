import CountUp from '../components/shared/CountUp.jsx';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import TiltCard from '../components/shared/TiltCard.jsx';
import { stats, timeline } from '../data/siteData.js';

const principles = [
  {
    title: 'Vision',
    text: 'To become a globally trusted technology partner delivering intelligent, scalable, and future-ready digital solutions powered by innovation, AI, and modern engineering.',
  },
  {
    title: 'Mission',
    text: 'To help startups, businesses, and organizations build innovative digital products through modern software development, AI integration, and scalable technology solutions.',
  },
  {
    title: 'Values',
    text: 'At Axinex Technologies, we value innovation, transparency, scalability, and continuous growth-delivering modern, AI-powered digital solutions focused on quality, performance, and client success.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        eyebrow="About Axinex"
        title="AI-Driven Software Solutions for Future-Ready Businesses"
        text="Axinex Technologies develops scalable web platforms, mobile applications, and AI-powered software solutions tailored for startups, enterprises, and organizations seeking digital transformation."
      />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {principles.map((item) => (
          <TiltCard key={item.title} className="min-h-64">
            <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-ion to-flux shadow-neon" />
            <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-5 text-sm leading-7 text-white/60">{item.text}</p>
          </TiltCard>
        ))}
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <TiltCard key={stat.label} className="min-h-56">
            {stat.value !== null ? (
              <div className="font-display text-5xl font-semibold text-white">
                <CountUp value={stat.value} />
                <span className="text-ion">{stat.suffix}</span>
              </div>
            ) : (
              <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-plasma via-ion to-flux shadow-neon" />
            )}
            <h3 className={`${stat.value !== null ? 'mt-5' : ''} font-display text-2xl font-semibold leading-tight text-white`}>
              {stat.label}
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/58">{stat.subtitle}</p>
          </TiltCard>
        ))}
      </div>
      <div className="relative mt-24 grid gap-8 lg:grid-cols-3">
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
