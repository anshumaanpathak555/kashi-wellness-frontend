import { Play, Quote, Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Anjali M.",
    location: "Mumbai",
    text: "Within ten days my morning shoulder stiffness was just… gone. I have not reached for a pain patch in weeks.",
    product: "Veda + Charak Combo",
  },
  {
    name: "Rohit S.",
    location: "Bangalore",
    text: "I'm an early-morning runner. Veda is my warm-up and Charak is my recovery. Two bottles I cannot now imagine living without.",
    product: "Combo",
  },
  {
    name: "Meera K.",
    location: "Pune",
    text: "Smells like my grandmother's home in Banaras. Works like nothing I have tried in years. Worth every rupee.",
    product: "Charak",
  },
  {
    name: "Vikram J.",
    location: "Delhi",
    text: "I wanted to dislike it because I was sceptical. Now my whole family uses it. Quietly excellent.",
    product: "Veda",
  },
];

const VIDEOS = [
  { thumb: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800", name: "Priya, 52", duration: "1:24" },
  { thumb: "https://images.pexels.com/photos/3759079/pexels-photo-3759079.jpeg?auto=compress&cs=tinysrgb&w=800", name: "Arjun, 38", duration: "0:58" },
];

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="py-24 lg:py-32 bg-ivory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <p className="overline text-gold mb-4">Held by our community</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.05] max-w-xl">
              Words from those who <span className="italic font-display">stayed.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-gold">
              {"★★★★★".split("").map((s, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="overline text-forest">4.9 · 12,400+ rituals</p>
          </div>
        </div>

        {/* Video testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {VIDEOS.map((v, i) => (
            <div
              key={i}
              data-testid={`video-testimonial-${i}`}
              className="relative aspect-video overflow-hidden group cursor-pointer bg-cream"
            >
              <img src={v.thumb} alt={v.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-forest/30 group-hover:bg-forest/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-ivory/95 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Play size={20} className="text-forest ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-ivory flex items-center justify-between">
                <div>
                  <p className="font-serif text-2xl">{v.name}</p>
                  <p className="overline text-gold text-[0.6rem]">Real customer story</p>
                </div>
                <p className="overline text-ivory/80 text-xs">{v.duration}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              data-testid={`review-card-${i}`}
              className="bg-cream/40 border border-border p-6 lg:p-8 flex flex-col"
            >
              <Quote size={20} className="text-gold mb-4" />
              <p className="font-serif italic text-lg text-forest leading-relaxed flex-1">
                "{r.text}"
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-medium text-forest">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.location} · {r.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
