import {
  History,
  LayoutList,
  NotebookPen,
  ScanLine,
  Table2,
  BookMarked,
  BookOpen,
  ListChecks,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    icon: LayoutList,
    title: "Preserve Structure",
    body: "Keep paragraphs, headings, and document hierarchy organized.",
  },
  {
    icon: BookOpen,
    title: "Smart Context",
    body: "AI understands surrounding context before translating.",
  },
  {
    icon: BookMarked,
    title: "Technical Terminology",
    body: "Maintain consistent terminology across the entire document.",
  },
  {
    icon: ScanLine,
    title: "OCR Support",
    body: "Translate scanned PDFs using OCR.",
  },
  {
    icon: Table2,
    title: "Table Translation",
    body: "Detect and translate text inside tables.",
  },
  {
    icon: ListChecks,
    title: "Progress Tracking",
    body: "See exactly how your document is being processed.",
  },
  {
    icon: History,
    title: "Translation History",
    body: "Access previously translated documents.",
  },
  {
    icon: NotebookPen,
    title: "Custom Glossary",
    body: "Define terminology that should remain consistent.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <SectionHeading eyebrow="Features" title="More than translation." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={(i % 4) * 70}>
            <div className="group h-full rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent transition-colors group-hover:bg-primary/10">
                <Icon className="h-5 w-5 text-accent-foreground" strokeWidth={1.8} />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
