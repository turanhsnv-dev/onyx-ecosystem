import { ChevronRight, Radio } from "lucide-react";
import Link from "next/link";
import { StreamCard } from "@/components/ui/stream-card/stream-card";

const MOCK_STREAMS = [
  { id: 1, title: "First playthrough of Cyber Nexus 2077!", streamer: "NightBlade", game: "Cyber Nexus 2077", viewers: "12.5K", tags: ["First Playthrough", "English"], thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070", avatarUrl: "https://i.pravatar.cc/150?u=1" },
  { id: 2, title: "Ranked Grind to Diamond | !commands", streamer: "PhantomX", game: "Neon Racers", viewers: "8.7K", tags: ["Ranked", "Competitive"], thumbnailUrl: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070", avatarUrl: "https://i.pravatar.cc/150?u=2" },
];

export const LiveNow = () => {
  return (
    <section className="flex flex-col gap-6 mb-12">
      {/* Başlıq */}
      <div className="flex items-end justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-500/10 text-red-500 flex items-center justify-center rounded-xl">
            <Radio size={20} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-text-main">Live Now</h2>
            <p className="text-sm text-text-muted">Watch your favorite streamers</p>
          </div>
        </div>
        <Link href="/live" className="text-sm text-text-muted hover:text-primary transition-colors flex items-center gap-1">
          Browse All <ChevronRight size={16} />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_STREAMS.map((stream) => (
          <StreamCard key={stream.id} {...stream} />
        ))}
      </div>
    </section>
  );
};