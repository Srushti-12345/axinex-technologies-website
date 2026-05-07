import { Github, Linkedin, Mail } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import { team } from '../data/siteData.js';

export default function Team() {
  return (
    <section id="team" className="section-shell">
      <SectionHeader
        eyebrow="Signal Team"
        title="Operational strengths behind every Axinex Technologies engagement."
        text="Technical excellence, professional project management, governance standards, and customer-focused strategies shape the way every solution is planned and delivered."
      />
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => {
          const Icon = member.icon;
          return (
            <article
              key={member.name}
              data-reveal
              className="group relative overflow-hidden rounded-[999px] border border-white/12 bg-white/[0.045] px-6 py-10 text-center shadow-neon backdrop-blur-2xl"
              style={{ animationDelay: `${index * 0.18}s` }}
            >
              <div className="absolute inset-4 rounded-full border border-ion/15" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-plasma/20 via-ion/10 to-flux/20 blur-xl transition group-hover:scale-125" />
              <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-full border border-ion/35 bg-void/70 shadow-neon">
                <Icon className="h-12 w-12 text-ion" />
              </div>
              <h3 className="relative mt-7 font-display text-xl font-semibold">{member.name}</h3>
              <p className="relative mt-2 text-sm uppercase tracking-[0.22em] text-white/50">{member.role}</p>
              <div className="relative mt-7 flex justify-center gap-3">
                {[Linkedin, Github, Mail].map((Social, socialIndex) => (
                  <button
                    key={socialIndex}
                    aria-label="Team link"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white/60 transition hover:border-ion/50 hover:text-ion hover:shadow-neon"
                  >
                    <Social className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
