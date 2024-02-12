import type { Metadata } from "next";
import "@fontsource/ibm-plex-serif";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource-variable/onest";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "Aguidom",
  description: "club de atletismo",
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
        <div className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <Navbar />
        {children}
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}
