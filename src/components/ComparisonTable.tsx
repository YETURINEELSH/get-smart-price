import { Star, ExternalLink, Trophy, Truck, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import { Product, formatPrice, getDiscount, stores, getBestDeal } from "@/lib/mock-data";

interface ComparisonTableProps {
  product: Product;
}

const ComparisonTable = ({ product }: ComparisonTableProps) => {
  const best = getBestDeal(product);
  const sorted = [...product.listings].sort((a, b) => a.price - b.price);

  return (
    <div className="surface-card overflow-hidden">
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-display text-sm text-foreground">Price Comparison</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{sorted.length} stores compared</p>
      </div>

      <div className="divide-y divide-border">
        {sorted.map((listing, i) => {
          const store = stores[listing.store];
          const isBest = listing.store === best?.store;
          const discount = getDiscount(listing.price, listing.originalPrice);

          return (
            <motion.div
              key={listing.store}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`flex items-center gap-4 px-5 h-16 ${
                isBest ? "bg-primary/5 border-l-2 border-l-primary" : ""
              } hover:bg-surface-hover transition-colors`}
            >
              <div className="flex items-center gap-3 w-36 shrink-0">
                <span className="text-lg">{store.logo}</span>
                <span className="text-sm font-medium text-foreground">{store.name}</span>
                {isBest && <Trophy className="h-3.5 w-3.5 text-primary" />}
              </div>

              <div className="flex-1 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono-price text-base text-foreground">{formatPrice(listing.price)}</span>
                  {discount > 0 && (
                    <span className="text-xs text-primary font-medium">{discount}% off</span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 fill-current" />
                  <span>{listing.rating}</span>
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Truck className="h-3 w-3" />
                  <span>{listing.delivery}</span>
                </div>

                {!listing.inStock && (
                  <span className="text-xs text-destructive">Out of stock</span>
                )}
              </div>

              <a
                href={listing.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-colors btn-press ${
                  isBest
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border bg-secondary text-secondary-foreground hover:bg-surface-hover"
                }`}
              >
                Buy
                <ExternalLink className="h-3 w-3" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonTable;
