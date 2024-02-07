import React from "react";
import RunningStadium from "./icons/running_stadium";

function Cta() {
  return (
    <div
      id="CTARoot"
      className="min-h-screen grid place-items-center w-full items-start mt-6 md:mt-44 antialiased"
    >
      <div className=" grid place-items-center  w-full ">
        <img
          srcSet="/bg-phone.webp 640w, /bg.webp 1280w"
          sizes="(max-width: 640px) 640px, 100vw"
          className="absolute inset-0 lg:-top-8 -z-10 brightness-50 "
        ></img>

        {/* <div className="absolute ">
          <RunningStadium className="w-[250px] lg:w-[450px]" />
        </div> */}
        <div className="text-center text-4xl md:text-7xl lg:text-[180px] font-bold tracking-[-2.1] text-white relative ">
          Aguidom
        </div>
        <p className="md:w-1/2 text-pretty md:mt-12 md:font-bold text-lg font-thin md:text-xl  lg:text-5xl tracking-widest  font-serif    text-center">
          Club Deportivo de alto rendimiento
        </p>
      </div>
    </div>
  );
}

export default Cta;
