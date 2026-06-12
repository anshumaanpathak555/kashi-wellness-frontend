export const PRODUCTS = {
  veda: {
    id: "veda",
    name: "VEDA",
    tagline: "Pain Relief Roll-On",
    formula: "Ayurvedic Formula · Fast Acting Relief",
    description:
      "A fast-acting daily roll-on crafted with cooling Ayurvedic botanicals — for everyday tension, knots and muscle fatigue.",
    price: 599,
    mrp: 799,
    image:
      "https://customer-assets.emergentagent.com/job_2ed6455a-939b-4454-bf51-73c5f3ebe46b/artifacts/dmqp55rh_veda.png",
    badge: "Fast Acting",
    accent: "forest",
    benefits: [
      "Joint Pain Relief",
      "Muscle Pain Relief",
      "Knee & Heel Support",
      "Back & Shoulder Relief",
      "Anti Inflammatory",
      "Fast Acting Comfort",
    ],
    volume: "100 ml · 3.38 fl. oz.",
  },
  charak: {
    id: "charak",
    name: "CHARAK",
    tagline: "Pain Relief Roll-On",
    formula: "Ayurvedic Formula · Deep Relief",
    description:
      "A deep, warming formula inspired by the wisdom of Acharya Charak — for stiffness, chronic ache and long-lasting comfort.",
    price: 599,
    mrp: 799,
    image:
      "https://customer-assets.emergentagent.com/job_2ed6455a-939b-4454-bf51-73c5f3ebe46b/artifacts/qlp63vq5_charak.png",
    badge: "Deep Relief",
    accent: "sandstone",
    benefits: [
      "Relieves Stiffness",
      "Soothes Aches",
      "Supports Mobility",
      "Eases Tension",
      "Deep Penetrating Relief",
      "Long Lasting Comfort",
    ],
    volume: "100 ml · 3.38 fl. oz.",
  },
  combo: {
    id: "combo",
    name: "VEDA + CHARAK",
    tagline: "The Daily Ritual Duo",
    formula: "Fast Acting · Deep Relief",
    description:
      "The complete Kashi ritual — fast morning relief with VEDA, deep evening recovery with CHARAK. Two formulas, one timeless balance.",
    price: 999,
    mrp: 1398,
    image:
      "https://customer-assets.emergentagent.com/job_2ed6455a-939b-4454-bf51-73c5f3ebe46b/artifacts/wv0o7ep8_bundle.png",
    badge: "Best Value · Most Popular",
    accent: "gold",
    benefits: [
      "Complete morning + night ritual",
      "Fast acting & deep relief",
      "Save ₹399 (29% off)",
      "Premium gift-ready packaging",
    ],
    volume: "2 × 100 ml",
  },
};

export const PRODUCT_LIST = [PRODUCTS.veda, PRODUCTS.charak, PRODUCTS.combo];
