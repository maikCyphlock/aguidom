import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { ADDRESS, EMAIL, INSTAGRAM, PHONE, WHATSAPP_URL } from "@/consts/club";

const links = [
  { name: "Historia", href: "/#historia" },
  { name: "Atletas", href: "/#atletas" },
  { name: "Horarios", href: "/#entrenamiento" },
  { name: "Precios", href: "/#precios" },
  { name: "Noticias", href: "/blog" },
  { name: "Competencias", href: "/events/nitroguidom" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-black pt-20 pb-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Marca */}
          <div>
            <Link href="/" className="mb-6 inline-block">
              <h2 className="font-spartan text-2xl font-black uppercase tracking-tighter text-white">
                Agui<span className="text-orange-400">dom</span>
              </h2>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              Club de atletismo de pista en Acarigua-Araure. Formando atletas
              en velocidad y fondo desde 1999.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 md:text-[11px]">
              Enlaces
            </h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-zinc-400 transition-colors hover:text-orange-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 md:text-[11px]">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm font-medium text-zinc-400">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 transition-colors hover:text-orange-400"
                >
                  <Mail className="h-4 w-4 shrink-0 text-zinc-600" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-orange-400"
                >
                  <Phone className="h-4 w-4 shrink-0 text-zinc-600" />
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-600" />
                {ADDRESS}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 md:text-[11px]">
              Síguenos
            </h3>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all hover:border-orange-500/40 hover:text-orange-400"
              aria-label="Instagram de Aguidom"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
          <p className="text-[10px] font-medium uppercase tracking-widest text-zinc-700 md:text-xs">
            © {currentYear} Club Aguidom · Acarigua, Portuguesa
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-[10px] font-medium uppercase tracking-widest text-zinc-700 transition-colors hover:text-zinc-400 md:text-xs"
            >
              Privacidad
            </Link>
            <Link
              href="/terms"
              className="text-[10px] font-medium uppercase tracking-widest text-zinc-700 transition-colors hover:text-zinc-400 md:text-xs"
            >
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
