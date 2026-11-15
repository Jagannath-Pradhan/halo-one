"use client";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const v = useMotionValue(0);
  const text = useTransform(v, (n) => Math.round(n) + suffix);
  useEffect(() => { if (inView) animate(v, to, { duration: 1.6, ease: "easeOut" }); }, [inView, to, v]);
  return <motion.span ref={ref}>{text}</motion.span>;
}

const specs = [
  { n: 60, s: " h", l: "Battery life" }, { n: 40, s: " mm", l: "Beryllium drivers" },
  { n: 238, s: " g", l: "Weight" }, { n: 45, s: " dB", l: "Noise reduction" },
];

export default function Specs() {
  return (
    <section id="specs" className="bg-plum py-20 sm:py-28">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-5 lg:grid-cols-4">
        {specs.map((s) => (
          <div key={s.l}>
            <dd className="font-display text-5xl font-extrabold text-ice sm:text-6xl"><Counter to={s.n} suffix={s.s} /></dd>
            <dt className="mt-2 text-mist/60">{s.l}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
