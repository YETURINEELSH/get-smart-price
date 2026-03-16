import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ExternalLink, TrendingDown } from "lucide-react";
import { Product, getBestDeal, formatPrice, getDiscount, stores } from "@/lib/mock-data";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const best = getBestDeal(product);
  if (!best) return null;

  const discount = getDiscount(best.price, best.originalPrice);
  const store = stores[best.store];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/product/${product.id}`}
        className="group surface-card block p-5 hover:border-primary/30 transition-all duration-200"
      >
        <div className="flex items-start gap-4">
          <div className="h-20 w-20 rounded-lg bg-secondary flex items-center justify-center shrink-0 text-3xl">
            {store.logo}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
            <h3 className="font-display text-sm text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            <div className="flex items-center gap-2 mb-3">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span className="text-xs text-foreground">{best.rating}</span>
              <span className="text-xs text-muted-foreground">({best.reviews.toLocaleString()})</span>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono-price text-lg text-foreground">{formatPrice(best.price)}</span>
                  {discount > 0 && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                      <TrendingDown className="h-3 w-3" />
                      {discount}% off
                    </span>
                  )}
                </div>
                {discount > 0 && (
                  <span className="font-mono-price text-xs text-muted-foreground line-through">
                    {formatPrice(best.originalPrice)}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span>{store.name}</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>

        {product.listings.length > 1 && (
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Compare across {product.listings.length} stores →
            </p>
          </div>
        )}
      </Link>
    </motion.div>
  );
};

export default ProductCard;
