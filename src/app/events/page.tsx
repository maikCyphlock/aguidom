import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Eventos - Club Aguidom",
  description: "Conoce los eventos del Club Aguidom: SpeedChamp, taller de atletismo para adultos y plan vacacional de niños.",
};

const events = [
  { name: "SpeedChamp", status: "Próximamente" as const, image: null, href: null },
  { name: "Taller de atletismo para adultos", status: "Hecho" as const, image: "/events/taller-atletismo.png", href: "/events/taller-atletismo" },
  { name: "Plan vacacional de niños", status: "Hecho" as const, image: "/events/plan-vacional.png", href: null },
];

export default function EventsPage() {
  return (
    <div className="w-full bg-black text-white">
      <section className="border-b border-white/5 py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-16">
          <SectionHeader
            lane="01"
            eyebrow="Actividades del club"
            title="Eventos"
            lead="Competencias, talleres y planes que organizamos a lo largo del año para la comunidad de Aguidom."
            align="center"
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {events.map((event) =>
              event.href ? (
                <Link key={event.name} href={event.href} className={eventCardClass}>
                  <EventCardBody event={event} />
                </Link>
              ) : (
                <div key={event.name} className={eventCardClass}>
                  <EventCardBody event={event} />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const eventCardClass =
  "group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-colors hover:border-orange-500/30";

function EventCardBody({ event }: { event: (typeof events)[number] }) {
  return (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Sparkles className="h-10 w-10 text-orange-500/40" />
          </div>
        )}
        <span
          className={
            "absolute right-4 top-4 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md " +
            (event.status === "Próximamente"
              ? "border-orange-500/40 bg-black/50 text-orange-400"
              : "border-emerald-500/40 bg-black/50 text-emerald-400")
          }
        >
          {event.status}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-spartan text-lg font-black uppercase tracking-tight text-white">
          {event.name}
        </h3>
      </div>
    </>
  );
}
