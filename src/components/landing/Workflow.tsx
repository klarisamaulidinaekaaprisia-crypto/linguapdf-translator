import {
  Download,
  Languages,
  LayoutTemplate,
  ScanSearch,
  Upload,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    number: "01",
    icon: Upload,
    name: "Upload",
    body: "Add your English PDF — papers, reports, or books.",
  },
  {
    number: "02",
    icon: ScanSearch,
    name: "Analyze",
    body: "The document structure is detected and mapped.",
  },
  {
    number: "03",
    icon: Languages,
    name: "Translate",
    body: "AI translates with full document context.",
  },
  {
    number: "04",
    icon: LayoutTemplate,
    name: "Rebuild",
    body: "Paragraphs, tables, and layout are reconstructed.",
  },
  {
    number: "05",
    icon: Download,
    name: "Download",
    body: "Receive your translated PDF, ready to read.",
  },
];

export function Workflow() {
  return (
    <Section id="how-it-works" className="bg-card/50">
      <SectionHeading
        eyebrow="How it works"
        title="From English PDF to Indonesian PDF."
      />
      <div className="relative mt-14">
        {/* connector line (desktop) */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block"
        />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 90} className="relative">
              <li className="flex gap-4 lg:flex-col lg:gap-0">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card shadow-soft">
                  <step.icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {step.number}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-foreground">
                    {step.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
