"use client";

import { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { Instagram } from "lucide-react";
import { INSTAGRAM } from "@/consts/club";

export default function InstagramSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="border-t border-white/5 py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-orange-400">
            <span className="font-mono tabular-nums text-orange-500/60">05</span>
            <span className="h-px w-8 bg-orange-500/40" />
            El día a día
          </p>
          <h2 className="mt-5 font-spartan text-4xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-5xl">
            Síguenos en{" "}
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 hover:underline"
            >
              Instagram <Instagram className="h-7 w-7 md:h-9 md:w-9" />
            </a>
          </h2>
        </div>

        <div className="mt-12 flex justify-center">
          {isMounted ? (
            <InstagramEmbed url={INSTAGRAM} width={550} />
          ) : (
            <div className="h-[500px] w-[550px] max-w-full animate-pulse rounded-xl border border-white/10 bg-zinc-950" />
          )}
        </div>
      </div>
    </section>
  );
}
