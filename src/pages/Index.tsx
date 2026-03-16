import Navbar from "@/components/Navbar";
import HeroSearch from "@/components/HeroSearch";
import StoreBar from "@/components/StoreBar";
import TrendingSection from "@/components/TrendingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSearch />
      <StoreBar />
      <TrendingSection />

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 SmartPrice. Prices are fetched in real-time and may vary.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
