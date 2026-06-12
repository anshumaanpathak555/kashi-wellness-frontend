import { Leaf, ShieldCheck, Lock, Heart } from "lucide-react";

const ITEMS = [
  { Icon: Leaf, label: "Premium Quality", note: "Slow-batched" },
  { Icon: Heart, label: "Inspired by Ayurveda", note: "5,000 years of wisdom" },
  { Icon: Lock, label: "Secure Checkout", note: "256-bit encryption" },
  { Icon: ShieldCheck, label: "Customer Satisfaction", note: "30-day promise" },
];

export default function TrustBar() {
  return (
    <section
      data-testid="trust-bar"
      className="border-y border-border bg-cream/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-border">
          {ITEMS.map(({ Icon, label, note }, i) => (
            <div
              key={label}
              data-testid={`trust-item-${i}`}
              className="flex items-center gap-3 md:justify-center px-3 md:px-6"
            >
              <Icon size={22} strokeWidth={1.2} className="text-gold flex-shrink-0" />
              <div>
                <p className="overline text-forest leading-tight">{label}</p>
                <p className="text-[0.7rem] text-muted-foreground mt-0.5">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
