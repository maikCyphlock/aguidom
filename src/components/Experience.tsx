'use client'

import { Trophy, Users, Star } from 'lucide-react'

const stats = [
  {
    icon: Trophy,
    value: "25",
    suffix: " años",
    label: "De trayectoria",
    sub: "El club más antiguo de Acarigua-Araure",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    img: "/1ca.jpg",
  },
  {
    icon: Users,
    value: "100",
    suffix: "+",
    label: "Atletas formados",
    sub: "Niños y jóvenes de toda la región",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    img: "/2ca.jpg",
  },
  {
    icon: Star,
    value: "50",
    suffix: "+",
    label: "Medallistas",
    sub: "Campeones a nivel nacional",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    img: "/3ca.jpg",
  },
]

export default function Experience() {
  return (
    <div className="p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <span className="h-[2px] w-10 bg-orange-500 rounded-full" />
            <p className="text-[11px] tracking-[0.4em] uppercase text-orange-400 font-bold">
              Nuestra historia
            </p>
            <span className="h-[2px] w-10 bg-orange-500 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter text-center uppercase">
            25 años formando{" "}
            <span className="text-orange-400">campeones</span>
          </h2>
          <p className="text-base md:text-lg text-center text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Desde 1999 en el Estadio José Antonio Páez, formamos atletas de pista
            en velocidad y fondo con disciplina de élite.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-colors duration-300"
            >
              <img
                src={stat.img}
                className="absolute inset-0 w-full h-full object-cover opacity-[0.08] group-hover:opacity-[0.18] transition-opacity duration-300"
                alt=""
              />
              <div className="relative p-7 flex flex-col gap-5">
                <div
                  className={`w-11 h-11 ${stat.bg} ${stat.border} border rounded-xl flex items-center justify-center`}
                >
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <div className={`text-5xl font-black tracking-tight ${stat.color} leading-none`}>
                    {stat.value}
                    <span className="text-3xl">{stat.suffix}</span>
                  </div>
                  <div className="text-white font-bold text-lg mt-2">{stat.label}</div>
                  <div className="text-zinc-500 text-sm mt-1">{stat.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational quote */}
        <blockquote className="text-center max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-white/50 italic leading-snug">
            "No esperes a que la suerte te toque.{" "}
            <span className="text-white not-italic">
              Comienza a trabajar duro
            </span>{" "}
            y el éxito llegará."
          </p>
        </blockquote>
      </div>
    </div>
  )
}
