"use client";
import { motion } from "framer-motion";
import { BatteryCharging, AudioLines, Bluetooth, Feather } from "lucide-react";

const items = [
  { icon: AudioLines, title: "Adaptive noise cancelling", text: "Eight microphones listen to your surroundings and adjust 200 times a second." },
  { icon: BatteryCharging, title: "60 hours per charge", text: "Five minutes on USB-C gives you three more hours of listening." },
  { icon: Bluetooth, title: "Two devices at once", text: "Switch between your laptop and phone without opening settings." },
  { icon: Feather, title: "Light on your head", text: "At 238 g with memory-foam cushions, they stay comfortable all day." },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">Built for long days and late nights.</h2>
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {items.map(({ icon: Icon, title, text }, i) => (
          <motion.article key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.08 }}
            className={`rounded-3xl border border-white/10 p-7 sm:p-9 ${i === 0 || i === 3 ? "bg-plum" : "bg-white/5"}`}>
            <Icon className="size-8 text-ice" aria-hidden />
            <h3 className="mt-6 font-display text-2xl font-semibold">{title}</h3>
            <p className="mt-2 max-w-sm text-mist/65">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
