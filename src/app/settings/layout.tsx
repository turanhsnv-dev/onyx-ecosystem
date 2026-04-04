"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Bell, Shield, Palette, Volume2, Download, Globe, Monitor, Gamepad2, ChevronRight } from "lucide-react";

const SETTINGS_TABS = [
  { href: "/settings", label: "Account", icon: <User size={20} /> },
  { href: "/settings/notifications", label: "Notifications", icon: <Bell size={20} /> },
  { href: "/settings/privacy", label: "Privacy & Security", icon: <Shield size={20} /> },
  { href: "/settings/appearance", label: "Appearance", icon: <Palette size={20} /> },
  { href: "/settings/audio", label: "Audio", icon: <Volume2 size={20} /> },
  { href: "/settings/downloads", label: "Downloads", icon: <Download size={20} /> },
  { href: "/settings/language", label: "Language & Region", icon: <Globe size={20} /> },
  { href: "/settings/display", label: "Display", icon: <Monitor size={20} /> },
  { href: "/settings/controller", label: "Controller", icon: <Gamepad2 size={20} /> },
];

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto pb-20">
      <div className="mb-8">
        <h1 className="text-4xl font-black text-white mb-2">Settings</h1>
        <p className="text-text-muted">Customize your Onyx experience</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-[280px] flex flex-col gap-1 shrink-0">
          {SETTINGS_TABS.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex items-center justify-between p-4 rounded-xl text-sm font-medium transition-colors ${isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "bg-transparent text-text-muted hover:bg-surface hover:text-white border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-3">
                  {tab.icon}
                  {tab.label}
                </div>
                {isActive && <ChevronRight size={18} />}
              </Link>
            );
          })}
        </div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}