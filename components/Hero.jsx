"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { COLORS, FINISHES, useStore } from "@/lib/store";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <div className="grid h-full place-items-center text-sm text-mist/50">Loading 3D scene…</div>,
});

export default function Hero() {
  const { color, colorName, finish, setColor, setFinish } = useStore();
  return (
    <section id="top" className="aurora relative min-h-svh overflow-hidden pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl xl:text-7xl">
            Sound you can <span className="italic text-coral">see</span>, color you can hear.
          </h1>
          <p className="mt-6 max-w-md text-lg text-mist/70">
            Halo One pairs 60-hour battery life with adaptive noise cancelling. Drag the headphones to turn them, then pick your finish.
          </p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-sm text-mist/60">Color: <span className="font-semibold text-white">{colorName}</span></p>
            <div className="mt-3 flex gap-3" role="radiogroup" aria-label="Color">
              {COLORS.map((c) => (
                <button key={c.hex} role="radio" aria-checked={color === c.hex} aria-label={c.name}
                  onClick={() => setColor(c.hex, c.name)}
                  style={{ background: c.hex }}
                  className={`size-9 rounded-full ring-offset-2 ring-offset-ink transition hover:scale-110 ${color === c.hex ? "ring-2 ring-white" : ""}`} />
              ))}
            </div>
            <p className="mt-5 text-sm text-mist/60">Finish</p>
            <div className="mt-3 inline-flex rounded-full bg-black/30 p-1" role="radiogroup" aria-label="Finish">
              {FINISHES.map((f) => (
                <button key={f} role="radio" aria-checked={finish === f} onClick={() => setFinish(f)}
                  className={`rounded-full px-4 py-1.5 text-sm capitalize transition ${finish === f ? "bg-white text-ink" : "text-mist/70 hover:text-white"}`}>{f}</button>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#waitlist" className="rounded-full bg-coral px-7 py-3.5 font-semibold text-ink transition hover:brightness-110">Reserve yours for $199</a>
            <a href="#features" className="px-3 py-3.5 text-mist/80 hover:text-white">See what&apos;s inside</a>
          </div>
        </motion.div>

        <div className="order-1 h-[48svh] min-h-[320px] cursor-grab active:cursor-grabbing lg:order-2 lg:h-[78svh]">
          <Scene />
        </div>
      </div>
    </section>
  );
}
