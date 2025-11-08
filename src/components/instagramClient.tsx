"use client"

import { InstagramEmbed } from "react-social-media-embed"



export default function Page() {

    return (
        <section className="mt-12">
            <h2 className="text-4xl text-center mb-8">Síguenos en Instagram</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url="https://www.instagram.com/agui_dom" width={700} />
            </div>
        </section>

    )
}