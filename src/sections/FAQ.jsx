import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import { faqs } from '../data/siteData.js';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-shell">
      <SectionHeader
        eyebrow="FAQ"
        title="Quick answers for business decision-makers."
        text="A concise summary of what Axinex Technologies offers, who it serves, and how delivery quality is handled."
      />
      <div className="mx-auto mt-14 max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.045] backdrop-blur-2xl">
            <button
              type="button"
              onClick={() => setOpen(open === index ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
            >
              <span className="font-display text-lg font-semibold sm:text-xl">{faq.question}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-ion transition ${open === index ? 'rotate-180' : ''}`} />
            </button>
            {open === index && <p className="px-5 pb-6 leading-7 text-white/60 sm:px-7">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
