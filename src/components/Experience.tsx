'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Zap } from 'lucide-react'

export default function SportsStats() {
  const stats = [
    { label: "Disciplina", value: 1, color: "bg-orange-500", bg:"/1ca.jpg" },
    { label: "Talento", value: 2, color: "bg-cyan-500",bg:"/2ca.jpg"  },
    { label: "Suerte", value: 3, color: "bg-green-500",bg:"/3ca.jpg" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="  p-6 md:p-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto space-y-12"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              25 años de experiencia en el deporte
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            No esperes a que la suerte te toque. Comienza a trabajar duro y a seguir un plan, y verás que el éxito llegará
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <Card className="p-6 relative bg-black border border-white/10 backdrop-blur-sm overflow-hidden">
              <img src={stat.bg} className="top-0 left-16 absolute  -z-10" alt="" />
                <div className="space-y-4 z-10">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-2xl font-bold`}>
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    {stat.label}
                  </h3>
                </div>
                <div className={`absolute inset-0 ${stat.color} opacity-5 blur-2xl -z-10 rounded-lg`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

