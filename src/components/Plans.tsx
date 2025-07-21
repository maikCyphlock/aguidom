'use client'

import React from 'react'
import { MapPin, Clock, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const trainingPlans = [
  {
    id: 1,
    title: "Plan Velocidad",
    description: "Entrenamiento intensivo para mejorar tu velocidad y agilidad",
    duration: "4 semanas",
    sessions: "3 sesiones/semana",
    location: "Pista principal",
    price: "$99",
    features: [
      "Técnica de carrera",
      "Ejercicios de velocidad",
      "Análisis biomecánico",
      "Plan nutricional básico"
    ],
    difficulty: "Intermedio",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Plan Resistencia",
    description: "Desarrolla tu capacidad aeróbica y resistencia cardiovascular",
    duration: "6 semanas",
    sessions: "4 sesiones/semana",
    location: "Campo de entrenamiento",
    price: "$149",
    features: [
      "Entrenamiento aeróbico",
      "Carrera de larga distancia",
      "Monitoreo cardíaco",
      "Plan nutricional completo"
    ],
    difficulty: "Avanzado",
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "Plan Principiante",
    description: "Ideal para comenzar tu camino en el atletismo",
    duration: "8 semanas",
    sessions: "2 sesiones/semana",
    location: "Área principiantes",
    price: "$79",
    features: [
      "Técnica básica",
      "Acondicionamiento físico",
      "Flexibilidad y movilidad",
      "Seguimiento personalizado"
    ],
    difficulty: "Básico",
    color: "bg-purple-500"
  }
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Básico': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'Intermedio': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    case 'Avanzado': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
}

function Plans() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Planes de Entrenamiento
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestros planes especializados diseñados para atletas de todos los niveles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingPlans.map((plan, index) => (
            <Card 
              key={plan.id} 
              className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${plan.color}`} />
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                  <Badge className={getDifficultyColor(plan.difficulty)}>
                    {plan.difficulty}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{plan.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{plan.sessions}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{plan.location}</span>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Incluye:</h4>
                  <ul className="space-y-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    {plan.price}
                  </div>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Seleccionar
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans;
