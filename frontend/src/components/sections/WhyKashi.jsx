export default function WhyKashi() {
  return (
    <section
      id="story"
      data-testid="why-kashi-section"
      className="relative py-24 lg:py-32 bg-ivory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="aspect-[4/5] overflow-hidden bg-cream relative">
              <img
                src="https://images.pexels.com/photos/12112985/pexels-photo-12112985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900"
                alt="Kashi ghats at dawn"
                className="w-full h-full object-cover animate-slow-zoom"
              />
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <p className="overline text-gold mb-2">Varanasi · Where it began</p>
                <p className="font-serif italic text-2xl leading-tight">
                  "The river remembers everything she has ever held."
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <p className="overline text-gold mb-6">Why Kashi Wellness</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.05] mb-10">
              Born of the oldest
              <br /> <span className="italic font-display">living city.</span>
              <br /> Made for the
              <br /> <span className="italic font-display text-gold">life you live now.</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <p className="overline text-forest mb-3">Why Kashi</p>
                <p className="text-muted-foreground leading-relaxed">
                  Kashi, the city of light, has been the seat of Ayurvedic
                  thought for over five thousand years. Every formulation we
                  craft carries a whisper of that lineage.
                </p>
              </div>
              <div>
                <p className="overline text-forest mb-3">Why Ayurveda</p>
                <p className="text-muted-foreground leading-relaxed">
                  Long before laboratories, there were rivers, plants and
                  patience. Ayurveda is not an alternative — it is the original.
                </p>
              </div>
              <div>
                <p className="overline text-forest mb-3">Why Our Approach</p>
                <p className="text-muted-foreground leading-relaxed">
                  We honour the old recipes. We test with modern science. We
                  pack with intention. Nothing extra. Nothing rushed.
                </p>
              </div>
              <div>
                <p className="overline text-forest mb-3">Why Now</p>
                <p className="text-muted-foreground leading-relaxed">
                  The modern body is tired. Hours of screen, hours of sitting,
                  hours of doing. A simple daily ritual changes everything.
                </p>
              </div>
            </div>

            <div className="mt-12 gold-line w-32" />
            <p className="mt-8 font-serif italic text-xl text-forest max-w-lg">
              "Slow is not the opposite of progress. In Ayurveda, slow is the
              method."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
