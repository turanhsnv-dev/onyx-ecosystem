import { Search, MoreHorizontal, MessageSquare } from "lucide-react";
import { FriendItem } from "@/components/ui/friend-item/friend-item";
import { Button } from "@/components/ui/button/button";

const MOCK_ONLINE = [
  { id: 1, name: "NightBlade", statusText: "Cyber Nexus 2077", initials: "NB", avatarColor: "bg-surface", statusType: "ingame" as const },
  { id: 2, name: "PhantomX", statusText: "Online", initials: "PX", avatarColor: "bg-surface", statusType: "online" as const },
  { id: 3, name: "ShadowMyst", statusText: "Elden Ring", initials: "SM", avatarColor: "bg-surface", statusType: "ingame" as const },
  { id: 4, name: "VoidWalker", statusText: "Away", initials: "VW", avatarColor: "bg-surface", statusType: "away" as const },
];

const MOCK_OFFLINE = [
  { id: 5, name: "DarkSoul", statusText: "Offline", initials: "DS", avatarColor: "bg-surface", statusType: "offline" as const },
  { id: 6, name: "PixelHunter", statusText: "Offline", initials: "PH", avatarColor: "bg-surface", statusType: "offline" as const },
];

export const SidebarRight = () => {
  return (
    <aside className="w-[320px] h-screen fixed right-0 top-0 border-l border-border bg-background flex flex-col">
      <div className="p-6 flex items-center justify-between pb-4">
        <h2 className="font-bold text-text-main">Friends</h2>
        <MoreHorizontal size={20} className="text-text-muted cursor-pointer hover:text-primary transition-colors" />
      </div>
      <div className="px-6 mb-6">
        <div className="bg-surface border border-border rounded-xl flex items-center gap-2 px-3 py-2 focus-within:border-primary/50 transition-colors">
          <Search size={16} className="text-text-muted" />
          <input
            type="text"
            placeholder="Search friends..."
            className="bg-transparent border-none outline-none text-sm text-text-main w-full placeholder:text-text-muted"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-6 pb-24 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-text-muted tracking-widest uppercase">
            Online — {MOCK_ONLINE.length}
          </span>
          {MOCK_ONLINE.map((friend) => (
            <FriendItem key={friend.id} {...friend} />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-text-muted tracking-widest uppercase">
            Offline — {MOCK_OFFLINE.length}
          </span>
          {MOCK_OFFLINE.map((friend) => (
            <FriendItem key={friend.id} {...friend} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent">
        <Button variant="outline" className="w-full bg-surface border-border hover:border-primary/50" icon={<MessageSquare size={18} />}>
          Open Chat
        </Button>
      </div>
    </aside>
  );
};