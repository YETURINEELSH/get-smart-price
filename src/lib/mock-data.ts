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
      { store: "amazon", price: 109999, originalPrice: 134999, rating: 4.7, reviews: 23400, delivery: "1 day", link: "https://www.amazon.in/Samsung-Galaxy-S24-Ultra-256GB/dp/B0CS5XYZAB", inStock: true },
      { store: "flipkart", price: 108999, originalPrice: 134999, rating: 4.6, reviews: 19800, delivery: "2 days", link: "https://www.flipkart.com/samsung-galaxy-s24-ultra/p/itm345678", inStock: true },
      { store: "meesho", price: 112999, originalPrice: 134999, rating: 4.2, reviews: 3200, delivery: "5 days", link: "https://www.meesho.com/samsung-galaxy-s24-ultra/p/567890", inStock: true },
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
      { store: "myntra", price: 8995, originalPrice: 13995, rating: 4.3, reviews: 5600, delivery: "3 days", link: "https://www.myntra.com/nike-air-max-270/p/123456", inStock: true },
      { store: "ajio", price: 9495, originalPrice: 13995, rating: 4.2, reviews: 3400, delivery: "4 days", link: "https://www.ajio.com/nike-air-max-270/p/234567", inStock: true },
      { store: "amazon", price: 10495, originalPrice: 13995, rating: 4.4, reviews: 8900, delivery: "2 days", link: "https://www.amazon.in/Nike-Air-Max-270/dp/B0ABCDEF12", inStock: true },
      { store: "flipkart", price: 9795, originalPrice: 13995, rating: 4.1, reviews: 4200, delivery: "3 days", link: "https://www.flipkart.com/nike-air-max-270/p/itm901234", inStock: true },
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
      { store: "amazon", price: 99990, originalPrice: 114900, rating: 4.8, reviews: 15600, delivery: "1 day", link: "https://www.amazon.in/Apple-MacBook-Air-M3-256GB/dp/B0CX23ABCD", inStock: true },
      { store: "flipkart", price: 101990, originalPrice: 114900, rating: 4.7, reviews: 12300, delivery: "2 days", link: "https://www.flipkart.com/apple-macbook-air-m3/p/itm567890", inStock: true },
      { store: "croma", price: 104990, originalPrice: 114900, rating: 4.6, reviews: 4500, delivery: "3 days", link: "https://www.croma.com/apple-macbook-air-m3/p/345678", inStock: true },
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
      { store: "amazon", price: 999, originalPrice: 3990, rating: 4.1, reviews: 89400, delivery: "1 day", link: "https://www.amazon.in/boAt-Rockerz-450-Bluetooth/dp/B0BOAT450X", inStock: true },
      { store: "flipkart", price: 949, originalPrice: 3990, rating: 4.0, reviews: 67200, delivery: "2 days", link: "https://www.flipkart.com/boat-rockerz-450/p/itm112233", inStock: true },
      { store: "meesho", price: 899, originalPrice: 3990, rating: 3.8, reviews: 12100, delivery: "5 days", link: "https://www.meesho.com/boat-rockerz-450/p/445566", inStock: true },
      { store: "croma", price: 1199, originalPrice: 3990, rating: 4.2, reviews: 5600, delivery: "3 days", link: "https://www.croma.com/boat-rockerz-450/p/778899", inStock: true },
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
  {
    id: "7",
    name: "OnePlus 12 5G 256GB",
    category: "Smartphones",
    image: "",
    listings: [
      { store: "amazon", price: 57999, originalPrice: 69999, rating: 4.5, reviews: 18200, delivery: "1 day", link: "https://www.amazon.in/OnePlus-12-5G-256GB/dp/B0OP12XYZ", inStock: true },
      { store: "flipkart", price: 56999, originalPrice: 69999, rating: 4.4, reviews: 15400, delivery: "2 days", link: "https://www.flipkart.com/oneplus-12-5g/p/itm223344", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 64999, store: "amazon" },
      { date: "2025-11", price: 62999, store: "amazon" },
      { date: "2025-12", price: 59999, store: "amazon" },
      { date: "2026-01", price: 58999, store: "amazon" },
      { date: "2026-02", price: 57999, store: "amazon" },
      { date: "2026-03", price: 57999, store: "amazon" },
    ],
  },
  {
    id: "8",
    name: "HP Pavilion 15 Laptop Ryzen 7 16GB 512GB",
    category: "Laptops",
    image: "",
    listings: [
      { store: "amazon", price: 62990, originalPrice: 79990, rating: 4.3, reviews: 7800, delivery: "2 days", link: "https://www.amazon.in/HP-Pavilion-15-Ryzen/dp/B0HP15ABCD", inStock: true },
      { store: "flipkart", price: 61490, originalPrice: 79990, rating: 4.2, reviews: 6200, delivery: "3 days", link: "https://www.flipkart.com/hp-pavilion-15/p/itm334455", inStock: true },
      { store: "croma", price: 64990, originalPrice: 79990, rating: 4.1, reviews: 2100, delivery: "4 days", link: "https://www.croma.com/hp-pavilion-15/p/556677", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 74990, store: "flipkart" },
      { date: "2025-11", price: 69990, store: "flipkart" },
      { date: "2025-12", price: 65990, store: "flipkart" },
      { date: "2026-01", price: 63990, store: "flipkart" },
      { date: "2026-02", price: 62490, store: "flipkart" },
      { date: "2026-03", price: 61490, store: "flipkart" },
    ],
  },
  {
    id: "9",
    name: "Adidas Ultraboost 23 Running Shoes",
    category: "Footwear",
    image: "",
    listings: [
      { store: "myntra", price: 11999, originalPrice: 16999, rating: 4.4, reviews: 4300, delivery: "3 days", link: "https://www.myntra.com/adidas-ultraboost-23/p/334455", inStock: true },
      { store: "ajio", price: 12499, originalPrice: 16999, rating: 4.3, reviews: 2800, delivery: "4 days", link: "https://www.ajio.com/adidas-ultraboost-23/p/445566", inStock: true },
      { store: "amazon", price: 13499, originalPrice: 16999, rating: 4.5, reviews: 6100, delivery: "2 days", link: "https://www.amazon.in/Adidas-Ultraboost-23/dp/B0ADUB23XY", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 15999, store: "myntra" },
      { date: "2025-11", price: 14499, store: "myntra" },
      { date: "2025-12", price: 13499, store: "myntra" },
      { date: "2026-01", price: 12999, store: "myntra" },
      { date: "2026-02", price: 12499, store: "myntra" },
      { date: "2026-03", price: 11999, store: "myntra" },
    ],
  },
  {
    id: "10",
    name: "Apple iPad Air M2 11-inch 128GB WiFi",
    category: "Tablets",
    image: "",
    listings: [
      { store: "amazon", price: 54990, originalPrice: 69900, rating: 4.7, reviews: 9800, delivery: "1 day", link: "https://www.amazon.in/Apple-iPad-Air-M2-128GB/dp/B0IPADM2XY", inStock: true },
      { store: "flipkart", price: 55990, originalPrice: 69900, rating: 4.6, reviews: 7600, delivery: "2 days", link: "https://www.flipkart.com/apple-ipad-air-m2/p/itm556677", inStock: true },
      { store: "croma", price: 57990, originalPrice: 69900, rating: 4.5, reviews: 3200, delivery: "3 days", link: "https://www.croma.com/apple-ipad-air-m2/p/667788", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 64990, store: "amazon" },
      { date: "2025-11", price: 61990, store: "amazon" },
      { date: "2025-12", price: 58990, store: "amazon" },
      { date: "2026-01", price: 56990, store: "amazon" },
      { date: "2026-02", price: 55490, store: "amazon" },
      { date: "2026-03", price: 54990, store: "amazon" },
    ],
  },
  {
    id: "11",
    name: "Samsung 55-inch Crystal 4K Smart TV",
    category: "TVs",
    image: "",
    listings: [
      { store: "amazon", price: 39990, originalPrice: 54990, rating: 4.3, reviews: 14200, delivery: "3 days", link: "https://www.amazon.in/Samsung-55-Crystal-4K/dp/B0SAMTV55X", inStock: true },
      { store: "flipkart", price: 38990, originalPrice: 54990, rating: 4.2, reviews: 11800, delivery: "3 days", link: "https://www.flipkart.com/samsung-55-crystal-4k-tv/p/itm778899", inStock: true },
      { store: "croma", price: 41990, originalPrice: 54990, rating: 4.4, reviews: 5600, delivery: "5 days", link: "https://www.croma.com/samsung-55-crystal-4k/p/889900", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 49990, store: "flipkart" },
      { date: "2025-11", price: 45990, store: "flipkart" },
      { date: "2025-12", price: 42990, store: "flipkart" },
      { date: "2026-01", price: 40990, store: "flipkart" },
      { date: "2026-02", price: 39490, store: "flipkart" },
      { date: "2026-03", price: 38990, store: "flipkart" },
    ],
  },
  {
    id: "12",
    name: "Levi's 511 Slim Fit Jeans",
    category: "Clothing",
    image: "",
    listings: [
      { store: "myntra", price: 1799, originalPrice: 3999, rating: 4.2, reviews: 22300, delivery: "3 days", link: "https://www.myntra.com/levis-511-slim/p/112233", inStock: true },
      { store: "ajio", price: 1899, originalPrice: 3999, rating: 4.1, reviews: 15600, delivery: "4 days", link: "https://www.ajio.com/levis-511-slim/p/223344", inStock: true },
      { store: "amazon", price: 2199, originalPrice: 3999, rating: 4.3, reviews: 18900, delivery: "2 days", link: "https://www.amazon.in/Levis-511-Slim-Fit/dp/B0LEVIS511", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 2999, store: "myntra" },
      { date: "2025-11", price: 2499, store: "myntra" },
      { date: "2025-12", price: 2199, store: "myntra" },
      { date: "2026-01", price: 1999, store: "myntra" },
      { date: "2026-02", price: 1899, store: "myntra" },
      { date: "2026-03", price: 1799, store: "myntra" },
    ],
  },
  {
    id: "13",
    name: "JBL Charge 5 Portable Bluetooth Speaker",
    category: "Electronics",
    image: "",
    listings: [
      { store: "amazon", price: 12999, originalPrice: 18999, rating: 4.6, reviews: 11200, delivery: "1 day", link: "https://www.amazon.in/JBL-Charge-5-Speaker/dp/B0JBLCH5XY", inStock: true },
      { store: "flipkart", price: 13499, originalPrice: 18999, rating: 4.5, reviews: 8900, delivery: "2 days", link: "https://www.flipkart.com/jbl-charge-5/p/itm990011", inStock: true },
      { store: "croma", price: 14499, originalPrice: 18999, rating: 4.4, reviews: 3400, delivery: "3 days", link: "https://www.croma.com/jbl-charge-5/p/112233", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 16999, store: "amazon" },
      { date: "2025-11", price: 15499, store: "amazon" },
      { date: "2025-12", price: 14499, store: "amazon" },
      { date: "2026-01", price: 13999, store: "amazon" },
      { date: "2026-02", price: 13499, store: "amazon" },
      { date: "2026-03", price: 12999, store: "amazon" },
    ],
  },
  {
    id: "14",
    name: "Puma RS-X Sneakers",
    category: "Footwear",
    image: "",
    listings: [
      { store: "myntra", price: 5499, originalPrice: 9999, rating: 4.2, reviews: 6700, delivery: "3 days", link: "https://www.myntra.com/puma-rs-x/p/334455", inStock: true },
      { store: "ajio", price: 5799, originalPrice: 9999, rating: 4.1, reviews: 4500, delivery: "4 days", link: "https://www.ajio.com/puma-rs-x/p/445566", inStock: true },
      { store: "flipkart", price: 6299, originalPrice: 9999, rating: 4.0, reviews: 3200, delivery: "3 days", link: "https://www.flipkart.com/puma-rs-x/p/itm556677", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 8499, store: "myntra" },
      { date: "2025-11", price: 7499, store: "myntra" },
      { date: "2025-12", price: 6499, store: "myntra" },
      { date: "2026-01", price: 5999, store: "myntra" },
      { date: "2026-02", price: 5699, store: "myntra" },
      { date: "2026-03", price: 5499, store: "myntra" },
    ],
  },
  {
    id: "15",
    name: "Dell Inspiron 14 Laptop Intel i5 8GB 512GB",
    category: "Laptops",
    image: "",
    listings: [
      { store: "amazon", price: 52990, originalPrice: 68990, rating: 4.2, reviews: 5400, delivery: "2 days", link: "https://www.amazon.in/Dell-Inspiron-14-i5/dp/B0DELL14XY", inStock: true },
      { store: "flipkart", price: 51990, originalPrice: 68990, rating: 4.1, reviews: 4100, delivery: "3 days", link: "https://www.flipkart.com/dell-inspiron-14/p/itm667788", inStock: true },
      { store: "croma", price: 54990, originalPrice: 68990, rating: 4.0, reviews: 1800, delivery: "4 days", link: "https://www.croma.com/dell-inspiron-14/p/778899", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 64990, store: "flipkart" },
      { date: "2025-11", price: 59990, store: "flipkart" },
      { date: "2025-12", price: 55990, store: "flipkart" },
      { date: "2026-01", price: 53990, store: "flipkart" },
      { date: "2026-02", price: 52490, store: "flipkart" },
      { date: "2026-03", price: 51990, store: "flipkart" },
    ],
  },
  {
    id: "16",
    name: "Realme Narzo 70x 5G 128GB",
    category: "Smartphones",
    image: "",
    listings: [
      { store: "amazon", price: 11999, originalPrice: 15999, rating: 4.1, reviews: 23400, delivery: "1 day", link: "https://www.amazon.in/Realme-Narzo-70x-5G/dp/B0RN70XXYZ", inStock: true },
      { store: "flipkart", price: 11499, originalPrice: 15999, rating: 4.0, reviews: 19800, delivery: "2 days", link: "https://www.flipkart.com/realme-narzo-70x/p/itm889900", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 14999, store: "flipkart" },
      { date: "2025-11", price: 13999, store: "flipkart" },
      { date: "2025-12", price: 12999, store: "flipkart" },
      { date: "2026-01", price: 12499, store: "flipkart" },
      { date: "2026-02", price: 11999, store: "flipkart" },
      { date: "2026-03", price: 11499, store: "flipkart" },
    ],
  },
  {
    id: "17",
    name: "Apple AirPods Pro 2nd Gen USB-C",
    category: "Electronics",
    image: "",
    listings: [
      { store: "amazon", price: 20990, originalPrice: 24900, rating: 4.7, reviews: 32100, delivery: "1 day", link: "https://www.amazon.in/Apple-AirPods-Pro-2nd-Gen/dp/B0APP2USBX", inStock: true },
      { store: "flipkart", price: 21490, originalPrice: 24900, rating: 4.6, reviews: 25400, delivery: "2 days", link: "https://www.flipkart.com/apple-airpods-pro-2/p/itm001122", inStock: true },
      { store: "croma", price: 22490, originalPrice: 24900, rating: 4.5, reviews: 8900, delivery: "3 days", link: "https://www.croma.com/apple-airpods-pro-2/p/223344", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 24900, store: "amazon" },
      { date: "2025-11", price: 23490, store: "amazon" },
      { date: "2025-12", price: 22490, store: "amazon" },
      { date: "2026-01", price: 21490, store: "amazon" },
      { date: "2026-02", price: 20990, store: "amazon" },
      { date: "2026-03", price: 20990, store: "amazon" },
    ],
  },
  {
    id: "18",
    name: "Samsung Galaxy Watch 6 Classic 47mm",
    category: "Wearables",
    image: "",
    listings: [
      { store: "amazon", price: 24999, originalPrice: 37999, rating: 4.4, reviews: 6700, delivery: "1 day", link: "https://www.amazon.in/Samsung-Galaxy-Watch-6-Classic/dp/B0SGW6CLXY", inStock: true },
      { store: "flipkart", price: 25999, originalPrice: 37999, rating: 4.3, reviews: 5200, delivery: "2 days", link: "https://www.flipkart.com/samsung-galaxy-watch-6-classic/p/itm334455", inStock: true },
    ],
    priceHistory: [
      { date: "2025-10", price: 34999, store: "amazon" },
      { date: "2025-11", price: 31999, store: "amazon" },
      { date: "2025-12", price: 28999, store: "amazon" },
      { date: "2026-01", price: 26999, store: "amazon" },
      { date: "2026-02", price: 25499, store: "amazon" },
      { date: "2026-03", price: 24999, store: "amazon" },
    ],
  },
];

