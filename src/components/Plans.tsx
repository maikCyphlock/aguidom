export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Horario del Club de Atletismo
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Consulta nuestro programa de entrenamiento semanal.
          </p>
        </div>
        <div className="flex  flex-col md:flex-row gap-8 ">
          <div className="flex justify-center flex-col items-center gap-2">
            <iframe
              height="300"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-69.21520829200746%2C9.567288275894905%2C-69.20699000358583%2C9.573889888189486&amp;layer=mapnik"
            ></iframe>
            <span>Estadio Jose Antonio Páez</span>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">
                <DumbbellIcon />
                Lunes, Martes, Jueves
              </h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex gap-4 ">
                  <span className="flex flex-col gap-2 text-green-300">
                    <span className="border border-green-300 px-2 py-1 rounded-full">
                      Entrada
                    </span>
                    <span>6:00 AM</span>-<span>4:00 PM</span>
                  </span>
                  <span className="flex flex-col gap-2 text-red-300">
                    <span className="border border-red-300 px-2 py-1 rounded-full">
                      salida
                    </span>
                    <span>8:00 AM </span>-<span>5:30 PM</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DumbbellIcon() {
  return (
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none" />
      <rect
        x="56"
        y="56"
        width="40"
        height="144"
        rx="8"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="160"
        y="56"
        width="40"
        height="144"
        rx="8"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M200,80h24a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H200"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M56,176H32a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H56"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="96"
        y1="128"
        x2="160"
        y2="128"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="232"
        y1="128"
        x2="248"
        y2="128"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="8"
        y1="128"
        x2="24"
        y2="128"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </svg>
  );
}
