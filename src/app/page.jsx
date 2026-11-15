import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specs from "@/components/Specs";
import Waitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Specs />
      <Waitlist />
    </main>
  );
}
