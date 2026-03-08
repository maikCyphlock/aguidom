'use client'

import { Card } from "@/components/ui/card"
import { Zap } from 'lucide-react'

export default function SportsStats() {
  const stats = [
    { label: "Disciplina", value: 1, color: "bg-orange-500/20 text-orange-400 border-orange-500/30", bg: "/1ca.jpg" },
    { label: "Talento", value: 2, color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30", bg: "/2ca.jpg" },
    { label: "Suerte", value: 3, color: "bg-green-500/20 text-green-400 border-green-500/30", bg: "/3ca.jpg" }
  ]

  return (
    <div className="p-6 md:p-12">
      <div
        className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              25 AÑOS DE<br />EXPERIENCIA
            </h2>
          </div>
          <p className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            No esperes a que la suerte te toque. Comienza a trabajar duro y a seguir un plan, y verás que el éxito llegará
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative transition-transform duration-300 hover:scale-105"
            >
              <Card className="p-6 h-full relative bg-zinc-950/80 border border-zinc-800 overflow-hidden group">
                <img src={stat.bg} className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-40 transition-all duration-500 -z-10" alt="" />
                <div className="space-y-4 z-10">
                  <div className={`w-12 h-12 ${stat.color} border rounded-full flex items-center justify-center text-xl font-bold`}>
                    {stat.value}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {stat.label}
                  </h3>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
