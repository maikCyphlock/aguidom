"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { useRouter } from 'next/navigation'


function BackUi() {
    const router = useRouter()
    return (
        <section className="container mx-auto p-2 md:gap-8 md:p-6">
            <div className="flex items-center gap-4">
                <Button size="icon" variant="outline" onClick={() => router.back()}>
                    <ArrowLeftIcon className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                </Button>
                <h1 className="font-semibold text-lg md:text-xl">
                    Regresar
                </h1>
            </div>
          
        </section>
    )
}

export default BackUi