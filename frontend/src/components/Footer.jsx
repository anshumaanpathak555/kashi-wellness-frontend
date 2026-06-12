import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Welcome to the Kashi circle", {
      description: "We've added you to our quiet, considered letters.",
    });
    setEmail("");
  };

  return (
    <footer
      data-testid="site-footer"
      className="bg-forest text-ivory pt-24 pb-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div className="grid lg:grid-cols-2 gap-12 pb-16 border-b border-ivory/15">
          <div>
            <p className="overline text-gold mb-4">The Kashi Letters</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-ivory leading-tight">
              Quiet rituals, delivered to your inbox.
            </h2>
            <p className="mt-4 text-ivory/70 max-w-md">
              Notes on Ayurveda, slow living and the small daily acts that
              compound into a better life. No noise, ever.
            </p>
          </div>
          <form
            onSubmit={subscribe}
            className="flex flex-col justify-center"
            data-testid="newsletter-form"
          >
            <label className="overline text-ivory/60 mb-3">Your email</label>
            <div className="flex border-b border-ivory/40 pb-2">
              <input
                type="email"
                data-testid="newsletter-email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@somewhere.in"
                className="flex-1 bg-transparent text-ivory placeholder-ivory/40 outline-none text-lg"
              />
              <button
                type="submit"
                data-testid="newsletter-submit-btn"
                className="overline text-gold hover:text-ivory ml-4 flex items-center gap-2"
              >
                Subscribe <Mail size={14} />
              </button>
            </div>
            <p className="mt-3 text-xs text-ivory/40">
              We send roughly one letter a month. Unsubscribe in a tap.
            </p>
          </form>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="font-serif text-3xl mb-2">Kashi Wellness</div>
            <p className="overline text-gold mb-4">Inspired by Kashi · Made for today</p>
            <p className="text-ivory/60 text-sm max-w-xs leading-relaxed">
              Premium Ayurvedic rituals, slow-crafted in small batches with
              integrity, tradition and modern science.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Instagram, label: "instagram" },
                { Icon: Facebook, label: "facebook" },
                { Icon: Youtube, label: "youtube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  data-testid={`footer-social-${label}`}
                  className="w-9 h-9 border border-ivory/30 hover:border-gold hover:text-gold flex items-center justify-center"
                  aria-label={label}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="overline text-gold mb-5">Shop</p>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li><a href="/#products" className="hover:text-gold">VEDA</a></li>
              <li><a href="/#products" className="hover:text-gold">CHARAK</a></li>
              <li><a href="/#combo-offer" className="hover:text-gold">Veda + Charak Combo</a></li>
              <li><a href="/#ingredients" className="hover:text-gold">Ingredients</a></li>
            </ul>
          </div>

          <div>
            <p className="overline text-gold mb-5">Brand</p>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li><a href="/#story" className="hover:text-gold">Our Story</a></li>
              <li><a href="/#founder" className="hover:text-gold">Founder</a></li>
              <li><a href="/#journal" className="hover:text-gold">Journal</a></li>
              <li><a href="/#faq" className="hover:text-gold">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="overline text-gold mb-5">Policies</p>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li><Link to="/privacy" data-testid="footer-link-privacy" className="hover:text-gold">Privacy Policy</Link></li>
              <li><Link to="/terms" data-testid="footer-link-terms" className="hover:text-gold">Terms & Conditions</Link></li>
              <li><Link to="/refund" data-testid="footer-link-refund" className="hover:text-gold">Refund Policy</Link></li>
              <li><Link to="/shipping" data-testid="footer-link-shipping" className="hover:text-gold">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-ivory/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-ivory/40">
          <p>© {new Date().getFullYear()} Kashi Wellness. All rights reserved.</p>
          <p className="overline">Made with reverence in Varanasi, India</p>
        </div>
      </div>
    </footer>
  );
}
