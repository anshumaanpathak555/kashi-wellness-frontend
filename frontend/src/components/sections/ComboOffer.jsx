import { Check, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/context/CartContext";

const POINTS = [
  "Two complete daily rituals — morning Veda, evening Charak",
  "Save ₹399 vs buying separately (29% off)",
  "Premium gift-ready packaging, ribbon-tied",
  "Complimentary express shipping across India",
];

export default function ComboOffer() {
  const { addItem } = useCart();
  const combo = PRODUCTS.combo;

  return (
    <section
      id="combo-offer"
      data-testid="combo-offer-section"
      className="py-24 lg:py-32 bg-forest text-ivory relative overflow-hidden"
    >
      <div className="absolute top-10 right-10 font-display text-9xl lg:text-[14rem] text-gold/10 select-none pointer-events-none italic">
        Duo
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Product */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-square bg-gradient-to-br from-cream/10 via-ivory/5 to-cream/10 overflow-hidden relative">
              <img
                src={combo.image}
                alt="Veda + Charak Combo"
                data-testid="combo-offer-image"
                className="w-full h-full object-contain p-6 animate-float"
              />
              <div className="absolute top-6 left-6 bg-gold text-forest overline px-4 py-2">
                Save 29%
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6">
            <p className="overline text-gold mb-6">The Combo Offer · Most Popular</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              The complete <br />
              <span className="italic font-display text-gold">Kashi ritual.</span>
            </h2>
            <p className="mt-6 text-ivory/70 max-w-md leading-relaxed">
              Begin your day with Veda's fast, cooling clarity. Close it with
              Charak's deep, warming repair. Two formulas. One transformation.
            </p>

            <ul className="mt-10 space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full border border-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-gold" strokeWidth={2.5} />
                  </span>
                  <span className="text-ivory/85">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-end gap-6">
              <div>
                <p className="overline text-ivory/50 mb-1">Combo Price</p>
                <div className="flex items-baseline gap-3">
                  <p className="font-serif text-5xl text-gold">₹{combo.price}</p>
                  <p className="text-lg text-ivory/40 line-through">₹{combo.mrp}</p>
                </div>
              </div>
              <button
                data-testid="combo-offer-cta"
                onClick={() => addItem(combo)}
                className="btn-gold"
              >
                Add Combo to Ritual <ArrowRight size={14} />
              </button>
            </div>

            <p className="mt-6 overline text-ivory/40">
              In stock · Ships within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
