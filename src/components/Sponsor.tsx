'use client'

export function Sponsor() {


  return (
    <main>
      <h2 className="text-4xl font-bold text-center mb-12">Patrocinadores</h2>
      <div
        className="slider"
        style={
          {
            /* @ts-ignore */
            "--width": "100px",
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
                alt=""
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
                alt=""
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
                alt=""
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
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

