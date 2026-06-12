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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-8 animate-fade-up">
              <span className="gold-line-solid w-10" />
              <p className="overline text-gold">A Daily Ayurvedic Ritual</p>
            </div>

            <h1
              data-testid="hero-headline"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.02] tracking-tight animate-fade-up delay-1"
            >
              Ancient Ayurveda.
              <br />
              <span className="italic font-display text-gold">Modern Wellness.</span>
            </h1>

            <p
              data-testid="hero-subheadline"
              className="mt-7 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-up delay-2"
            >
              Premium Ayurvedic formulations inspired by centuries of wellness
              traditions from the sacred city of Kashi — crafted for the way
              modern Indian life unfolds.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4 animate-fade-up delay-3">
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
                Our Story
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-6 max-w-lg animate-fade-up delay-4">
              <div>
                <p className="font-serif text-3xl text-forest">5,000+</p>
                <p className="overline text-muted-foreground mt-1 text-[0.6rem]">Happy Customers</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-forest">100%</p>
                <p className="overline text-muted-foreground mt-1 text-[0.6rem]">Natural Ingredients</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-forest">GMP</p>
                <p className="overline text-muted-foreground mt-1 text-[0.6rem]">Certified Quality</p>
              </div>
            </div>
          </div>

          {/* Hero Product */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] bg-gradient-to-br from-cream via-ivory to-cream overflow-hidden">
              <img
                src={combo.image}
                alt="Veda + Charak Combo"
                data-testid="hero-product-image"
                className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6 animate-slow-zoom"
              />

              {/* Floating badge */}
              <div className="absolute top-5 right-5 bg-ivory border border-gold px-3 py-2.5 max-w-[170px]">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles size={11} className="text-gold" />
                  <p className="overline text-gold text-[0.55rem]">Best Value</p>
                </div>
                <p className="font-serif text-base text-forest leading-tight">
                  The complete ritual
                </p>
                <div className="mt-1.5 flex items-baseline gap-2">
                  <p className="font-serif text-lg text-forest">₹{combo.price}</p>
                  <p className="text-[0.7rem] text-muted-foreground line-through">₹{combo.mrp}</p>
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
