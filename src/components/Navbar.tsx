'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { HomeIcon, NewspaperIcon, CircleIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Home, Trophy, Calendar, User, Settings } from 'lucide-react'
import { Button } from "./ui/button"
import Link from 'next/link'

function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { name: 'Inicio', icon: <Home className="w-5 h-5" />, href: '/' },
    { name: 'Noticias', icon: <NewspaperIcon className="w-5 h-5" />, href: '/blog' },
    { name: 'competencias', icon: <Calendar className="w-5 h-5" />, href: '/events/nitroguidom' },
    { name: 'Nosotros', icon: <User className="w-5 h-5" />, href: '/about' },
  ]

  return (
    <div className="sticky top-0 z-20 flex justify-center pt-3">
      <nav
        id="NavbarRoot"
        className="md:flex py-3 px-6 items-center bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-full justify-between hidden basis-1/2"
      >
        <Link href="/">
          <img
            src="https://file.rendit.io/n/TAQzv7NaT36JAEeJkmLy.svg"
            alt="Logo"
            className="h-8 w-8"
          />
        </Link>
        <div className="gap-2 flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-orange-700 transition-colors group"
            >
              {item.icon}
              <span className='text-sm'>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
     
      <nav className="sticky top-0 md:hidden py-2 mb-3 px-6 items-center bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-full justify-between flex basis-1/2">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold text-primary">
            <img
              src="https://file.rendit.io/n/TAQzv7NaT36JAEeJkmLy.svg"
              alt="Logo"
              className="h-8 w-8"
            />
          </Link>
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
  )
}

export default FloatingNavbar
