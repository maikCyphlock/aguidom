"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: "Enlaces",
            links: [
                { name: "Inicio", href: "#inicio" },
                { name: "Carrera", href: "#carrera" },
                { name: "Noticias", href: "#noticias" },
                { name: "Precios", href: "#precios" },
            ],
        },
        {
            title: "Contacto",
            info: [
                { icon: <Mail className="w-4 h-4" />, text: "info@aguidom.com" },
                { icon: <Phone className="w-4 h-4" />, text: "+54 4269599721" },
                { icon: <MapPin className="w-4 h-4" />, text: "Estadio José Antonio Páez, Acarigua, Portuguesa, Venezuela" },
            ],
        },
    ];

    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
        { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
        { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    ];

    return (
        <footer className="relative w-full bg-black pt-24 pb-12 overflow-hidden">
            {/* Decorative hairline at the top */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <h2 className="text-2xl font-spartan font-black uppercase tracking-tighter text-white">
                                AGUIDOM
                            </h2>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                            Club deportivo de alto rendimiento comprometido con la excelencia atlética y la formación integral de atletas de élite.
                        </p>
                    </div>

                    {/* Links Sections */}
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/30 font-bold mb-6">
                                {section.title}
                            </h3>
                            {section.links ? (
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-white/50 hover:text-white transition-colors text-sm font-medium"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul className="space-y-4">
                                    {section.info?.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-white/50 text-sm font-medium">
                                            <span className="text-white/30">{item.icon}</span>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}

                    {/* Social Connect */}
                    <div>
                        <h3 className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/30 font-bold mb-6">
                            Síguenos
                        </h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] md:text-xs tracking-widest uppercase text-white/20 font-medium">
                        &copy; {currentYear} AGUIDOM. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-[10px] md:text-xs tracking-widest uppercase text-white/20 hover:text-white/40 transition-colors font-medium">
                            Privacidad
                        </Link>
                        <Link href="/terms" className="text-[10px] md:text-xs tracking-widest uppercase text-white/20 hover:text-white/40 transition-colors font-medium">
                            Términos
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
