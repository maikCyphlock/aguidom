import { MapPin, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ADDRESS,
  MAP_EMBED,
  MAP_LINK,
  SESSIONS,
  TRAINING_DAYS,
} from "@/consts/club";

export default function Training() {
  return (
    <section
      id="entrenamiento"
      className="border-t border-white/5 py-24 md:py-32"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <SectionHeader
          lane="03"
          eyebrow="Horarios y sede"
          title={
            <>
              Cuándo y dónde{" "}
              <span className="text-orange-400">entrenamos</span>
            </>
          }
          lead="Dos sesiones diarias en la pista del Estadio José Antonio Páez. Llega quince minutos antes para el calentamiento."
        />

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12">
          {/* Sesiones */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            {SESSIONS.map((session) => (
              <div
                key={session.time}
                className="flex items-stretch overflow-hidden rounded-xl border border-white/10 bg-zinc-950 transition-colors hover:border-orange-500/40"
              >
                <div className="w-1 shrink-0 bg-orange-500" />
                <div className="flex flex-1 flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-400">
                      {session.focus}
                    </p>
                    <h3 className="mt-2 font-spartan text-xl font-black uppercase tracking-tight text-white">
                      {session.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">{session.detail}</p>
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <div className="font-spartan text-4xl font-black tabular-nums leading-none text-white">
                      {session.time}
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                      Hora de inicio
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Días */}
            <div className="rounded-xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                Días de entrenamiento
              </p>
              <ul className="mt-4 flex gap-2">
                {TRAINING_DAYS.map((day, i) => (
                  <li
                    key={i}
                    title={day.name}
                    className={`flex h-9 w-9 items-center justify-center rounded-md text-xs font-black ${
                      day.active
                        ? "bg-orange-500 text-black"
                        : "bg-zinc-900 text-zinc-600"
                    }`}
                  >
                    <span className="sr-only">{day.name}</span>
                    <span aria-hidden>{day.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sede */}
          <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-950 lg:col-span-5">
            <div className="relative h-64 lg:h-auto lg:flex-1">
              <iframe
                title="Ubicación del Estadio José Antonio Páez"
                loading="lazy"
                src={MAP_EMBED}
                className="h-full w-full opacity-80 invert grayscale"
                style={{ border: 0 }}
              />
            </div>
            <div className="border-t border-white/10 p-6">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-400">
                <MapPin className="h-3.5 w-3.5" /> Nuestra sede
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {ADDRESS}
              </p>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-colors hover:text-orange-400"
              >
                Cómo llegar <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
