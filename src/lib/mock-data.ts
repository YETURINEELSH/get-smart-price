export type Store = {
  name: string;
  logo: string;
  color: string;
};

export const stores: Record<string, Store> = {
  amazon: { name: "Amazon", logo: "🅰", color: "hsl(37, 90%, 51%)" },
  flipkart: { name: "Flipkart", logo: "🛒", color: "hsl(210, 90%, 55%)" },
  myntra: { name: "Myntra", logo: "👗", color: "hsl(340, 80%, 55%)" },
  meesho: { name: "Meesho", logo: "🛍", color: "hsl(280, 70%, 55%)" },
  ajio: { name: "Ajio", logo: "✨", color: "hsl(20, 85%, 55%)" },
  croma: { name: "Croma", logo: "⚡", color: "hsl(160, 70%, 45%)" },
};

export type ProductListing = {
  store: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  delivery: string;
  link: string;
  inStock: boolean;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  listings: ProductListing[];
  priceHistory: { date: string; price: number; store: string }[];
};

export const trendingProducts: Product[] = [
  {
    id: "1",
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "Electronics",
    image: "",
    listings: [
      { store: "amazon", price: 24990, originalPrice: 34990, rating: 4.5, reviews: 12340, delivery: "1 day", link: "https://www.amazon.in/Sony-WH-1000XM5-Cancelling-Headphones/dp/B0BX2L8PBS", inStock: true },
      { store: "flipkart", price: 25499, originalPrice: 34990, rating: 4.4, reviews: 8920, delivery: "2 days", link: "https://www.flipkart.com/sony-wh-1000xm5-headphones/p/itm123456", inStock: true },
      { store: "croma", price: 27990, originalPrice: 34990, rating: 4.3, reviews: 3210, delivery: "3 days", link: "https://www.croma.com/sony-wh-1000xm5/p/123456", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 29990, store: "amazon" },
      { date: "2025-11", price: 27990, store: "amazon" },
      { date: "2025-12", price: 26990, store: "amazon" },
      { date: "2026-01", price: 25990, store: "amazon" },
      { date: "2026-02", price: 24990, store: "amazon" },
      { date: "2026-03", price: 24990, store: "amazon" },
    ],
  },
  {
    id: "2",
    name: "Apple iPhone 15 128GB",
    category: "Smartphones",
    image: "",
    listings: [
      { store: "amazon", price: 62999, originalPrice: 79900, rating: 4.6, reviews: 45200, delivery: "1 day", link: "https://www.amazon.in/Apple-iPhone-15-128-GB/dp/B0CHX1W1XY", inStock: true },
      { store: "flipkart", price: 61999, originalPrice: 79900, rating: 4.5, reviews: 38100, delivery: "2 days", link: "https://www.flipkart.com/apple-iphone-15-128gb/p/itm789012", inStock: true },
      { store: "croma", price: 65999, originalPrice: 79900, rating: 4.4, reviews: 12800, delivery: "3 days", link: "https://www.croma.com/apple-iphone-15/p/789012", inStock: true },
      { store: "ajio", price: 64999, originalPrice: 79900, rating: 4.3, reviews: 2100, delivery: "4 days", link: "https://www.ajio.com/apple-iphone-15/p/456789", inStock: false },
    ],
    priceHistory: [
      { date: "2025-10", price: 71999, store: "flipkart" },
      { date: "2025-11", price: 69999, store: "flipkart" },
      { date: "2025-12", price: 67999, store: "flipkart" },
      { date: "2026-01", price: 64999, store: "flipkart" },
      { date: "2026-02", price: 62999, store: "flipkart" },
      { date: "2026-03", price: 61999, store: "flipkart" },
    ],
  },
  {
    id: "3",
    name: "Samsung Galaxy S24 Ultra 256GB",
    category: "Smartphones",
    image: "",
    listings: [
      { store: "amazon", price: 109999, originalPrice: 134999, rating: 4.7, reviews: 23400, delivery: "1 day", link: "#", inStock: true },
      { store: "flipkart", price: 108999, originalPrice: 134999, rating: 4.6, reviews: 19800, delivery: "2 days", link: "#", inStock: true },
      { store: "meesho", price: 112999, originalPrice: 134999, rating: 4.2, reviews: 3200, delivery: "5 days", link: "#", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 124999, store: "flipkart" },
      { date: "2025-11", price: 119999, store: "flipkart" },
      { date: "2025-12", price: 114999, store: "flipkart" },
      { date: "2026-01", price: 112999, store: "flipkart" },
      { date: "2026-02", price: 109999, store: "flipkart" },
      { date: "2026-03", price: 108999, store: "flipkart" },
    ],
  },
  {
    id: "4",
    name: "Nike Air Max 270 Running Shoes",
    category: "Footwear",
    image: "",
    listings: [
      { store: "myntra", price: 8995, originalPrice: 13995, rating: 4.3, reviews: 5600, delivery: "3 days", link: "#", inStock: true },
      { store: "ajio", price: 9495, originalPrice: 13995, rating: 4.2, reviews: 3400, delivery: "4 days", link: "#", inStock: true },
      { store: "amazon", price: 10495, originalPrice: 13995, rating: 4.4, reviews: 8900, delivery: "2 days", link: "#", inStock: true },
      { store: "flipkart", price: 9795, originalPrice: 13995, rating: 4.1, reviews: 4200, delivery: "3 days", link: "#", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 12995, store: "myntra" },
      { date: "2025-11", price: 11495, store: "myntra" },
      { date: "2025-12", price: 10495, store: "myntra" },
      { date: "2026-01", price: 9995, store: "myntra" },
      { date: "2026-02", price: 9495, store: "myntra" },
      { date: "2026-03", price: 8995, store: "myntra" },
    ],
  },
  {
    id: "5",
    name: "MacBook Air M3 13-inch 256GB",
    category: "Laptops",
    image: "",
    listings: [
      { store: "amazon", price: 99990, originalPrice: 114900, rating: 4.8, reviews: 15600, delivery: "1 day", link: "#", inStock: true },
      { store: "flipkart", price: 101990, originalPrice: 114900, rating: 4.7, reviews: 12300, delivery: "2 days", link: "#", inStock: true },
      { store: "croma", price: 104990, originalPrice: 114900, rating: 4.6, reviews: 4500, delivery: "3 days", link: "#", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 112990, store: "amazon" },
      { date: "2025-11", price: 109990, store: "amazon" },
      { date: "2025-12", price: 104990, store: "amazon" },
      { date: "2026-01", price: 102990, store: "amazon" },
      { date: "2026-02", price: 101990, store: "amazon" },
      { date: "2026-03", price: 99990, store: "amazon" },
    ],
  },
  {
    id: "6",
    name: "boAt Rockerz 450 Bluetooth Headphones",
    category: "Electronics",
    image: "",
    listings: [
      { store: "amazon", price: 999, originalPrice: 3990, rating: 4.1, reviews: 89400, delivery: "1 day", link: "#", inStock: true },
      { store: "flipkart", price: 949, originalPrice: 3990, rating: 4.0, reviews: 67200, delivery: "2 days", link: "#", inStock: true },
      { store: "meesho", price: 899, originalPrice: 3990, rating: 3.8, reviews: 12100, delivery: "5 days", link: "#", inStock: true },
      { store: "croma", price: 1199, originalPrice: 3990, rating: 4.2, reviews: 5600, delivery: "3 days", link: "#", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 1499, store: "meesho" },
      { date: "2025-11", price: 1299, store: "meesho" },
      { date: "2025-12", price: 1099, store: "meesho" },
      { date: "2026-01", price: 999, store: "meesho" },
      { date: "2026-02", price: 949, store: "meesho" },
      { date: "2026-03", price: 899, store: "meesho" },
    ],
  },
];

export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return trendingProducts;
  const q = query.toLowerCase();
  return trendingProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
};

export const getProduct = (id: string): Product | undefined => {
  return trendingProducts.find((p) => p.id === id);
};

export const getBestDeal = (product: Product) => {
  const available = product.listings.filter((l) => l.inStock);
  if (!available.length) return null;
  return available.reduce((best, l) => (l.price < best.price ? l : best));
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

export const getDiscount = (price: number, originalPrice: number) => {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};
