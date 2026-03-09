"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { athletes } from "@/consts/athletes";

export const HallOfFame = () => {
    return (
        <section className="relative w-full py-20 md:py-32 bg-black overflow-hidden" id="fama">
            {/* Background Decorative Elements - Subtler */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full" />
            </div>

            <div className="container relative z-10 mx-auto px-6 lg:px-16">
                {/* Header - More Compact */}
                <div className="mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="max-w-3xl">
                            <p className="text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-white/30 font-bold mb-4 flex items-center gap-3">
                                <span className="w-4 h-[1px] bg-white/20" /> Salón de la Fama
                            </p>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-spartan font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                                Nuestras <span className="text-white/20 italic">Estrellas</span>
                            </h2>
                            <p className="text-white/40 text-sm md:text-base max-w-xl font-medium leading-relaxed">
                                Atletas que han elevado el nombre de Aguidom a lo más alto. Su dedicación es nuestra mayor inspiración.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Athletes Grid - Improved Spacing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {athletes.map((athlete, i) => (
                        <motion.div
                            key={athlete.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <Link href={`/fama/${athlete.slug}`} className="block group cursor-pointer">
                                <div className="relative aspect-[4/5] md:h-[480px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-950 transition-all duration-500 hover:border-white/20">
                                    {/* Image Layer - Balanced Contrast */}
                                    <div className="absolute inset-0 z-0 grayscale contrast-[1.1] brightness-[0.7] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90">
                                        <img
                                            src={athlete.image}
                                            alt={athlete.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
                                    </div>

                                    {/* Content Layer - High Legibility Typography */}
                                    <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-end">
                                        <div className="translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white font-black mb-2 block drop-shadow-md">
                                                {athlete.category}
                                            </span>
                                            <h3 className="text-3xl md:text-3xl font-spartan font-black uppercase tracking-tight text-white mb-3 drop-shadow-xl">
                                                {athlete.name}
                                            </h3>
                                            <p className="text-[13px] md:text-sm text-white/90 leading-relaxed mb-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 line-clamp-3 md:line-clamp-3 drop-shadow-lg">
                                                {athlete.bio}
                                            </p>
                                        </div>

                                        {/* Achievements - Minimalist & Clear */}
                                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/20 opacity-100 md:opacity-60 md:group-hover:opacity-100 transition-opacity duration-500">
                                            {athlete.achievements.map((achievement) => (
                                                <span
                                                    key={achievement}
                                                    className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-white/20 text-white rounded-sm border border-white/10 shadow-sm"
                                                >
                                                    {achievement}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Subtle interactive glow */}
                                    <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
