import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const popularSearches = [
    "iPhone 15",
    "Sony WH-1000XM5",
    "MacBook Air M3",
    "Nike Air Max",
    "Samsung Galaxy S24",
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 mb-8">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs text-muted-foreground">Live prices from 6 stores</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4 leading-tight">
            Stop overpaying.
            <br />
            <span className="text-primary">Start comparing.</span>
          </h1>

          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            Compare prices across Amazon, Flipkart, Myntra, Meesho, Ajio & Croma — instantly.
          </p>

          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search any product..."
              className="w-full h-14 rounded-xl border border-border bg-card pl-14 pr-14 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors btn-press"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-muted-foreground">Popular:</span>
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => navigate(`/search?q=${encodeURIComponent(term)}`)}
                className="text-xs px-3 py-1.5 rounded-md border border-border bg-secondary text-secondary-foreground hover:bg-surface-hover transition-colors btn-press"
              >
                {term}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSearch;
