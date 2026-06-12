import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function Hero() {
  const { addItem } = useCart();
  const combo = PRODUCTS.combo;

  return (
    <section
      data-testid="hero-section"
      className="relative bg-ivory overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-8 animate-fade-up">
              <span className="gold-line-solid w-10" />
              <p className="overline text-gold">A Daily Ayurvedic Ritual</p>
            </div>

            <h1
              data-testid="hero-headline"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-forest leading-[0.95] tracking-tight animate-fade-up delay-1"
            >
              Ancient Ayurvedic
              <br />
              <span className="italic font-display text-gold">Wisdom.</span>
              <br />
              Modern Daily
              <br />
              <span className="italic font-display text-gold">Wellness.</span>
            </h1>

            <p
              data-testid="hero-subheadline"
              className="mt-8 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-up delay-2"
            >
              Crafted with carefully selected Ayurvedic ingredients for those
              who seek a quiet, considered ritual of daily wellness — slow,
              effective, and timeless.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-3">
              <button
                data-testid="hero-shop-collection-btn"
                onClick={() => addItem(combo)}
                className="btn-primary"
              >
                Shop Collection <ArrowRight size={14} />
              </button>
              <a
                href="#story"
                data-testid="hero-learn-story-btn"
                className="btn-outline"
              >
                Learn Our Story
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 animate-fade-up delay-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-cream border-2 border-ivory"
                    style={{
                      backgroundImage: `url(https://i.pravatar.cc/64?img=${
                        i + 10
                      })`,
                      backgroundSize: "cover",
                    }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="text-sm">{s}</span>
                  ))}
                  <span className="ml-2 text-xs text-forest font-semibold">4.9</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  12,400+ rituals begun this season
                </p>
              </div>
            </div>
          </div>

          {/* Hero Product */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] bg-gradient-to-br from-cream via-ivory to-cream overflow-hidden">
              {/* Decorative devanagari */}
              <div className="absolute top-6 left-6 font-display italic text-7xl lg:text-9xl text-gold/15 leading-none select-none">
                कशी
              </div>
              <div className="absolute bottom-6 right-6 overline text-forest/40 rotate-90 origin-bottom-right">
                Veda + Charak · Limited release
              </div>

              <img
                src={combo.image}
                alt="Veda + Charak Combo"
                data-testid="hero-product-image"
                className="absolute inset-0 w-full h-full object-contain p-6 animate-slow-zoom"
              />

              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-ivory border border-gold px-4 py-3 max-w-[180px]">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles size={12} className="text-gold" />
                  <p className="overline text-gold text-[0.6rem]">Hero Duo</p>
                </div>
                <p className="font-serif text-lg text-forest leading-tight">
                  The complete ritual
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <p className="font-serif text-xl text-forest">
                    ₹{combo.price}
                  </p>
                  <p className="text-xs text-muted-foreground line-through">
                    ₹{combo.mrp}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="overline text-muted-foreground">
                Veda + Charak · 100ml × 2
              </p>
              <p className="overline text-gold">Save ₹399</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
