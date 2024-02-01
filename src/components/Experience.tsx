import React from "react";

function Experience() {
  return (
    <div id="ExperienceRoot" className="flex flex-col gap-10 my-20 ">
      <div className="flex flex-col gap-2  items-start">
        <div className="bg-[#141414] flex flex-row justify-center  p-4 items-start rounded-lg">
          <img
            src="https://file.rendit.io/n/hxKakcdCPx3glZm0bpvq.svg"
            alt="Vector"
            className="w-5"
          />
        </div>
        <div className="text-6xl font-bold tracking-[-0.64] text-white text-balance">
          25+ de experiencia en el deporte
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center  lg:justify-evenly  gap-8 ">
        <div className="text-pretty font-serif text-2xl  basis-3/4  text-white mt-2 text-center">
          No esperes a que la suerte te toque. Comienza a trabajar duro y a
          seguir un plan, y verás que el éxito llegará
        </div>
        <div className="flex flex-row  gap-8 items-end">
          <div className="flex flex-col  gap-6  items-center">
            <div className="text-center text-3xl  text-white ">Talento</div>
            <div className="grid place-items-center text-6xl tracking-[-0.64] bg-[#00cff0] text-[#082227]  w-20 h-36 lg:w-32">
              2
            </div>
          </div>

          <div className="flex flex-col gap-4 ">
            <div className="grid place-items-center text-3xl tracking-[-0.32] text-white">
              Disciplina
            </div>
            <div className="grid place-items-center text-6xl tracking-[-0.64] bg-[#fca311] text-[#2b1e09] w-30 h-48 lg:w-32">
              1
            </div>
          </div>
          <div className="flex flex-col mt-8 gap-10  items-start">
            <div className="grid place-items-center text-3xl tracking-[-0.32] text-white ">
              Suerte
            </div>
            <div className="grid place-items-center text-6xl tracking-[-0.64] bg-[#3fd88d]  text-[#081a11] w-20 h-32 lg:w-32">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
