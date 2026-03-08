"use client";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden pb-16">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src="/aguidom-black.png"
          alt="Fitness training at Aguidom"
          className="w-full h-full object-cover object-center"
        />
        {/* Solid overlay for contrast, no gradients as per todo.md */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center mt-20 md:mt-32 pb-12">
        <p
          className="text-xs md:text-sm font-black tracking-[0.4em] uppercase mb-6 text-orange-500 animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          LOGRA TUS OBJETIVOS
        </p>

        {/* Nike Style Typography */}
        <div className="relative mb-8 w-full max-w-7xl flex justify-center">
          <h1
            className="font-spartan font-black italic uppercase tracking-tighter leading-[0.8] text-white animate-in zoom-in-95 fade-in duration-1000 select-none pb-4"
            style={{ fontSize: 'clamp(3.5rem, 15vw, 14rem)' }}
          >
            AGUIDOM
          </h1>
        </div>

        <div
          className="max-w-4xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 fill-mode-both"
        >
          <p className="text-lg md:text-2xl font-bold text-white/90 mb-12 text-balance leading-tight max-w-2xl border-l-4 border-orange-500 pl-6 uppercase italic tracking-wide">
            Dedicados a tu evolución. Equipamiento de élite y entrenamiento de clase mundial para alcanzar tu máximo potencial.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-zinc-200 transition-all duration-300 rounded-full px-10 py-6 text-sm font-bold tracking-widest uppercase hover:scale-105"
            >
              Únete Ya
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 hover:border-white transition-all duration-300 rounded-full px-10 py-6 text-sm font-bold tracking-widest uppercase hover:scale-105 backdrop-blur-sm"
            >
              Conoce Más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};