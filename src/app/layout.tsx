import type { Metadata } from "next";
import "@fontsource/ibm-plex-serif";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource-variable/onest";
import "@fontsource-variable/league-spartan";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Aguidom",
  description: "club de atletismo",
  icons: {
    icon: "/icon.svg",
  }
};
// hola
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
    
      <body className="relative h-full w-full bg-zinc-950 min-h-screen">
        
    

        <Navbar />
        {children}
      
        <Analytics />
      </body>
    </html>
  );
}
