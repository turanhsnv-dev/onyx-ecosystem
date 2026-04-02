import { Button } from "@/components/ui/button/button";
import { Play, Info } from "lucide-react";

export const HeroBanner = () => {
  return (
    <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-12 flex items-center shadow-2xl">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="relative z-10 p-12 max-w-2xl flex flex-col gap-5">
        <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase">Enter the future</span>
        <h1 className="text-6xl font-black text-white leading-tight">
          Cyber Nexus <br /> 2077
        </h1>
        <p className="text-text-muted text-lg leading-relaxed mb-2">
          Experience the ultimate open-world cyberpunk adventure. Shape your destiny in a world of corporate espionage and neon-lit streets.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <Button variant="primary" icon={<Play size={20} fill="currentColor" />}>
            Play Now
          </Button>
          <Button variant="outline" icon={<Info size={20} />}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};