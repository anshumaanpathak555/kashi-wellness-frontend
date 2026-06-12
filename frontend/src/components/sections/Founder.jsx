export default function Founder() {
  return (
    <section
      id="founder"
      data-testid="founder-section"
      className="py-24 lg:py-32 bg-ivory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-cream">
              <img
                src="https://customer-assets.emergentagent.com/job_2ed6455a-939b-4454-bf51-73c5f3ebe46b/artifacts/ubuagf4l_a_serene_high_end_lifestyle_photograph_of_an_indian_woman_in_her_late_40s_or.png"
                alt="Founder, Kashi Wellness"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="overline text-muted-foreground mt-4 text-center">
              The Founder · Photographed in Varanasi
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="overline text-gold mb-6">Founder's Letter</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.05]">
              A letter from <br />
              <span className="italic font-display text-gold">our founder.</span>
            </h2>

            <div className="mt-10 space-y-6 font-serif text-xl text-forest leading-relaxed max-w-2xl">
              <p className="first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-gold">
                I grew up between two worlds — my grandmother's terrace in Kashi,
                fragrant with crushed leaves and warm sesame oil, and a modern
                life of long commutes, glowing screens and the quiet ache that
                comes from both.
              </p>
              <p>
                Kashi Wellness began as a small notebook of her remedies. It
                grew, slowly, into the brand you see here — built on the belief
                that a daily ritual of just five minutes, done with intention,
                can repair what a thousand quick fixes cannot.
              </p>
              <p className="italic text-gold">
                — With reverence,
              </p>
              <p className="font-display italic text-3xl text-forest">
                Ananya Shastri
              </p>
              <p className="overline text-muted-foreground">
                Founder · Kashi Wellness
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
