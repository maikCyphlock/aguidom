import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { STATS, WHATSAPP_URL } from "@/consts/club";

export const metadata: Metadata = {
  title: "Sobre Aguidom · Club de Atletismo en Acarigua desde 1999",
  description:
    "Conoce la historia del Club Aguidom, el club de atletismo más antiguo de Acarigua-Araure. Prof. Douglas Aguilar · 25 años de trayectoria · Portuguesa, Venezuela.",
  openGraph: {
    title: "Sobre Aguidom · Club de Atletismo en Acarigua desde 1999",
    description:
      "El club de atletismo más antiguo de Acarigua-Araure, Portuguesa. Más de 25 años formando atletas de pista con el Prof. Douglas Aguilar.",
    url: "https://aguidom.me/about",
  },
};

const values = [
  {
    n: "01",
    title: "Experiencia",
    text: "Más de 25 años formando atletas de pista en la región.",
  },
  {
    n: "02",
    title: "Equipo profesional",
    text: "Entrenadores capacitados y apasionados por el atletismo.",
  },
  {
    n: "03",
    title: "Metodología",
    text: "Entrenamiento personalizado, adaptado a cada atleta.",
  },
  {
    n: "04",
    title: "Valores",
    text: "Respeto, responsabilidad, disciplina y trabajo en equipo.",
  },
  {
    n: "05",
    title: "Comunidad",
    text: "Una gran familia donde todos se apoyan mutuamente.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <img
          src="/aguidom-purp.png"
          alt=""
          aria-hidden
          className="absolute inset-0 z-0 h-full w-full scale-[1.15] object-cover object-[center_30%] blur-[120px] brightness-[0.3]"
        />
        <div className="relative z-10 container mx-auto px-6 py-20 lg:px-16 lg:py-28">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-orange-400">
            <span className="h-px w-8 bg-orange-500" />
            Acarigua–Araure · desde 1999
          </p>
          <h1
            className="max-w-3xl font-spartan font-black uppercase leading-[0.88] tracking-tighter text-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Más que un club, <span className="text-orange-400">una familia</span>
          </h1>
          <p className="mt-7 max-w-xl text-[15px] font-medium leading-relaxed text-white/70 md:text-lg">
            Desde hace más de 25 años formamos atletas integrales, tanto en lo
            físico como en lo personal, en el Estadio José Antonio Páez.
          </p>
        </div>

        {/* Marcador */}
        <div className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-md">
          <div className="container mx-auto px-6 lg:px-16">
            <dl className="grid grid-cols-3 divide-x divide-white/10 py-5 md:py-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col px-4 text-center first:pl-0 last:pr-0 md:px-8 md:text-left"
                >
                  <dt className="order-2 mt-1 text-[9px] uppercase leading-tight tracking-[0.2em] text-white/45 md:text-[10px]">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-2xl font-black tabular-nums tracking-tight text-white md:text-4xl">
                    {stat.value}
                    <span className="text-orange-400">{stat.suffix}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* El profe */}
      <section className="border-b border-white/5 py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                lane="02"
                eyebrow="Fundador y entrenador"
                title="Prof. Douglas Aguilar"
              />
            </div>
            <div className="flex flex-col justify-center gap-8 lg:col-span-7">
              <p className="max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
                El alma de Aguidom es el profesor Douglas Aguilar, un
                entrenador con más de 25 años de experiencia y una pasión
                contagiosa por el atletismo. Bajo su guía, cientos de niños,
                jóvenes y adultos han descubierto su potencial y han logrado
                alcanzar sus metas deportivas.
              </p>
              <blockquote className="border-l-2 border-orange-500 pl-6 text-lg font-semibold leading-snug text-zinc-500 md:text-xl">
                «No esperes a que la suerte te toque.{" "}
                <span className="text-white">Comienza a trabajar duro</span> y
                el éxito llegará.»
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegir Aguidom */}
      <section className="border-b border-white/5 py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-16">
          <SectionHeader
            lane="03"
            eyebrow="Por qué elegir Aguidom"
            title="Cinco razones para unirte"
            lead="No solo entrenamos atletas, formamos personas. Esto es lo que nos distingue."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.n} className="bg-zinc-950 p-8">
                <span className="font-mono text-xs tabular-nums text-orange-500/60">
                  {v.n}
                </span>
                <h3 className="mt-4 font-spartan text-lg font-black uppercase tracking-tight text-white">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center lg:px-16">
          <h2 className="mx-auto max-w-2xl font-spartan text-3xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-5xl">
            ¿Quieres formar parte de{" "}
            <span className="text-orange-400">Aguidom</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg">
            Te invitamos a conocer nuestro club y a formar parte de nuestra
            familia. Entrenamiento para todas las edades y niveles.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-14 rounded-full bg-orange-500 px-10 text-[13px] font-bold tracking-wide text-white shadow-lg shadow-orange-500/25 transition-colors hover:bg-orange-400"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Formar parte
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-14 rounded-full border border-white/20 px-10 text-[13px] font-bold tracking-wide text-white/80 hover:bg-white/10 hover:text-white"
            >
              <Link href="/#historia">Ver nuestra historia</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
