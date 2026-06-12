import { useState } from "react";
import { Flame, Wind, Sparkle, Sprout } from "lucide-react";

const INGREDIENTS = [
  {
    name: "Turmeric",
    Icon: Flame,
    benefit: "Anti-inflammatory · joint support",
    ayurvedic:
      "The golden healer. Praised in classical Ayurvedic texts as a purifier of blood and a balm for the joints.",
    modern:
      "Curcuminoids have been studied for their natural anti-inflammatory and antioxidant action on soft tissue.",
  },
  {
    name: "Eucalyptus",
    Icon: Wind,
    benefit: "Cooling · respiratory & muscle clarity",
    ayurvedic:
      "Used in the foothills of the Himalayas as a clearing, awakening botanical that lifts heaviness from the body.",
    modern:
      "1,8-cineole, its primary compound, is known to deliver a clean, cooling sensation that calms sore muscle fibres.",
  },
  {
    name: "Peppermint",
    Icon: Sparkle,
    benefit: "Cooling · instant comfort",
    ayurvedic:
      "A traditional cooling answer to summer heat, headaches and tight necks across Indian households.",
    modern:
      "Menthol activates TRPM8 receptors on the skin, producing a familiar, immediate cooling effect.",
  },
  {
    name: "Ashwagandha",
    Icon: Sprout,
    benefit: "Adaptogen · deep recovery",
    ayurvedic:
      "The root that gives the body the strength of a stallion. Used for centuries to rebuild after fatigue.",
    modern:
      "An adaptogen with research supporting its role in reducing cortisol and supporting muscle recovery.",
  },
];

export default function Ingredients() {
  const [active, setActive] = useState(0);
  const item = INGREDIENTS[active];
  const ActiveIcon = item.Icon;

  return (
    <section
      id="ingredients"
      data-testid="ingredients-section"
      className="py-24 lg:py-32 bg-forest text-ivory relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="overline text-gold mb-4">The Ingredient Story</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory leading-[1.1] max-w-3xl mx-auto">
            Plants chosen with the same care your{" "}
            <span className="italic font-display text-gold">grandmother</span> would use.
          </h2>
          <p className="mt-6 text-ivory/60 max-w-xl mx-auto">
            Four time-honoured botanicals at the heart of every Kashi formulation —
            tested in Ayurvedic households for generations, validated by modern science today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Tabs / list */}
          <div className="flex flex-col">
            {INGREDIENTS.map((ing, i) => {
              const Ic = ing.Icon;
              const isActive = active === i;
              return (
                <button
                  key={ing.name}
                  data-testid={`ingredient-tab-${i}`}
                  onClick={() => setActive(i)}
                  className={`text-left py-6 px-2 border-b border-ivory/15 flex items-center gap-5 group transition-colors ${
                    isActive ? "text-ivory" : "text-ivory/50 hover:text-ivory"
                  }`}
                >
                  <span className={`w-12 h-12 border flex items-center justify-center transition-all flex-shrink-0 ${
                    isActive ? "border-gold bg-gold text-forest" : "border-ivory/30 text-ivory/60 group-hover:border-gold"
                  }`}>
                    <Ic size={18} strokeWidth={1.4} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-serif text-2xl lg:text-3xl leading-tight">
                      {ing.name}
                    </span>
                    <span className="overline text-[0.65rem] text-gold mt-1 block">
                      {ing.benefit}
                    </span>
                  </span>
                  <span className={`font-display italic text-2xl ${isActive ? "text-gold" : "text-ivory/20"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="bg-ivory/[0.03] border border-ivory/15 p-8 lg:p-12 flex flex-col justify-center">
            <div key={item.name} className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <ActiveIcon size={28} strokeWidth={1.2} className="text-gold" />
                <p className="overline text-gold">{item.benefit}</p>
              </div>
              <h3 className="font-serif text-4xl lg:text-5xl mb-6 leading-tight">
                {item.name}
              </h3>

              <div className="space-y-8">
                <div>
                  <p className="overline text-ivory/50 mb-3">Ayurvedic Significance</p>
                  <p className="font-serif italic text-lg text-ivory/90 leading-relaxed">
                    {item.ayurvedic}
                  </p>
                </div>
                <div className="gold-line w-24" />
                <div>
                  <p className="overline text-ivory/50 mb-3">Modern Understanding</p>
                  <p className="text-base text-ivory/80 leading-relaxed">
                    {item.modern}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
