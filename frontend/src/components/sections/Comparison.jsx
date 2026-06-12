import { Check, Minus } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/context/CartContext";

const ROWS = [
  { label: "Fast acting cooling relief", veda: true, charak: false, combo: true },
  { label: "Deep penetrating warmth", veda: false, charak: true, combo: true },
  { label: "Ideal for morning use", veda: true, charak: false, combo: true },
  { label: "Ideal for evening recovery", veda: false, charak: true, combo: true },
  { label: "Joint, back & shoulder support", veda: true, charak: true, combo: true },
  { label: "Best for chronic stiffness", veda: false, charak: true, combo: true },
  { label: "Complete daily ritual", veda: false, charak: false, combo: true },
  { label: "Premium gifting box", veda: false, charak: false, combo: true },
];

const Cell = ({ value }) =>
  value ? (
    <Check size={18} className="text-gold mx-auto" strokeWidth={2} />
  ) : (
    <Minus size={18} className="text-border mx-auto" strokeWidth={1.5} />
  );

export default function Comparison() {
  const { addItem } = useCart();

  return (
    <section
      data-testid="comparison-section"
      className="py-24 lg:py-32 bg-cream/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="overline text-gold mb-4">Find your ritual</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.05]">
            Which one is <span className="italic font-display">right for you?</span>
          </h2>
        </div>

        <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-0">
          <div className="min-w-[640px] px-4 sm:px-6 lg:px-0">
            <table className="w-full bg-ivory border border-border" data-testid="comparison-table">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 lg:p-6 w-1/3"></th>
                  {[PRODUCTS.veda, PRODUCTS.charak, PRODUCTS.combo].map((p) => (
                    <th
                      key={p.id}
                      className={`p-4 lg:p-6 text-center ${
                        p.id === "combo" ? "bg-cream relative" : ""
                      }`}
                    >
                      {p.id === "combo" && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-forest overline px-3 py-1 text-[0.6rem] whitespace-nowrap">
                          Recommended
                        </div>
                      )}
                      <div className="w-20 h-24 mx-auto mb-3 overflow-hidden">
                        <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                      </div>
                      <p className="font-serif text-xl text-forest">{p.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">₹{p.price}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-b-0">
                    <td className="p-4 lg:p-5 text-sm text-forest font-medium">
                      {row.label}
                    </td>
                    <td className="p-4 lg:p-5 text-center"><Cell value={row.veda} /></td>
                    <td className="p-4 lg:p-5 text-center"><Cell value={row.charak} /></td>
                    <td className={`p-4 lg:p-5 text-center ${row.combo ? "bg-cream/60" : ""}`}><Cell value={row.combo} /></td>
                  </tr>
                ))}
                <tr>
                  <td className="p-4 lg:p-6"></td>
                  <td className="p-4 lg:p-6 text-center">
                    <button
                      data-testid="comparison-cta-veda"
                      onClick={() => addItem(PRODUCTS.veda)}
                      className="btn-outline text-xs"
                    >
                      Add Veda
                    </button>
                  </td>
                  <td className="p-4 lg:p-6 text-center">
                    <button
                      data-testid="comparison-cta-charak"
                      onClick={() => addItem(PRODUCTS.charak)}
                      className="btn-outline text-xs"
                    >
                      Add Charak
                    </button>
                  </td>
                  <td className="p-4 lg:p-6 text-center bg-cream/60">
                    <button
                      data-testid="comparison-cta-combo"
                      onClick={() => addItem(PRODUCTS.combo)}
                      className="btn-gold text-xs"
                    >
                      Add Combo
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
