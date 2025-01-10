"use client"
import { Mail } from 'lucide-react';
import Ripple from '@/components/ui/ripple';
import { motion } from 'framer-motion';








export default function Home() {
    return (
        <div className=" text-center text-white ">

            <div className="relative flex h-[500px] w-full flex-col items-center justify-center">
                <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
                <motion.img initial={{ opacity: 0, scale: 0 }}  animate={{ opacity: 1, scale: 1.5 }} transition={{ duration: 1, damping: 0.5,bounce: 2.5, ease: "easeOut"  }} className="absolute z-0 top-28 blur-2xl w-64 h-64" src="/events/nitroguidom.png" alt="" />
                    <motion.img initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, damping: 0.5,bounce: 2.5, ease: "easeOut"  }} className=" top-0 w-64 h-64" src="/events/nitroguidom.png" alt="" />
                 
                </p>
                <Ripple />
            </div>
            <div className="my-12 flex flex-col items-center justify-center">

                <h1 className=" text-4xl font-bold mb-4">
                    Únete a <span className="text-blue-400">Nitroguidom</span>

                </h1>
                <p className="mb-6">
                    Participa en la competencia de atletismo más emocionante del año.
                </p>
                <div className="flex flex-col items-center gap-2">
                    
                    <a href='https://tally.so/r/mVo8av' rel='noopener noreferrer' target='_blank' className="px-4 py-2  hover:bg-blue-900 bg-blue-400 text-blue-950 hover:text-blue-200 rounded-md">
                        Regístrate ahora
                    </a>
                </div>

            </div>

        </div>
    );
}
