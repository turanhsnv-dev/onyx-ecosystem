import { Users, Heart, Gamepad2, Trophy, Clock, Share2, Settings } from "lucide-react";
import { ProfileGameCard } from "@/components/ui/profile-game-card/profile-game-card";

const PROFILE_GAMES = [
  { id: 1, title: "Cyber Nexus 2077", imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070", progress: "68%", playTime: "127h 32m", achievements: "45/67", action: "play" as const },
  { id: 2, title: "Shadow Realm", imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071", progress: "91%", playTime: "89h 45m", achievements: "52/55", action: "play" as const },
  { id: 3, title: "Stellar Odyssey", imageUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000", progress: "34%", playTime: "45h 18m", achievements: "23/80", action: "play" as const },
  { id: 4, title: "Neon Racers", imageUrl: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070", progress: "55%", playTime: "23h 12m", achievements: "18/35", action: "install" as const },
  { id: 5, title: "Nova Craft", imageUrl: "https://images.unsplash.com/photo-1627856013091-fed6e4e04ddc?q=80&w=2070", progress: "82%", playTime: "156h 45m", achievements: "89/100", action: "update" as const },
  { id: 6, title: "Dragon Legacy", imageUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069", progress: "45%", playTime: "67h 23m", achievements: "34/75", action: "install" as const },
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col pb-20 w-full">
      <div className="relative w-full h-[320px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
      <div className="max-w-[1200px] w-full mx-auto px-6 -mt-24 relative z-10 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-end justify-between">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="relative shrink-0">
              <img src="https://i.pravatar.cc/300?u=12" alt="Player One" className="w-32 h-32 rounded-2xl border-4 border-background object-cover bg-surface" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-primary rounded-full border-4 border-background flex items-center justify-center text-white font-bold text-sm shadow-lg">
                42
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-end gap-3 mb-2">
                <h1 className="text-4xl font-black text-white">Player One</h1>
                <span className="text-text-muted pb-1">@playerone</span>
              </div>
              <p className="text-text-muted max-w-xl text-sm leading-relaxed mb-4">
                Professional gamer and content creator. Specializing in RPGs and action games. Always looking for the next challenge!
              </p>
              <div className="w-full max-w-md flex flex-col gap-2">
                <div className="flex justify-between text-xs">
                  <span className="text-text-muted">Level Progress</span>
                  <span className="text-primary font-bold">7,850 / 10,000 XP</span>
                </div>
                <div className="w-full bg-surface border border-border rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-teal-400 h-2 rounded-full" style={{ width: '78.5%' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-surface border border-border hover:border-primary/50 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors">
              <Share2 size={16} /> Share
            </button>
            <button className="flex items-center justify-center bg-surface border border-border hover:border-primary/50 text-white w-11 h-11 rounded-xl transition-colors">
              <Settings size={18} />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-6 border-y border-border">
          <div className="flex items-center gap-2 text-text-muted"><Users size={18} /> <span className="font-bold text-white">12.5K</span> Followers</div>
          <div className="flex items-center gap-2 text-text-muted"><Heart size={18} /> <span className="font-bold text-white">234</span> Following</div>
          <div className="flex items-center gap-2 text-text-muted"><Gamepad2 size={18} /> <span className="font-bold text-white">67</span> Games</div>
          <div className="flex items-center gap-2 text-text-muted"><Trophy size={18} /> <span className="font-bold text-white">342</span> Achievements</div>
          <div className="flex items-center gap-2 text-text-muted"><Clock size={18} /> <span className="font-bold text-white">2,456h</span> Played</div>
        </div>
        <div className="flex bg-surface/50 border border-border p-1 rounded-2xl w-full max-w-2xl">
          <button className="flex-1 py-2.5 bg-surface-light text-white rounded-xl text-sm font-bold shadow-sm">Library</button>
          <button className="flex-1 py-2.5 text-text-muted hover:text-white rounded-xl text-sm font-medium transition-colors">Trophy Cabinet</button>
          <button className="flex-1 py-2.5 text-text-muted hover:text-white rounded-xl text-sm font-medium transition-colors">Achievements</button>
          <button className="flex-1 py-2.5 text-text-muted hover:text-white rounded-xl text-sm font-medium transition-colors">Activity</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-2">
          {PROFILE_GAMES.map((game) => (
            <ProfileGameCard key={game.id} {...game} />
          ))}
        </div>

      </div>
    </div>
  );
}