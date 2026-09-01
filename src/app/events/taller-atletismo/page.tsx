import type { Metadata } from "next";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Footer } from "@/components/Footer";
import { BadgeButton, type BadgeInfo } from "./BadgeButton";

export const metadata: Metadata = {
  title: "Taller de atletismo para adultos - Club Aguidom",
  description:
    "Resultados de los tests de rendimiento del taller de atletismo para adultos: velocidad, salto, capacidad aeróbica y test de Cooper.",
};

type Badge = "swiss-timer" | "big-heart" | "rapid-feet" | "oxigen-tank" | "lane-ruler" | "commander" | "champthophy";

const badges: Record<Badge, BadgeInfo> = {
  "swiss-timer": {
    icon: "swiss-timer",
    name: "Rayo Cronometrado",
    description: "Se lo lleva quien marcó el mejor tiempo del taller. Puro reloj suizo en las piernas.",
  },
  "big-heart": {
    icon: "big-heart",
    name: "Corazón de Hierro",
    description: "Para quien empujó su frecuencia cardíaca más alto que nadie. Se lo ganó a puro pulso.",
  },
  "rapid-feet": {
    icon: "rapid-feet",
    name: "Pies Veloces",
    description: "El salto más lejano del grupo. Cuando salta, parece que vuela.",
  },
  "oxigen-tank": {
    icon: "oxigen-tank",
    name: "Pulmón de Acero",
    description: "Valoración Excelente en capacidad aeróbica. Sus pulmones no conocen el cansancio.",
  },
  "lane-ruler": {
    icon: "lane-ruler",
    name: "Rey de la Pista",
    description: "La mejor marca en el Test de Cooper. Domina la pista como nadie.",
  },
  commander: {
    icon: "commander",
    name: "Comandante Constante",
    description: "Valoración muy buena en todas sus series, serie tras serie sin fallar.",
  },
  champthophy: {
    icon: "champthophy",
    name: "Campeón del Taller",
    description: "El mejor desempeño general combinando tiempo, salto y resistencia. La estrella del día.",
  },
};

type Stat = { label: string; value: string; note?: string };
type Serie = { serie: string; ritmo: string; reps: string; fc: string; valoracion: string };

const athletes: { name: string; badges: Badge[]; stats: Stat[]; series?: Serie[] }[] = [
  {
    name: "Alexander",
    badges: ["champthophy", "swiss-timer", "rapid-feet", "oxigen-tank"],
    stats: [
      { label: "1000 m", value: "4:45", note: "FC 170 lpm" },
      { label: "Salto", value: "2.34 m", note: "mejor marca" },
      { label: "Capacidad aeróbica", value: "Excelente", note: "FC 200 lpm" },
      { label: "Test de Cooper", value: "2200 m", note: "Bueno · 42 años" },
      { label: "400 m", value: "1:28.01" },
    ],
    series: [
      { serie: "Ritmo", ritmo: "60\"", reps: "3x200m", fc: "140", valoracion: "Bueno" },
      { serie: "Aeróbica 1", ritmo: "50\"", reps: "3x200m", fc: "160", valoracion: "Bueno" },
      { serie: "Aeróbica 2", ritmo: "45\"", reps: "3x200m", fc: "160", valoracion: "Bueno" },
      { serie: "Potencia aeróbica", ritmo: "37\"", reps: "2x200m", fc: "200", valoracion: "Excelente" },
    ],
  },
  {
    name: "Lucy",
    badges: ["big-heart", "commander"],
    stats: [
      { label: "1000 m", value: "6:09", note: "FC 190 lpm" },
      { label: "Salto", value: "1.50 m" },
      { label: "Triple", value: "4:20" },
      { label: "Capacidad aeróbica", value: "Regular", note: "FC máx. 230 lpm" },
      { label: "Test de Cooper", value: "1700 m", note: "Promedio · 44 años" },
    ],
    series: [
      { serie: "Ritmo", ritmo: "1'20\"", reps: "3x200m", fc: "140", valoracion: "Bueno" },
      { serie: "Ritmo", ritmo: "1'10\"", reps: "3x200m", fc: "170", valoracion: "Bueno" },
      { serie: "Ritmo", ritmo: "60\"", reps: "3x200m", fc: "180", valoracion: "Bueno" },
      { serie: "Ritmo", ritmo: "55\"", reps: "3x200m", fc: "190", valoracion: "Bueno" },
      { serie: "Ritmo", ritmo: "48\"-49\"", reps: "1x200m", fc: "230", valoracion: "Regular" },
    ],
  },
  {
    name: "Carlos",
    badges: ["commander"],
    stats: [
      { label: "Triple", value: "6:45" },
      { label: "Capacidad aeróbica", value: "Muy bueno", note: "FC máx. 200 lpm" },
    ],
    series: [
      { serie: "Ritmo", ritmo: "60\"", reps: "3x200m", fc: "140", valoracion: "Muy bueno" },
      { serie: "Ritmo", ritmo: "40\"", reps: "3x200m", fc: "150", valoracion: "Muy bueno" },
      { serie: "Ritmo", ritmo: "38\"", reps: "3x200m", fc: "180", valoracion: "Muy bueno" },
      { serie: "Ritmo", ritmo: "36\"", reps: "3x200m", fc: "200", valoracion: "Muy bueno" },
    ],
  },
  {
    name: "Rafael",
    badges: ["lane-ruler"],
    stats: [{ label: "Test de Cooper", value: "2760 m", note: "Bueno · 17 años" }],
  },
  {
    name: "Luis",
    badges: [],
    stats: [{ label: "Test de Cooper", value: "2010 m", note: "Muy bajo · 17 años" }],
  },
];

