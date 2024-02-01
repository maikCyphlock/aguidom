import type { Metadata } from "next";
import "@fontsource/ibm-plex-serif";
import QueryComponentClientProvider from "@/components/QueryClientProvider";
import "@fontsource-variable/onest";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "Aguidom",
  description: "club de atletismo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryComponentClientProvider>
      <html lang="en" className="dark">
        <body className={"dark:bg-zinc-950"}>
          <Navbar />
          {children}
          <Toaster richColors />
        </body>
      </html>
    </QueryComponentClientProvider>
  );
}
