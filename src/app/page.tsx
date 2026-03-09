
import Experience from "@/components/Experience";
import WinCase from "@/components/WinCase";
import Plans from "@/components/Plans";
import Pricing from "@/components/Pricing";
import { Sponsor } from "@/components/Sponsor";

import { Hero } from "../components/Hero";
import InstagramClient from "@/components/instagramClient";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto scroll-smooth">
      <main>
        <Hero />
      </main>
      <Sponsor />
      <div className="lg:px-20 space-y-[200px]">
        <Experience />
        <WinCase />
        <Plans />
        <InstagramClient />
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}
