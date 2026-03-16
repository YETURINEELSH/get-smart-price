import { stores } from "@/lib/mock-data";

const StoreBar = () => {
  const storeList = Object.values(stores);

  return (
    <section className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <p className="text-xs text-muted-foreground text-center mb-6">
          Comparing prices across
        </p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {storeList.map((store) => (
            <div
              key={store.name}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <span className="text-xl">{store.logo}</span>
              <span className="text-sm font-medium">{store.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreBar;
