import { CheckCircle2, FileText, FolderOpen, Globe, Plus, Settings } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const SIDEBAR_ITEMS = [
  { icon: FolderOpen, label: "Dashboard", active: false },
  { icon: FileText, label: "Documents", active: true },
  { icon: Globe, label: "Glossary", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function DashboardPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Product"
        title="Manage every translation in one place."
        description="Upload, track progress, and revisit translated documents from a single workspace."
      />

      <Reveal delay={120} className="mt-12">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
          {/* window chrome */}
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>
            <div className="mx-auto rounded-md bg-secondary px-3 py-1 text-[11px] text-muted-foreground">
              linguapdf.app
            </div>
            <span className="w-12" aria-hidden />
          </div>

          <div className="grid sm:grid-cols-[180px_1fr]">
            {/* sidebar */}
            <aside className="hidden flex-col gap-1 border-r border-border bg-secondary/40 p-3 sm:flex">
              {SIDEBAR_ITEMS.map(({ icon: Icon, label, active }) => (
                <div
                  key={label}
                  className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium ${
                    active
                      ? "bg-background text-foreground shadow-soft"
                      : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                  {label}
                </div>
              ))}
            </aside>

            {/* main */}
            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                  Your Documents
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                  <Plus className="h-3.5 w-3.5" />
                  Translate PDF
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent">
                    <FileText className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">
                      Machine Learning Fundamentals.pdf
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      English → Indonesian · 28 pages
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                    Completed
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent">
                    <FileText className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">
                      Deep Learning Research.pdf
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      English → Indonesian · 42 pages
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-1.5 w-full max-w-48 overflow-hidden rounded-full bg-muted">
                        <div className="progress-shimmer h-full w-[72%] rounded-full bg-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        Processing 72%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
