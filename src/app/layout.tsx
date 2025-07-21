import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Onest, IBM_Plex_Serif, League_Spartan } from "next/font/google";
import "./globals.css";
import 'atropos/css'
import Navbar from "@/components/Navbar";

// Optimize font loading
const onest = Onest({
  subsets: ['latin'],
  variable: '--font-onest',
  display: 'swap',
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-serif',
  display: 'swap',
});

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Aguidom",
  description: "club de atletismo",
  icons: {
    icon: "/icon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${onest.variable} ${ibmPlexSerif.variable} ${leagueSpartan.variable}`}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://tally.so" />
        
        {/* Essential meta tags */}
        <meta name="google-adsense-account" content="ca-pub-9018951160643855" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Async load external scripts */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9018951160643855"
          crossOrigin="anonymous"
        />
        <script async src="https://tally.so/widgets/embed.js" />
      </head>
      <body className="relative h-full w-full bg-zinc-950 min-h-screen antialiased">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
