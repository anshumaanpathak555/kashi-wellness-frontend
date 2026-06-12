/**
 * Central Shopify product URL configuration for Kashi Wellness.
 *
 * ─────────────────────────────────────────────────────────────
 *  To update a Shopify URL, change only the value below.
 *  All CTAs across the site pull from this single source.
 * ─────────────────────────────────────────────────────────────
 */

export const PRODUCT_LINKS = {
  /** VEDA Pain Relief Roll-On */
  veda: "https://kashiwellness.in/products/veda",

  /** CHARAK Pain Relief Roll-On */
  charak: "https://kashiwellness.in/products/charak",

  /** Pain Relief Bundle (VEDA + CHARAK Combo) */
  combo: "https://kashiwellness.in/products/pain-relief-bundle",

  /** Fallback — Shopify storefront root */
  store: "https://kashiwellness.in",
};

/**
 * Returns the Shopify product URL for a given product ID.
 * Falls back to the main storefront if the ID is not recognised.
 *
 * @param {string} id  Product ID: 'veda' | 'charak' | 'combo'
 * @returns {string}   Full Shopify product URL
 */
export function getProductLink(id) {
  return PRODUCT_LINKS[id] ?? PRODUCT_LINKS.store;
}
