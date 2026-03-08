'use client'

import { motion } from "framer-motion"
import { MapPin, Clock, Calendar, Zap, Activity, Navigation } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SchedulePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  }

  return (
    <div className="bg-zinc-950 p-4 md:p-8 min-h-screen text-white font-sans">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header - Garmin Style */}
        <div className="text-center space-y-2">
          <Badge variant="outline" className="border-orange-500 text-orange-500 px-3 py-1 text-xs tracking-[0.2em] font-bold">
            PANEL DE ENTRENAMIENTO
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
            Club de Atletismo
          </h1>
          <p className="text-zinc-500 font-medium tracking-wide">
            ESTADIO JOSÉ ANTONIO PÁEZ • PORTUGUESA, VZLA
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-12 gap-8 items-center"
        >
          {/* Map Section - Circular Bezel */}
          <motion.div variants={item} className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Bezel */}
              <div className="absolute -inset-4 rounded-full border border-zinc-800/50 pointer-events-none" />
              <div className="absolute -inset-1 rounded-full border-2 border-zinc-800 pointer-events-none group-hover:border-orange-500/50 transition-colors duration-500" />

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <iframe
                  title="Ubicación Estadio"
                  width="100%"
                  height="100%"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-69.21650648117067%2C9.568906952315094%2C-69.20754790306093%2C9.573646561807903&amp;layer=mapnik"
                  style={{ border: 0 }}
                  className="grayscale invert opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                />

                {/* HUD Overlay */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8">
                  <div className="flex justify-between items-start">
                    <Navigation className="w-5 h-5 text-orange-500" />
                    <div className="text-[10px] font-bold text-zinc-400 bg-black/50 px-2 py-1 rounded">
                      GPS ACTIVO
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-orange-500 animate-pulse ring-4 ring-orange-500/20" />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">
                      Coordenadas Estadio
                    </div>
                    <div className="text-xs font-mono text-orange-400">
                      9.5714° N, 69.2120° W
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats & Schedule Section - Glances Style */}
          <motion.div variants={item} className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="text-emerald-500 w-6 h-6" />
              <h2 className="text-xl font-black uppercase tracking-widest italic">Horario Semanal</h2>
            </div>

            <div className="grid gap-4">
              {/* Morning Glance */}
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-colors group overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-stretch h-24">
                    <div className="w-2 bg-emerald-500" />
                    <div className="flex-1 flex items-center justify-between px-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-emerald-500" />
                          <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Aero-Potencia</span>
                        </div>
                        <h3 className="text-xl font-black italic uppercase italic">Sesión Mañana</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-emerald-500 tabular-nums">06:00</div>
                        <div className="text-[10px] font-bold text-zinc-500 uppercase">HORA DE INICIO</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Afternoon Glance */}
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 transition-colors group overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-stretch h-24">
                    <div className="w-2 bg-orange-500" />
                    <div className="flex-1 flex items-center justify-between px-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-orange-500" />
                          <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Fuerza y Velocidad</span>
                        </div>
                        <h3 className="text-xl font-black italic uppercase italic">Sesión Tarde</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-orange-500 tabular-nums">16:00</div>
                        <div className="text-[10px] font-bold text-zinc-500 uppercase">HORA DE INICIO</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Days Glance */}
              <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800/50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-zinc-500" />
                  <div>
                    <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Días Activos</div>
                    <div className="flex gap-2 mt-1">
                      {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                        <div
                          key={i}
                          className={`w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-black ${['L', 'M', 'J'].includes(day) && (day !== 'M' || i === 1)
                            ? 'bg-orange-500 text-black'
                            : 'bg-zinc-800 text-zinc-600'
                            }`}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Intensidad</div>
                  <div className="mt-1 flex gap-1">
                    <div className="w-4 h-1 bg-emerald-500 rounded-full" />
                    <div className="w-4 h-1 bg-emerald-500 rounded-full" />
                    <div className="w-4 h-1 bg-orange-500 rounded-full" />
                    <div className="w-4 h-1 bg-zinc-800 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
