import { cn } from "@/lib/utils";

type Props = {
  /** Número de carril, ej. "01" */
  lane: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  lane,
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-orange-400",
          align === "center" && "justify-center",
        )}
      >
        <span className="font-mono tabular-nums text-orange-500/60">{lane}</span>
        <span className="h-px w-8 bg-orange-500/40" />
        {eyebrow}
      </p>
      <h2 className="mt-5 font-spartan text-4xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-6xl">
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-zinc-400 md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
