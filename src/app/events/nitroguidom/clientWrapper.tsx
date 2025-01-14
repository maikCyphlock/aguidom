
"use client"

import Ripple from '@/components/ui/ripple';
import { motion } from 'framer-motion';

const RainbowButton = (href: any) => {


  return (
    <a href='https://forms.gle/gGYjAkZwh77cPfxUA' rel='noopener noreferrer' target='_blank'  className="rainbow-btn">
     Regístrate ahora
  
    </a>
  );
};
function ClientWrapper() {



  return (
    <div suppressHydrationWarning className="mt-12 text-center text-white ">
      <div className='w-1/2 mx-auto'>
  
      </div>
      <section className='min-h-screen'>
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center">

          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">

            <motion.img initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, damping: 0.5, bounce: 2.5, ease: "easeOut" }} className=" top-0 w-64 h-64" src="/events/nitroguidom.png" alt="" />

          </p>
          <Ripple />
        </div>
        <div className="my-12 flex flex-col items-center justify-center">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Únete a Nitroguidom
          </h1>
          <p className="mb-6 text-md">
            Participa en la competencia de atletismo más emocionante del año.
          </p>
          <div className="flex flex-col items-center gap-2">

            <RainbowButton />

          </div>

        </div>
      </section>

      <iframe id='tally' data-tally-src="https://tally.so/embed/mVo8av?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" className='container mx-auto bg-zinc-100' height="3078" marginheight="0" marginwidth="0" title="Competencia Club Aguidom
"></iframe>

    </div>
  )
}

export default ClientWrapper