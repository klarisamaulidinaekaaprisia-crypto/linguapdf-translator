import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const PROBLEMS = [
  {
    number: "01",
    title: "Long Documents",
    body: "Manually translating dozens or hundreds of pages takes hours.",
  },
  {
    number: "02",
    title: "Lost Formatting",
    body: "Copying text into a translator often destroys paragraphs, tables, and document structure.",
  },
  {
    number: "03",
    title: "Technical Language",
    body: "Academic and technical documents require context-aware translation, not word-for-word conversion.",
  },
];

export function Problem() {
  return (
    <Section>
      <SectionHeading title="Reading shouldn't stop at a language barrier." />
      <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
        {PROBLEMS.map((problem, i) => (
          <Reveal key={problem.number} delay={i * 100}>
            <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft md:p-8">
              <span className="font-display text-sm font-semibold text-primary">
                {problem.number}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{problem.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
