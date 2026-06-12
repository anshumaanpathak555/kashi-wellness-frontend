const STEPS = [
  { num: "01", title: "The Problem", text: "A body that has worked too hard for too long. Knots, stiffness, that one knee, that one shoulder." },
  { num: "02", title: "The Daily Struggle", text: "Painkillers, heat patches, quick fixes. Nothing that respects the body or fixes the root." },
  { num: "03", title: "Ayurvedic Support", text: "VEDA in the morning, CHARAK in the evening. A two-step ritual rooted in centuries of botanical wisdom." },
  { num: "04", title: "Consistency", text: "Three weeks. Five minutes a day. The body begins to soften, to breathe, to remember ease." },
  { num: "05", title: "An Improved Life", text: "Mornings without dread. Movement without warning. A relationship with your own body, restored." },
];

export default function Transformation() {
  return (
    <section
      data-testid="transformation-section"
      className="py-24 lg:py-32 bg-ivory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="overline text-gold mb-4">The Transformation Journey</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.05]">
            From everyday ache <br />
            <span className="italic font-display">to everyday ease.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Gold connecting line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/30" />

          <div className="space-y-16 lg:space-y-24">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                data-testid={`transformation-step-${i}`}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-20 items-center ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={`relative ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <div className="aspect-[5/4] overflow-hidden bg-cream relative">
                    <img
                      src={`https://images.pexels.com/photos/${
                        ["1640774","4506105","3759079","3822864","6932503"][i]
                      }/pexels-photo-${
                        ["1640774","4506105","3759079","3822864","6932503"][i]
                      }.jpeg?auto=compress&cs=tinysrgb&w=1000`}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 font-display text-6xl text-ivory/90 drop-shadow-lg">
                      {s.num}
                    </div>
                  </div>
                </div>

                <div className={`${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <p className="overline text-gold mb-3">Stage {s.num}</p>
                  <h3 className="font-serif text-4xl lg:text-5xl text-forest mb-5 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-md">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
