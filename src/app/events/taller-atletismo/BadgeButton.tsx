"use client";

import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export type BadgeInfo = { icon: string; name: string; description: string };

export function BadgeButton({ badge, size = "sm" }: { badge: BadgeInfo; size?: "sm" | "lg" }) {
  const dim = size === "lg" ? "h-16 w-16" : "h-12 w-12";
  const pad = size === "lg" ? "p-3" : "p-2.5";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          title={badge.name}
          className={`relative ${dim} ${pad} shrink-0 rounded-full bg-zinc-950 transition-transform hover:z-10 hover:scale-110`}
        >
          <Image src={`/events/taller-atletismo/${badge.icon}.png`} alt={badge.name} fill className="object-contain p-1.5" />
        </button>
      </DialogTrigger>
      <DialogContent className="border-none bg-zinc-950 text-white sm:max-w-sm">
        <DialogHeader className="items-center text-center">
          <div className="relative h-28 w-28 rounded-full bg-zinc-950 p-5 ">
            <Image src={`/events/taller-atletismo/${badge.icon}.png`} alt={badge.name} fill className="object-contain p-3" />
          </div>
          <DialogTitle className="mt-4 font-spartan text-xl font-black uppercase tracking-tight text-white">
            {badge.name}
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-zinc-400">
            {badge.description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
