import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Club Aguidom | Atletismo en Acarigua, Portuguesa · 25 Años",
  description:
    "El club de atletismo más antiguo de Acarigua-Araure, Portuguesa. Entrenamiento de pista en velocidad y fondo para niños y jóvenes. 25 años formando campeones.",
  openGraph: {
    title: "Club Aguidom | Atletismo en Acarigua, Portuguesa · 25 Años",
    description:
      "El único club de atletismo de pista en Acarigua-Araure. 25 años formando atletas en velocidad y fondo. Estadio José Antonio Páez, Portuguesa.",
    url: "https://aguidom.me",
  },
};

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