export default function TallerAtletismoPage() {
  return (
    <div className="w-full bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <Image
          src="/events/taller-atletismo.png"
          alt="Taller de atletismo para adultos"
          fill
          priority
          className="absolute inset-0 z-0 object-cover opacity-30 blur-sm"
        />
        <div className="relative z-10 container mx-auto px-6 py-24 lg:px-16 lg:py-32">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-orange-400">
            <span className="h-px w-8 bg-orange-500" />
            Evento realizado · Hecho
          </p>
          <h1
            className="max-w-3xl font-spartan font-black uppercase leading-[0.88] tracking-tighter text-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Taller de atletismo <span className="text-orange-400">para adultos</span>
          </h1>
          <p className="mt-7 max-w-xl text-[15px] font-medium leading-relaxed text-white/70 md:text-lg">
            Tests de rendimiento aplicados a los participantes: velocidad,
            salto, capacidad aeróbica y resistencia. Cada atleta recibió
            insignias según lo que más destacó en sus resultados.
          </p>
        </div>
      </section>

      {/* Leyenda de insignias */}
      <section className="border-b border-white/5 py-14">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
            {(Object.keys(badges) as Badge[]).map((key) => (
              <div key={key} className="flex flex-col items-center gap-3 text-center">
                <BadgeButton badge={badges[key]} size="lg" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">
                  {badges[key].name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atletas */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-16">
          <SectionHeader lane="02" eyebrow="Resultados" title="Atletas y sus marcas" />

          <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
            {athletes.map((athlete) => (
              <div
                key={athlete.name}
                className="rounded-2xl border border-white/10 bg-zinc-950 p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500/10 font-spartan text-lg font-black text-orange-400">
                      {athlete.name.charAt(0)}
                    </div>
                    <h3 className="font-spartan text-xl font-black uppercase tracking-tight text-white">
                      {athlete.name}
                    </h3>
                  </div>
                  {athlete.badges.length > 0 && (
                    <div className="flex -space-x-2">
                      {athlete.badges.map((key) => (
                        <BadgeButton key={key} badge={badges[key]} />
                      ))}
                    </div>
                  )}
                </div>

                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/5 pt-6 sm:grid-cols-3">
                  {athlete.stats.map((s) => (
                    <div key={s.label}>
                      <dt className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">
                        {s.label}
                      </dt>
                      <dd className="mt-1 text-lg font-black tracking-tight text-white">{s.value}</dd>
                      {s.note && <p className="mt-0.5 text-xs text-zinc-500">{s.note}</p>}
                    </div>
                  ))}
                </dl>

                {athlete.series && (
                  <details className="group mt-6 border-t border-white/5 pt-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400 [&::-webkit-details-marker]:hidden">
                      Ver series de capacidad aeróbica
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-4 space-y-2">
                      {athlete.series.map((s, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-5 gap-2 rounded-lg bg-white/[0.03] px-3 py-2 text-xs text-zinc-400"
                        >
                          <span className="col-span-2 truncate text-white">{s.serie}</span>
                          <span>{s.ritmo}</span>
                          <span>{s.reps}</span>
                          <span className="text-right">{s.fc} lpm · {s.valoracion}</span>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
