import { Star, Play, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge/badge";

interface LibraryCardProps {
  title: string;
  category: string;
  rating: string;
  imageUrl: string;
  action: "play" | "install";
}

export const LibraryCard = ({ title, category, rating, imageUrl, action }: LibraryCardProps) => {
  const isPlay = action === "play";

  return (
    <div className="flex flex-col gap-3 group cursor-pointer bg-surface/50 rounded-2xl p-3 border border-border/50 shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:border-primary/50 hover:bg-surface transition-all duration-300">

      <div className="relative w-full h-40 rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/80 to-transparent" />

        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <Badge variant="glass" className="text-[10px] uppercase">{category}</Badge>
        </div>
      </div>

      <div className="flex flex-col px-1 pb-1">
        <h3 className="font-bold text-text-main group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h3>

        <div className="flex justify-between items-end mt-2">
          <div className="flex items-center gap-1 text-sm text-yellow-500 font-bold">
            <Star size={14} fill="currentColor" /> {rating}
          </div>

          <button
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${isPlay
                ? "bg-primary/20 text-primary hover:bg-primary hover:text-white"
                : "bg-teal-500/20 text-teal-500 hover:bg-teal-500 hover:text-white"
              }`}
          >
            {isPlay ? <Play size={14} fill="currentColor" /> : <Download size={14} />}
            {isPlay ? "Play" : "Install"}
          </button>
        </div>
      </div>

    </div>
  );
};