import { Languages } from "lucide-react";

const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API", "Help Center"],
  },
  {
    title: "Company",
    links: ["About", "Privacy", "Terms"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <a href="/" className="flex items-center gap-2.5" aria-label="LinguaPDF home">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Languages className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <span className="font-display text-base font-semibold tracking-tight text-foreground">
                LinguaPDF
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              AI-powered document translation for everyone.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 LinguaPDF. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">English → Bahasa Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
