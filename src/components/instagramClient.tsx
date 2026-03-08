"use client"

import { useEffect, useState } from "react"
import { InstagramEmbed } from "react-social-media-embed"

export default function Page() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className="mt-12">
            <h2 className="text-4xl text-center mb-8 font-bold tracking-tight">Síguenos en Instagram</h2>
            <div style={{ display: 'flex', justifyContent: 'center', minHeight: '500px' }}>
                {isMounted ? (
                    <InstagramEmbed url="https://www.instagram.com/agui_dom" width={700} />
                ) : (
                    <div className="w-[700px] max-w-full h-[500px] bg-zinc-900 border border-zinc-800 animate-pulse rounded-md" />
                )}
            </div>
        </section>
    )
}