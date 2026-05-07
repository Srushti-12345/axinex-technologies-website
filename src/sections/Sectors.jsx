import SectionHeader from '../components/shared/SectionHeader.jsx';
import TiltCard from '../components/shared/TiltCard.jsx';
import { advantages, sectors } from '../data/siteData.js';

export default function Sectors() {
  return (
    <section id="sectors" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <SectionHeader
          align="left"
          eyebrow="Sectors"
          title="Built for organizations that need dependable digital systems."
          text="Axinex Technologies supports businesses, institutions, and government organizations with a delivery model focused on reliability, governance, and customer-focused strategy."
        />
        <div data-reveal className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-6 shadow-neon backdrop-blur-2xl sm:p-8">
          <div className="text-xs uppercase tracking-[0.32em] text-ion">Digital transformation lens</div>
          <p className="mt-4 text-2xl font-semibold leading-snug text-white/88">
            Streamline operations, enhance customer engagement, and accelerate transformation with customized IT solutions.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {sectors.map((sector) => {
          const Icon = sector.icon;
          return (
            <TiltCard key={sector.title} className="min-h-72">
              <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl border border-ion/30 bg-ion/10 text-ion shadow-neon">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold">{sector.title}</h3>
              <p className="mt-4 leading-7 text-white/60">{sector.text}</p>
            </TiltCard>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {advantages.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} data-reveal className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl">
              <Icon className="h-6 w-6 text-flux" />
              <h4 className="mt-4 font-display text-lg font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
