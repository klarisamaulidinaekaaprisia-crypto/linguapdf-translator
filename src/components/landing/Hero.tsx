import { ArrowRight, FileText, LayoutGrid, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

function PdfPane({
  label,
  title,
  body,
  meta,
}: {
  label: string;
  title: string;
  body: string;
  meta: string;
}) {
  return (
    <div className="min-w-0">
      <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <FileText className="h-3.5 w-3.5" />
        {label}
      </div>
      <div className="rounded-lg border border-border bg-card p-4 shadow-soft sm:p-5">
        <p className="font-display text-sm font-semibold leading-snug text-foreground sm:text-base">
          {title}
        </p>
        <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">{meta}</p>
        <div className="my-3 h-px bg-border" />
        <p className="text-[11px] leading-relaxed text-foreground/90 sm:text-xs">{body}</p>
        <div className="mt-4 space-y-2">
          <div className="h-1.5 rounded-full bg-muted" />
          <div className="h-1.5 w-5/6 rounded-full bg-muted" />
          <div className="h-1.5 w-4/6 rounded-full bg-muted" />
          <div className="h-1.5 w-3/6 rounded-full bg-muted" />
        </div>
        <div className="mt-5 flex justify-end">
          <span className="text-[10px] text-muted-foreground">Page 1 of 28</span>
        </div>
      </div>
    </div>
  );
}

function FloatingBadge({
  icon,
  label,
  className,
  animation,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
  animation: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`absolute z-10 hidden items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-soft sm:flex ${animation} ${className}`}
    >
      <span className="text-primary">{icon}</span>
      {label}
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      {/* subtle radial tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--color-primary) 6%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AI-Powered Document Translation
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Read Any English PDF
            <br />
            in <span className="text-primary">Bahasa Indonesia</span>.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Translate research papers, technical documents, books, and reports with AI while
            preserving the structure and layout of your original PDF.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild className="shadow-soft">
              <a href="#pricing">
                Translate My PDF
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-6 flex flex-col items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              English
              <ArrowRight className="h-3.5 w-3.5 text-primary" />
              Bahasa Indonesia
            </span>
            <p className="text-xs text-muted-foreground">Fast · Accurate · Privacy-focused</p>
          </div>
        </Reveal>

        {/* Product visual */}
        <Reveal delay={400} className="relative mx-auto mt-14 max-w-5xl md:mt-16">
          <FloatingBadge
            icon={<Sparkles className="h-3.5 w-3.5" />}
            label="AI Translation"
            animation="animate-float"
            className="-left-4 top-16 lg:-left-8"
          />
          <FloatingBadge
            icon={<span className="h-3.5 w-3.5" />}
            label=""
            animation="animate-float-slow"
            className="-right-4 top-28 lg:-right-8"
          >
            <span className="ml-1 h-1 w-12 overflow-hidden rounded-full bg-muted">
              <span className="block h-full w-[98%] rounded-full bg-primary" />
            </span>
            98% processed
          </FloatingBadge>
          <FloatingBadge
            icon={<LayoutGrid className="h-3.5 w-3.5" />}
            label="Layout preserved"
            animation="animate-float-fast"
            className="-left-2 bottom-16 lg:-left-6"
          />

          <div className="overflow-hidden rounded-2xl border border-border bg-card text-left shadow-lift">
            {/* window chrome */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
              </div>
              <div className="mx-auto rounded-md bg-secondary px-3 py-1 text-[11px] text-muted-foreground">
                linguapdf.app/documents
              </div>
              <span className="hidden rounded-md bg-accent px-2 py-1 text-[10px] font-semibold text-accent-foreground sm:inline">
                EN → ID
              </span>
            </div>

            <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-[1fr_auto_1fr] md:gap-5">
              <PdfPane
                label="Original — English"
                title="Machine Learning Fundamentals"
                meta="Chapter 1 · Introduction"
                body="Machine learning is a branch of artificial intelligence that enables computers to learn from data..."
              />
              <div className="flex items-center justify-center md:w-12">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-soft">
                  <ArrowRight className="h-4 w-4 text-primary md:rotate-0" />
                </div>
              </div>
              <PdfPane
                label="Translated — Bahasa Indonesia"
                title="Dasar-Dasar Machine Learning"
                meta="Bab 1 · Pendahuluan"
                body="Machine learning adalah cabang kecerdasan buatan yang memungkinkan komputer belajar dari data..."
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
