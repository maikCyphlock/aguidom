import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,

  MenubarTrigger,
} from "@/components/ui/menubar";

import UserMenu from "./userMenu";

function Navbar() {
  return (
    <>
      <div
        id="NavbarRoot"
        className="lg:flex py-3 items-center border-b bg-zinc-950/80 backdrop-blur-md border-zinc-900  justify-around  hidden"
      >
        <img
          src="https://file.rendit.io/n/TAQzv7NaT36JAEeJkmLy.svg"
          alt="Group"
          className="h-12 w-12 hidden lg:block"
        />
        <div className="gap-4 flex">
          <a href="/" className="hover:underline text-center   ">
            Inicio
          </a>
          <a href="/blog" className="hover:underline text-center  ">
            noticias
          </a>
          <a href="/subscribe" className="hover:underline text-center  ">
            precios
          </a>
          <a href="/about" className="hover:underline text-center  ">
            conoce más
          </a>
        </div>
        <UserMenu />
      </div>
      <Menubar className="lg:hidden z-20 justify-end bg-transparent border-transparent   sticky top-4 mr-12 shadow-none">
        <MenubarMenu >
          <MenubarTrigger className="border bg-zinc-800 border-zinc-700 shadow-lg">
            <HamburgerIcon />
          </MenubarTrigger>
          <MenubarContent className=" mr-6">
            <MenubarItem asChild>
              <a href="/">Inicio</a>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem asChild>
              <a href="/blog">noticias</a>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem asChild>
              <a href="/subscribe">precios</a>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem asChild>
              <a href="/about">acerca de</a>
            </MenubarItem>
            <MenubarSeparator />
            <div className="flex p-2 basis-full   gap-2">
              <UserMenu />
            </div>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
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
export default Navbar;
