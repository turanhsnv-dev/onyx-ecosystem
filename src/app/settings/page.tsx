"use client";
import { User, Bell, Shield, Palette, Volume2, Download, Globe, Monitor, Gamepad2, ChevronRight } from "lucide-react";

// MOCK DATA: Settings Menyu
const SETTINGS_TABS = [
  { id: "account", label: "Account", icon: <User size={20} />, active: true },
  { id: "notifications", label: "Notifications", icon: <Bell size={20} />, active: false },
  { id: "privacy", label: "Privacy & Security", icon: <Shield size={20} />, active: false },
  { id: "appearance", label: "Appearance", icon: <Palette size={20} />, active: false },
  { id: "audio", label: "Audio", icon: <Volume2 size={20} />, active: false },
  { id: "downloads", label: "Downloads", icon: <Download size={20} />, active: false },
  { id: "language", label: "Language & Region", icon: <Globe size={20} />, active: false },
  { id: "display", label: "Display", icon: <Monitor size={20} />, active: false },
  { id: "controller", label: "Controller", icon: <Gamepad2 size={20} />, active: false },
];

export default function SettingsPage() {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto pb-20">

      {/* 1. Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-white mb-2">Settings</h1>
        <p className="text-text-muted">Customize your Onyx experience</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* SOL TƏRƏF: Settings Menyusu */}
        <div className="w-full lg:w-[280px] flex flex-col gap-1 shrink-0">
          {SETTINGS_TABS.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center justify-between p-4 rounded-xl text-sm font-medium transition-colors ${tab.active
                ? "bg-primary/10 text-primary border border-primary/20"
                : "bg-transparent text-text-muted hover:bg-surface hover:text-white border border-transparent"
                }`}
            >
              <div className="flex items-center gap-3">
                {tab.icon}
                {tab.label}
              </div>
              {tab.active && <ChevronRight size={18} />}
            </button>
          ))}
        </div>

        {/* SAĞ TƏRƏF: Formlar (Account) */}
        <div className="flex-1 flex flex-col gap-8">

          {/* Account Information Box */}
          <div className="bg-surface/30 border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Account Information</h3>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Display Name</label>
                <input
                  type="text"
                  defaultValue="Player One"
                  className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Username</label>
                <input
                  type="text"
                  defaultValue="playerone"
                  className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Email</label>
                <input
                  type="email"
                  defaultValue="player@example.com"
                  className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-xl w-max mt-2 transition-colors">
                Save Changes
              </button>
            </form>
          </div>

          {/* Password Box */}
          <div className="bg-surface/30 border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Password</h3>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Current Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">New Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
}