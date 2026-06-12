import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { PRODUCT_LINKS, getProductLink } from "@/lib/productLinks";

export default function CartDrawer() {
  const { items, open, setOpen, removeItem, updateQty, subtotal, count } =
    useCart();

  const checkout = () => {
    // Build a Shopify checkout URL based on cart items.
    // If the cart has exactly one product type, go to that product page.
    // Otherwise, go to the main Shopify storefront.
    const uniqueIds = [...new Set(items.map((i) => i.id))];
    const destination =
      uniqueIds.length === 1
        ? getProductLink(uniqueIds[0])
        : PRODUCT_LINKS.store;
    window.location.href = destination;
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="border-l border-border w-full sm:max-w-md p-0 flex flex-col"
        style={{ backgroundColor: "hsl(40, 33%, 98%)" }}
        data-testid="cart-drawer"
      >
        <SheetHeader className="px-6 py-5 border-b border-border">
          <SheetTitle className="font-serif text-2xl text-forest flex items-center justify-between">
            <span>Your Ritual</span>
            <span className="overline text-gold text-xs">
              {count} {count === 1 ? "item" : "items"}
            </span>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Review the products in your ritual before proceeding to checkout.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div
              data-testid="cart-empty-state"
              className="flex flex-col items-center justify-center text-center py-20"
            >
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mb-6">
                <ShoppingBag size={22} strokeWidth={1.2} className="text-forest" />
              </div>
              <p className="font-serif text-2xl text-forest mb-2">
                Your ritual is empty
              </p>
              <p className="text-sm text-muted-foreground max-w-xs">
                Begin with the Veda + Charak duo — our most loved daily wellness pairing.
              </p>
              <a
                href="/#products"
                data-testid="cart-empty-shop-btn"
                onClick={() => setOpen(false)}
                className="btn-primary mt-8"
              >
                Discover Products
              </a>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li
                  key={item.id}
                  data-testid={`cart-item-${item.id}`}
                  className="flex gap-4 pb-6 border-b border-border last:border-0"
                >
                  <div className="w-20 h-24 bg-cream flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-lg text-forest leading-tight">
                          {item.name}
                        </p>
                        <p className="overline text-[0.65rem] text-muted-foreground mt-1">
                          {item.formula}
                        </p>
                      </div>
                      <button
                        data-testid={`cart-remove-${item.id}`}
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-forest"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          data-testid={`cart-qty-decrement-${item.id}`}
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-8 h-8 flex items-center justify-center text-forest hover:bg-cream"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.qty}
                        </span>
                        <button
                          data-testid={`cart-qty-increment-${item.id}`}
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center text-forest hover:bg-cream"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="font-serif text-lg text-forest">
                        ₹{(item.price * item.qty).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 bg-cream/40">
            <div className="flex items-baseline justify-between mb-4">
              <p className="overline text-muted-foreground">Subtotal</p>
              <p
                data-testid="cart-subtotal"
                className="font-serif text-2xl text-forest"
              >
                ₹{subtotal.toLocaleString("en-IN")}
              </p>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              data-testid="cart-checkout-btn"
              onClick={checkout}
              className="btn-primary w-full justify-center"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={() => setOpen(false)}
              className="w-full text-center mt-3 overline text-muted-foreground hover:text-forest"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
