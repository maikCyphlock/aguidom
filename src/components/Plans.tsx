'use client'

import { motion } from "framer-motion"
import { MapPin, Clock, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function SchedulePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className=" bg-gradient-to-b from-background to-background/80 p-4 md:p-8">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="mx-auto max-w-5xl space-y-8"
      >
        <motion.div variants={item} className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Horario del Club de Atletismo
          </h1>
          <p className="text-muted-foreground text-lg">
            Consulta nuestro programa de entrenamiento semanal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={item}>
            <Card className="overflow-hidden">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Ubicación</span>
                </div>
                <CardTitle>Estadio José Antonio Páez</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <iframe width="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                
                  height="300" src="https://www.openstreetmap.org/export/embed.html?bbox=-69.21650648117067%2C9.568906952315094%2C-69.20754790306093%2C9.573646561807903&amp;layer=mapnik" style={{ border: 0 }}></iframe>
               
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Horario de Entrenamiento</span>
                </div>
                <CardTitle>Lunes, Martes, Jueves</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Sesión Mañana</span>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                        6:00 AM
                      </Badge>
                      <Badge variant="outline" className="bg-destructive/10 text-red-500 border-destructive/20">
                        8:00 AM
                      </Badge>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Sesión Tarde</span>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                        4:00 PM
                      </Badge>
                      <Badge variant="outline" className="bg-destructive/10 text-red-500 border-destructive/20">
                        6:00 PM
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
