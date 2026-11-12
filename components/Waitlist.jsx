"use client";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [msg, setMsg] = useState("");

  async function submit(e) {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setMsg(data.message); setState("done");
    } catch (err) { setMsg(err.message); setState("error"); }
  }

  return (
    <section id="waitlist" className="aurora px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">Be first to hear Halo One.</h2>
        <p className="mt-4 text-mist/70">Join the waitlist and get early-bird pricing at launch.</p>
        {state === "done" ? (
          <p className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-ice"><CheckCircle2 className="size-5" /> {msg}</p>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-white placeholder:text-mist/40" />
            <button disabled={state === "loading"} className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-3.5 font-semibold text-ink transition hover:brightness-110 disabled:opacity-60">
              {state === "loading" && <Loader2 className="size-4 animate-spin" />} Join waitlist
            </button>
          </form>
        )}
        {state === "error" && <p role="alert" className="mt-4 text-coral">{msg}</p>}
      </div>
      <p className="mt-24 text-center text-sm text-mist/40">Built with Next.js, React Three Fiber, Tailwind CSS and Framer Motion.</p>
    </section>
  );
}
