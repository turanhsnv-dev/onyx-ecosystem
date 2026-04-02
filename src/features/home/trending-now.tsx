import { ChevronRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { TrendingCard } from "@/components/ui/trending-card/trending-card";

const MOCK_TRENDING = [
  { id: 1, title: "Cyber Nexus 2077", category: "RPG Open World", rating: "4.8", price: "$59.99", originalPrice: "$79.99", discountPercentage: "-25%", imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070" },
  { id: 2, title: "Shadow Realm", category: "Action Souls-like", rating: "4.9", price: "$49.99", imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071" },
  { id: 3, title: "Stellar Odyssey", category: "Space Exploration", rating: "4.7", price: "$69.99", imageUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000" },
  { id: 4, title: "Neon Racers", category: "Racing F2P", rating: "4.5", price: "Free", imageUrl: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070" },
  { id: 5, title: "Nova Craft", category: "Survival Building", rating: "4.6", price: "$29.99", imageUrl: "https://images.unsplash.com/photo-1627856013091-fed6e4e04ddc?q=80&w=2070" },
];

export const TrendingNow = () => {
  return (
    <section className="flex flex-col gap-6 mb-12">
      <div className="flex items-end justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
            <TrendingUp size={20} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-text-main">Trending Now</h2>
            <p className="text-sm text-text-muted">Most popular games this week</p>
          </div>
        </div>
        <Link href="/store" className="text-sm text-text-muted hover:text-primary transition-colors flex items-center gap-1">
          View Store <ChevronRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {MOCK_TRENDING.map((game) => (
          <TrendingCard key={game.id} {...game} />
        ))}
      </div>
    </section>
  );
};