import { Trophy, ExternalLink, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import { Product, getBestDeal, formatPrice, getDiscount, stores } from "@/lib/mock-data";

interface BestDealCardProps {
  product: Product;
}

const BestDealCard = ({ product }: BestDealCardProps) => {
  const best = getBestDeal(product);
  if (!best) return null;

  const store = stores[best.store];
  const discount = getDiscount(best.price, best.originalPrice);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="surface-card border-primary/30 glow-emerald p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium text-primary uppercase tracking-wider">Recommended — Best Deal</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">
          {store.logo}
        </div>

        <div className="flex-1">
          <p className="font-display text-base text-foreground">{store.name}</p>
          <div className="flex items-center gap-3 mt-1">
            <span className="font-mono-price text-2xl text-foreground">{formatPrice(best.price)}</span>
            {discount > 0 && (
              <>
                <span className="font-mono-price text-sm text-muted-foreground line-through">{formatPrice(best.originalPrice)}</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                  <TrendingDown className="h-3 w-3" />
                  Save {discount}%
                </span>
              </>
            )}
          </div>
        </div>

        <a
          href={best.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors btn-press"
        >
          Buy Now
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default BestDealCard;
