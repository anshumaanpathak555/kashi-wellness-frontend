import { Activity, Bone, Wind, Clock, Sparkle, Leaf } from "lucide-react";

const BENEFITS = [
  { Icon: Bone, title: "Joint & Knee Support", text: "Targeted relief for stiff knees, ankles and heels — the everyday weight-bearing joints." },
  { Icon: Activity, title: "Muscle & Back Comfort", text: "Soothes shoulder, lower back and post-workout muscle tension with a clean herbal warmth." },
  { Icon: Wind, title: "Anti-Inflammatory", text: "Time-honoured botanicals work gently against the slow burn of chronic inflammation." },
  { Icon: Clock, title: "Fast Acting Comfort", text: "Veda begins to cool and calm in minutes — discreet enough for any moment of the day." },
  { Icon: Sparkle, title: "Deep Penetrating Relief", text: "Charak's warming oils travel deeper, ideal for evening rituals and long-held tension." },
  { Icon: Leaf, title: "Naturally Crafted", text: "No mineral oils, no harsh synthetics, no shortcuts. Just ingredients you can pronounce." },
];

export default function Benefits() {
  return (
    <section
      data-testid="benefits-section"
      className="py-24 lg:py-32 bg-ivory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="overline text-gold mb-4">Designed for daily life</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.05]">
            Quiet benefits, <span className="italic font-display">felt over time.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {BENEFITS.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              data-testid={`benefit-${i}`}
              className="bg-ivory p-8 lg:p-10 group hover:bg-cream/50"
            >
              <div className="w-12 h-12 border border-gold flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <Icon size={20} strokeWidth={1.2} className="text-gold group-hover:text-forest" />
              </div>
              <h3 className="font-serif text-2xl text-forest mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
