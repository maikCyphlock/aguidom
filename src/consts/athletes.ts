export interface Athlete {
    slug: string;
    name: string;
    category: string;
    bio: string;
    fullBio: string;
    achievements: string[];
    image: string;
}

export const athletes: Athlete[] = [
    {
        slug: "isabella-cuello",
        name: "Isabella Cuello",
        category: "Velocista - 100m",
        bio: "Promesa del atletismo nacional, Isabella se ha consolidado en el Top 10 de la selección de Venezuela en los 100 metros llanos.",
        fullBio: "Promesa del atletismo nacional, Isabella se ha consolidado en el Top 10 de la selección de Venezuela en los 100 metros llanos. Su velocidad explosiva y técnica la posicionan como una de las figuras con mayor proyección del club. Ha representado a Aguidom en múltiples competencias nacionales, destacándose por su disciplina y constante evolución en la pista de tartán.",
        achievements: ["Top 10 Selección Nacional", "Finalista Nacional 100m", "Promesa Elite Aguidom"],
        image: "/isabella.webp",
    },
    {
        slug: "adriana-zabaleta",
        name: "Adriana Zabaleta",
        category: "Maratonista Master",
        bio: "Un ejemplo de constancia y alto rendimiento en categorías Master. Adriana alcanzó la gloria al titularse Campeona Master Femenina en la prestigiosa Maratón CAF.",
        fullBio: "Un ejemplo de constancia y alto rendimiento en categorías Master. Adriana alcanzó la gloria al titularse Campeona Master Femenina en la prestigiosa Maratón CAF, demostrando que la excelencia no tiene edad. Su régimen de entrenamiento y mentalidad ganadora son una inspiración para toda la comunidad de corredores en Acarigua y Venezuela.",
        achievements: ["Campeona Master CAF", "Podio Maratón Nacional", "Referente Senior"],
        image: "/adriana.webp",
    },
    {
        slug: "jesus-valenzuela",
        name: "Jesús Valenzuela",
        category: "Árbitro FIFA Elite",
        bio: "Orgullo de Acarigua y referente del arbitraje mundial. Fue el primer árbitro principal venezolano en participar en una Copa del Mundo (Qatar 2022).",
        fullBio: "Orgullo de Acarigua y referente del arbitraje mundial. Fue el primer árbitro principal venezolano en participar en una Copa del Mundo (Qatar 2022), dirigiendo encuentros de altísimo nivel como el Francia-Polonia. Su trayectoria es testimonio de integridad y profesionalismo, llevando el nombre de Venezuela a los escenarios más grandes del fútbol internacional.",
        achievements: ["Árbitro Qatar 2022", "Mejor Árbitro CONMEBOL 2021", "FIFA International"],
        image: "/jesus-v.jpg",
    },
];
