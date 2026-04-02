import { HeroBanner } from "@/features/home/hero-banner";
import { ContinuePlaying } from "@/features/home/continue-playing";
import { LiveNow } from "@/features/home/live-now";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto">
      <HeroBanner />
      <ContinuePlaying />
      <LiveNow />
    </div>
  );
}