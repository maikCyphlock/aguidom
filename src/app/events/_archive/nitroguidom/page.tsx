import type { Metadata } from "next";
import ClientWrapper from "./clientWrapper";
 export const metadata: Metadata = {
    title: "Nitroguidom 2024 - Competencia de Atletismo Juvenil",
    description:
      "🏃‍♂️💨 ¡Atención jóvenes atletas! Nitroguidom 2024 está aquí para desafiar tu velocidad y resistencia. 📅 22 de febrero de 2024 🎯 Edades: 5-18 años 🏆 Carreras desde 60m hasta 1500m. ¡Inscríbete ahora!",
    keywords: [
      "Nitroguidom 2024",
      "atletismo juvenil",
      "competencia de atletismo",
      "jóvenes atletas",
      "carreras",
      "velocidad",
      "resistencia",
      "22 de febrero 2024",
    ],
    openGraph: {
      title: "Nitroguidom 2024 - Competencia de Atletismo Juvenil",
      description:
        "¡Atención jóvenes atletas! 🏃‍♂️💨 Prepárate para brillar en Nitroguidom 2024. 📅 Fecha: 22 de febrero de 2024 🎯 Edades: 5-18 años 🏆 Distancias desde 60m hasta 1500m. ¡Inscríbete ya!",
      type: "website",
      url: "https://aguidom.es/nitroguidom2024",
      images: [
        {
          url: "https://aguidom.es/events/nitroguidom2024-banner.png",
          alt: "Nitroguidom 2024 Banner",
        },
      ],
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title: "Nitroguidom 2024 - Competencia de Atletismo Juvenil",
      description:
        "🏃‍♂️💨 Nitroguidom 2024 desafía a los jóvenes atletas. 📅 22 de febrero 2024 🎯 Edades: 5-18 años 🏆 Distancias 60m a 1500m. ¡Inscríbete ahora!",
      images: [
        {
          url: "https://aguidom.es/events/nitroguidom2024-banner.png",
          alt: "Nitroguidom 2024 Banner",
        },
      ],
    },
    abstract: "Evento de atletismo juvenil enfocado en desafiar velocidad y resistencia.",
    category: "Deportes y Competencias",
  };






export default function Home() {
    return (<>
       <ClientWrapper/>
       </>
    );
}

