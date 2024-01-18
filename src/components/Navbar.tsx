import React from "react";

function Navbar() {
  return (
    <div
      id="NavbarRoot"
      className="flex flex-row justify-between w-full font-['Onest'] items-start px-32 mt-6"
    >
      <img
        src="https://file.rendit.io/n/TAQzv7NaT36JAEeJkmLy.svg"
        alt="Group"
        className="w-16"
      />
      <div className="border-solid border-[#1c1c1c] bg-[#0e0c0c] flex flex-row justify-between mt-2 w-1/2 items-start pt-1 px-4 border rounded-[40px]">
        <div className="text-center text-2xl tracking-[-0.24] text-[#fafafa] mb-1">
          Inicio
        </div>
        <div className="text-center text-2xl tracking-[-0.24] text-[#fafafa]">
          entrenamiento
        </div>
        <div className="text-center text-2xl tracking-[-0.24] text-[#fafafa]">
          precios
        </div>
        <div className="text-center text-2xl tracking-[-0.24] text-[#fafafa]">
          conoce más
        </div>
      </div>
      <button
        id="Btnsign"
        className="border-solid border-[#1c1c1c] bg-[#151515] flex flex-row mt-1 gap-2 w-1/5 h-12 cursor-pointer items-start pt-2 px-2 border rounded-[82px]"
      >
        <img
          src="https://file.rendit.io/n/r77YQKc0wIla6Ea40Tmt.svg"
          alt="Devicongoogle"
          id="Devicongoogle"
          className="mt-1 w-6"
        />
        <div className="text-center text-2xl tracking-[-0.24] text-[#c6c6c6]">
          Sign in with google
        </div>
      </button>
    </div>
  );
}

export default Navbar;
