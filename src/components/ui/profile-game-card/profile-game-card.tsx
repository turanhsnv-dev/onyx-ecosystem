import { Play, Download, RefreshCw, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge/badge";

interface ProfileGameCardProps {
  title: string;
  imageUrl: string;
  progress: string; // məs: "68%"
  playTime: string;
  achievements: string;
  action: "play" | "install" | "update";
}

export const ProfileGameCard = ({ title, imageUrl, progress, playTime, achievements, action }: ProfileGameCardProps) => {
  return (
    <div className="bg-surface/30 border border-border rounded-2xl p-4 flex flex-col gap-4 hover:border-primary/50 transition-colors group">
      <div className="relative w-full h-48 rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        {action === "update" && (
          <div className="absolute top-3 right-3 bg-teal-500 text-black text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
            Update
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-white text-lg line-clamp-1">{title}</h3>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-text-muted">Progress</span>
            <span className="text-primary font-bold">{progress}</span>
          </div>
          <div className="w-full bg-background rounded-full h-1.5">
            <div className="bg-gradient-to-r from-primary to-teal-400 h-1.5 rounded-full" style={{ width: progress }} />
          </div>
        </div>
        <div className="flex justify-between text-xs text-text-muted border-t border-border pt-3 mt-1">
          <span>{playTime}</span>
          <span>{achievements} achievements</span>
        </div>
      </div>
      <div className="flex gap-2 mt-auto pt-2">
        <button className={`flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors ${action === "play" ? "bg-primary text-white hover:bg-primary/90" :
            action === "update" ? "bg-teal-500 text-black hover:bg-teal-400" :
              "bg-transparent border border-border text-text-main hover:bg-surface hover:text-white"
          }`}>
          {action === "play" ? <Play size={16} fill="currentColor" /> :
            action === "update" ? <RefreshCw size={16} /> :
              <Download size={16} />}
          {action === "play" ? "Play" : action === "update" ? "Update" : "Install"}
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-text-muted hover:text-white hover:bg-surface transition-colors">
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
};