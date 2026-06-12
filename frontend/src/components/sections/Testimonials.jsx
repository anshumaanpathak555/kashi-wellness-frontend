import { Quote, Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Anjali Mehta",
    location: "Mumbai",
    text: "Within ten days my morning shoulder stiffness was just… gone. I have not reached for a pain patch in weeks.",
    product: "Veda + Charak Combo",
  },
  {
    name: "Rohit Sharma",
    location: "Bangalore",
    text: "I'm an early-morning runner. Veda is my warm-up and Charak is my recovery. Two bottles I cannot now imagine living without.",
    product: "Combo",
  },
  {
    name: "Meera Krishnan",
    location: "Pune",
    text: "Smells like my grandmother's home in Banaras. Works like nothing I have tried in years. Worth every rupee.",
    product: "Charak",
  },
  {
    name: "Vikram Jain",
    location: "Delhi",
    text: "I wanted to dislike it because I was sceptical. Now my whole family uses it. Quietly excellent.",
    product: "Veda",
  },
  {
    name: "Priya Iyer",
    location: "Chennai",
    text: "I'm a software engineer and my neck pays the price every evening. Charak before bed has changed my sleep entirely.",
    product: "Charak",
  },
  {
    name: "Arjun Kapoor",
    location: "Jaipur",
    text: "My father is 68 and stubborn about Ayurveda. He now keeps Veda on his bedside table. That tells you everything.",
    product: "Veda",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    text: "Beautiful packaging, honest ingredients, real results. The combo feels like a gift I gave myself.",
    product: "Veda + Charak Combo",
  },
];

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="py-24 lg:py-32 bg-ivory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <p className="overline text-gold mb-4">Held by our community</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest leading-[1.1] max-w-xl">
              Stories from the homes that <span className="italic font-display">trust us.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-gold">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="overline text-forest">4.9 · 12,400+ rituals</p>
          </div>
        </div>

        {/* Review cards — 7 cards in a masonry-like layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              data-testid={`review-card-${i}`}
              className="bg-cream/40 border border-border p-6 lg:p-8 flex flex-col"
            >
              <Quote size={20} className="text-gold mb-4" />
              <div className="flex items-center gap-1 text-gold mb-3">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} size={11} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-serif italic text-base lg:text-lg text-forest leading-relaxed flex-1">
                "{r.text}"
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-medium text-forest">{r.name}</p>
                <p className="text-xs text-muted-foreground">
                  {r.location} · {r.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
