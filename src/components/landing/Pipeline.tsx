import {
  ArrowDown,
  BadgeCheck,
  Blocks,
  FileOutput,
  FileText,
  Languages,
  LayoutTemplate,
  ListTree,
  ScanSearch,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const PIPELINE = [
  { icon: FileText, label: "PDF" },
  { icon: ScanSearch, label: "Document Parser" },
  { icon: ListTree, label: "Structure Detection" },
  { icon: Blocks, label: "Semantic Chunking" },
  { icon: Languages, label: "AI Translation" },
  { icon: BadgeCheck, label: "Quality Validation" },
  { icon: LayoutTemplate, label: "Layout Reconstruction" },
  { icon: FileOutput, label: "Translated PDF" },
];

const HIGHLIGHTS = [
  "Structure-aware — paragraphs, tables, and headings are mapped before translation begins.",
  "Terminology-consistent — key technical terms keep the same translation on every page.",
  "Layout-preserving — the final PDF mirrors the original document's formatting.",
];

export function Pipeline() {
  return (
    <Section>
      <SectionHeading
        eyebrow="AI Pipeline"
        title="Built for documents, not just text."
      />
      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[420px_1fr] lg:gap-16">
        <Reveal>
          <ol className="mx-auto flex max-w-sm flex-col items-center">
            {PIPELINE.map(({ icon: Icon, label }, i) => (
              <li key={label} className="flex w-full flex-col items-center">
                <div className="flex w-full items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-soft">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent">
                    <Icon className="h-4 w-4 text-accent-foreground" strokeWidth={1.8} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
                {i < PIPELINE.length - 1 ? (
                  <ArrowDown className="my-1.5 h-4 w-4 text-muted-foreground/60" />
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft lg:mt-4">
            <p className="text-base leading-relaxed text-muted-foreground">
              LinguaPDF analyzes the structure of your document before translating it, helping
              preserve meaning, terminology, and layout throughout the process.
            </p>
            <ul className="mt-6 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-foreground/90">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
