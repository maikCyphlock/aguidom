"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CheckCircle from "./icons/CheckCircle";

export default function Component() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animar solo la primera vez que es visible
    threshold: 0.1, // % del componente visible para activar la animación
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 ">
     
      <div className="container mx-auto px-6 md:px-8 " ref={ref}>
   
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUpVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            ¡Únete a nuestro club!
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Forma parte de nuestro club de atletismo y accede a beneficios
            exclusivos.
          </p>
        </motion.div>

        {/* Card Section */}
        <motion.div
          className="grid place-items-center"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="relative flex flex-col items-center  overflow-hidden p-8 rounded-lg shadow-lg bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-zinc-700 transition-transform duration-300 ease-out transform hover:scale-105">
       
            <motion.h3
              className="text-xl z-auto font-semibold text-white"
              variants={fadeUpVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.5 }}
            >
              Básico
            </motion.h3>
            <motion.p
              className="mt-2 text-lg font-medium text-zinc-400"
              variants={fadeUpVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.7 }}
            >
              <span className="text-4xl font-bold text-white">$15</span>/mes
            </motion.p>
            <ul className="mt-6 space-y-3">
              {[
                "Entrenamientos en el estadio",
                "Participaciones en eventos",
                "Chequeo de fisioterapeuta",
              ].map((benefit, index) => (
                <motion.li
                  className="flex items-center text-sm text-zinc-400"
                  key={benefit}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate={controls}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <CheckCircle className="text-green-300 w-5 h-5 mr-2" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 1.2 }}
            >
              <Button className="mt-6 px-6 py-2 text-sm font-semibold text-white bg-yellow-800 border shadow-sm  rounded-lg hover:bg-yellow-500 transition-all">
                <a href="/subscribe">Inscribirse</a>
              </Button>
            </motion.div>
            <img src="/goldenlingot.jpg" className="absolute -bottom-32 -left-0 -z-50 object-cover h-[300px]" alt="" />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
