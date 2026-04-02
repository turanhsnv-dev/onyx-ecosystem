interface FriendItemProps {
  name: string;
  statusText: string;
  initials: string;
  statusType: "online" | "ingame" | "away" | "offline";
  avatarColor: string;
}

export const FriendItem = ({ name, statusText, initials, statusType, avatarColor }: FriendItemProps) => {
  const statusColors = {
    online: "bg-green-500",
    ingame: "bg-primary",
    away: "bg-yellow-500",
    offline: "bg-[#3f3f46]",
  };

  return (
    <div className="flex items-center gap-3 cursor-pointer group p-2 rounded-xl hover:bg-surface/50 transition-colors">
      <div className="relative">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${avatarColor}`}>
          {initials}
        </div>
        <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-background ${statusColors[statusType]}`} />
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-bold text-text-main group-hover:text-white transition-colors">
          {name}
        </span>
        <span className={`text-xs ${statusType === 'ingame' ? 'text-primary font-medium' : 'text-text-muted'}`}>
          {statusText}
        </span>
      </div>
    </div>
  );
};