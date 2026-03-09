"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Home, Calendar, User, NewspaperIcon, X, Instagram, Twitter, Facebook, Trophy } from 'lucide-react'
import { Button } from "./ui/button"
import Link from 'next/link'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet"

function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { name: 'Inicio', icon: <Home className="w-5 h-5" />, href: '/' },
    { name: 'Fama', icon: <Trophy className="w-5 h-5" />, href: '/fama' },
    { name: 'Noticias', icon: <NewspaperIcon className="w-5 h-5" />, href: '/blog' },
    { name: 'competencias', icon: <Calendar className="w-5 h-5" />, href: '/events/nitroguidom' },
    { name: 'Nosotros', icon: <User className="w-5 h-5" />, href: '/about' },
  ]

  return (
    <div className="sticky top-0 z-50 flex justify-center pt-3 px-4">
      {/* Desktop Navbar */}
      <nav
        id="NavbarRoot"
        className="md:flex py-2 px-6 items-center bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-full justify-between hidden w-full max-w-4xl"
      >
        <Link href="/">
          <img
            src="logo-para-fondo-oscuro.svg"
            alt="Logo"
            className="h-7 w-7"
          />
        </Link>
        <div className="gap-1 flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 group"
            >
              {item.icon}
              <span className='text-[11px] uppercase tracking-[0.2em] font-bold'>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar Button */}
      <nav className="md:hidden w-full flex justify-between items-center py-2 px-4 bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-full">
        <Link href="/">
          <img
            src="logo-para-fondo-oscuro.svg"
            alt="Logo"
            className="h-7 w-7"
          />
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/5">
              <Menu className="h-5 w-5 text-white" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-[350px] bg-zinc-950/95 backdrop-blur-3xl border-l border-white/10 p-0 flex flex-col"
          >
            {/* Header within Sidebar - Fixed for accessibility */}
            <SheetHeader className="p-8 flex justify-between items-center border-b border-white/5 space-y-0">
              <SheetTitle className="text-xl font-spartan font-black uppercase tracking-tighter text-white">
                AGUIDOM
              </SheetTitle>
            </SheetHeader>

            {/* Nav Links with Motion */}
            <nav className="flex-1 px-6 py-10 flex flex-col gap-2">
              <AnimatePresence>
                {isOpen && navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-2xl text-zinc-400 hover:text-white hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="p-3 rounded-xl bg-white/5 text-white/50 group-hover:text-white group-hover:bg-white/10 transition-colors">
                        {item.icon}
                      </span>
                      <span className="text-sm uppercase tracking-[0.3em] font-bold">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </nav>

            {/* Footer within Sidebar */}
            <div className="p-8 border-t border-white/5 mt-auto">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-bold mb-6">
                Síguenos
              </p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

export default FloatingNavbar
