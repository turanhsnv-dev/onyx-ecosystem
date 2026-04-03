import { Image as ImageIcon, Video, Gamepad2, TrendingUp, Users } from "lucide-react";
import { PostCard } from "@/components/ui/post-card/post-card";

// MOCK DATA: Postlar
const POSTS = [
  {
    id: 1,
    name: "ShadowMyst", handle: "@shadowmyst", time: "2h ago", isVerified: true, isLiked: true, avatarUrl: "https://i.pravatar.cc/150?u=3",
    content: "Day 15 of the no-hit run complete! Final boss tomorrow. Thank you all for the incredible support during this journey. 34K viewers today was absolutely insane!",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071",
    likes: "3.4K", comments: "567", reposts: "234"
  },
  {
    id: 2,
    name: "NightBlade", handle: "@nightblade", time: "4h ago", avatarUrl: "https://i.pravatar.cc/150?u=1",
    content: "Just finished Cyber Nexus 2077 for the third time. Each playthrough reveals something new. This game is a masterpiece of storytelling. What ending did you get?",
    likes: "12.5K", comments: "892", reposts: "2.3K"
  },
  {
    id: 3,
    name: "CD Projekt Red", handle: "@cdprojektred", time: "6h ago", isVerified: true, avatarUrl: "https://i.pravatar.cc/150?img=11",
    content: "Patch 2.1 is now LIVE! This update includes:\n\n- New vehicle customization\n- Improved AI behavior\n- 50+ bug fixes\n- Performance optimizations\n\nDownload now and let us know what you think! #CyberNexus2077",
    likes: "45.7K", comments: "3.4K", reposts: "12.5K"
  },
  {
    id: 4,
    name: "VoidWalker", handle: "@voidwalker", time: "8h ago", avatarUrl: "https://i.pravatar.cc/150?u=4",
    content: "Finally reached the center of the galaxy in Stellar Odyssey after 200 hours. The ending... I have no words. If you haven't played this game, you're missing out.",
    imageUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000",
    likes: "8.7K", comments: "432", reposts: "567"
  }
];

export default function CommunityPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-[1200px] mx-auto pb-20">

      {/* SOL TƏRƏF: Feed (Postlar) - Genişlik 2/3 */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">Social Hub</h1>
          <p className="text-text-muted mb-6">Connect with the gaming community</p>
        </div>

        {/* Create Post Box */}
        <div className="bg-surface border border-border rounded-2xl p-6">
          <div className="flex gap-4 mb-4">
            <img src="https://i.pravatar.cc/150?u=9" className="w-10 h-10 rounded-full" alt="Me" />
            <textarea
              placeholder="Share your gaming moments..."
              className="w-full bg-transparent border-none outline-none text-text-main resize-none h-10 mt-2 placeholder:text-text-muted"
            />
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-border">
            <div className="flex gap-4 text-text-muted">
              <button className="hover:text-primary transition-colors"><ImageIcon size={20} /></button>
              <button className="hover:text-primary transition-colors"><Video size={20} /></button>
              <button className="hover:text-primary transition-colors"><Gamepad2 size={20} /></button>
            </div>
            <button className="bg-primary/20 text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-xl font-bold transition-colors">
              Post
            </button>
          </div>
        </div>

        {/* Postlar Siyahısı */}
        <div className="flex flex-col gap-6">
          {POSTS.map(post => <PostCard key={post.id} {...post} />)}
        </div>
      </div>

      {/* SAĞ TƏRƏF: Vidjetlər - Genişlik 1/3 */}
      <div className="w-full lg:w-[320px] flex flex-col gap-6 mt-2 lg:mt-[90px]">

        {/* Looking for Group (LFG) Widget */}
        <div className="bg-surface border border-border rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-white flex items-center gap-2"><Users size={18} className="text-primary" /> Looking for Group</h3>
            <span className="text-xs text-primary cursor-pointer hover:underline">View All</span>
          </div>

          <div className="flex flex-col gap-4">
            {/* LFG Card 1 */}
            <div className="bg-background border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://i.pravatar.cc/150?u=1" className="w-6 h-6 rounded-full" alt="NightBlade" />
                <div className="text-xs text-text-muted"><span className="text-white font-bold">NightBlade</span> • Shadow Realm</div>
              </div>
              <h4 className="text-sm font-bold text-white mb-3">Need 2 more for co-op boss run</h4>
              <div className="flex gap-3 text-xs text-text-muted mb-4">
                <span>👥 2/4</span><span>🕒 Now</span><span>🌍 NA East</span>
              </div>
              <button className="w-full py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg text-sm font-bold transition-colors">Join</button>
            </div>

            {/* LFG Card 2 */}
            <div className="bg-background border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://i.pravatar.cc/150?u=2" className="w-6 h-6 rounded-full" alt="PhantomX" />
                <div className="text-xs text-text-muted"><span className="text-white font-bold">PhantomX</span> • Neon Racers</div>
              </div>
              <h4 className="text-sm font-bold text-white mb-3">Ranked duo queue - Diamond+</h4>
              <div className="flex gap-3 text-xs text-text-muted mb-4">
                <span>👥 1/2</span><span>🕒 In 30 min</span><span>🌍 EU West</span>
              </div>
              <button className="w-full py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg text-sm font-bold transition-colors">Join</button>
            </div>
          </div>
        </div>

        {/* Trending Widget */}
        <div className="bg-surface border border-border rounded-2xl p-6">
          <h3 className="font-bold text-white flex items-center gap-2 mb-6"><TrendingUp size={18} className="text-teal-500" /> Trending</h3>
          <div className="flex flex-col gap-5">
            {[
              { tag: "CyberNexus2077", posts: "12.5K" },
              { tag: "ShadowRealmNoHit", posts: "8.7K" },
              { tag: "StellarOdyssey", posts: "5.6K" },
              { tag: "NeonRacersTourney", posts: "3.4K" },
              { tag: "IndieGameShowcase", posts: "2.1K" },
            ].map((item, i) => (
              <div key={item.tag} className="flex gap-3 cursor-pointer group">
                <span className="text-text-muted text-sm">{i + 1}</span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                    <span className="text-primary mr-1">#</span>{item.tag}
                  </span>
                  <span className="text-xs text-text-muted">{item.posts} posts</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}