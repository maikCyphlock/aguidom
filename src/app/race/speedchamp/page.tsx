"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Download, Send } from "lucide-react"

export default function Component() {
  const [paso, setPaso] = useState(1)
  const numeroTelefono ="04269599721"

  const pasosTotales = 3
  const urlPlantillaExcel = "/inscripcion-aguidom.xlsx" // Reemplaza con la URL real de tu plantilla
  const mensajeWhatsapp = encodeURIComponent("Aquí está el archivo Excel completado para el registro de atletas de la competición.")

  const manejarDescarga = () => {
    // Iniciar descarga
    const enlace = document.createElement("a")
    enlace.href = urlPlantillaExcel
    enlace.download = "inscripcion-aguidom.xlsx"
    document.body.appendChild(enlace)
    enlace.click()
    document.body.removeChild(enlace)
    setPaso(2)
  }

  const enviarAWhatsApp = () => {
    if (numeroTelefono) {
      const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${mensajeWhatsapp}`
      window.open(urlWhatsapp, "_blank")
      setPaso(3)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Registro de Atletas</CardTitle>
        <CardDescription>Sigue estos pasos para registrar atletas en la competición</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-between">
            {Array.from({ length: pasosTotales }, (_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  i + 1 <= paso ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                {i + 1 <= paso ? <CheckCircle className="w-5 h-5" /> : i + 1}
              </div>
            ))}
          </div>

          {paso === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Paso 1: Descargar Plantilla Excel</h3>
              <p>Descarga la plantilla Excel para registrar atletas en la competición.</p>
              <Button onClick={manejarDescarga} className="w-full">
                <Download className="mr-2 h-4 w-4" /> Descargar Plantilla
              </Button>
            </div>
          )}

          {paso === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Paso 2: Enviar a WhatsApp</h3>
              <p>envia el archivo de Excel completado a este numero de telefono a traves de Whatsapp</p>
              <div className="space-y-2">
                <Label htmlFor="telefono">Número de WhatsApp</Label>
                <Input
                  id="telefono"
                  type="tel"
                  className="disabled:border-green-300 disabled:bg-green-600"
                  placeholder="04269599721"
                  value={numeroTelefono}
                
                  onChange={(e) => setNumeroTelefono(e.target.value)}
                />
              </div>
              <Button onClick={enviarAWhatsApp} className="w-full" disabled={!numeroTelefono}>
                <Send className="mr-2 h-4 w-4" /> Enviar a WhatsApp
              </Button>
            </div>
          )}

          {paso === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Paso 3: Completado</h3>
              <p>¡Excelente trabajo! Has completado el proceso de registro de atletas.</p>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {paso > 1 && (
          <Button variant="outline" onClick={() => setPaso((prev) => prev - 1)}>
            Anterior
          </Button>
        )}
        {paso < pasosTotales && paso !== 1 && (
          <Button onClick={() => setPaso((prev) => prev + 1)}>Siguiente</Button>
        )}
      </CardFooter>
    </Card>
  )
}