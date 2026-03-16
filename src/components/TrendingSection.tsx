import { trendingProducts } from "@/lib/mock-data";
import ProductCard from "./ProductCard";
import { TrendingUp } from "lucide-react";

const TrendingSection = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <TrendingUp className="h-4 w-4 text-accent" />
          </div>
          <div>
            <h2 className="font-display text-xl text-foreground">Trending Products</h2>
            <p className="text-xs text-muted-foreground">Updated 2 minutes ago</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
