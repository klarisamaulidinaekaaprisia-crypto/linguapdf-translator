import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    question: "Can LinguaPDF translate scanned PDFs?",
    answer:
      "Yes. Pro and Research plans include OCR support, so scanned pages are recognized as text before translation. Recognition quality depends on the scan itself — clear, well-aligned scans give the best results.",
  },
  {
    question: "Will the PDF layout stay the same?",
    answer:
      "LinguaPDF detects headings, paragraphs, columns, and tables, then rebuilds the document around them. Layouts are preserved closely, though very complex pages may occasionally need small manual adjustments.",
  },
  {
    question: "Can it translate tables?",
    answer:
      "Yes. Tables are detected during structure analysis, and the text inside each cell is translated while the table itself keeps its shape and position.",
  },
  {
    question: "What languages are supported?",
    answer:
      "LinguaPDF currently focuses on translating English documents into Bahasa Indonesia. Focusing on one language pair is what keeps terminology consistent and quality high.",
  },
  {
    question: "How accurate is the translation?",
    answer:
      "Translation is context-aware and keeps technical terminology consistent across the document, which suits academic and technical material well. As with any translation, we recommend reviewing critical documents before important use.",
  },
  {
    question: "Are my documents stored?",
    answer:
      "Documents are kept only so you can access your translation history, and you can delete them at any time. They are never used to train our translation models.",
  },
  {
    question: "How long does translation take?",
    answer:
      "Most documents finish within a few minutes. Processing time depends on document length and complexity, and paid plans receive priority processing.",
  },
  {
    question: "Can I create my own terminology glossary?",
    answer:
      "Yes. Pro and Research plans include a custom glossary where you define terms that should stay consistent — brand names, technical vocabulary, or preferred translations.",
  },
];

export function Faq() {
  return (
    <Section id="faq" className="bg-card/50">
      <SectionHeading eyebrow="FAQ" title="Frequently asked questions." />
      <Reveal delay={120} className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
