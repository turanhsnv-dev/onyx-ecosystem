import { HeroCarousel } from "@/components/ui/hero-carousel/hero-carousel";
import { ContinuePlaying } from "@/features/home/continue-playing";
import { LiveNow } from "@/features/home/live-now";
import { TrendingNow } from "@/features/home/trending-now";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[1200px] mx-auto pb-12">
      <HeroCarousel />
      <ContinuePlaying />
      <LiveNow />
      <TrendingNow />
    </div>
  );
}