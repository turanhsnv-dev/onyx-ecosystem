import { Search, ChevronDown, Filter } from "lucide-react";

export const StoreFilters = () => {
  return (
    <div className="flex flex-col gap-6 mb-8">
      <div className="bg-surface border border-border rounded-xl flex items-center gap-3 px-4 py-3">
        <Search size={20} className="text-text-muted" />
        <input type="text" placeholder="Search games..." className="bg-transparent border-none outline-none text-white w-full" />
      </div>

      <div className="flex flex-wrap gap-3">
        {["Genre", "Price", "Rating"].map(f => (
          <button key={f} className="px-4 py-2 bg-surface border border-border rounded-lg text-sm text-text-main flex items-center gap-2 hover:border-primary transition-colors">
            {f} <ChevronDown size={14} />
          </button>
        ))}
        <button className="ml-auto px-4 py-2 text-sm text-text-main flex items-center gap-2 border border-border rounded-lg hover:bg-surface">
          <Filter size={14} /> More Filters
        </button>
      </div>
    </div>
  );
};