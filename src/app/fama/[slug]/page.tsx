"use client";

import { motion } from "framer-motion";
import { athletes } from "@/consts/athletes";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Award, Trophy, Star } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import React from "react";

export default function AthletePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const athlete = athletes.find((a) => a.slug === slug);

    if (!athlete) {
        notFound();
    }

    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0"
                    >
                        <img
                            src={athlete.image}
                            alt={athlete.name}
                            className="w-full h-full object-cover brightness-50 md:brightness-75 contrast-[1.1]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </motion.div>

                    {/* Navigation */}
                    <div className="absolute top-8 left-6 md:left-16 z-20">
                        <Link
                            href="/fama"
                            className="group flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/60 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            <span>Volver al Salón</span>
                        </Link>
                    </div>

                    {/* Headline Content */}
                    <div className="absolute inset-0 z-10 container mx-auto px-6 lg:px-16 flex flex-col justify-end pb-12 md:pb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <span className="text-[10px] md:text-[12px] tracking-[0.4em] uppercase text-white/60 font-black mb-4 block drop-shadow-md">
                                {athlete.category}
                            </span>
                            <h1 className="text-5xl md:text-8xl lg:text-9xl font-spartan font-black uppercase tracking-tighter leading-[0.85] mb-8">
                                {athlete.name.split(' ')[0]} <br />
                                <span className="text-white/20 italic">{athlete.name.split(' ').slice(1).join(' ')}</span>
                            </h1>
                        </motion.div>
                    </div>
                </section>

                {/* Detailed Info */}
                <section className="relative z-20 px-6 lg:px-16 py-16 md:py-32 container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-12"
                    >
                        <div className="flex items-center gap-6 mb-12">
                            <div className="h-[1px] flex-grow bg-white/10" />
                            <span className="text-[10px] tracking-[0.5em] uppercase text-white/30 font-bold whitespace-nowrap">
                                Perfil del Atleta
                            </span>
                            <div className="h-[1px] flex-grow bg-white/10" />
                        </div>
                    </motion.div>

                    {/* Full Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <h2 className="text-2xl md:text-4xl font-spartan font-black uppercase mb-8 tracking-tight">
                            Trayectoria <span className="text-white/30">& Impacto</span>
                        </h2>
                        <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed font-medium">
                            <p>{athlete.fullBio}</p>
                        </div>
                    </motion.div>

                    {/* Highlights & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-5"
                    >
                        <div className="bg-zinc-900/50 border border-white/5 rounded-[2rem] p-8 md:p-12 sticky top-32">
                            <h3 className="text-sm tracking-[0.4em] uppercase text-white/40 font-black mb-8">
                                Logros Destacados
                            </h3>
                            <ul className="space-y-6">
                                {athlete.achievements.map((achievement, idx) => (
                                    <li key={idx} className="flex items-start gap-4 group">
                                        <div className="mt-1 w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                            <Trophy className="w-2.5 h-2.5" />
                                        </div>
                                        <span className="text-white/80 font-bold uppercase tracking-wide text-xs md:text-sm group-hover:text-white transition-colors">
                                            {achievement}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 pt-12 border-t border-white/5 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] tracking-widest text-white/30 uppercase font-black">Categoría</span>
                                    <span className="text-[10px] tracking-widest text-white font-black uppercase">{athlete.category}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] tracking-widest text-white/30 uppercase font-black">Estatus</span>
                                    <span className="text-[10px] tracking-widest text-white font-black uppercase">Elite Aguidom</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
