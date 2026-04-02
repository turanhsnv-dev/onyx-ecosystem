import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge/badge";

interface TrendingCardProps {
  title: string;
  category: string;
  rating: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  discountPercentage?: string;
}

export const TrendingCard = ({ title, category, rating, price, originalPrice, imageUrl, discountPercentage }: TrendingCardProps) => {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-border group-hover:border-primary/50 transition-colors duration-300">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <Badge variant="glass" className="text-[10px] uppercase">{category}</Badge>
          {discountPercentage && (
            <Badge variant="glass" className="text-[10px] bg-primary/20 text-primary border-primary/30">
              {discountPercentage}
            </Badge>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-text-main group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h3>
        <div className="flex justify-between items-end mt-1">
          <div className="flex items-center gap-1 text-sm text-yellow-500 font-bold">
            <Star size={14} fill="currentColor" /> {rating}
          </div>
          <div className="flex flex-col items-end">
            {originalPrice && <span className="text-xs text-text-muted line-through">{originalPrice}</span>}
            <span className={`font-bold ${price === "Free" ? "text-primary" : "text-text-main"}`}>
              {price}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};