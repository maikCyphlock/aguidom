"use client";

import { toBlob } from "html-to-image";
import React, { useCallback, useRef, useState } from "react";
import Atropos from "atropos/react";
import { CheckCircle, Share2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";

const Ticket = React.forwardRef((props, ref) => {
  const [property, setProperty] = useState({
    name: "",
    lastname: "",
    color:''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-black flex flex-col items-center justify-center">
      <Atropos className="max-w-md mx-auto">
        <section
          ref={ref}
          className="relative min-h-44 aspect-video rounded-2xl bg-gradient-to-r from-stone-600 via-stone-500 to-stone-800 shadow-md p-6 text-white overflow-hidden border-2 border-white"
        >
          <div className="flex items-center mb-4">
         
            <h2 className="text-2xl ml-10 font-bold text-left">NITROGUIDOM</h2>
          </div>
          <p className="text-lg  font-bold text-pretty text-left">
            {property.name} {property.lastname}
          </p>
          <p className="text-lg text-pretty text-left">
            Inscrito en Nitroguidom 
          </p>
          <p className="text-[100px] font-bold text-left absolute bottom-[-40px] right-[-30px] z-0">
            🏆
          </p>
          <img src="/events/nitroguidom.png" className="w-32 font-bold text-left absolute top-[-25px] left-[-30px] z-0">
            
          </img>
        </section>
      </Atropos>
      <div className="flex flex-col justify-center items-center mt-6">
        <label className="text-white mb-2" htmlFor="name">
          Nombre
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={property.name}
          onChange={(e)=> handleInputChange(e)}
          className="mb-4 w-full max-w-xs"
        />
        <label className="text-white mb-2" htmlFor="lastname">
          Apellido
        </label>
        <Input
          type="text"
          id="lastname"
          name="lastname"
          value={property.lastname}
          onChange={(e)=> handleInputChange(e)}
          className="mb-4 w-full max-w-xs"
        />
       
      </div>
    </div>
  );
});

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toBlob(ref.current).then((blob) => {
      if (blob !== null) {
        const image = new File([blob], "Nitroguidom.png", { type: "image/png" });

        if (navigator.share) {
          navigator.share({
            title: "Nitroguidom",
            text: "Estoy inscrito en la competencia nitroguidom 2025, @agui_dom",
            files: [image],
          });
        } else {
          alert("La funcionalidad para compartir no es compatible en este navegador.");
        }
      }
    });
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <h2 className="my-24 text-2xl font-bold">comparte tu inscripcion por las redes sociales</h2>
      <Ticket ref={ref} />
      <button
        className="flex gap mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        onClick={onButtonClick}
      >
        <Share2Icon/>Compartir 
      </button>
    </div>
  );
}
