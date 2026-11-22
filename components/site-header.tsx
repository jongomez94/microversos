import Link from "next/link";
import { Mark } from "@/components/mushrooms";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-3 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3 self-start">
          <Mark className="size-10 shrink-0" />
          <span className="font-display text-xl tracking-tight text-ink">
            {site.name}
          </span>
        </Link>
        <nav aria-label="Secciones">
          <ul className="flex flex-wrap gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold text-ink-soft hover:bg-paper-deep hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
