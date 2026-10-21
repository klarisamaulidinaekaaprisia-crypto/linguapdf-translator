import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const PLANS = [
  {
    name: "Free",
    price: "Rp 0",
    period: null,
    features: [
      "3 documents/month",
      "Up to 10 pages/document",
      "English → Indonesian",
      "Standard processing",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "Rp 49.000",
    period: "/ month",
    features: [
      "30 documents/month",
      "Up to 100 pages/document",
      "Advanced AI translation",
      "OCR",
      "Table translation",
      "Custom glossary",
      "Priority processing",
    ],
    cta: "Start Pro",
    highlighted: true,
  },
  {
    name: "Research",
    price: "Rp 99.000",
    period: "/ month",
    features: [
      "100 documents/month",
      "Up to 300 pages/document",
      "Advanced OCR",
      "Advanced glossary",
      "Priority processing",
      "Large document support",
    ],
    cta: "Choose Research",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple pricing for serious reading."
        description="Start free, upgrade when your reading list grows."
      />

      <div className="mt-12 grid items-stretch gap-4 md:grid-cols-3 md:gap-6">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 100} className="h-full">
            <div
              className={cn(
                "relative flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 md:p-8",
                plan.highlighted
                  ? "border-primary/40 shadow-lift"
                  : "border-border shadow-soft hover:-translate-y-1 hover:shadow-lift"
              )}
            >
              {plan.highlighted ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              ) : null}

              <h3 className="font-display text-base font-semibold text-foreground">
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-3xl font-semibold tracking-tight text-foreground">
                  {plan.price}
                </span>
                {plan.period ? (
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                ) : null}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 w-full"
                size="lg"
                variant={plan.highlighted ? "default" : "outline"}
                asChild
              >
                <a href="#faq">{plan.cta}</a>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
