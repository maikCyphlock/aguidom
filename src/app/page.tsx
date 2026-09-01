import type { Metadata } from "next";

import { Hero } from "@/components/Hero";
import Experience from "@/components/Experience";
import Athletes from "@/components/Athletes";
import Training from "@/components/Plans";
import Pricing from "@/components/Pricing";
import InstagramSection from "@/components/instagramClient";
import { Sponsor } from "@/components/Sponsor";
import { Footer } from "@/components/Footer";

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

export default function Home() {
  return (
    <div className="scroll-smooth">
      <main>
        <Hero />
        <Experience />
        <Athletes />
        <Training />
        <Pricing />
        <InstagramSection />
        <Sponsor />
      </main>
      <Footer />
    </div>
  );
}
