import { Plus, Star } from "lucide-react";
import { PRODUCT_LIST } from "@/lib/products";
import { getProductLink } from "@/lib/productLinks";

export default function FeaturedProducts() {
  return (
    <section
      id="products"
      data-testid="featured-products"
      className="py-24 lg:py-32 bg-cream/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <p className="overline text-gold mb-4">The Collection</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.05] max-w-2xl">
              Three rituals.
              <br />
              <span className="italic font-display">One quiet revolution.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Small batch. Plant-led. Built around the way real life actually
            unfolds — morning to night, season to season.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCT_LIST.map((p, idx) => {
            const isCombo = p.id === "combo";
            const shopifyUrl = getProductLink(p.id);
            return (
              <article
                key={p.id}
                data-testid={`product-card-${p.id}`}
                onClick={() => { window.location.href = shopifyUrl; }}
                className={`group relative bg-ivory border ${
                  isCombo ? "border-gold" : "border-border"
                } flex flex-col cursor-pointer`}
              >
                {isCombo && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-forest overline px-4 py-1.5 z-10 whitespace-nowrap">
                    Most Popular · Best Value
                  </div>
                )}

                <div className="relative aspect-square overflow-hidden bg-cream">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                  <a
                    href={shopifyUrl}
                    data-testid={`quick-add-${p.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute inset-x-4 bottom-4 bg-forest text-ivory overline py-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <Plus size={14} /> Quick Add
                  </a>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <p className="overline text-gold">{p.badge}</p>
                    <div className="flex items-center gap-1 text-gold">
                      <Star size={12} fill="currentColor" />
                      <span className="text-xs font-medium text-forest">4.9</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl text-forest leading-tight">
                    {p.name}
                  </h3>
                  <p className="overline text-muted-foreground mt-1">
                    {p.tagline}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                    {p.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-border flex items-end justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">{p.volume}</p>
                      <div className="flex items-baseline gap-2 mt-1">
                        <p className="font-serif text-2xl text-forest">
                          ₹{p.price}
                        </p>
                        <p className="text-sm text-muted-foreground line-through">
                          ₹{p.mrp}
                        </p>
                      </div>
                    </div>
                    <a
                      href={shopifyUrl}
                      data-testid={`add-to-cart-${p.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className={isCombo ? "btn-gold" : "btn-primary"}
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
