import { ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    cat: "Ayurveda",
    title: "Reading the Charak Samhita with modern eyes",
    excerpt:
      "A 2,000-year-old text on healing — and the surprising relevance of its first chapter to your Monday morning.",
    img: "https://images.pexels.com/photos/12112985/pexels-photo-12112985.jpeg?auto=compress&cs=tinysrgb&w=900",
    date: "Dec 2025",
    read: "6 min read",
  },
  {
    cat: "Daily Rituals",
    title: "The five-minute evening unwinding",
    excerpt:
      "A small, slow ritual you can borrow tonight to ease shoulder tension and quiet the chatter of the day.",
    img: "https://customer-assets.emergentagent.com/job_2ed6455a-939b-4454-bf51-73c5f3ebe46b/artifacts/dmqp55rh_veda.png",
    date: "Nov 2025",
    read: "4 min read",
  },
  {
    cat: "Ingredients",
    title: "Why we still grind our turmeric the old way",
    excerpt:
      "Stone, water, patience. The reasons behind a process most brands have quietly automated away.",
    img: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=900",
    date: "Nov 2025",
    read: "5 min read",
  },
  {
    cat: "Wellness",
    title: "The body keeps the calendar — listening to it",
    excerpt:
      "Notes on circadian Ayurveda — why morning, noon and night each ask different things of the body.",
    img: "https://customer-assets.emergentagent.com/job_2ed6455a-939b-4454-bf51-73c5f3ebe46b/artifacts/qlp63vq5_charak.png",
    date: "Oct 2025",
    read: "7 min read",
  },
];

export default function Journal() {
  return (
    <section
      id="journal"
      data-testid="journal-section"
      className="py-24 lg:py-32 bg-cream/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <p className="overline text-gold mb-4">The Kashi Journal</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest leading-[1.1] max-w-2xl">
              Slow notes for a{" "}
              <span className="italic font-display">considered life.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Ayurveda", "Wellness", "Lifestyle", "Ingredients", "Daily Rituals"].map(
              (c) => (
                <span
                  key={c}
                  className="overline px-3 py-1.5 border border-border text-forest hover:bg-forest hover:text-ivory cursor-pointer"
                >
                  {c}
                </span>
              )
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {POSTS.map((p, i) => (
            <article
              key={i}
              data-testid={`journal-card-${i}`}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden bg-cream mb-5">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between mb-3">
                <p className="overline text-gold">{p.cat}</p>
                <ArrowUpRight
                  size={16}
                  className="text-forest opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="font-serif text-xl lg:text-2xl text-forest leading-tight group-hover:text-gold mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                {p.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                <span>{p.date}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{p.read}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#"
            data-testid="journal-view-all"
            className="btn-outline"
          >
            View All Stories
          </a>
        </div>
      </div>
    </section>
  );
}
