import { Clock } from "lucide-react";
import { ProgressBar } from "@/components/ui/progress-bar/progress-bar";

interface GameCardProps {
  title: string;
  imageUrl: string;
  progress: number;
  timePlayed: string;
  lastPlayed: string;
}

export const GameCard = ({ title, imageUrl, progress, timePlayed, lastPlayed }: GameCardProps) => {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border group-hover:border-primary/50 transition-colors duration-300">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-text-main group-hover:text-primary transition-colors text-lg">
          {title}
        </h3>
        <div className="flex justify-between items-center text-xs">
          <span className="text-text-muted">Progress</span>
          <span className="text-primary font-bold">{progress}%</span>
        </div>
        <ProgressBar progress={progress} />
        <div className="flex justify-between items-center text-xs text-text-muted mt-1">
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>{timePlayed}</span>
          </div>
          <span>{lastPlayed}</span>
        </div>
      </div>
    </div>
  );
};