import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { STATS, WHATSAPP_URL } from "@/consts/club";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100dvh-4rem)] w-full flex-col overflow-hidden text-white"
    >
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/aguidom-purp.png"
          alt=""
          aria-hidden
          className="absolute inset-0 z-0 h-full w-full scale-[1.15] object-cover object-[center_30%] blur-[120px] brightness-[0.35]"
        />
        <img
          src="/aguidom-purp.png"
          alt="Atletas del Club Aguidom entrenando en pista"
          className="absolute inset-0 z-10 h-full w-full object-cover object-[center_10%] brightness-[0.5]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[75%] bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[35%] bg-gradient-to-b from-black/70 to-transparent" />

        {/* Carriles de pista */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 hidden md:block"
        >
          {[20, 40, 60, 80].map((left) => (
            <span
              key={left}
              className="absolute top-0 h-full w-px bg-white/[0.06]"
              style={{ left: `${left}%` }}
            />
          ))}
        </div>
        <div className="absolute left-0 top-0 z-30 h-full w-1 bg-orange-500" />
      </div>

      {/* Contenido */}
      <div className="relative z-30 mt-auto">
        <div className="container mx-auto px-6 pb-14 lg:px-16 md:pb-20">
          <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-bold uppercase tracking-[0.35em] text-orange-400 animate-[fadeInLeft_0.6s_ease_0.1s_both] md:text-[11px]">
            <span className="h-px w-8 bg-orange-500" />
            Acarigua–Araure · Portuguesa
            <span className="text-orange-500/40">/</span>
            <span className="font-mono tabular-nums">desde 1999</span>
          </p>

          <h1
            className="mb-7 max-w-4xl font-spartan font-black uppercase leading-[0.85] tracking-tighter text-white animate-[fadeInUp_0.7s_ease_0.2s_both]"
            style={{ fontSize: "clamp(2.75rem, 9vw, 7rem)" }}
          >
            El único club de{" "}
            <span className="text-orange-400">pista</span> de la región.
          </h1>

          <p className="mb-10 max-w-xl text-[15px] font-medium leading-relaxed text-white/70 animate-[fadeIn_0.7s_ease_0.35s_both] md:text-lg">
            25 años formando atletas de velocidad y fondo en el Estadio José
            Antonio Páez. Niños, jóvenes y adultos, todos los niveles.
          </p>

          <div className="flex flex-col items-stretch gap-3 animate-[fadeInUp_0.6s_ease_0.45s_both] sm:flex-row sm:items-start sm:gap-4">
            <Button
              asChild
              size="lg"
              className="group h-14 rounded-full bg-orange-500 px-10 text-[13px] font-bold tracking-wide text-white shadow-lg shadow-orange-500/25 transition-colors hover:bg-orange-400"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Inscríbete
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-14 rounded-full border border-white/20 px-10 text-[13px] font-bold tracking-wide text-white/80 hover:bg-white/10 hover:text-white"
            >
              <a href="#entrenamiento">Ver horarios</a>
            </Button>
          </div>
        </div>

        {/* Marcador */}
        <div className="border-t border-white/10 bg-black/50 backdrop-blur-md animate-[fadeIn_0.6s_ease_0.6s_both]">
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
      </div>
    </section>
  );
};
