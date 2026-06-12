export default function Editorial() {
  return (
    <section
      data-testid="editorial-section"
      className="py-24 lg:py-32 bg-cream/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] overflow-hidden bg-cream">
              <img
                src="https://customer-assets.emergentagent.com/job_2ed6455a-939b-4454-bf51-73c5f3ebe46b/artifacts/ubuagf4l_a_serene_high_end_lifestyle_photograph_of_an_indian_woman_in_her_late_40s_or.png"
                alt="A serene wellness ritual"
                className="w-full h-full object-cover animate-slow-zoom"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-40 h-48 lg:w-56 lg:h-72 overflow-hidden bg-ivory border-8 border-ivory shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Turmeric"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="overline text-gold mb-6">Ayurveda · Modern Science</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest leading-[1.1]">
              The old wisdom <span className="italic font-display">tested again</span> in our time.
            </h2>
            <div className="mt-10 space-y-8">
              <div>
                <p className="overline text-forest mb-3">Tradition</p>
                <p className="font-serif italic text-lg text-forest leading-relaxed">
                  "Of all herbs, the ones grown closest to where you live and harvested at the right hour are the best." — Sushruta Samhita
                </p>
              </div>
              <div className="gold-line w-24" />
              <div>
                <p className="overline text-forest mb-3">Evidence</p>
                <p className="text-muted-foreground leading-relaxed">
                  Modern peer-reviewed research increasingly validates what
                  Ayurveda has held for centuries — that curcumin, menthol,
                  withanolides and cineole each play measurable roles in
                  inflammation, perception of pain and tissue recovery.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { v: "27", l: "Botanicals" },
                  { v: "5,000", l: "Years of lineage" },
                  { v: "0", l: "Compromises" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-serif text-4xl text-gold">{s.v}</p>
                    <p className="overline text-muted-foreground mt-2">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
