import { useRef, useState } from "react";
import { ChevronsLeftRight, FileText, Languages } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

function DocumentPage({ lang }: { lang: "en" | "id" }) {
  const en = lang === "en";
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          {en ? (
            <FileText className="h-3.5 w-3.5" />
          ) : (
            <Languages className="h-3.5 w-3.5" />
          )}
          {en ? "Machine Learning Fundamentals.pdf" : "Dasar-Dasar Machine Learning.pdf"}
        </div>
        <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground">
          {en ? "EN" : "ID"}
        </span>
      </div>
      <div className="my-4 h-px bg-border" />
      <div className="min-h-0 flex-1">
        <h3 className="font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
          {en ? "3.2 Supervised Learning" : "3.2 Pembelajaran Terbimbing"}
        </h3>
        <p className="mt-3 text-xs leading-relaxed text-foreground/90 sm:text-[13px]">
          {en
            ? "Supervised learning is the most widely applied paradigm in machine learning. In this setting, the model is trained on a labeled dataset, where each input is paired with the correct output. The objective is to learn a mapping function that generalizes to unseen data, minimizing prediction error across the validation set."
            : "Pembelajaran terbimbing (supervised learning) adalah paradigma yang paling banyak diterapkan dalam machine learning. Dalam pengaturan ini, model dilatih menggunakan dataset berlabel, di mana setiap input dipasangkan dengan output yang benar. Tujuannya adalah mempelajari fungsi pemetaan yang dapat digeneralisasi ke data yang belum pernah dilihat, meminimalkan kesalahan prediksi pada set validasi."}
        </p>
        <div className="mt-4 space-y-2">
          <div className="h-1.5 rounded-full bg-muted" />
          <div className="h-1.5 w-5/6 rounded-full bg-muted" />
          <div className="h-1.5 w-4/6 rounded-full bg-muted" />
        </div>
        <div className="mt-4 rounded-lg border border-border bg-secondary/60 p-3">
          <p className="text-[11px] italic leading-relaxed text-muted-foreground">
            {en
              ? "Figure 3.1 — Model performance across training epochs, measured on the held-out validation set."
              : "Gambar 3.1 — Performa model di seluruh epoch pelatihan, diukur pada set validasi."}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[10px] text-muted-foreground">
        <span>Machine Learning — Chapter 3</span>
        <span>{en ? "Page 12" : "Halaman 12"}</span>
      </div>
    </div>
  );
}

export function Comparison() {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(55);

  const update = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(94, Math.max(6, next)));
  };

  return (
    <Section className="bg-card/50">
      <SectionHeading
        eyebrow="Before & After"
        title="The same document. Your language."
        description="Drag the divider to compare the original page with its translation."
      />

      <Reveal delay={120} className="mt-12">
        {/* Mobile: stacked */}
        <div className="space-y-4 md:hidden">
          <div className="min-h-[340px]">
            <DocumentPage lang="en" />
          </div>
          <div className="min-h-[340px]">
            <DocumentPage lang="id" />
          </div>
        </div>

        {/* Desktop: slider */}
        <div className="relative hidden md:block">
          <span className="absolute -top-3 right-0 z-10 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
            Page 12 of 28
          </span>
          <div
            ref={ref}
            className="relative h-[460px] cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-border bg-card shadow-lift"
            onPointerDown={(e) => {
              dragging.current = true;
              ref.current?.setPointerCapture(e.pointerId);
              update(e.clientX);
            }}
            onPointerMove={(e) => {
              if (dragging.current) update(e.clientX);
            }}
            onPointerUp={() => {
              dragging.current = false;
            }}
          >
            <div className="absolute inset-0">
              <DocumentPage lang="en" />
            </div>
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <DocumentPage lang="id" />
            </div>

            {/* divider */}
            <div
              className="absolute inset-y-0 z-10 w-px bg-primary/50"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card shadow-soft">
                <ChevronsLeftRight className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-between text-xs font-medium text-muted-foreground">
            <span>Original English</span>
            <span>Bahasa Indonesia</span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
