import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const NAV = [
  { label: "Shop", href: "/#products" },
  { label: "Ingredients", href: "/#ingredients" },
  { label: "Our Story", href: "/#story" },
  { label: "Journal", href: "/#journal" },
];

export default function Header() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Announcement bar */}
      <div
        data-testid="announcement-bar"
        className="w-full bg-forest text-ivory overline text-center py-2 px-4"
      >
        <span className="opacity-90">
          Complimentary shipping on orders above ₹999 · Crafted in Kashi
        </span>
      </div>

      <header
        data-testid="site-header"
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-md border-b border-border"
            : "bg-ivory border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu */}
            <button
              data-testid="mobile-menu-toggle"
              className="lg:hidden p-2 -ml-2 text-forest"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Desktop nav left */}
            <nav className="hidden lg:flex items-center gap-10">
              {NAV.slice(0, 2).map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  data-testid={`nav-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                  className="overline text-forest hover:text-gold"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            {/* Logo */}
            <Link
              to="/"
              data-testid="logo-link"
              className="flex items-center gap-2 group"
            >
              <div className="flex flex-col items-center leading-none">
                <span className="font-serif text-2xl sm:text-3xl text-forest tracking-wide">
                  Kashi
                </span>
                <span className="overline text-[0.55rem] text-gold tracking-[0.4em] -mt-0.5">
                  Wellness
                </span>
              </div>
            </Link>

            {/* Desktop nav right */}
            <nav className="hidden lg:flex items-center gap-10">
              {NAV.slice(2).map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  data-testid={`nav-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                  className="overline text-forest hover:text-gold"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            {/* Cart */}
            <button
              data-testid="open-cart-btn"
              onClick={() => setOpen(true)}
              className="relative p-2 -mr-2 text-forest hover:text-gold"
              aria-label="Open cart"
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {count > 0 && (
                <span
                  data-testid="cart-count-badge"
                  className="absolute -top-0.5 -right-0.5 bg-gold text-forest text-[0.6rem] font-bold w-4 h-4 flex items-center justify-center rounded-full"
                >
                  {count}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu drawer */}
          {mobileOpen && (
            <div
              data-testid="mobile-menu"
              className="lg:hidden border-t border-border py-6 animate-fade-in"
            >
              <nav className="flex flex-col gap-4">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-2xl text-forest"
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
