import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { WHATSAPP_URL } from "@/consts/club";

const benefits = [
  "Entrenamientos en la pista del estadio",
  "Participación en eventos y competencias",
  "Chequeo de fisioterapeuta",
  "Plan adaptado a tu edad y nivel",
];

export default function Pricing() {
  return (
    <section
      id="precios"
      className="relative overflow-hidden border-t border-white/5 py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]"
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        <SectionHeader
          lane="04"
          eyebrow="Inscripción"
          align="center"
          title={
            <>
              Únete al <span className="text-orange-400">club</span>
            </>
          }
          lead="Una sola cuota mensual. Sin matrícula, sin permanencia mínima."
        />

        <div className="mt-14 flex justify-center md:mt-20">
          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
            <div className="h-1 bg-orange-500" />
            <div className="p-8 md:p-10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                    Mensualidad
                  </h3>
                  <p className="mt-3 flex items-baseline gap-1">
                    <span className="font-spartan text-6xl font-black tabular-nums leading-none text-white">
                      $15
                    </span>
                    <span className="text-sm font-medium text-zinc-500">
                      /mes
                    </span>
                  </p>
                </div>
                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-orange-400">
                  Todas las edades
                </span>
              </div>

              <ul className="my-10 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-4">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10">
                      <Check className="h-3 w-3 text-orange-400" />
                    </span>
                    <span className="text-sm text-zinc-300 md:text-base">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="group h-14 w-full rounded-full bg-orange-500 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-orange-400"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Escríbenos por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <p className="mt-4 text-center text-xs text-zinc-600">
                Te respondemos y coordinamos tu primera práctica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
