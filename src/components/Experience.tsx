import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const gallery = [
  {
    src: "/club-aguidom.webp",
    alt: "Equipo del Club Aguidom",
    span: "col-span-2 row-span-2",
  },
  { src: "/slider-1.webp", alt: "Entrenamiento en la pista del estadio" },
  { src: "/slider-2.webp", alt: "Atletas de Aguidom en competencia" },
  { src: "/slider-4.webp", alt: "Salida de tacos en el estadio" },
  { src: "/slider-6.webp", alt: "Atletas del club en el podio" },
];

export default function Experience() {
  return (
    <section id="historia" className="border-t border-white/5 py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <SectionHeader
          lane="01"
          eyebrow="Nuestra historia"
          title={
            <>
              25 años formando{" "}
              <span className="text-orange-400">campeones</span>
            </>
          }
          lead="Somos el club de atletismo más antiguo de Acarigua-Araure. Desde 1999 entrenamos en el Estadio José Antonio Páez, en pista, con método y disciplina."
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Galería */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-7">
            {gallery.map((img) => (
              <div
                key={img.src}
                className={`group relative overflow-hidden rounded-xl border border-white/5 bg-zinc-950 aspect-square ${
                  img.span ?? ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover brightness-90 grayscale transition duration-700 group-hover:scale-105 group-hover:brightness-100 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          {/* Relato */}
          <div className="flex flex-col justify-center gap-8 lg:col-span-5">
            <div className="border-l-2 border-orange-500 pl-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-400">
                Fundador y entrenador
              </p>
              <p className="mt-3 font-spartan text-2xl font-black uppercase tracking-tight text-white">
                Prof. Douglas Aguilar
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Más de 25 años dirigiendo el club. Bajo su guía, cientos de
                niños, jóvenes y adultos de la región han descubierto su
                potencial dentro y fuera de la pista.
              </p>
            </div>

            <blockquote className="text-lg font-semibold leading-snug text-zinc-500 md:text-xl">
              «No esperes a que la suerte te toque.{" "}
              <span className="text-white">Comienza a trabajar duro</span> y el
              éxito llegará.»
            </blockquote>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-colors hover:text-orange-400"
            >
              Conoce el club
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
