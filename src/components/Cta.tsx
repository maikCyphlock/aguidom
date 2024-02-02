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
          src="/bg.png"
          className="absolute inset-0 -top-8 -z-10 w-screen brightness-75 "
        ></img>

        {/* <div className="absolute ">
          <RunningStadium className="w-[250px] lg:w-[450px]" />
        </div> */}
        <div className="text-center text-7xl lg:text-[180px] font-bold tracking-[-2.1] text-white relative ">
          Aguidom
        </div>
      </div>
      <p className="w-1/2 text-pretty font-bold  text-xl  lg:text-5xl tracking-widest  font-serif    text-center">
        Club Deportivo de alto rendimiento
      </p>
    </div>
  );
}

export default Cta;
