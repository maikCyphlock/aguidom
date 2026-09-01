/**
 * Datos reales del club, en un solo lugar.
 * Todo lo que la landing afirma sale de aquí.
 */

// ⚠️ Revisar: el footer tenía "+54 4269599721" (código de Argentina).
// 0426 es un prefijo móvil venezolano, así que el país correcto es +58.
export const PHONE = "+58 426 959 9721";
export const WHATSAPP_URL =
  "https://wa.me/584269599721?text=" +
  encodeURIComponent("Hola, quiero información para inscribirme en el Club Aguidom.");

export const EMAIL = "info@aguidom.me";

export const ADDRESS = "Estadio José Antonio Páez, Acarigua, Portuguesa, Venezuela";
export const MAP_EMBED =
  "https://www.openstreetmap.org/export/embed.html?bbox=-69.21650648117067%2C9.568906952315094%2C-69.20754790306093%2C9.573646561807903&layer=mapnik";
export const MAP_LINK = "https://www.openstreetmap.org/?mlat=9.5714&mlon=-69.2120#map=17/9.5714/-69.2120";

export const INSTAGRAM = "https://www.instagram.com/agui_dom";

export const STATS = [
  { value: "25", suffix: "", label: "Años en la pista" },
  { value: "100", suffix: "+", label: "Atletas formados" },
  { value: "50", suffix: "+", label: "Medallistas nacionales" },
];

export const SESSIONS = [
  {
    time: "06:00",
    name: "Sesión mañana",
    focus: "Fondo y resistencia",
    detail: "Trabajo aeróbico, volumen y base de temporada.",
  },
  {
    time: "16:00",
    name: "Sesión tarde",
    focus: "Velocidad y fuerza",
    detail: "Técnica de carrera, salidas, series y trabajo de potencia.",
  },
];

// Lunes, martes y jueves.
export const TRAINING_DAYS = [
  { label: "L", name: "Lunes", active: true },
  { label: "M", name: "Martes", active: true },
  { label: "M", name: "Miércoles", active: false },
  { label: "J", name: "Jueves", active: true },
  { label: "V", name: "Viernes", active: false },
  { label: "S", name: "Sábado", active: false },
  { label: "D", name: "Domingo", active: false },
];
