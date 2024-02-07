import React from "react";
import StepHorizontal from "@/components/assets/StepHorizontal";
import { Button } from "@/components/ui/button";


function page() {
    return (
        <section className="container flex flex-col justify-center items-center mx-auto">
            <div className=" w-full max-w-2xl  m-4 flex flex-col gap-4">
                <div className="flex justify-between p-3">
                    <span className="text-3xl  flex justify-center items-center bg-[#14213D] w-10 h-10 rounded-full text-zinc-100">
                        1
                    </span>
                    <span className="text-3xl  flex justify-center items-center bg-[#14213D] w-10 h-10 rounded-full text-zinc-100">
                        2
                    </span>
                    <span className="text-3xl  flex justify-center items-center bg-[#FCA311]  w-10 h-10 rounded-full text-zinc-100">
                        3
                    </span>
                </div>
                <h1 className="text-3xl uppercase tracking-wider text-center font-bold">
                    Su pago se está procesando
                </h1>

                <p className="text-lg  font-thin mb-4 text-zinc-300">
                    asegurese de haber registrado los datos correctamentes, de lo contrario el pago no se procesará.
                </p>



            </div>
            <div className="container w-full md:max-w-5xl mx-auto m-3">
                <StepHorizontal className="w-full h-full " />

            </div>
            <div>
                <Button asChild className="my-12" >
                    <a href="/profile">ir a mi perfil</a>
                </Button>
            </div>

        </section >
    );
}

export default page;
