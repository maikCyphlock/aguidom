"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroStats = [
  { value: "25", label: "Años de trayectoria" },
  { value: "100+", label: "Atletas formados" },
  { value: "50+", label: "Medallistas nacionales" },
];

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/aguidom-purp.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] brightness-[0.35] blur-[120px] scale-[1.15] z-0"
        />
        <img
          src="/aguidom-purp.png"
          alt="Atletas de élite en Aguidom"
          className="absolute inset-0 w-full h-full object-cover object-[center_10%] brightness-[0.55] z-10"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black via-black/65 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black/60 to-transparent z-20 pointer-events-none" />
        {/* Orange accent stripe */}
        <div className="absolute left-0 top-0 h-full w-1 bg-orange-500 z-30" />
      </div>

      {/* Content */}
      <div className="relative z-30 mt-auto pb-0 px-6 lg:px-16">
        <div className="container mx-auto">
          {/* Tagline */}
          <div className="flex items-center gap-4 mb-5 animate-[fadeInLeft_0.6s_ease_0.1s_both]">
            <span className="w-8 h-[2px] bg-orange-500" />
            <p className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-orange-400 font-bold">
              Club de Alto Rendimiento · Acarigua, Portuguesa
            </p>
          </div>

          {/* Hero headline */}
          <h1
            className="font-spartan font-black uppercase tracking-tight leading-[0.85] text-white mb-7 max-w-4xl animate-[fadeInUp_0.7s_ease_0.2s_both]"
            style={{ fontSize: "clamp(2.5rem, 10vw, 7.5rem)" }}
          >
            Entrena como{" "}
            <span className="block sm:inline text-orange-400">élite.</span>
          </h1>

          {/* Subtext */}
          <p className="text-[14px] md:text-lg text-white/75 font-medium leading-relaxed max-w-lg mb-10 animate-[fadeIn_0.7s_ease_0.35s_both]">
            Entrenamiento de clase mundial para niños y jóvenes atletas.
            Velocidad, fondo y disciplina desde 1999.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-14 md:mb-16 animate-[fadeInUp_0.6s_ease_0.45s_both]">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-400 text-white transition-colors duration-200 rounded-full px-10 py-7 text-[13px] font-bold tracking-wide group shadow-lg shadow-orange-500/25"
            >
              Únete Ya
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10 border border-white/20 rounded-full px-10 py-7 text-[13px] font-bold tracking-wide"
            >
              Conoce Más
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-white/10 bg-black/40 backdrop-blur-md animate-[fadeIn_0.6s_ease_0.6s_both]">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-3 divide-x divide-white/10 py-5 md:py-6">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 md:px-8 first:pl-0 last:pr-0 text-center md:text-left"
                >
                  <div className="text-xl md:text-3xl font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[9px] md:text-[10px] text-white/45 uppercase tracking-widest mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
