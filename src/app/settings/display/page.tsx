"use client";
import { useState } from "react";
import { Monitor, Maximize, Sun, Layers, ChevronDown } from "lucide-react";

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

export default function DisplayPage() {
  return (
    <div className="flex flex-col gap-8">

      {/* 1. Screen & Resolution */}
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Monitor className="text-primary" size={24} /> Screen & Resolution
        </h3>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white flex items-center gap-2">
                <Maximize size={16} className="text-text-muted" /> Display Mode
              </label>
              <div className="relative">
                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                  <option>Borderless Window (Recommended)</option>
                  <option>Exclusive Fullscreen</option>
                  <option>Windowed</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">Resolution</label>
              <div className="relative">
                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                  <option>2560 x 1440 (1440p / QHD)</option>
                  <option>3840 x 2160 (4K / UHD)</option>
                  <option>1920 x 1080 (1080p / FHD)</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Performance & Framerate */}
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Layers className="text-teal-500" size={24} /> Performance & Framerate
        </h3>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Maximum Frame Rate (FPS)</label>
            <div className="relative">
              <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                <option>Unlimited (Uncapped)</option>
                <option>Match Monitor Refresh Rate (144 Hz)</option>
                <option>Limit to 60 FPS</option>
                <option>Limit to 30 FPS</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            </div>
          </div>

          <div className="mt-2 border-t border-border pt-6 flex flex-col gap-4">
            <ToggleRow
              title="V-Sync (Vertical Sync)"
              description="Prevent screen tearing. May introduce slight input lag if not using G-Sync/FreeSync."
              defaultChecked={false}
            />
            <ToggleRow
              title="Hardware Acceleration"
              description="Use GPU to render the Onyx interface for smoother animations."
              defaultChecked={true}
            />
          </div>
        </div>
      </div>

      {/* 3. Graphics & UI */}
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Sun className="text-[#f97316]" size={24} /> Graphics & UI
        </h3>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">UI Scaling</label>
            <div className="flex bg-background border border-border rounded-xl p-1 w-full max-w-md">
              <button className="flex-1 py-2 text-text-muted hover:text-white rounded-lg text-sm font-medium transition-colors">Small (75%)</button>
              <button className="flex-1 py-2 bg-surface text-white rounded-lg text-sm font-bold shadow-sm">Normal (100%)</button>
              <button className="flex-1 py-2 text-text-muted hover:text-white rounded-lg text-sm font-medium transition-colors">Large (125%)</button>
            </div>
          </div>

          <div className="mt-2 border-t border-border pt-6 flex flex-col gap-4">
            <ToggleRow
              title="Enable HDR (High Dynamic Range)"
              description="Requires an HDR-compatible monitor. Enhances contrast and color depth."
              defaultChecked={true}
            />
            <ToggleRow
              title="Colorblind Mode"
              description="Adjust interface colors for better visibility (Deuteranopia, Protanopia, Tritanopia support)."
              defaultChecked={false}
            />
          </div>
        </div>
      </div>

    </div>
  );
}