import { animate, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function CountUp({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => rounded.on('change', setDisplay), [rounded]);

  useEffect(() => {
    if (!isInView) return undefined;
    const controls = animate(count, value, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [count, isInView, value]);

  return <span ref={ref}>{display}</span>;
}
