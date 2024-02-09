"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
function NavbarBackBtn() {
    const router = useRouter()
    return (
        <div className="flex items-center gap-4">
            <Button
                className="group relative inline-flex  items-center justify-center overflow-hidden rounded-md border border-zinc-200 bg-zinc-800  font-medium text-zinc-100 hover:text-zinc-800 transition-all fill-zinc-100 hover:fill-zinc-800 [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none"
                size="icon"
                onClick={() => router.back()}
            >
                <ArrowLeftIcon className="h-4 w-4" />
                <span className="sr-only">Back</span>
            </Button>
            <h1 className="font-semibold text-lg md:text-xl">
                Configuración de perfil
            </h1>
        </div>
    )
}
function ArrowLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
        </svg>
    );
}
export default NavbarBackBtn