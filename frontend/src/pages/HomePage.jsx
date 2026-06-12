import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import WhyKashi from "@/components/sections/WhyKashi";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Benefits from "@/components/sections/Benefits";
import Ingredients from "@/components/sections/Ingredients";
import Transformation from "@/components/sections/Transformation";
import TrustSection from "@/components/sections/TrustSection";
import Comparison from "@/components/sections/Comparison";
import Testimonials from "@/components/sections/Testimonials";
import Editorial from "@/components/sections/Editorial";
import ComboOffer from "@/components/sections/ComboOffer";
import FAQ from "@/components/sections/FAQ";
import Journal from "@/components/sections/Journal";

export default function HomePage() {
  return (
    <main data-testid="home-page">
      <Hero />
      <TrustBar />
      <WhyKashi />
      <FeaturedProducts />
      <Benefits />
      <Ingredients />
      <Transformation />
      <TrustSection />
      <Comparison />
      <Testimonials />
      <Editorial />
      <ComboOffer />
      <FAQ />
      <Journal />
    </main>
  );
}
