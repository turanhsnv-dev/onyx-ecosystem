import { HeroCarousel } from "@/components/ui/hero-carousel/hero-carousel";
import { ContinuePlaying } from "@/features/home/continue-playing";
import { LiveNow } from "@/features/home/live-now";
import { TrendingNow } from "@/features/home/trending-now";

export default function Home() {
  return (
    <div className="flex flex-col w-full pb-12">
      <HeroCarousel />
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-10 px-6 mt-10">
        <ContinuePlaying />
        <LiveNow />
        <TrendingNow />
      </div>
    </div>
  );
}