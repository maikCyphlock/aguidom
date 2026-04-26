import type { Metadata } from "next";
import { HallOfFame } from "@/components/HallOfFame";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Salón de la Fama · Atletas de Aguidom | Acarigua, Portuguesa",
  description:
    "Los mejores atletas del Club Aguidom: campeones nacionales, regionales e internacionales formados en Acarigua, Portuguesa. Isabella Cuello, Adriana Zabaleta, Jesús Valenzuela.",
  openGraph: {
    title: "Salón de la Fama · Atletas de Aguidom | Acarigua, Portuguesa",
    description:
      "Atletas élite formados en el Club Aguidom: Top 10 Nacional, Campeona CAF, Árbitro FIFA Qatar 2022. El orgullo del atletismo de Portuguesa.",
    url: "https://aguidom.me/fama",
  },
};

export default function FamaPage() {
    return (
        <div className="mx-auto scroll-smooth">
            <main className="pt-20">
                <HallOfFame />
            </main>
            <Footer />
        </div>
    );
}
