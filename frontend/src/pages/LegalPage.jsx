const CONTENT = {
  privacy: [
    { h: "Overview", p: "Your privacy is held with the same reverence we give to our formulations. This policy outlines what we collect, why we collect it, and the boundaries we set around it. Plain language, no hidden corners." },
    { h: "Information we collect", p: "We collect the minimum necessary to process and deliver your order — your name, contact details, shipping address and order history. We never collect more than we need." },
    { h: "How we use it", p: "Strictly to fulfil your orders, communicate about your purchase, and (only with your consent) send our quiet monthly letter. We do not sell or rent your data, ever." },
    { h: "Third parties", p: "We work with carefully chosen partners — payment processors, shipping carriers, email infrastructure — each bound by strict data agreements." },
    { h: "Your rights", p: "You can request access, correction or deletion of your data at any time by writing to care@kashiwellness.in. We will act within 7 working days." },
  ],
  terms: [
    { h: "Acceptance of terms", p: "By using this site or placing an order, you agree to these terms. If anything is unclear, please write to us before purchasing." },
    { h: "Products & pricing", p: "All prices are in INR (₹) and include applicable taxes unless stated otherwise. We reserve the right to update prices and product details without prior notice." },
    { h: "Use of site", p: "You agree to use the site lawfully and to not interfere with its operation. All content — copy, photographs, illustrations — is the intellectual property of Kashi Wellness." },
    { h: "Health disclaimer", p: "Our products are crafted to support wellness, not to diagnose, treat or cure any disease. If you are pregnant, nursing or have a medical condition, please consult a qualified practitioner." },
    { h: "Limitation of liability", p: "Kashi Wellness will not be liable for any indirect or consequential losses arising from use of the site or products beyond the value of the order itself." },
  ],
  refund: [
    { h: "Our promise", p: "If a product does not move you within 30 days of delivery, we will refund you fully. No quizzes. No friction." },
    { h: "How to request a refund", p: "Write to care@kashiwellness.in with your order number and a short note about your experience. Our team will respond within 24 hours." },
    { h: "Eligibility", p: "Refund requests must be raised within 30 days of delivery. Products do not need to be returned for opened bottles — your word is enough." },
    { h: "Processing time", p: "Once approved, refunds are processed back to the original payment method within 5–7 working days." },
    { h: "Damaged or wrong items", p: "Should your order arrive damaged or incorrect, please share a photograph within 48 hours and we will replace it at our cost." },
  ],
  shipping: [
    { h: "Where we ship", p: "We ship across India through trusted express partners. International shipping is in soft launch — please write to us for personalised orders." },
    { h: "Processing time", p: "Orders are typically dispatched within 24 working hours from our Varanasi atelier. We do not ship on Sundays and Indian national holidays." },
    { h: "Delivery time", p: "Most addresses in India receive their order within 2–5 business days. Remote pincodes may take 5–8 business days." },
    { h: "Shipping charges", p: "Complimentary express shipping on all orders above ₹999. Below that, a flat fee of ₹49 applies." },
    { h: "Order tracking", p: "Once dispatched, you will receive a tracking link by SMS and email. Should anything go astray, write to care@kashiwellness.in and we will sort it personally." },
  ],
};

export default function LegalPage({ title, subtitle, slug }) {
  const sections = CONTENT[slug] || [];
  return (
    <main data-testid={`legal-page-${slug}`} className="bg-ivory pt-16 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-12 pb-16 border-b border-border">
          <p className="overline text-gold mb-4">Policies</p>
          <h1 className="font-serif text-5xl sm:text-6xl text-forest leading-[1.05]">
            {title}
          </h1>
          <p className="font-serif italic text-xl text-muted-foreground mt-4">
            {subtitle}
          </p>
          <p className="overline text-muted-foreground mt-6">Last updated · December 2025</p>
        </div>

        <div className="pt-16 space-y-12">
          {sections.map((s, i) => (
            <section key={i} data-testid={`legal-section-${i}`}>
              <h2 className="font-serif text-2xl text-forest mb-4">
                <span className="text-gold mr-3 text-xl">{String(i + 1).padStart(2, "0")}</span>
                {s.h}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">{s.p}</p>
            </section>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-border text-center">
          <p className="text-muted-foreground mb-4">Questions about this policy?</p>
          <a href="mailto:care@kashiwellness.in" className="overline text-gold hover:text-forest">
            care@kashiwellness.in →
          </a>
        </div>
      </div>
    </main>
  );
}
