import { Heart, MessageSquare, Repeat2, Share, MoreHorizontal, BadgeCheck } from "lucide-react";

interface PostCardProps {
  name: string;
  handle: string;
  avatarUrl: string;
  time: string;
  content: React.ReactNode;
  imageUrl?: string;
  likes: string;
  comments: string;
  reposts: string;
  isLiked?: boolean;
  isVerified?: boolean;
}

export const PostCard = ({ name, handle, avatarUrl, time, content, imageUrl, likes, comments, reposts, isLiked, isVerified }: PostCardProps) => {
  return (
    <div className="bg-surface/50 border border-border rounded-2xl p-6 transition-colors hover:border-primary/30">

      {/* 1. Üst hissə (İstifadəçi məlumatları) */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-bold text-text-main">{name}</span>
              {isVerified && <BadgeCheck size={16} className="text-primary" fill="currentColor" stroke="black" />}
            </div>
            <span className="text-sm text-text-muted">{handle} • {time}</span>
          </div>
        </div>
        <button className="text-text-muted hover:text-white transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* 2. Məzmun (Yazı və Şəkil) */}
      <div className="text-text-main text-sm leading-relaxed mb-4 whitespace-pre-line">
        {content}
      </div>
      {imageUrl && (
        <div className="mb-4 rounded-xl overflow-hidden border border-border">
          <img src={imageUrl} alt="Post attachment" className="w-full h-auto object-cover max-h-[400px]" />
        </div>
      )}

      {/* 3. Alt hissə (Reaksiyalar) */}
      <div className="flex items-center justify-between text-text-muted text-sm mt-2">
        <button className={`flex items-center gap-2 transition-colors ${isLiked ? 'text-red-500' : 'hover:text-red-500'}`}>
          <Heart size={18} className={isLiked ? "fill-current" : ""} /> {likes}
        </button>
        <button className="flex items-center gap-2 hover:text-primary transition-colors">
          <MessageSquare size={18} /> {comments}
        </button>
        <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
          <Repeat2 size={18} /> {reposts}
        </button>
        <button className="flex items-center gap-2 hover:text-white transition-colors">
          <Share size={18} />
        </button>
      </div>
    </div>
  );
};