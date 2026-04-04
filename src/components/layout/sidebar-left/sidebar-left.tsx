"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Library, Radio, Users, Wallet, User, Settings, Gamepad2, LogOut } from "lucide-react";
import { NavItem } from "@/components/ui/nav-item/nav-item";

export const SidebarLeft = () => {
  const pathname = usePathname();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // Menyunu aç/bağla üçün state

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
    <aside className="w-[280px] h-screen fixed left-0 top-0 border-r border-border bg-background flex flex-col p-6 z-50">

      {/* Loqo Hissəsi */}
      <div className="flex items-center gap-3 mb-8 cursor-pointer group">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
          <Gamepad2 size={24} className="text-white" />
        </div>
        <span className="text-text-main font-bold text-2xl tracking-widest group-hover:text-white transition-colors">ONYX</span>
      </div>

      {/* Əsas Menyu */}
      <nav className="flex flex-col gap-1 flex-1">
        {MAIN_NAV.map((item) => (
          <NavItem
            key={item.title}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </nav>

      {/* Alt Menyu və User Hissəsi */}
      <div className="flex flex-col mt-auto pt-4 relative">
        <div className="flex flex-col gap-1 mb-4">
          {BOTTOM_NAV.map((item) => (
            <NavItem
              key={item.title}
              {...item}
              isActive={pathname.startsWith(item.href)}
            />
          ))}
        </div>

        {/* 1. Yuxarı açılan User Menu (Popover) */}
        {isUserMenuOpen && (
          <div className="absolute bottom-20 left-0 w-full mb-2 bg-surface border border-border rounded-2xl p-2 shadow-2xl animate-in fade-in slide-in-from-bottom-2">
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setIsUserMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm text-text-muted hover:text-white hover:bg-background rounded-xl transition-colors"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" /> Online
              </button>
              <button
                onClick={() => setIsUserMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm text-text-muted hover:text-white hover:bg-background rounded-xl transition-colors"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" /> Away
              </button>
              <button
                onClick={() => setIsUserMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm text-text-muted hover:text-white hover:bg-background rounded-xl transition-colors"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" /> Do Not Disturb
              </button>
              <button
                onClick={() => setIsUserMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm text-text-muted hover:text-white hover:bg-background rounded-xl transition-colors"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gray-500 border border-gray-400" /> Invisible
              </button>

              <div className="h-px bg-border my-1" />

              <button
                onClick={() => setIsUserMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:text-white hover:bg-red-500 rounded-xl transition-colors font-medium"
              >
                <LogOut size={16} /> Log Out
              </button>
            </div>
          </div>
        )}

        {/* 2. User Badge (Kliklənə bilən düymə) */}
        <div
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          className={`p-3 rounded-2xl flex items-center gap-3 border cursor-pointer transition-colors select-none ${isUserMenuOpen ? 'bg-surface border-primary/50' : 'bg-background border-border hover:border-primary/50 hover:bg-surface'
            }`}
        >
          <div className="relative shrink-0">
            {/* Real avatar şəkli əlavə etdim ki, profil səhifəsi ilə uyğun gəlsin */}
            <img src="https://i.pravatar.cc/300?u=12" alt="Player One" className="w-10 h-10 rounded-full border-2 border-primary object-cover" />
            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-background" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white">Player One</span>
            <span className="text-xs text-text-muted font-medium">Level 42</span>
          </div>
        </div>

      </div>
    </aside>
  );
};