import { Headphones } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-ink/60 px-5 py-3 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <Headphones className="size-5 text-coral" aria-hidden /> Halo One
        </a>
        <div className="hidden gap-8 text-sm text-mist/70 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#specs" className="hover:text-white">Specs</a>
        </div>
        <a href="#waitlist" className="rounded-full bg-coral px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-110">Join waitlist</a>
      </nav>
    </header>
  );
}
