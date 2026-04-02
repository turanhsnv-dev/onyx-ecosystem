import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge/badge";

interface StreamCardProps {
  title: string;
  streamer: string;
  game: string;
  viewers: string;
  thumbnailUrl: string;
  avatarUrl: string;
  tags: string[];
}

export const StreamCard = ({ title, streamer, game, viewers, thumbnailUrl, avatarUrl, tags }: StreamCardProps) => {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border group-hover:border-primary/50 transition-colors duration-300">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${thumbnailUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <Badge variant="live">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE
          </Badge>
          <Badge variant="glass">
            <Eye size={12} /> {viewers}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3 flex gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="glass">{tag}</Badge>
          ))}
        </div>
      </div>
      <div className="flex gap-3 items-start mt-1">
        <img src={avatarUrl} alt={streamer} className="w-10 h-10 rounded-full border border-border object-cover" />
        <div className="flex flex-col">
          <h3 className="font-bold text-text-main group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-text-muted">
            {streamer} <span className="mx-1">•</span> {game}
          </p>
        </div>
      </div>
    </div>
  );
};