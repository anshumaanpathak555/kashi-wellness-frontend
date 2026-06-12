import { Award, Sprout, FlaskConical, BookOpen } from "lucide-react";

const PILLARS = [
  { Icon: Award, title: "Uncompromising Quality", text: "Every batch is tested for purity, potency and heavy metals before it ever leaves Kashi." },
  { Icon: Sprout, title: "Ethically Sourced", text: "Botanicals are sourced directly from small farmer collectives in the Himalayan and Vindhya regions." },
  { Icon: FlaskConical, title: "GMP Manufacturing", text: "Produced in a GMP-certified Ayurvedic facility under the watch of registered Ayurvedic practitioners." },
  { Icon: BookOpen, title: "An Honest Philosophy", text: "We only make what we would gladly use ourselves, every morning, for the rest of our lives." },
];

export default function TrustSection() {
  return (
    <section
      data-testid="trust-section"
      className="py-24 lg:py-32 bg-forest text-ivory relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="overline text-gold mb-4">Why Customers Trust Us</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Built on the slow, hard <span className="italic font-display text-gold">work</span> behind every bottle.
            </h2>
            <p className="mt-6 text-ivory/70 max-w-md leading-relaxed">
              The label is small. What's behind it is not. From farm to finished
              ritual, every step is intentional, traceable and human.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            {PILLARS.map(({ Icon, title, text }, i) => (
              <div
                key={title}
                data-testid={`trust-pillar-${i}`}
                className="border-l border-gold/40 pl-6"
              >
                <Icon size={22} strokeWidth={1.2} className="text-gold mb-4" />
                <h3 className="font-serif text-2xl mb-3">{title}</h3>
                <p className="text-sm text-ivory/70 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
