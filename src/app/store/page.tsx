import { DealBanner } from "@/features/store/deal-banner";
import { StoreFilters } from "@/features/store/store-filters";
import { TrendingCard } from "@/components/ui/trending-card/trending-card";

export default function StorePage() {
  const STORE_GAMES = [
    { id: 1, title: "Cyber Nexus 2077", category: "RPG OPEN WORLD", rating: "4.8", price: "$59.99", originalPrice: "$79.99", imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070" },
    { id: 2, title: "Shadow Realm", category: "ACTION SOULS-LIKE", rating: "4.9", price: "$49.99", imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071" },
    { id: 3, title: "Stellar Odyssey", category: "SPACE EXPLORATION", rating: "4.7", price: "$69.99", imageUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000" },
    { id: 4, title: "Neon Racers", category: "RACING F2P", rating: "4.5", price: "Free", imageUrl: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070" },
    { id: 5, title: "Nova Craft", category: "SURVIVAL BUILDING", rating: "4.6", price: "$29.99", imageUrl: "https://images.unsplash.com/photo-1627856013091-fed6e4e04ddc?q=80&w=2070" },
    { id: 6, title: "Phantom Strike", category: "FPS TACTICAL", rating: "4.4", price: "$39.99", originalPrice: "$59.99", imageUrl: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2000" },
    { id: 7, title: "Dragon Legacy", category: "FANTASY RPG", rating: "4.7", price: "$54.99", imageUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069" },
    { id: 8, title: "Turbo Drift X", category: "RACING ARCADE", rating: "4.3", price: "$19.99", originalPrice: "$39.99", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070" },
    { id: 9, title: "Cosmic Warfare", category: "STRATEGY SCI-FI", rating: "4.5", price: "$44.99", imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072" },
    { id: 10, title: "Urban Legends", category: "HORROR MYSTERY", rating: "4.2", price: "$34.99", imageUrl: "https://images.unsplash.com/photo-1505635330303-d3f146aa1644?q=80&w=2000" },
    { id: 11, title: "Battle Arena Pro", category: "MOBA F2P", rating: "4.6", price: "Free", imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070" },
    { id: 12, title: "Pixel Quest", category: "INDIE PLATFORMER", rating: "4.8", price: "$14.99", imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070" },
  ];
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto pb-20">
      <h1 className="text-4xl font-black text-white mb-2">Obsidian Store</h1>
      <p className="text-text-muted mb-8">Discover your next favorite game from our collection</p>

      <DealBanner />
      <StoreFilters />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">All Games (12)</h2>
        <select className="bg-surface border border-border text-text-main text-sm rounded-lg p-2 outline-none">
          <option>Popular</option>
          <option>Newest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {STORE_GAMES.map((game) => (
          <TrendingCard key={game.id} {...game} />
        ))}
      </div>
    </div>
  );
}