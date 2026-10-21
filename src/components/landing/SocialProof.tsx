import {
  BarChart3,
  BookOpen,
  FileCode2,
  FlaskConical,
  GraduationCap,
} from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const CATEGORIES = [
  { icon: FlaskConical, label: "Research Papers" },
  { icon: FileCode2, label: "Technical Documentation" },
  { icon: BookOpen, label: "Academic Books" },
  { icon: BarChart3, label: "Business Reports" },
  { icon: GraduationCap, label: "Study Materials" },
];

export function SocialProof() {
  return (
    <Section id="product" className="border-y border-border bg-card/50 py-14 md:py-16">
      <Reveal>
        <h2 className="text-center font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          Built for documents that matter.
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              <Icon className="h-4 w-4 text-primary" strokeWidth={1.8} />
              {label}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
