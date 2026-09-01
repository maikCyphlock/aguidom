const sponsors = [
  {
    name: "BK Store",
    href: "https://www.instagram.com/bkstore.ve/",
    img: "https://github.com/maikCyphlock/img/blob/main/pt-bk-bgless.png?raw=true",
    inverted: true,
  },
  {
    name: "Fernando",
    href: "https://www.instagram.com/eduarfer01/",
    img: "https://github.com/maikCyphlock/img/blob/main/pt-fernando-bgless.png?raw=true",
  },
  {
    name: "Dulcesitos",
    href: "https://www.instagram.com/dulcesitos_wg29",
    img: "https://github.com/maikCyphlock/img/blob/main/pt-dulcesitos-bgless.png?raw=true",
  },
  {
    name: "Brillex",
    href: "https://www.instagram.com/brillexacarigua/",
    img: "https://github.com/maikCyphlock/img/blob/main/pt-brillex-bgless.png?raw=true",
  },
];

export function Sponsor() {
  return (
    <section className="border-t border-white/5 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
          Nuestros aliados
        </p>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
          {sponsors.map((sponsor) => (
            <li key={sponsor.name}>
              <a
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={sponsor.img}
                  alt={sponsor.name}
                  loading="lazy"
                  className={`h-14 w-auto object-contain opacity-40 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 md:h-16 ${
                    sponsor.inverted ? "invert" : ""
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
