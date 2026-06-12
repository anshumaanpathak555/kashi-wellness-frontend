import { AlertCircle, Pill, Leaf, Repeat, Sparkles } from "lucide-react";

const STEPS = [
  {
    num: "01",
    Icon: AlertCircle,
    title: "The Problem",
    text:
      "A body that has worked too hard for too long. Knots, stiffness, that one knee, that one shoulder — the quiet weight of modern life.",
  },
  {
    num: "02",
    Icon: Pill,
    title: "The Daily Struggle",
    text:
      "Painkillers, heat patches, quick fixes. Relief that fades by lunchtime. Nothing that respects the body or addresses the root.",
  },
  {
    num: "03",
    Icon: Leaf,
    title: "Ayurvedic Support",
    text:
      "VEDA in the morning, CHARAK in the evening. A two-step ritual rooted in centuries of Indian botanical wisdom.",
  },
  {
    num: "04",
    Icon: Repeat,
    title: "Consistency",
    text:
      "Three weeks. Five minutes a day. The body begins to soften, to breathe, to remember ease.",
  },
  {
    num: "05",
    Icon: Sparkles,
    title: "An Improved Life",
    text:
      "Mornings without dread. Movement without warning. A relationship with your own body, restored.",
  },
];

export default function Transformation() {
  return (
    <section data-testid="transformation-section" className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="overline text-gold mb-4">The Transformation Journey</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest leading-[1.1]">
            From everyday ache <br />
            <span className="italic font-display">to everyday ease.</span>
          </h2>
        </div>

        {/* Horizontal timeline on desktop, vertical on mobile */}
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gold/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {STEPS.map((s, i) => {
              const Ic = s.Icon;
              return (
                <div
                  key={s.num}
                  data-testid={`transformation-step-${i}`}
                  className="relative flex flex-col"
                >
                  <div className="relative flex justify-center mb-6">
                    <div className="w-24 h-24 bg-ivory border border-gold flex items-center justify-center relative z-10">
                      <Ic size={26} strokeWidth={1.2} className="text-gold" />
                    </div>
                  </div>
                  <p className="font-display italic text-3xl text-gold text-center mb-2">
                    {s.num}
                  </p>
                  <h3 className="font-serif text-2xl text-forest text-center mb-4 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    {s.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 max-w-2xl mx-auto text-center">
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="font-serif italic text-xl text-forest">
            "Not faster, not louder — only the steady, patient repair that real change requires."
          </p>
        </div>
      </div>
    </section>
  );
}
