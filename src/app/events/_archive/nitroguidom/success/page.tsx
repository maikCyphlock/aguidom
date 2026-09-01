"use client";

import { toBlob } from "html-to-image";
import React, { useCallback, useRef, useState } from "react";
import Atropos from "atropos/react";
import { CheckCircle, Share2Icon, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { motion } from "framer-motion";

const Ticket = React.forwardRef((props, ref) => {
  const [property, setProperty] = useState({
    name: "",
    lastname: "",
    category: "",
  });
  const [PositionNumber] = useState(Math.floor(Math.random() * 1000).toString().padStart(3, '0'))

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
    });
  };

  const categories = [
    "5-6 años",
    "7-8 años",
    "9-10 años",
    "11-12 años",
    "13-14 años",
    "15-16 años",
    "17-18 años",
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full max-w-md">
      <Card className="p-6 w-full bg-white/5 backdrop-blur-sm border-white/10">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Nombre</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={property.name}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white"
              placeholder="Tu nombre"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastname" className="text-white">Apellido</Label>
            <Input
              type="text"
              id="lastname"
              name="lastname"
              value={property.lastname}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white"
              placeholder="Tu apellido"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category" className="text-white">Categoría</Label>
            <select
              id="category"
              name="category"
              value={property.category}
              onChange={handleInputChange}
              className="w-full h-10 px-3 py-2 bg-white/10 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="" className="bg-purple-900">Selecciona tu categoría</option>
              {categories.map((cat) => (
                <option key={cat} className="bg-purple-900" value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      <Atropos className="w-full" activeOffset={40} shadowScale={1.05}>
        <motion.section
          ref={ref}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full aspect-[1.5/1] rounded-xl bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 shadow-xl p-6 text-white overflow-hidden border border-white/20"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/events/nitroguidom.png')] opacity-20 bg-cover bg-center" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <img src="/events/nitroguidom.png" className="w-20 h-20 object-contain" alt="Logo" />
              <div className="text-right">
                <p className="text-xs opacity-75">N° {PositionNumber}</p>
                <p className="text-xs opacity-75">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  NITROGUIDOM
                </h2>
                <div className="h-1 w-20 bg-white/50 rounded-full mt-2" />
              </div>
              
              <div className="space-y-1">
                <p className="text-xl font-medium">
                  {property.name} {property.lastname}
                </p>
                <p className="text-sm opacity-75">
                  {property.category || "Participante"}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Inscripción Confirmada</span>
              </div>
            </div>

            <div className="absolute bottom-6 right-6">
              <div className="text-6xl">🏆</div>
            </div>
          </div>
        </motion.section>
      </Atropos>
    </div>
  );
});

const ShareButton = ({ icon: Icon, onClick, label, className }) => (
  <Button
    variant="outline"
    className={`flex items-center gap-2 ${className}`}
    onClick={onClick}
  >
    <Icon className="w-4 h-4" />
    {label}
  </Button>
);

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);

  const shareToSocial = async (platform: string) => {
    if (ref.current === null) return;

    try {
      const blob = await toBlob(ref.current);
      if (!blob) return;

      const image = new File([blob], "Nitroguidom-Ticket.png", { type: "image/png" });
      const shareText = "¡Me he inscrito en Nitroguidom 2024! 🏃‍♂️🏆 La competencia de atletismo más emocionante del año. @agui_dom #Nitroguidom2024";

      switch (platform) {
        case 'download':
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'Nitroguidom-Ticket.png';
          a.click();
          URL.revokeObjectURL(url);
          break;
        case 'whatsapp':
          window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
          break;
        case 'instagram':
          // Instagram sharing through stories requires a different approach
          navigator.share({
            title: "Nitroguidom 2024",
            text: shareText,
            files: [image],
          })
          const downloadUrl = URL.createObjectURL(blob);
          const downloadLink = document.createElement('a');
          downloadLink.href = downloadUrl;
          downloadLink.download = 'Nitroguidom-Ticket.png';
          downloadLink.click();
          URL.revokeObjectURL(downloadUrl);
         
          break;
        case 'facebook':
          // Facebook sharing
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
          break;
        default:
          if (navigator.share) {
            await navigator.share({
              title: "Nitroguidom 2024 @agui_dom",
              text: shareText,
              files: [image],
            });
          }
      }
    } catch (error) {
      console.error('Error al compartir:', error);
      alert('Hubo un error al intentar compartir. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="-mt-20 p-2 min-h-screen w-full flex flex-col items-center justify-center  bg-gradient-to-br from-gray-900 via-purple-950 to-zinc-900 pb-8">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 mt-32"
      >
        <h1 className="text-3xl font-bold text-white mb-2">¡Inscripción Exitosa!</h1>
        <p className="text-gray-300">Personaliza y comparte tu ticket de participación</p>
      </motion.div>

      <Ticket ref={ref} />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        <ShareButton
          icon={Download}
          onClick={() => shareToSocial('download')}
          label="Descargar"
          className="bg-gray-700 hover:bg-gray-600"
        />
        <ShareButton
          icon={Share2Icon}
          onClick={() => shareToSocial('')}
          label="Compartir"
          className="bg-green-600 hover:bg-green-500"
        />
       
      </motion.div>
    </div>
  );
}
