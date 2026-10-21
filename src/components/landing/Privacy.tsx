import { Lock, ShieldCheck, TimerReset } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Secure Processing",
    body: "Documents are processed over encrypted connections.",
  },
  {
    icon: Lock,
    title: "Private Documents",
    body: "Your documents are never used to train our translation models.",
  },
  {
    icon: TimerReset,
    title: "Controlled Data Retention",
    body: "You decide how long translated documents stay in your history.",
  },
];

export function Privacy() {
  return (
    <Section className="border-y border-border bg-card/50">
      <SectionHeading
        eyebrow="Privacy"
        title="Your documents stay yours."
        description="Your documents are processed securely and are never used to train our translation models."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
        {POINTS.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 100}>
            <div className="h-full rounded-xl border border-border bg-card p-6 text-center md:text-left">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-accent md:mx-0">
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
