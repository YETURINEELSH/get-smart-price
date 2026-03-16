import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BestDealCard from "@/components/BestDealCard";
import ComparisonTable from "@/components/ComparisonTable";
import PriceHistoryChart from "@/components/PriceHistoryChart";
import { getProduct } from "@/lib/mock-data";
import { ArrowLeft, Bell } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProduct(id || "");
  const [alertSet, setAlertSet] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24 text-center">
          <p className="text-muted-foreground">Product not found.</p>
          <Link to="/" className="text-primary text-sm mt-2 inline-block">← Back home</Link>
        </div>
      </div>
    );
  }

  const handleSetAlert = () => {
    setAlertSet(true);
    toast.success("Price alert set! We'll notify you when the price drops.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-6 py-10">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to search
        </Link>

        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
            <h1 className="font-display text-2xl text-foreground">{product.name}</h1>
          </div>

          <button
            onClick={handleSetAlert}
            disabled={alertSet}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors btn-press ${
              alertSet
                ? "border border-primary/30 bg-primary/10 text-primary cursor-default"
                : "border border-border bg-secondary text-secondary-foreground hover:bg-surface-hover"
            }`}
          >
            <Bell className={`h-4 w-4 ${alertSet ? "fill-primary" : ""}`} />
            {alertSet ? "Alert Active" : "Set Price Alert"}
          </button>
        </div>

        <div className="space-y-6">
          <BestDealCard product={product} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ComparisonTable product={product} />
            </div>
            <div>
              <PriceHistoryChart data={product.priceHistory} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
