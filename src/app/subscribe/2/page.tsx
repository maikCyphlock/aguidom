import { Button } from "@/components/ui/button";
import React from "react";
import { randomUUID } from "crypto";
function page() {
  return (
    <section className="container flex justify-center items-center mx-auto">
      <div className=" w-full max-w-2xl  m-4 flex flex-col gap-4">
        <div className="flex justify-between p-3">
          <span className="text-3xl  flex justify-center items-center bg-[#14213D] w-10 h-10 rounded-full text-zinc-100">
            1
          </span>
          <span className="text-3xl  flex justify-center items-center bg-[#FCA311] w-10 h-10 rounded-full text-zinc-100">
            2
          </span>
          <span className="text-3xl  flex justify-center items-center bg-[#14213D] w-10 h-10 rounded-full text-zinc-100">
            3
          </span>
        </div>
        <h1 className="text-3xl uppercase tracking-wider text-center font-bold">
          paga con nuestro pago movil.
        </h1>

        <p className="text-lg  font-thin mb-4">
          Únete a la comunidad de Aguidom y mejora tu rendimiento con nuestra
          membresía exclusiva.
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">Banco</span>
            <span>BNC - 0191</span>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">telefono</span>
            <span>0426-9599-721</span>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">C.I</span>
            <span>30054068</span>
          </div>
        </div>

        <Button>Suscribete</Button>
      </div>
    </section>
  );
}

export default page;
