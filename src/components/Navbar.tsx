import { Search, Bell, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">S</span>
          </div>
          <span className="font-display text-lg text-foreground">SmartPrice</span>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-xl hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products across 6 stores..."
              className="w-full h-10 rounded-lg border border-border bg-secondary pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
        </form>

        <div className="flex items-center gap-3">
          <button className="h-9 w-9 rounded-lg border border-border bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors btn-press">
            <Bell className="h-4 w-4" />
          </button>
          <button className="h-9 w-9 rounded-lg border border-border bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors btn-press">
            <User className="h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
