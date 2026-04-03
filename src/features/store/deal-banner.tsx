import { Button } from "@/components/ui/button/button";
import { ShoppingCart, Star, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge/badge";

export const DealBanner = () => {
  return (
    <div className="relative w-full bg-surface border border-border rounded-3xl overflow-hidden mb-8 flex flex-col md:flex-row">
      <div className="md:w-1/2 relative h-[300px] md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070"
          className="w-full h-full object-cover"
          alt="Deal"
        />
        <Badge variant="live" className="absolute top-4 left-4 bg-primary border-none text-white px-4 py-2">
          -67%
        </Badge>
      </div>

      <div className="md:w-1/2 p-8 flex flex-col justify-center gap-4">
        <span className="text-primary text-xs font-bold uppercase tracking-widest">Deal of the Day</span>
        <h1 className="text-4xl font-black text-white">Cyber Nexus 2077</h1>
        <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
          Experience the complete cyberpunk adventure with all DLCs, expansions, and exclusive content. Limited time offer!
        </p>

        <div className="flex items-center gap-2 text-yellow-500">
          <div className="flex"><Star size={16} fill="currentColor" /></div>
          <span className="text-sm font-bold text-text-main">4.8 (24.532 reviews)</span>
        </div>

        <div className="flex gap-4 my-2">
          {[{ v: '23', l: 'Hours' }, { v: '59', l: 'Min' }, { v: '10', l: 'Sec' }].map(t => (
            <div key={t.l} className="bg-background border border-border p-3 rounded-xl min-w-[60px] text-center">
              <div className="text-xl font-bold text-white">{t.v}</div>
              <div className="text-[10px] text-text-muted uppercase">{t.l}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-4">
          <div className="flex flex-col">
            <span className="text-3xl font-black text-white">$29.99</span>
            <span className="text-sm text-text-muted line-through">$89.99</span>
          </div>
          <Button variant="primary" icon={<ShoppingCart size={18} />}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};