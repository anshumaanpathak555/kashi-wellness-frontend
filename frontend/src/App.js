import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import HomePage from "@/pages/HomePage";
import LegalPage from "@/pages/LegalPage";
import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function App() {
  return (
    <div className="App bg-ivory min-h-screen">
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/privacy"
              element={
                <LegalPage
                  title="Privacy Policy"
                  subtitle="How we honour your trust."
                  slug="privacy"
                />
              }
            />
            <Route
              path="/terms"
              element={
                <LegalPage
                  title="Terms & Conditions"
                  subtitle="The principles of our relationship."
                  slug="terms"
                />
              }
            />
            <Route
              path="/refund"
              element={
                <LegalPage
                  title="Refund Policy"
                  subtitle="A simple, fair commitment."
                  slug="refund"
                />
              }
            />
            <Route
              path="/shipping"
              element={
                <LegalPage
                  title="Shipping Policy"
                  subtitle="From Kashi, to your doorstep."
                  slug="shipping"
                />
              }
            />
          </Routes>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "hsl(40, 33%, 98%)",
                color: "hsl(148, 27%, 24%)",
                border: "1px solid hsl(40, 50%, 56%)",
                borderRadius: "0",
                fontFamily: "Manrope, sans-serif",
              },
            }}
          />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
