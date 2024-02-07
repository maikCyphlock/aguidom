import React from "react";
import ResultSvg from "./assets/StepVertical";

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
        <div className="text-4xl md:text-6xl font-bold tracking-[-0.64] text-white text-balance">
          25+ de experiencia en el deporte
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center  lg:justify-evenly  gap-8 ">
        <div className="text-pretty font-serif text-2xl  basis-3/4  text-white mt-2 text-center">
          No esperes a que la suerte te toque. Comienza a trabajar duro y a
          seguir un plan, y verás que el éxito llegará
        </div>
        <div className="">
          <ResultSvg />
        </div>
      </div>
    </div>
  );
}

export default Experience;
