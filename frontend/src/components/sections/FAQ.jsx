import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How quickly will my order ship?",
    a: "All orders are dispatched within 24 hours from our Varanasi atelier. India delivery is typically 2–5 business days. Orders above ₹999 ship free.",
  },
  {
    q: "How do I use Veda and Charak?",
    a: "Roll Veda on the affected area in the morning or after activity for fast cooling relief. Use Charak in the evening or before sleep for deeper, warming recovery. Massage gently for 60 seconds.",
  },
  {
    q: "Are the formulations safe for daily use?",
    a: "Yes. Both formulations are crafted from food-grade Ayurvedic botanicals and carrier oils, and have been formulated for safe daily application. Avoid contact with eyes and broken skin.",
  },
  {
    q: "What ingredients are inside?",
    a: "A carefully curated blend including Turmeric (Haridra), Eucalyptus (Nilgiri), Peppermint (Pudina), Ashwagandha, Camphor and cold-pressed Sesame Oil. No mineral oil, no parabens, no synthetic fragrance.",
  },
  {
    q: "What is your return policy?",
    a: "If you are not feeling the difference within 30 days, write to us. We will issue a full refund — no quizzes, no friction. We believe in the ritual.",
  },
  {
    q: "Do you ship internationally?",
    a: "International shipping is currently in soft launch to select countries. Please write to care@kashiwellness.in for a personalised order.",
  },
  {
    q: "Is it suitable for sensitive skin?",
    a: "Most users with sensitive skin tolerate the formulations very well, but as with any topical wellness product, we recommend a patch test 24 hours before regular use.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-24 lg:py-32 bg-ivory"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="overline text-gold mb-4">Considered Questions</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.05]">
            Things people <span className="italic font-display">often ask.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border"
              data-testid={`faq-item-${i}`}
            >
              <AccordionTrigger className="text-left font-serif text-lg sm:text-xl text-forest py-6 hover:no-underline hover:text-gold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have a question?</p>
          <a
            href="mailto:care@kashiwellness.in"
            data-testid="faq-contact-link"
            className="overline text-gold hover:text-forest"
          >
            Write to care@kashiwellness.in →
          </a>
        </div>
      </div>
    </section>
  );
}