// Keyword tags for fuzzy matching
const productKeywords: Record<string, string[]> = {
  "1": ["sony", "headphones", "wireless", "bluetooth", "noise cancelling", "audio", "earphones", "music"],
  "2": ["apple", "iphone", "phone", "mobile", "smartphone", "ios", "iphone 15"],
  "3": ["samsung", "galaxy", "s24", "ultra", "phone", "mobile", "smartphone", "android"],
  "4": ["nike", "shoes", "running", "sneakers", "air max", "sports", "footwear"],
  "5": ["apple", "macbook", "laptop", "m3", "notebook", "computer", "mac"],
  "6": ["boat", "headphones", "bluetooth", "earphones", "audio", "music", "budget"],
  "7": ["oneplus", "phone", "mobile", "smartphone", "android", "5g"],
  "8": ["hp", "laptop", "pavilion", "ryzen", "notebook", "computer", "amd"],
  "9": ["adidas", "shoes", "running", "sneakers", "ultraboost", "sports", "footwear"],
  "10": ["apple", "ipad", "tablet", "m2", "ios"],
  "11": ["samsung", "tv", "television", "smart tv", "4k", "crystal", "display", "screen"],
  "12": ["levis", "jeans", "clothing", "denim", "pants", "fashion", "slim"],
  "13": ["jbl", "speaker", "bluetooth", "portable", "audio", "music", "charge"],
  "14": ["puma", "shoes", "sneakers", "footwear", "fashion", "sports"],
  "15": ["dell", "laptop", "inspiron", "intel", "notebook", "computer"],
  "16": ["realme", "narzo", "phone", "mobile", "smartphone", "android", "5g", "budget"],
  "17": ["apple", "airpods", "earbuds", "wireless", "bluetooth", "audio", "earphones"],
  "18": ["samsung", "watch", "smartwatch", "wearable", "galaxy watch", "fitness"],
};
export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return trendingProducts;
  const q = query.toLowerCase().trim();
  const queryWords = q.split(/\s+/);

  // Score each product by relevance
  const scored = trendingProducts.map((p) => {
    let score = 0;
    const name = p.name.toLowerCase();
    const category = p.category.toLowerCase();
    const keywords = productKeywords[p.id] || [];

    // Exact substring match in name (highest priority)
    if (name.includes(q)) score += 10;
    // Category match
    if (category.includes(q)) score += 8;
    // Individual word matches
    for (const word of queryWords) {
      if (name.includes(word)) score += 3;
      if (category.includes(word)) score += 2;
      if (keywords.some((k) => k.includes(word) || word.includes(k))) score += 2;
    }
    return { product: p, score };
  });

  const results = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.product);

  return results;
};

// Get fallback/recommended products when search yields no results
export const getRecommendedProducts = (excludeQuery?: string): Product[] => {
  return trendingProducts.slice(0, 6);
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
