
"use client"

import Ripple from '@/components/ui/ripple';
import { motion } from 'framer-motion';

const RainbowButton = (href: any) => {


  return (
    <a href='#tally' rel='noopener noreferrer'  className="flex items-center justify-center ">
      <motion.button
        className="relative px-6 py-3 text-white font-semibold rounded-full overflow-hidden bg-black shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Arcoíris rotativo */}
        <motion.div
          className="absolute inset-0   border-[15px] "
          style={{
            borderImageSource:
              "linear-gradient(40deg, #D63745, #DE663C, #EFB44B, #548540, #6F9EC7, #69265F, #493F84)",
            borderImageSlice: 1,
          }}
          animate={{
            rotate: -360,
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 2,
            delay: 2,
            duration: 12,
            ease: "easeInOut",
          }}
        />

        {/* Fondo del botón */}
        <span className="absolute inset-0 rounded-full bg-black m-[1px]"></span>
        {/* Texto */}
        <span className="relative">Regístrate ahora</span>
      </motion.button>
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

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#D63745] via-[#DE663C] to-[#EFB44B]">
            Únete a Nitroguidom
          </h1>
          <p className="mb-6">
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