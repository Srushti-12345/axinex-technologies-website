import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

export default function TiltCard({ children, className = '' }) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0,217,255,0.18), transparent 34%), rgba(255,255,255,0.055)`;

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - y) * 11);
    rotateY.set((x - 0.5) * 13);
    glowX.set(x * 100);
    glowY.set(y * 100);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, background, transformStyle: 'preserve-3d' }}
      className={`group relative overflow-hidden rounded-[1.35rem] border border-white/12 p-[1px] shadow-neon backdrop-blur-2xl ${className}`}
    >
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/20 via-transparent to-flux/20 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative h-full rounded-[1.28rem] bg-ink/50 p-6">{children}</div>
    </motion.div>
  );
}
