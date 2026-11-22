import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { HeroGrove, SpeciesArt } from "@/components/mushrooms";
import { copy, faq, pillars, site, species } from "@/lib/content";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

const toneClass = {
  gold: "bg-[#f3e4b8]",
  clay: "bg-[#ead9ce]",
  mane: "bg-mane",
} as const;

export default function Home() {
  return (
    <main id="contenido">
      <JsonLd />
      <section id="inicio" className="scroll-mt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:grid-cols-12 md:py-16 lg:py-20">
          <div className="md:col-span-7">
            <p className="text-sm font-bold tracking-[0.16em] text-clay uppercase">
              {site.country}
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] font-medium tracking-tight text-ink sm:text-6xl lg:text-7xl">
              {site.name}
            </h1>
            <p className="mt-5 max-w-xl font-display text-2xl leading-snug text-moss italic sm:text-3xl">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#especies"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-moss px-5 font-semibold text-paper hover:bg-moss-deep"
              >
                Conocer las especies
              </Link>
              <Link
                href="/#donde"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-moss px-5 font-semibold text-moss hover:bg-moss/5"
              >
                Dónde encontrarnos
              </Link>
            </div>
          </div>
          <HeroGrove className="md:col-span-5" />
        </div>
      </section>

      <section id="que-es" className="scroll-mt-44 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-bold tracking-[0.16em] text-clay uppercase">
            La iniciativa
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink md:text-5xl">
            Qué es Microversos
          </h2>
          <p className="mt-8 max-w-3xl border-l-4 border-gold pl-5 font-display text-3xl leading-snug text-ink italic md:text-4xl">
            {copy.definition}
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-line bg-spore p-6">
              <h3 className="font-display text-2xl text-ink">Misión</h3>
              <p className="mt-3 text-ink-soft">{copy.mission}</p>
            </article>
            <article className="rounded-3xl border border-line bg-spore p-6">
              <h3 className="font-display text-2xl text-ink">Visión</h3>
              <p className="mt-3 text-ink-soft">{copy.vision}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="pilares" className="scroll-mt-44 bg-paper-deep/70">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-bold tracking-[0.16em] text-clay uppercase">
            Cuatro pilares
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-tight text-ink md:text-5xl">
            Producción, investigación, educación y comercialización
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">{copy.pillarsIntro}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-3xl border border-line bg-paper p-6"
              >
                <p className="font-display text-sm tracking-[0.14em] text-gold" aria-hidden="true">
                  {pillar.number}
                </p>
                <h3 className="mt-2 font-display text-3xl text-ink">{pillar.title}</h3>
                <p className="mt-3 text-ink-soft">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="especies" className="scroll-mt-44">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-bold tracking-[0.16em] text-clay uppercase">
            Con qué trabaja
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink md:text-5xl">
            Especies
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">{copy.speciesIntro}</p>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {species.map((item) => (
              <li key={item.id}>
                <article
                  id={item.id}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-spore"
                >
                  <div className={`px-4 pt-4 ${toneClass[item.tone]}`}>
                    <SpeciesArt tone={item.tone} className="mx-auto h-36 w-full" />
                  </div>
                  <h3 className="px-5 py-5 font-display text-2xl text-ink">{item.name}</h3>
                </article>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-3xl border border-line bg-spore p-6">
            <h3 className="font-display text-2xl text-ink">Kits y semilla en grano</h3>
            <p className="mt-3 text-ink-soft">{copy.products}</p>
            <p className="mt-2 text-ink-soft">{copy.spawnNote}</p>
          </div>
        </div>
      </section>

      <section id="donde" className="scroll-mt-44 bg-moss text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <p className="text-sm font-bold tracking-[0.16em] text-[#e4c36a] uppercase">
              Venta en persona
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
              Dónde encontrarnos
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-paper">{copy.where}</p>
            <p className="mt-3 max-w-xl text-paper/85">{copy.whereDetail}</p>
          </div>
          <div className="flex items-end md:col-span-5">
            <p className="font-display text-5xl leading-none text-paper/90 italic md:text-6xl">
              {site.country}
            </p>
          </div>
        </div>
      </section>

      <section id="preguntas" className="scroll-mt-44">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-bold tracking-[0.16em] text-clay uppercase">
            Preguntas
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink md:text-5xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faq.map((item) => (
              <article key={item.question} className="py-6">
                <h3 className="font-display text-2xl text-ink md:text-3xl">{item.question}</h3>
                <p className="mt-3 max-w-3xl text-lg text-ink-soft">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
