import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { GameCard } from "@/components/ui/game-card/game-card";

const MOCK_GAMES = [
  { id: 1, title: "Cyber Nexus 2077", progress: 68, timePlayed: "127h 32m", lastPlayed: "2 hours ago", imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070" },
  { id: 2, title: "Stellar Odyssey", progress: 34, timePlayed: "45h 18m", lastPlayed: "Yesterday", imageUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000" },
  { id: 3, title: "Shadow Realm", progress: 91, timePlayed: "89h 45m", lastPlayed: "3 days ago", imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071" },
  { id: 4, title: "Neon Racers", progress: 55, timePlayed: "23h 12m", lastPlayed: "Last week", imageUrl: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070" },
];

export const ContinuePlaying = () => {
  return (
    <section className="flex flex-col gap-6 mb-12">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-text-main">Continue Playing</h2>
          <p className="text-sm text-text-muted">Pick up where you left off</p>
        </div>
        <Link href="/library" className="text-sm text-text-muted hover:text-primary transition-colors flex items-center gap-1">
          View Library <ChevronRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {MOCK_GAMES.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </section>
  );
};