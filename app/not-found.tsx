import Link from "next/link";

export default function NotFound() {
  return (
    <main id="contenido" className="flex flex-1 items-center">
      <div className="mx-auto max-w-xl px-5 py-24">
        <p className="text-sm font-bold tracking-[0.16em] text-clay uppercase">
          Microversos
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-ink md:text-5xl">
          No encontramos esta página
        </h1>
        <p className="mt-4 text-lg text-ink-soft">
          El enlace no corresponde a una página de este sitio.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-moss px-5 font-semibold text-paper hover:bg-moss-deep"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
