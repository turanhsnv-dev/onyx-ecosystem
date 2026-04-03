import { Search, Filter, Grid, List, Clock, Download, Gamepad2, Play } from "lucide-react";
import { LibraryCard } from "@/components/ui/library-card/library-card";

const LIBRARY_GAMES = [
  { id: 1, title: "Cyber Nexus 2077", category: "RPG OPEN WORLD", rating: "4.8", imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070", action: "play" as const },
  { id: 2, title: "Shadow Realm", category: "ACTION SOULS-LIKE", rating: "4.9", imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071", action: "play" as const },
  { id: 3, title: "Stellar Odyssey", category: "SPACE EXPLORATION", rating: "4.7", imageUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000", action: "play" as const },
  { id: 4, title: "Neon Racers", category: "RACING F2P", rating: "4.5", imageUrl: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070", action: "install" as const },
  { id: 5, title: "Nova Craft", category: "SURVIVAL BUILDING", rating: "4.6", imageUrl: "https://images.unsplash.com/photo-1627856013091-fed6e4e04ddc?q=80&w=2070", action: "play" as const },
  { id: 6, title: "Phantom Strike", category: "FPS TACTICAL", rating: "4.4", imageUrl: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2000", action: "install" as const },
  { id: 7, title: "Dragon Legacy", category: "FANTASY RPG", rating: "4.7", imageUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069", action: "play" as const },
  { id: 8, title: "Turbo Drift X", category: "RACING ARCADE", rating: "4.3", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070", action: "install" as const },
];

export default function LibraryPage() {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto pb-20">

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">My Library</h1>
          <p className="text-text-muted">Your collection of games</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-xl text-sm text-text-main">
            <Gamepad2 size={16} className="text-primary" /> 67 Games
          </div>
          <div className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-xl text-sm text-text-main">
            <Download size={16} className="text-teal-500" /> 12 Installed
          </div>
          <div className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-xl text-sm text-text-main">
            <Clock size={16} className="text-text-muted" /> 2,456h Total
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 bg-surface border border-border rounded-xl flex items-center gap-3 px-4 py-3 focus-within:border-primary/50 transition-colors">
          <Search size={20} className="text-text-muted" />
          <input type="text" placeholder="Search your library..." className="bg-transparent border-none outline-none text-sm text-white w-full" />
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-3 bg-surface border border-border rounded-xl text-sm text-text-main flex items-center gap-2 hover:border-primary/50 transition-colors">
            <Filter size={16} /> Filters
          </button>

          <div className="flex bg-surface border border-border rounded-xl p-1">
            <button className="p-2 rounded-lg bg-surface-light text-white"><Grid size={16} /></button>
            <button className="p-2 rounded-lg text-text-muted hover:text-white transition-colors"><List size={16} /></button>
          </div>

          <select className="px-4 py-3 bg-surface border border-border rounded-xl text-sm text-text-main outline-none hover:border-primary/50 transition-colors cursor-pointer">
            <option>Recently Played</option>
            <option>Alphabetical</option>
            <option>Playtime</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-border pb-4">
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold flex items-center gap-2">
          All Games
        </button>
        <button className="px-4 py-2 text-text-muted hover:text-white hover:bg-surface rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
          <Download size={16} /> Installed
        </button>
        <button className="px-4 py-2 text-text-muted hover:text-white hover:bg-surface rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
          <Clock size={16} /> Recently Played
        </button>
        <button className="px-4 py-2 text-text-muted hover:text-white hover:bg-surface rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
          <Play size={16} /> Ready to Play
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LIBRARY_GAMES.map((game) => (
          <LibraryCard key={game.id} {...game} />
        ))}
      </div>

    </div>
  );
}