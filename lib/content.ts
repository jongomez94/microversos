/**
 * Hechos confirmados de Microversos.
 * No agregar año de fundación, precios, dirección, horarios, teléfono,
 * correo, redes, testimonios ni cifras: no están confirmados.
 */

export const site = {
  name: "Microversos",
  url: "https://microversos.com",
  locale: "es_SV",
  country: "El Salvador",
  founder: "Jonathan Gómez",
  tagline: "Bienvenido al microverso fúngico de El Salvador",
  title: "Microversos | Hongos comestibles y funcionales en El Salvador",
} as const;

export const copy = {
  definition:
    "Microversos es una iniciativa salvadoreña dedicada a los hongos comestibles y funcionales, fundada por Jonathan Gómez.",
  mission:
    "Su misión es acercar los hongos a las personas de todos los días, por medio de la educación y de darlos a conocer.",
  vision:
    "La visión es tener unidades de bioproducción tropical que se puedan replicar.",
  pillarsIntro:
    "Los cuatro pilares son la producción, la investigación, la educación y la comercialización.",
  speciesIntro:
    "Microversos trabaja con orellana amarilla, orellana italiana y melena de león.",
  products:
    "Ofrece kits de cultivo y semilla en grano.",
  spawnNote:
    "La semilla en grano es el material con el que se siembra un cultivo de hongos.",
  where: "Vende en persona en mercados de agricultores de El Salvador.",
  whereDetail:
    "En esos mercados se consiguen los hongos, los kits de cultivo y la semilla en grano.",
} as const;

export const description = copy.definition;

export const nav = [
  { href: "/#que-es", label: "Qué es" },
  { href: "/#pilares", label: "Pilares" },
  { href: "/#especies", label: "Especies" },
  { href: "/#donde", label: "Dónde" },
  { href: "/#preguntas", label: "Preguntas" },
] as const;

export const pillars = [
  {
    number: "01",
    title: "Producción",
    text: "Producción de hongos comestibles y funcionales, de kits de cultivo y de semilla en grano.",
  },
  {
    number: "02",
    title: "Investigación",
    text: "La investigación acompaña el trabajo con hongos comestibles y funcionales, y la visión de unidades de bioproducción tropical que se puedan replicar.",
  },
  {
    number: "03",
    title: "Educación",
    text: "La educación acerca los hongos a las personas de todos los días, con información clara para quien no es especialista.",
  },
  {
    number: "04",
    title: "Comercialización",
    text: "La comercialización se hace en persona, en mercados de agricultores de El Salvador.",
  },
] as const;

export const species = [
  {
    id: "orellana-amarilla",
    name: "Orellana amarilla",
    tone: "gold" as const,
  },
  {
    id: "orellana-italiana",
    name: "Orellana italiana",
    tone: "clay" as const,
  },
  {
    id: "melena-de-leon",
    name: "Melena de león",
    tone: "mane" as const,
  },
] as const;

export const faq = [
  {
    question: "¿Qué es Microversos?",
    answer: copy.definition,
  },
  {
    question: "¿Cuáles son los cuatro pilares?",
    answer: copy.pillarsIntro,
  },
  {
    question: "¿Con qué especies trabaja?",
    answer: copy.speciesIntro,
  },
  {
    question: "¿Qué productos ofrece?",
    answer: copy.products,
  },
  {
    question: "¿Dónde vende Microversos?",
    answer: copy.where,
  },
  {
    question: "¿Cuál es la visión de Microversos?",
    answer: copy.vision,
  },
] as const;
