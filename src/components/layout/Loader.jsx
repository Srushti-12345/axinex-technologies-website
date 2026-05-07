import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-void"
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,217,255,0.2),transparent_32%),radial-gradient(circle_at_55%_55%,rgba(255,43,214,0.16),transparent_30%)]" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          className="mx-auto mb-7 h-24 w-24 rounded-full border border-ion/40 border-t-flux shadow-neon"
        />
        <div className="font-display text-3xl font-semibold tracking-[0.42em] text-white sm:text-5xl">
          AXINEX
        </div>
        <div className="mt-3 text-xs uppercase tracking-[0.48em] text-cyan-100/70">initializing hologram</div>
      </motion.div>
    </motion.div>
  );
}
