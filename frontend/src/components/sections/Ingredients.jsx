import { useState } from "react";

const INGREDIENTS = [
  {
    name: "Turmeric",
    sanskrit: "हरिद्रा · Haridra",
    image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1260",
    benefit: "Anti-inflammatory · joint support",
    ayurvedic: "The golden healer. Praised in the Charak Samhita as a purifier of blood and a balm for the joints.",
    modern: "Curcuminoids have been studied for their natural anti-inflammatory and antioxidant action on soft tissue.",
  },
  {
    name: "Eucalyptus",
    sanskrit: "नीलगिरि · Nilgiri",
    image: "https://images.pexels.com/photos/6168330/pexels-photo-6168330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900",
    benefit: "Cooling · respiratory & muscle clarity",
    ayurvedic: "Used in the foothills of the Himalayas for ages as a clearing, awakening botanical that lifts heaviness.",
    modern: "1,8-cineole, its primary compound, is known to deliver a clean, cooling sensation that calms sore muscle fibres.",
  },
  {
    name: "Peppermint",
    sanskrit: "पुदीना · Pudina",
    image: "https://images.pexels.com/photos/16231471/pexels-photo-16231471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900",
    benefit: "Cooling · instant comfort",
    ayurvedic: "Cooling to Pitta dosha. A traditional answer to summer heat, headaches and tight necks.",
    modern: "Menthol activates TRPM8 receptors on the skin, producing a familiar, immediate cooling effect.",
  },
  {
    name: "Ashwagandha",
    sanskrit: "अश्वगंधा · Ashwagandha",
    image: "https://images.pexels.com/photos/4199043/pexels-photo-4199043.jpeg?auto=compress&cs=tinysrgb&w=1260",
    benefit: "Adaptogen · deep recovery",
    ayurvedic: "The root that gives the body the strength of a stallion. Used for centuries to rebuild after fatigue.",
    modern: "An adaptogen with research supporting its role in reducing cortisol and supporting muscle recovery.",
  },
];

export default function Ingredients() {
  const [active, setActive] = useState(0);
  const item = INGREDIENTS[active];

  return (
    <section
      id="ingredients"
      data-testid="ingredients-section"
      className="py-24 lg:py-32 bg-forest text-ivory relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="overline text-gold mb-4">The Ingredient Story</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory leading-[1.05] max-w-3xl mx-auto">
            Plants chosen with the same care your <span className="italic font-display text-gold">grandmother</span> would use.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              key={item.image}
              src={item.image}
              alt={item.name}
              data-testid="active-ingredient-image"
              className="w-full h-full object-cover animate-fade-in"
            />
            <div className="absolute bottom-6 left-6 right-6 text-ivory">
              <p className="font-display italic text-2xl text-gold">
                {item.sanskrit}
              </p>
            </div>
          </div>

          {/* Content side */}
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {INGREDIENTS.map((ing, i) => (
                <button
                  key={ing.name}
                  data-testid={`ingredient-tab-${i}`}
                  onClick={() => setActive(i)}
                  className={`overline px-4 py-2 border transition-all ${
                    active === i
                      ? "bg-gold text-forest border-gold"
                      : "border-ivory/30 text-ivory/70 hover:border-gold hover:text-gold"
                  }`}
                >
                  {ing.name}
                </button>
              ))}
            </div>

            <div key={item.name} className="animate-fade-in">
              <h3 className="font-serif text-4xl lg:text-5xl mb-4">
                {item.name}
              </h3>
              <p className="overline text-gold mb-8">{item.benefit}</p>

              <div className="space-y-8">
                <div>
                  <p className="overline text-ivory/50 mb-2">Ayurvedic Significance</p>
                  <p className="font-serif italic text-xl text-ivory/90 leading-relaxed">
                    {item.ayurvedic}
                  </p>
                </div>
                <div className="gold-line w-24" />
                <div>
                  <p className="overline text-ivory/50 mb-2">Modern Understanding</p>
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
