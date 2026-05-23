import SectionHeader from '../components/shared/SectionHeader.jsx';
import { technologies } from '../data/siteData.js';

export default function TechStack() {
  return (
    <section id="tech" className="section-shell">
      <SectionHeader
        eyebrow="Technology Orbit"
        title="Technology capabilities built around performance, security, and scale."
        text="Business process automation, workflow systems, data management, reporting tools, system integration, secure access, performance optimization, and modern architecture standards work together as one digital foundation."
      />
      <div className="relative mx-auto mt-16 grid min-h-[28rem] w-full max-w-5xl place-items-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-neon backdrop-blur-2xl sm:min-h-[36rem] sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.17),transparent_38%),linear-gradient(135deg,rgba(155,92,255,0.12),transparent,rgba(255,43,214,0.12))]" />
        <div className="orbit-ring h-[17rem] w-[17rem] sm:h-[27rem] sm:w-[27rem]" />
        <div className="orbit-ring h-[11rem] w-[11rem] animation-delay-2000 sm:h-[19rem] sm:w-[19rem]" />
        <div className="relative z-10 grid h-32 w-32 place-items-center rounded-full border border-ion/40 bg-void/80 text-center shadow-neon sm:h-44 sm:w-44">
          <div>
            <div className="font-display text-2xl font-semibold sm:text-3xl">AX</div>
            <div className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-ion sm:text-xs sm:tracking-[0.28em]">Core</div>
          </div>
        </div>
        <div className="absolute inset-0 left-1/2 top-1/2 h-0 w-0 animate-orbit overflow-visible">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const angle = (360 / technologies.length) * index;
            return (
              <div
                key={tech.name}
                className="tech-node"
                style={{
                  '--angle': `${angle}deg`,
                  '--reverse-angle': `${-angle}deg`,
                }}
              >
                <Icon className="h-5 w-5 text-ion" />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
