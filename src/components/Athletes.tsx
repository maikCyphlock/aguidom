import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { athletes } from "@/consts/athletes";

const FEATURED_SLUG = "jesus-valenzuela";

const featured = athletes.find((a) => a.slug === FEATURED_SLUG)!;
const rest = athletes.filter((a) => a.slug !== FEATURED_SLUG);

export default function Athletes() {
  return (
    <section id="atletas" className="border-t border-white/5 py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            lane="02"
            eyebrow="Salón de la fama"
            title={
              <>
                Entrenan con{" "}
                <span className="text-orange-400">nosotros</span>
              </>
            }
            lead="Atletas que han llevado el nombre de Aguidom y de Acarigua a la selección nacional y a los escenarios más grandes del deporte."
          />
          <Link
            href="/fama"
            className="group inline-flex shrink-0 items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-colors hover:text-orange-400"
          >
            Ver todos
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Atleta destacado */}
        <Link
          href={`/fama/${featured.slug}`}
          className="group mt-14 block overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-colors hover:border-orange-500/50 md:mt-20"
        >
          <div className="h-1 bg-orange-500" />
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[460px]">
              <img
                src={featured.image}
                alt={featured.name}
                className="h-full w-full object-cover object-top brightness-90 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-950" />
              <span className="absolute left-6 top-6 rounded-full bg-orange-500 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-black">
                Orgullo de Acarigua
              </span>
            </div>

            <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-400">
                  {featured.category}
                </p>
                <h3 className="mt-3 font-spartan text-4xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-5xl">
                  {featured.name}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                {featured.fullBio}
              </p>

              <ul className="flex flex-wrap gap-2">
                {featured.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-orange-400"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-colors group-hover:text-orange-400">
                Ver perfil
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </Link>

        {/* Resto del salón de la fama */}
        <ul className="mt-5 grid gap-5 md:grid-cols-2">
          {rest.map((athlete) => (
            <li key={athlete.slug}>
              <Link href={`/fama/${athlete.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-colors group-hover:border-orange-500/40">
                  <img
                    src={athlete.image}
                    alt={athlete.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top brightness-75 grayscale transition duration-700 group-hover:scale-105 group-hover:brightness-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-400">
                      {athlete.category}
                    </p>
                    <h3 className="mt-2 font-spartan text-2xl font-black uppercase leading-none tracking-tight text-white">
                      {athlete.name}
                    </h3>
                    <p className="mt-3 line-clamp-2 max-w-md text-sm leading-relaxed text-zinc-400">
                      {athlete.bio}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
