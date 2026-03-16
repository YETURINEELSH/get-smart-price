import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { searchProducts } from "@/lib/mock-data";
import { Search } from "lucide-react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = searchProducts(query);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Search className="h-5 w-5 text-muted-foreground" />
          <div>
            <h1 className="font-display text-xl text-foreground">
              {query ? `Results for "${query}"` : "All Products"}
            </h1>
            <p className="text-xs text-muted-foreground mt-0.5">{results.length} products found</p>
          </div>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="surface-card p-16 text-center">
            <p className="text-muted-foreground">No products found for "{query}"</p>
            <p className="text-xs text-muted-foreground mt-1">Try searching for something else</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
