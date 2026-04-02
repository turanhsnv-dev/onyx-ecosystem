import { HeroBanner } from "@/features/home/hero-banner";
import { ContinuePlaying } from "@/features/home/continue-playing";
import { LiveNow } from "@/features/home/live-now";
import { TrendingNow } from "@/features/home/trending-now";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto pb-12">
      <HeroBanner />
      <ContinuePlaying />
      <LiveNow />
      <TrendingNow />
    </div>
  );
}