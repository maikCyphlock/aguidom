"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col text-white ">
      {/* Background Image — full bleed */}
      <div className="absolute inset-0 z-0 ">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {/* Halo Background Layer — creates the glow behind the athletes */}
          <img
            src="/aguidom-purp.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover  object-[center_30%] brightness-[0.5] blur-[100px] scale-[1.15] z-0"
          />

          {/* Main Sharp Image — sits on top of the halo */}
          <img
            src="/aguidom-purp.png"
            alt="Atletas de élite en Aguidom"
            className="absolute inset-0 w-full h-full object-cover object-[center_10%] brightness-[0.6]  scale-105 z-10"
          />
        </motion.div>

        {/* Refined gradient overlays for text legibility — Much stronger for contrast
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black via-black/70 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-black/10 z-20 pointer-events-none" /> */}
      </div>

      {/* Content — Re-positioned to be lower and left-aligned to clear the faces */}
      <div className="relative z-30 mt-auto pb-12 md:pb-16 px-6 lg:px-16">
        <div className="container mx-auto">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="w-8 h-[1px] bg-white/40" />
            <p className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-white/90 font-semibold drop-shadow-md">
              Club de Alto Rendimiento
            </p>
          </motion.div>

          {/* Hero headline — Adjusted size and leading to clear the center child's face */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-spartan font-black uppercase tracking-tight leading-[0.80] text-white mb-8 max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 10vw, 7.5rem)" }}
          >
            Entrena como{" "}
            <span className=" block sm:inline">élite.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[14px] md:text-lg text-white/90 font-medium leading-relaxed max-w-lg mb-10 drop-shadow-lg"
          >
            Equipamiento de élite y entrenamiento de clase mundial
            para alcanzar tu máximo potencial.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 transition-all duration-300 rounded-full px-10 py-7 text-[13px] font-bold tracking-wide group"
            >
              Únete Ya
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10 border border-white/10 rounded-full px-10 py-7 text-[13px] font-bold tracking-wide"
            >
              Conoce Más
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};