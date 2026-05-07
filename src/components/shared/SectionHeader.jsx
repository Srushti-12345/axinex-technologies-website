import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../utils/motion.js';

export default function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl`}
    >
      <motion.div variants={fadeUp} className="mb-4 text-xs font-semibold uppercase tracking-[0.42em] text-ion">
        {eyebrow}
      </motion.div>
      <motion.h2 variants={fadeUp} className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </motion.h2>
      <motion.p variants={fadeUp} className="mt-5 text-base leading-8 text-white/60 sm:text-lg">
        {text}
      </motion.p>
    </motion.div>
  );
}
