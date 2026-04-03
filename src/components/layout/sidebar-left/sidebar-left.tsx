"use client";

import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Library, Radio, Users, Wallet, User, Settings, Gamepad2 } from "lucide-react";
import { NavItem } from "@/components/ui/nav-item/nav-item";

export const SidebarLeft = () => {
  const pathname = usePathname();

  const MAIN_NAV = [
    { href: "/", icon: <Home size={20} />, title: "Nexus", subtitle: "Dashboard" },
    { href: "/store", icon: <ShoppingBag size={20} />, title: "Store", subtitle: "Obsidian Store" },
    { href: "/library", icon: <Library size={20} />, title: "Library", subtitle: "Your Games" },
    { href: "/live", icon: <Radio size={20} />, title: "Live", subtitle: "Streamer's Den" },
    { href: "/community", icon: <Users size={20} />, title: "Community", subtitle: "Social Hub" },
    { href: "/wallet", icon: <Wallet size={20} />, title: "Wallet", subtitle: "Forge & Finance" },
  ];

  const BOTTOM_NAV = [
    { href: "/profile", icon: <User size={20} />, title: "Profile" },
    { href: "/settings", icon: <Settings size={20} />, title: "Settings" },
  ];

  return (
    <aside className="w-[280px] h-screen fixed left-0 top-0 border-r border-border bg-background flex flex-col p-6">

      <div className="flex items-center gap-3 mb-8 cursor-pointer">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
          <Gamepad2 size={24} className="text-white" />
        </div>
        <span className="text-text-main font-bold text-2xl tracking-widest">ONYX</span>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {MAIN_NAV.map((item) => (
          <NavItem
            key={item.title}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </nav>

      <div className="flex flex-col gap-1 mt-auto pt-4">
        {BOTTOM_NAV.map((item) => (
          <NavItem
            key={item.title}
            {...item}
            isActive={pathname === item.href}
          />
        ))}

        <div className="mt-4 p-3 bg-surface rounded-2xl flex items-center gap-3 border border-border cursor-pointer hover:border-primary/50 transition-colors">
          <div className="w-10 h-10 rounded-full border-2 border-primary bg-background" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-text-main">Player One</span>
            <span className="text-xs text-text-muted">Level 42</span>
          </div>
        </div>
      </div>
    </aside>
  );
};