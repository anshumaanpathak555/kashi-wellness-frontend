import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { PRODUCT_LINKS } from "@/lib/productLinks";

export default function Hero() {
  const combo = PRODUCTS.combo;

  return (
    <section
      data-testid="hero-section"
      className="relative bg-ivory overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-10 animate-fade-up">
              <span className="gold-line-solid w-12" />
              <p className="overline text-gold">A Daily Ayurvedic Ritual</p>
            </div>

            <h1
              data-testid="hero-headline"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-forest leading-[0.98] tracking-tight animate-fade-up delay-1"
            >
              Ancient Ayurveda.
              <br />
              <span className="italic font-display text-forest/80">Modern Wellness.</span>
            </h1>

            <p
              data-testid="hero-subheadline"
              className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-up delay-2"
            >
              Premium Ayurvedic formulations, inspired by centuries of wellness
              traditions from the sacred city of Kashi — crafted for the way
              modern Indian life unfolds.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-3">
              <a
                href={PRODUCT_LINKS.combo}
                data-testid="hero-shop-collection-btn"
                className="btn-primary"
              >
                Shop Collection <ArrowRight size={14} />
              </a>
              <a
                href="#story"
                data-testid="hero-learn-story-btn"
                className="btn-outline"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Hero Product — clean, no overlays */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/5] lg:aspect-[5/6] bg-cream/40 overflow-hidden">
              <img
                src={combo.image}
                alt="Veda and Charak — A Daily Ayurvedic Ritual"
                data-testid="hero-product-image"
                className="absolute inset-0 w-full h-full object-contain p-6 sm:p-10 animate-slow-zoom"
              />
            </div>
          </div>
        </div>

        {/* Quiet brand pillars row */}
        <div className="mt-20 lg:mt-24 pt-10 border-t border-border grid grid-cols-3 gap-6 lg:gap-12 max-w-4xl animate-fade-up delay-4">
          <div>
            <p className="font-serif text-3xl lg:text-4xl text-forest leading-none">
              5,000<span className="text-gold">+</span>
            </p>
            <p className="overline text-muted-foreground mt-3 text-[0.6rem]">
              Happy Customers
            </p>
          </div>
          <div className="lg:border-l lg:border-border lg:pl-12">
            <p className="font-serif text-3xl lg:text-4xl text-forest leading-none">
              100<span className="text-gold">%</span>
            </p>
            <p className="overline text-muted-foreground mt-3 text-[0.6rem]">
              Natural Ingredients
            </p>
          </div>
          <div className="lg:border-l lg:border-border lg:pl-12">
            <p className="font-serif text-3xl lg:text-4xl text-forest leading-none">
              GMP
            </p>
            <p className="overline text-muted-foreground mt-3 text-[0.6rem]">
              Certified Quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
