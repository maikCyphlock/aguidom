import React from "react";

function Cta() {
  return (
    <div
      id="CTARoot"
      className="relative flex flex-col justify-end gap-12 w-full font-['IBM_Plex_Mono'] items-start pt-40 pb-8 px-[280px]"
    >
      <img
        src="https://file.rendit.io/n/Z3BOtzpANTtBnJLjWcme.svg"
        alt="Vector1"
        className="w-12 h-20 origin-top-left rotate-[165deg] absolute top-[531.41064453125px] left-[967.591064453125px]"
      />
      <div className="relative flex flex-row pt-16 w-full font-['Onest'] items-start">
        <div className="border-solid border-white w-2/3 h-[449px] absolute top-0 left-[141px] flex flex-row justify-end items-start px-48 border rounded-[285px]">
          <div className="border-solid border-white w-2/3 h-[289px] absolute top-20 left-24 border rounded-[285px]" />
          <div className="border-solid border-white w-4/5 h-[339px] absolute top-12 left-16 flex flex-row items-start border rounded-[285px]">
            <div className="border-solid border-white w-full h-[339px] my-0 border rounded-[285px]" />
          </div>
          <div className="border-solid border-white w-full h-[389px] absolute top-8 left-5 flex flex-row justify-end items-start pt-12 px-6 border rounded-[285px]">
            <img
              src="https://file.rendit.io/n/bfE2jBIkHRBZKt1Dhr8R.svg"
              alt="Vector"
              className="relative mb-[277px] w-20"
            />
            <img
              src="https://file.rendit.io/n/0h3chJppgq3radg74m7T.svg"
              alt="Vector2"
              className="w-16 h-16 origin-top-left rotate-[96.6deg] absolute top-64 left-24"
            />
            <img
              src="https://file.rendit.io/n/Fs9W1Miknrc5O2Ut8Uvp.svg"
              alt="Vector3"
              className="w-16 h-16 origin-top-left rotate-[165deg] absolute top-32 left-24"
            />
          </div>
          <img
            src="https://file.rendit.io/n/ticWkSAjHtCkugdl85Bb.svg"
            alt="Line"
            id="Line"
            className="w-0 h-20 absolute top-[362.5019748733939px] left-48"
          />
          <img
            src="https://file.rendit.io/n/kX9tTSMBdCZatUEZeqYc.svg"
            alt="Line1"
            id="Line1"
            className="w-0 h-20 absolute top-0 left-48"
          />
          <img
            src="https://file.rendit.io/n/Ri1oTyvbyV9QLN8h4zMa.svg"
            alt="Line2"
            id="Line2"
            className="w-0 h-20 absolute top-0 left-[388.8928185595205px]"
          />
          <div className="bg-[url(https://file.rendit.io/n/0E0PY0ExsLQJvM5Hry9e.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-col justify-end gap-4 w-5 h-20 font-['Onest'] items-start mt-[361px] mb-0 pl-1 py-1">
            <div className="flex flex-col ml-2 gap-3 w-1 h-10 items-start">
              <div className="text-center text-xs tracking-[-0.1] text-white">
                1
              </div>
              <div className="text-center text-xs tracking-[-0.1] text-white">
                2
              </div>
            </div>
            <div className="text-center text-xs tracking-[-0.1] text-white ml-2">
              3
            </div>
          </div>
        </div>
        <div className="text-center text-[210px] font-bold tracking-[-2.1] text-white relative mb-[112px]">
          Aguidom
        </div>
      </div>
      <div className="text-center text-6xl font-light tracking-[-0.64] text-[#bebebe] relative ml-20 w-4/5">
        Club Deportivo <br />
        de alto rendimiento
      </div>
    </div>
  );
}

export default Cta;
