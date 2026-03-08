'use client'

export function Sponsor() {

  return (
    <main className="py-20">
      <div className="container mx-auto px-4 mb-16 text-center">
        <p className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-zinc-500">
          NUESTROS ALIADOS
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
          PATROCINADORES
        </h2>
      </div>
      <div
        className="slider"
        style={
          {
            /* @ts-ignore */
            "--width": "150px",
            "--height": "150px",
            "--quantity": "4"
          }
        }
      >
        <div className="list">
          <div className="item inverted" style={
            {
              /* @ts-ignore */
              "--position": "1"
            }
          }>
            <a href="https://www.instagram.com/bkstore.ve/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://github.com/maikCyphlock/img/blob/main/pt-bk-bgless.png?raw=true"
                alt="BK Store"
                className="transition-all duration-500 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 object-contain"
              />
            </a>

          </div>
          <div className="item" style={{
            /* @ts-ignore */
            "--position": "2"
          }}>
            <a href="https://www.instagram.com/eduarfer01/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://github.com/maikCyphlock/img/blob/main/pt-fernando-bgless.png?raw=true"
                alt="Fernando"
                className="transition-all duration-500 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 object-contain"
              />
            </a>
          </div>
          <div className="item" style={{
            /* @ts-ignore */
            "--position": "3"
          }}>
            <a href="https://www.instagram.com/dulcesitos_wg29" target="_blank" rel="noopener noreferrer">
              <img
                src="https://github.com/maikCyphlock/img/blob/main/pt-dulcesitos-bgless.png?raw=true"
                alt="Dulcesitos"
                className="transition-all duration-500 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 object-contain"
              />
            </a>
          </div>
          <div className="item" style={{
            /* @ts-ignore */
            "--position": "4"
          }}>
            <a href="https://www.instagram.com/brillexacarigua/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://github.com/maikCyphlock/img/blob/main/pt-brillex-bgless.png?raw=true"
                alt="Brillex"
                className="transition-all duration-500 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

