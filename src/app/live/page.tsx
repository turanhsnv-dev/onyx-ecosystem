import { Search, Filter, Users, TrendingUp, Eye } from "lucide-react";
import { StreamCard } from "@/components/ui/stream-card/stream-card";
import { Badge } from "@/components/ui/badge/badge";

// Kateqoriyalar üçün Mock Data
const CATEGORIES = [
  { name: "All", count: "1234", active: true },
  { name: "Action", count: "456", active: false },
  { name: "RPG", count: "321", active: false },
  { name: "FPS", count: "287", active: false },
  { name: "Strategy", count: "198", active: false },
  { name: "Racing", count: "156", active: false },
  { name: "Sports", count: "143", active: false },
];

// All Streams üçün Mock Data
const ALL_STREAMS = [
  { id: 1, title: "First playthrough of Cyber Nexus 2077!", streamer: "NightBlade", game: "Cyber Nexus 2077", viewers: "12.5K", tags: ["First Playthrough", "English", "RPG"], thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070", avatarUrl: "https://i.pravatar.cc/150?u=1" },
  { id: 2, title: "Ranked Grind to Diamond | !commands", streamer: "PhantomX", game: "Neon Racers", viewers: "8.7K", tags: ["Ranked", "Competitive", "Racing"], thumbnailUrl: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070", avatarUrl: "https://i.pravatar.cc/150?u=2" },
  { id: 3, title: "ALL BOSSES NO HIT RUN - Day 15", streamer: "ShadowMyst", game: "Shadow Realm", viewers: "34.9K", tags: ["Challenge Run", "Pro", "Action"], thumbnailUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071", avatarUrl: "https://i.pravatar.cc/150?u=3" },
  { id: 4, title: "Exploring the outer rim! | Chill stream", streamer: "VoidWalker", game: "Stellar Odyssey", viewers: "5.6K", tags: ["Exploration", "Chill", "Space"], thumbnailUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000", avatarUrl: "https://i.pravatar.cc/150?u=4" },
  { id: 5, title: "Building the ULTIMATE base | Day 47", streamer: "CyberPunk99", game: "Nova Craft", viewers: "2.1K", tags: ["Building", "Creative", "Survival"], thumbnailUrl: "https://images.unsplash.com/photo-1627856013091-fed6e4e04ddc?q=80&w=2070", avatarUrl: "https://i.pravatar.cc/150?u=5" },
  { id: 6, title: "$10K Tourney Tomorrow Practice", streamer: "NeonRider", game: "Neon Racers", viewers: "15.2K", tags: ["Tournament", "Pro", "Racing"], thumbnailUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070", avatarUrl: "https://i.pravatar.cc/150?u=6" },
  { id: 7, title: "Indie Games Showcase! What's new?", streamer: "PixelHunter", game: "Various", viewers: "1.9K", tags: ["Indie", "Variety", "English"], thumbnailUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070", avatarUrl: "https://i.pravatar.cc/150?u=7" },
  { id: 8, title: "New DLC First Look! 🔥", streamer: "DragonSlayer", game: "Dragon Legacy", viewers: "9.2K", tags: ["DLC", "First Look", "Fantasy"], thumbnailUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069", avatarUrl: "https://i.pravatar.cc/150?u=8" },
];

export default function LivePage() {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto pb-20">

      {/* 1. Header və Axtarış */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-white mb-2">Streamer's Den</h1>
        <p className="text-text-muted mb-6">Watch live streams from your favorite gamers</p>

        <div className="flex gap-4">
          <div className="flex-1 bg-surface border border-border rounded-xl flex items-center gap-3 px-4 py-3 focus-within:border-primary/50 transition-colors">
            <Search size={20} className="text-text-muted" />
            <input type="text" placeholder="Search streams, games, or streamers..." className="bg-transparent border-none outline-none text-sm text-white w-full" />
          </div>
          <button className="px-6 py-3 bg-surface border border-border rounded-xl text-sm text-text-main flex items-center gap-2 hover:border-primary/50 transition-colors">
            <Filter size={16} /> Filters
          </button>
        </div>
      </div>

      {/* 2. Kateqoriyalar (Tabs) */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.name}
            className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors ${cat.active ? "bg-primary text-white" : "bg-surface border border-border text-text-main hover:border-primary/50"
              }`}
          >
            {cat.name}
            <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${cat.active ? "bg-black/20" : "bg-background text-text-muted"}`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* 3. Stats Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-surface border border-border rounded-2xl p-6 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          </div>
          <div>
            <div className="text-2xl font-black text-white">1,234</div>
            <div className="text-sm text-text-muted">Live Now</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Users className="text-primary" size={24} />
          </div>
          <div>
            <div className="text-2xl font-black text-white">89.4K</div>
            <div className="text-sm text-text-muted">Watching</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
            <TrendingUp className="text-teal-500" size={24} />
          </div>
          <div>
            <div className="text-2xl font-black text-white">Shadow Realm</div>
            <div className="text-sm text-text-muted">Top Game</div>
          </div>
        </div>
      </div>

      {/* 4. Featured Stream (Asimmetrik Grid) */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Featured Stream</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[400px]">

          {/* Böyük Kart (Sol tərəf) */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer border border-border hover:border-primary/50 transition-colors">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <Badge variant="live"><span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE</Badge>
              <Badge variant="glass"><Eye size={12} /> 34.9K</Badge>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-end gap-4">
              <img src="https://i.pravatar.cc/150?u=3" className="w-12 h-12 rounded-full border-2 border-primary" alt="ShadowMyst" />
              <div className="flex flex-col">
                <div className="flex gap-2 mb-2">
                  <Badge variant="glass" className="text-[10px]">Challenge Run</Badge>
                  <Badge variant="glass" className="text-[10px]">Pro</Badge>
                  <Badge variant="glass" className="text-[10px]">Action</Badge>
                </div>
                <h3 className="text-xl font-bold text-white line-clamp-1">ALL BOSSES NO HIT RUN - Day 15 - The Final Boss</h3>
                <p className="text-sm text-text-muted">ShadowMyst • Shadow Realm</p>
              </div>
            </div>
          </div>

          {/* İki Balaca Kart (Sağ tərəf) */}
          <div className="flex flex-col gap-4">
            {[
              { title: "First playthrough of Cyber Nexus 2077!", name: "NightBlade", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070", view: "12.5K", avatar: "1" },
              { title: "Tournament Practice | $10K Tourney Tomorrow", name: "NeonRider", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070", view: "15.2K", avatar: "6" }
            ].map((stream, i) => (
              <div key={i} className="flex-1 relative rounded-2xl overflow-hidden group cursor-pointer border border-border hover:border-primary/50 transition-colors min-h-[190px]">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${stream.img}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                  <Badge variant="live" className="scale-75 origin-top-left"><span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE</Badge>
                  <Badge variant="glass" className="scale-75 origin-top-right"><Eye size={12} /> {stream.view}</Badge>
                </div>

                <div className="absolute bottom-3 left-3 flex gap-3 items-center">
                  <img src={`https://i.pravatar.cc/150?u=${stream.avatar}`} className="w-8 h-8 rounded-full border border-border" alt={stream.name} />
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-white line-clamp-1">{stream.title}</h3>
                    <p className="text-xs text-text-muted">{stream.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. All Streams (Home-dakı StreamCard ilə eyni) */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">All Streams <span className="text-text-muted text-lg font-normal">(9)</span></h2>
        <select className="bg-surface border border-border text-text-main text-sm rounded-lg p-2 outline-none">
          <option>Most Viewers</option>
          <option>Recently Started</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ALL_STREAMS.map((stream) => (
          <StreamCard key={stream.id} {...stream} />
        ))}
      </div>

    </div>
  );
}