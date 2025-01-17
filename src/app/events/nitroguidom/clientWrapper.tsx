"use client"

import Ripple from '@/components/ui/ripple';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const RainbowButton = () => {
  return (
    <a 
      href='https://forms.gle/gGYjAkZwh77cPfxUA' 
      rel='noopener noreferrer' 
      target='_blank' 
      className="rainbow-btn"
    >
      Regístrate ahora
    </a>
  );
};

function ClientWrapper() {
  const schedule = [
    { time: "09:00 am", category: "5-6 años", distance: "60 metros" },
    { time: "09:20 am", category: "7-8 años", distance: "60 metros" },
    { time: "09:40 am", category: "9-10 años", distance: "80 metros" },
    { time: "10:00 am", category: "11-12 años", distance: "80 metros" },
    { time: "10:20 am", category: "13-14 años", distance: "80 metros" },
    { time: "10:40 am", category: "15-16 años", distance: "100 metros" },
    { time: "10:50 am", category: "17-18 años", distance: "100 metros" },
    { time: "11:00 am", category: "🏆 Premiaciones", distance: "" },
    { time: "11:20 am", category: "5-6 años", distance: "120 metros" },
    { time: "11:40 am", category: "7-8 años", distance: "120 metros" },
    { time: "12:00 pm", category: "9-10 años", distance: "300 metros" },
    { time: "12:30 pm", category: "11-12 años", distance: "600 metros" },
    { time: "12:50 pm", category: "13-14 años", distance: "800 metros" },
    { time: "01:30 pm", category: "15-16 años", distance: "1,500 metros" },
    { time: "01:40 pm", category: "17-18 años", distance: "1,500 metros" },
    { time: "02:00 pm", category: "🏆 Premiaciones", distance: "" },
  ];

  const supporters = [
    { name: "Jesús Valenzuela", role: "Árbitro FIFA Mundial Qatar 2022" },
    { name: "Alberto Ponte", role: "Árbitro FIFA Copa América 2024" },
    { name: "Isabella Cuello", role: "Atleta destacada Juegos Nacionales" },
  ];

  return (
    <div suppressHydrationWarning className="min-h-screen  text-white pb-20">
      <section className="relative">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center">
          <motion.img 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, damping: 0.5, bounce: 2.5, ease: "easeOut" }} 
            className="w-64 h-64" 
            src="/events/nitroguidom.png" 
            alt="Nitroguidom Logo" 
          />
          <Ripple />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Nitroguidom 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Descubre y motiva a las futuras estrellas del atletismo venezolano. Una competencia para jóvenes de 5 a 18 años.
            </p>
            <RainbowButton />
          </div>

          <div className="grid grid-cols-1  gap-8 mb-16">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400">Propósito</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary">Talento</Badge>
                  <p>Impulso al talento juvenil y desarrollo deportivo</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary">Social</Badge>
                  <p>Fomento del desarrollo deportivo en comunidades venezolanas</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary">Visibilidad</Badge>
                  <p>Reconocimiento y asociación con valores deportivos</p>
                </div>
              </CardContent>
            </Card>

            
          </div>

          <Card className="bg-gray-800/50 border-gray-700 mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-400">Cronograma de Actividades</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-purple-400">Hora</TableHead>
                      <TableHead className="text-purple-400">Categoría</TableHead>
                      <TableHead className="text-purple-400">Distancia</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schedule.map((item, index) => (
                      <TableRow className="hover:bg-purple-950" key={index}>
                        <TableCell className="font-medium">{item.time}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.distance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-400">Necesidades de Financiamiento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-300 mb-4">apoyo</p>
                <p className="text-gray-300">Para el alquiler de la tarima principal</p>
                <p className="mt-4 text-sm text-gray-400 italic">
                  Tu apoyo no solo contribuirá al desarrollo del evento, sino que será una inversión en el futuro del deporte venezolano.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default ClientWrapper;