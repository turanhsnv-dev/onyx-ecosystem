"use client";
import { useState } from "react";
import { Download, HardDrive, FolderOpen, Activity, Clock, ChevronDown } from "lucide-react";

// Təkrar istifadə edəcəyimiz Toggle Komponenti
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

export default function DownloadsPage() {
  return (
    <div className="flex flex-col gap-8">

      {/* 1. Storage & Installation */}
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <HardDrive className="text-primary" size={24} /> Storage & Installation
        </h3>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Default Install Location</label>
            <div className="flex gap-3">
              <div className="flex-1 bg-background border border-border rounded-xl px-4 py-3 text-sm text-text-muted flex items-center gap-2">
                <HardDrive size={16} className="text-primary" />
                C:\Program Files\OnyxGames\Library
              </div>
              <button className="bg-surface border border-border hover:border-primary/50 text-white px-5 py-3 rounded-xl text-sm font-bold transition-colors flex items-center gap-2 shrink-0">
                <FolderOpen size={16} /> Change
              </button>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-text-muted">Local Drive (C:) Space</span>
              <span className="text-white font-medium">850 GB Free / 2 TB Total</span>
            </div>
            <div className="w-full bg-background rounded-full h-2 flex overflow-hidden">
              <div className="bg-primary h-full" style={{ width: '45%' }} title="Games" />
              <div className="bg-teal-500 h-full" style={{ width: '12%' }} title="System" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Download Restrictions (Sürət və Limitlər) */}
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Activity className="text-teal-500" size={24} /> Download Restrictions
        </h3>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">Download Region</label>
              <div className="relative">
                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                  <option>Europe Central (Frankfurt)</option>
                  <option>Europe West (London)</option>
                  <option>US East (New York)</option>
                  <option>Asia (Tokyo)</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">Bandwidth Limit</label>
              <div className="relative">
                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                  <option>No Limit (Maximum Speed)</option>
                  <option>50 MB/s</option>
                  <option>25 MB/s</option>
                  <option>10 MB/s</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <ToggleRow
              title="Throttle downloads while playing"
              description="Pause or slow down background downloads to prioritize game performance and ping."
              defaultChecked={true}
            />
            <ToggleRow
              title="Throttle downloads while streaming"
              description="Prevent downloads from consuming upload/download bandwidth during live streams."
              defaultChecked={true}
            />
          </div>
        </div>
      </div>

      {/* 3. Auto-Updates */}
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Clock className="text-[#f97316]" size={24} /> Auto-Updates
        </h3>

        <div className="flex flex-col gap-6">
          <ToggleRow
            title="Keep my games up to date"
            description="Automatically download and install updates for games in my library."
            defaultChecked={true}
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Auto-Update Schedule</label>
            <div className="relative">
              <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                <option>Always update instantly</option>
                <option>Only update between 12:00 AM and 6:00 AM</option>
                <option>Ask before downloading large updates (5GB)</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}