import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import React from "react";

export const metadata: Metadata = {
  title: "Sobre Aguidom · Club de Atletismo en Acarigua desde 1999",
  description:
    "Conoce la historia del Club Aguidom, el club de atletismo más antiguo de Acarigua-Araure. Prof. Douglas Aguilar · 25 años de trayectoria · Portuguesa, Venezuela.",
  openGraph: {
    title: "Sobre Aguidom · Club de Atletismo en Acarigua desde 1999",
    description:
      "El club de atletismo más antiguo de Acarigua-Araure, Portuguesa. Más de 25 años formando atletas de pista con el Prof. Douglas Aguilar.",
    url: "https://aguidom.me/about",
  },
};

function page() {
  return <div className="container prose prose-invert w-full max-w-3xl mx-auto space-y-3 py-12">
    <h1 className="text-4xl font-bold">Aguidom: Más que un club, una familia</h1>
    <h2 className="text-2xl font-thin">25 años impulsando el atletismo con pasión</h2>

    <p>En Aguidom, creemos que el atletismo es más que un deporte, es un estilo de vida. Por eso, desde hace más de 25 años, nos dedicamos a formar atletas integrales, tanto en lo físico como en lo personal.</p>

    <h2 className="text-2xl font-thin">El profe Douglas Aguilar, nuestro guía y mentor</h2>

    <p>El alma de Aguidom es el profesor Douglas Aguilar, un entrenador con más de 25 años de experiencia y una pasión contagiosa por el atletismo. Bajo su guía, cientos de niños, jóvenes y adultos han descubierto su potencial y han logrado alcanzar sus metas deportivas.</p>

    <h2 className="text-2xl font-thin">Más que un club, una familia</h2>

    <p>En Aguidom, nos sentimos orgullosos de ser una gran familia. Aquí, todos somos importantes y nos apoyamos mutuamente para lograr nuestros objetivos. Ofrecemos un ambiente positivo y motivador donde cada persona puede aprender y crecer.</p>

    <h2 className="text-2xl font-thin">¿Por qué elegir Aguidom?</h2>

    <ul className="list-disc space-y-4 pl-8">
      <li>Experiencia: Más de 25 años formando atletas.</li>
      <li> Equipo profesional: Entrenadores altamente capacitados y apasionados por el atletismo.</li>
      <li>Metodología innovadora: Entrenamiento personalizado y adaptado a las necesidades de cada atleta.</li>
      <li>Valores: Fomentamos el respeto, la responsabilidad, la disciplina y el trabajo en equipo.</li>
      <li>Comunidad: Somos una gran familia donde todos se apoyan mutuamente.
      </li>
    </ul>
    <h3>¿Quieres formar parte de Aguidom?</h3>
    <footer>
      Te invitamos a conocer nuestro club y a formar parte de nuestra familia. Ofrecemos entrenamiento para todas las edades y niveles.
    </footer>

    <Button asChild size="lg">
      <a href="/subscribe">Formar parte</a>
    </Button>

  </div>;
}

export default page;
