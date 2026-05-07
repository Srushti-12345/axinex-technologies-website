import SectionHeader from '../components/shared/SectionHeader.jsx';
import { testimonials } from '../data/siteData.js';

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="section-shell">
      <SectionHeader
        eyebrow="Brand Signal"
        title="A trusted technology partner for digital growth."
        text="Axinex Technologies focuses on dependable solutions that streamline operations, enhance engagement, and accelerate transformation."
      />
      <div className="marquee-mask mt-16 overflow-hidden">
        <div className="flex w-max animate-marquee gap-5">
          {loop.map((quote, index) => (
            <figure
              key={`${quote}-${index}`}
              className="w-[22rem] rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-6 shadow-neon backdrop-blur-2xl sm:w-[30rem]"
            >
              <blockquote className="font-display text-2xl leading-snug text-white/90">"{quote}"</blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.28em] text-ion">Axinex Technologies</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
