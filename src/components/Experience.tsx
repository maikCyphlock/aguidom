import React from "react";

function Experience() {
  return (
    <div
      id="ExperienceRoot"
      className="flex flex-col gap-10 w-full h-[885px] font-['Onest'] items-start pl-[147px] py-[144px]"
    >
      <div className="flex flex-col ml-1 gap-2 w-3/5 items-start">
        <div className="bg-[#141414] flex flex-row justify-center pt-4 w-12 h-16 items-start rounded-lg">
          <img
            src="https://file.rendit.io/n/hxKakcdCPx3glZm0bpvq.svg"
            alt="Vector"
            className="w-5"
          />
        </div>
        <div className="text-6xl font-bold tracking-[-0.64] text-white w-full">
          25+ de experiencia en el deporte
        </div>
      </div>
      <div className="flex flex-row justify-between w-5/6 font-['IBM_Plex_Mono'] items-start">
        <div className="text-center text-3xl tracking-[-0.32] text-white mt-2 w-2/5">
          “No esperes a que la suerte te toque. Comienza a trabajar duro y a
          seguir un plan, y verás que el éxito llegará"
        </div>
        <div className="flex flex-row mb-px gap-8 w-2/5 font-['Onest'] items-start">
          <div className="flex flex-col mt-6 gap-6 w-1/4 items-start">
            <div className="text-center text-3xl tracking-[-0.32] text-white ml-2">
              Talento
            </div>
            <div className="text-center text-6xl tracking-[-0.64] bg-[#00cff0] flex flex-row justify-center pt-5 w-full h-32 items-start">
              2
            </div>
          </div>
          <div className="flex flex-row gap-6 w-2/3 items-start">
            <div className="flex flex-col gap-4 w-1/2 items-start">
              <div className="text-center text-3xl tracking-[-0.32] text-white">
                Disciplina
              </div>
              <div className="text-center text-6xl tracking-[-0.64] bg-[#fca311] flex flex-row justify-center ml-1 pt-10 w-5/6 h-40 items-start">
                1
              </div>
            </div>
            <div className="flex flex-col mt-8 gap-10 w-2/5 items-start">
              <div className="text-center text-3xl tracking-[-0.32] text-white ml-3">
                Suerte
              </div>
              <div className="text-center text-6xl tracking-[-0.64] bg-[#3fd88d] flex flex-row justify-center pt-2 w-full items-start">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
