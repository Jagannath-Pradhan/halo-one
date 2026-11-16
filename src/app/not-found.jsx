import Link from "next/link";
import { HeadphoneOff, Home } from "lucide-react";

export const metadata = {
  title: "Page not found — Halo One",
  description: "The page you are looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="aurora relative grid min-h-svh place-items-center overflow-hidden px-5 py-24">
      <div className="mx-auto max-w-xl text-center">
        <div className="float mx-auto grid size-24 place-items-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur sm:size-28">
          <HeadphoneOff className="size-12 text-coral sm:size-14" aria-hidden />
        </div>

        <p className="mt-8 bg-gradient-to-r from-coral to-ice bg-clip-text font-display text-8xl font-extrabold leading-none tracking-tight text-transparent sm:text-9xl">
          404
        </p>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          This track doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-mist/70">
          The page you&apos;re looking for was moved, removed, or never made it to the album.
          Head back and keep listening.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 font-semibold text-ink transition hover:brightness-110">
            <Home className="size-4" aria-hidden /> Back to home
          </Link>
          <Link href="/#waitlist" className="rounded-full border border-white/15 px-7 py-3.5 text-mist/90 transition hover:bg-white/10">
            Join the waitlist
          </Link>
        </div>
      </div>
    </main>
  );
}
