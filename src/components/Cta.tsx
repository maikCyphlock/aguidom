import React from "react";
import RunningStadium from "./icons/running_stadium";

function Cta() {
  return (
    <div
      id="CTARoot"
      className="relative grid place-items-center   w-full items-start py-40 antialiased"
    >
      <div className="relative grid place-items-center  w-full ">
        <div className="absolute -z-10">
          <img
            src="/bg.png"
            className="w-screen brightness-75 rounded-lg"
          ></img>
        </div>
        {/* <div className="absolute ">
          <RunningStadium className="w-[250px] lg:w-[450px]" />
        </div> */}
        <div className="text-center text-8xl lg:text-[180px] font-bold tracking-[-2.1] text-white relative ">
          Aguidom
        </div>
      </div>
      <p className="w-1/2 text-balance font-bold  text-2xl mt-8 lg:text-5xl tracking-widest  font-serif lg:mt-[112px]  text-center">
        Club Deportivo de alto rendimiento
      </p>
    </div>
  );
}

export default Cta;
