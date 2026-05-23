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
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {team.map((member, index) => (
          <article
            key={member.image}
            data-reveal
            className="group relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-[1.35rem] border border-white/12 bg-white/[0.045] p-2 shadow-neon backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-ion/30 hover:shadow-magenta"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <img
              src={member.image}
              alt="Axinex Technologies signal team"
              className="aspect-square w-full rounded-[1rem] object-contain object-center"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
