import Link from "next/link";
import { nav, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-moss-deep text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="font-display text-3xl tracking-tight">{site.name}</p>
          <p className="mt-3 text-paper/85">
            Iniciativa salvadoreña fundada por {site.founder}.
          </p>
          <p className="mt-1 text-paper/85">{site.country}</p>
        </div>
        <nav aria-label="Secciones en el pie">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-paper/90 underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
