"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  const benefits = [
    "Entrenamientos en el estadio",
    "Participaciones en eventos",
    "Chequeo de fisioterapeuta",
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden" id="precios">
      {/* Background Decorative patterns — ultra subtle */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-white/40 font-semibold mb-4">
              Membresía
            </p>
            <h2
              className="text-4xl md:text-6xl font-spartan font-black uppercase tracking-tighter text-white mb-6"
            >
              Únete a la <span className="text-white/40 italic">Élite</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
              Accede a instalaciones de primer nivel y entrenamiento profesional diseñado para deportistas de alto rendimiento.
            </p>
          </motion.div>
        </div>

        {/* Pricing Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative w-full max-w-md"
          >
            {/* Ambient Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />

            <div className="relative bg-zinc-950/40 backdrop-blur-3xl border border-white/10 p-10 md:p-12 rounded-[2rem] flex flex-col items-center">
              <div className="w-full flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-sm tracking-[0.2em] uppercase text-white/40 font-bold mb-2">
                    Plan Básico
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-spartan font-black text-white">$15</span>
                    <span className="text-white/40 font-medium text-sm">/mes</span>
                  </div>
                </div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold tracking-widest uppercase text-white/50">
                  Standard
                </div>
              </div>

              <div className="w-full space-y-5 mb-12">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-white/30 transition-colors">
                      <Check className="w-3 h-3 text-white/70" />
                    </div>
                    <span className="text-sm md:text-base text-white/60 font-medium group-hover/item:text-white/90 transition-colors">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Button
                asChild
                className="w-full bg-white text-black hover:bg-zinc-200 h-14 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.02]"
              >
                <a href="/subscribe">Comenzar Ahora</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic Hairline */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
