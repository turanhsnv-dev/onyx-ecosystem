"use client";
import { useState } from "react";
import { ShieldCheck, Key, UserX, ChevronDown, ChevronRight } from "lucide-react";

const ToggleRow = ({ title, description, defaultChecked }: { title: string, description: string, defaultChecked: boolean }) => {
  const [isOn, setIsOn] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between p-4 bg-background/50 border border-border rounded-xl">
      <div className="flex flex-col gap-1 pr-4">
        <span className="font-bold text-white text-sm">{title}</span>
        <span className="text-xs text-text-muted">{description}</span>
      </div>

      <button
        onClick={() => setIsOn(!isOn)}
        className={`relative w-11 h-6 rounded-full transition-colors duration-300 ease-in-out shrink-0 focus:outline-none ${isOn ? "bg-primary" : "bg-surface border border-border"
          }`}
      >
        <span
          className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${isOn ? "translate-x-5" : "translate-x-0"
            }`}
        />
      </button>
    </div>
  );
};
export default function PrivacySecurityPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">Privacy Settings</h3>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Profile Visibility</label>
            <div className="relative">
              <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                <option>Public - Everyone can see my profile</option>
                <option>Friends Only - Only friends can view details</option>
                <option>Private - Nobody can see my stats</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Game Activity Status</label>
            <div className="relative">
              <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                <option>Share my current game with friends</option>
                <option>Hide what I'm playing</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            </div>
          </div>

          <div className="mt-2">
            <ToggleRow
              title="Data & Telemetry"
              description="Allow Onyx to collect usage data to improve the platform."
              defaultChecked={false}
            />
          </div>
        </div>
      </div>
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">Security</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-primary/10 border border-primary/20 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/20 rounded-xl text-primary">
                <Key size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">Two-Factor Authentication (2FA)</span>
                <span className="text-xs text-text-muted">Add an extra layer of security to your account.</span>
              </div>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors whitespace-nowrap">
              Enable 2FA
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-background/50 border border-border rounded-xl cursor-pointer hover:border-primary/50 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="p-2 text-text-muted group-hover:text-white transition-colors">
                <ShieldCheck size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm">Authorized Devices</span>
                <span className="text-xs text-text-muted">Manage devices logged into your account.</span>
              </div>
            </div>
            <ChevronRight size={16} className="text-text-muted group-hover:text-white transition-colors" />
          </div>
          <div className="flex items-center justify-between p-4 bg-background/50 border border-border rounded-xl cursor-pointer hover:border-red-500/50 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="p-2 text-text-muted group-hover:text-red-500 transition-colors">
                <UserX size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm">Blocked Users</span>
                <span className="text-xs text-text-muted">Manage the list of players you have blocked.</span>
              </div>
            </div>
            <ChevronRight size={16} className="text-text-muted group-hover:text-red-500 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
}