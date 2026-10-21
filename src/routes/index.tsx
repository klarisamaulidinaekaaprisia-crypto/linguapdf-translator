import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { Problem } from "@/components/landing/Problem";
import { Workflow } from "@/components/landing/Workflow";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { Features } from "@/components/landing/Features";
import { Comparison } from "@/components/landing/Comparison";
import { Pipeline } from "@/components/landing/Pipeline";
import { Privacy } from "@/components/landing/Privacy";
import { Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "LinguaPDF — Read Any English PDF in Bahasa Indonesia",
      },
      {
        name: "description",
        content:
          "Translate research papers, technical documents, books, and reports from English to Bahasa Indonesia with AI while preserving structure and layout.",
      },
      {
        property: "og:title",
        content: "LinguaPDF — Read Any English PDF in Bahasa Indonesia",
      },
      {
        property: "og:description",
        content:
          "AI-powered PDF translation that preserves structure, tables, and layout. English → Bahasa Indonesia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Workflow />
        <DashboardPreview />
        <Features />
        <Comparison />
        <Pipeline />
        <Privacy />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
