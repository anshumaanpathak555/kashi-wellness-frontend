# Kashi Wellness — PRD

## Original Problem Statement
Frontend-only premium Ayurvedic D2C website for "Kashi Wellness" (no backend, no auth, no checkout — Shopify will handle later). Brand inspired by Aesop / Forest Essentials / Kama Ayurveda / Apple / Ritual / AG1. Premium luxury Ayurvedic positioning. Products: VEDA (₹599), CHARAK (₹599), VEDA+CHARAK COMBO (₹999, hero/best-value). Must look like a ₹50+ crore D2C brand.

## User Choices (Dec 2025)
- Pricing: VEDA ₹599, CHARAK ₹599, COMBO ₹999
- Cart: slide-in drawer (visual only)
- Founder: placeholder copy + generic founder photo (provided)
- Language: English primary + Hindi/Sanskrit accents
- Blog: 4 sample journal cards with rich placeholder content

## Architecture
- Frontend-only React (CRA + craco). No backend changes.
- Tailwind + custom HSL palette (Warm Ivory, Soft Cream, Ayurvedic Gold, Deep Forest Green, Earthy Sandstone)
- Fonts: Cormorant Garamond (serif heads), Manrope (body), Playfair Display (italic accents)
- shadcn/ui (Sheet, Accordion, Sonner)
- Cart state via React Context (frontend-only)
- Routes: `/`, `/privacy`, `/terms`, `/refund`, `/shipping`

## What's Implemented (Dec 2025)
- 15 home-page sections: Hero, TrustBar, WhyKashi, FeaturedProducts, Benefits, Ingredients (interactive 4-tab), Transformation (5-step), TrustSection, Comparison table, Testimonials (video + review), Editorial, Founder letter, ComboOffer, FAQ (7 questions), Journal (4 cards)
- Premium Header with announcement bar, sticky behaviour, mobile menu, cart icon w/ count badge
- Slide-in CartDrawer with empty state, qty controls, subtotal, "Proceed to Checkout" toast
- Luxury Footer with newsletter, social, policy links
- 4 legal pages with structured policy content
- Bilingual Sanskrit/Devanagari accents (कशी, हरिद्रा etc.) used tastefully
- SEO meta tags (title, description, OG tags) updated
- All interactive elements have unique `data-testid`s
- Testing agent: 100% frontend pass

## Backlog / Future
- P1: Shopify Buy Button SDK integration (replace cart-drawer checkout toast with real Shopify checkout URL)
- P1: Real product images for individual VEDA / CHARAK PDPs (currently combo-style images)
- P2: Per-product detail page route (`/products/veda`, `/products/charak`, `/products/combo`)
- P2: Real blog CMS integration (currently static cards)
- P2: Replace stock pexels imagery on Transformation steps with branded photography
- P2: Schema.org JSON-LD (Product, Organization, FAQPage) for SEO
- P2: Image lazy loading + Next-gen formats
- P3: A/B test combo-offer headline variants for conversion
