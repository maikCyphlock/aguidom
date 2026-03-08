"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CheckCircle from "./icons/CheckCircle";

export default function Component() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 ">

      <div className="container mx-auto px-6 md:px-8 " ref={ref}>

        {/* Header Section */}
        <div
          className={`text-center mb-12 transform transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            ¡Únete a nuestro club!
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Forma parte de nuestro club de atletismo y accede a beneficios
            exclusivos.
          </p>
        </div>

        {/* Card Section */}
        <div
          className={`grid place-items-center transform transition-all duration-700 delay-150 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <Card className="relative flex flex-col items-center overflow-hidden p-8 rounded-lg shadow-lg bg-zinc-950/80 border border-zinc-800 transition-transform duration-300 ease-out hover:scale-105 hover:bg-zinc-900 hover:border-orange-500/30">

            <h3 className="text-xl z-auto font-semibold text-orange-400">
              Básico
            </h3>
            <p className="mt-2 text-lg font-medium text-zinc-400">
              <span className="text-4xl font-bold text-white">$15</span>/mes
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Entrenamientos en el estadio",
                "Participaciones en eventos",
                "Chequeo de fisioterapeuta",
              ].map((benefit, index) => (
                <li
                  className="flex items-center text-sm text-zinc-400"
                  key={benefit}
                >
                  <span className="text-green-500 w-5 h-5 mr-2 flex items-center justify-center">
                    <CheckCircle />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-6 w-full flex justify-center">
              <Button asChild className="px-6 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white hover:text-black border border-white/20 shadow-sm rounded-lg transition-all w-full md:w-auto">
                <a href="/subscribe">Inscribirse</a>
              </Button>
            </div>
            <img src="/goldenlingot.jpg" className="absolute -bottom-32 -left-0 -z-50 object-cover h-[300px]" alt="" />
          </Card>
        </div>
      </div>
    </section>
  );
}
