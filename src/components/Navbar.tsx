'use client'

import { useState } from 'react'
import { motion } from "framer-motion";
import { HomeIcon,NewspaperIcon,CircleIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Home, Trophy, Calendar, User, Settings } from 'lucide-react'
import { Button } from "./ui/button";
import Link from 'next/link'

function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { name: 'Inicio', icon: <Home className="w-5 h-5" />, href: '/' },
    { name: 'noticias', icon:  <NewspaperIcon className="hover:text-zinc-300 transition-colors duration-200" />, href: '/blog' },
    { name: 'Calendario', icon: <Calendar className="w-5 h-5" />, href: '/calendario' },
    { name: 'Conoce más', icon: <User className="w-5 h-5" />, href: '/about' },
   
  ]
  return (
    <div className="sticky top-0 z-20 flex justify-center pt-3">
      <nav
        id="NavbarRoot"
        className="lg:flex py-3 px-6 items-center bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-full justify-between  hidden basis-1/2"
        
      >
        <a href="/"><img
          src="https://file.rendit.io/n/TAQzv7NaT36JAEeJkmLy.svg"
          alt="Group"
          className="h-8 w-8"
        /></a>
        <div className="gap-6 flex">
            <a href="/" className="group flex items-center gap-2">
            <HomeIcon className="hover:text-zinc-300 transition-colors duration-200" />
            <motion.span
              initial={{ opacity: 0, x: -10}}
              whileHover={{ opacity: 1, x: 0 }}
              className="hidden group-hover:block"
            >
              Inicio
            </motion.span>
            </a>
            <a href="/blog" className="group relative flex items-center gap-2">
            <NewspaperIcon className="hover:text-zinc-300 transition-colors duration-200" />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="hidden group-hover:block"
            >
              Noticias
            </motion.span>
            </a>
            <a href="/about" className="group flex items-center gap-2">
            <User className="hover:text-zinc-300 transition-colors duration-200" />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="hidden group-hover:block"
            >
              Conoce más
            </motion.span>
            </a>
        </div>

      </nav>
     
           <nav className="lg:hidden py-2 mb-3 px-6 items-center bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-full justify-between  flex basis-1/2">
        <div className="container mx-auto px-4 py-1  flex justify-between items-center">
          <a href="/" className="text-lg font-bold text-primary">
          <img
          src="https://file.rendit.io/n/TAQzv7NaT36JAEeJkmLy.svg"
          alt="Group"
          className="h-8 w-8"
        />
          </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] rounded-l-3xl">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-orange-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}

const HamburgerIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 fill-white"
      viewBox="0 0 256 256"
    >
      <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
    </svg>
  );
};

export default FloatingNavbar;

