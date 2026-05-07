import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursor = useRef(null);
  const trail = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return undefined;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const move = (event) => {
      x = event.clientX;
      y = event.clientY;
      document.documentElement.style.setProperty('--mx', `${x}px`);
      document.documentElement.style.setProperty('--my', `${y}px`);
    };

    const tick = () => {
      tx += (x - tx) * 0.18;
      ty += (y - ty) * 0.18;
      if (cursor.current) cursor.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (trail.current) trail.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', move);
    tick();
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <>
      <div ref={trail} className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ion/10 blur-2xl md:block" />
      <div ref={cursor} className="pointer-events-none fixed left-0 top-0 z-[81] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ion/70 bg-white/20 shadow-neon md:block" />
    </>
  );
}
