import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center shadow-lift md:py-24"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-primary) 7%, var(--color-card)), var(--color-card) 75%)",
            }}
          >
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Stop translating documents manually.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Upload your first PDF and experience a faster way to read technical and academic
                content in Bahasa Indonesia.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" asChild className="shadow-soft">
                  <a href="#pricing">
                    Translate My First PDF
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">No credit card required.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
