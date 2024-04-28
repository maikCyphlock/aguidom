"use client"
import BackUi from "./backUi"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
        <BackUi/>
        {children}
        </section>
  }