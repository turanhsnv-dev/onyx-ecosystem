"use client";
import { useState } from "react";
import { Volume2, Mic, Headphones, Radio, ChevronDown, Activity } from "lucide-react";

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

const VolumeSlider = ({ label, icon, defaultValue }: { label: string, icon: React.ReactNode, defaultValue: number }) => {
  const [val, setVal] = useState(defaultValue);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center text-sm">
        <span className="flex items-center gap-2 font-medium text-white">{icon} {label}</span>
        <span className="text-text-muted font-bold">{val}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={val}
        onChange={(e) => setVal(parseInt(e.target.value))}
        className="w-full h-2 bg-background rounded-full appearance-none cursor-pointer accent-primary hover:accent-primary/80 transition-all"
      />
    </div>
  );
};

export default function AudioPage() {
  return (
    <div className="flex flex-col gap-8">

      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Volume2 className="text-primary" size={24} /> General Audio
        </h3>

        <div className="flex flex-col gap-6">
          <VolumeSlider label="Master Volume" icon={<Volume2 size={16} className="text-text-muted" />} defaultValue={80} />
          <VolumeSlider label="Music Volume" icon={<Radio size={16} className="text-text-muted" />} defaultValue={50} />
          <VolumeSlider label="Sound Effects (SFX)" icon={<Activity size={16} className="text-text-muted" />} defaultValue={100} />

          <div className="mt-2 border-t border-border pt-6">
            <ToggleRow
              title="Mute in Background"
              description="Automatically mute all sounds when Onyx is minimized or out of focus."
              defaultChecked={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Mic className="text-teal-500" size={24} /> Voice Chat
        </h3>

        <div className="flex flex-col gap-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white flex items-center gap-2">
                <Mic size={16} className="text-text-muted" /> Input Device
              </label>
              <div className="relative">
                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                  <option>Default System Microphone</option>
                  <option>HyperX QuadCast S</option>
                  <option>Logitech Pro X Wireless</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white flex items-center gap-2">
                <Headphones size={16} className="text-text-muted" /> Output Device
              </label>
              <div className="relative">
                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                  <option>Default System Speakers</option>
                  <option>HyperX Cloud II Wireless</option>
                  <option>Digital Audio (S/PDIF)</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
              </div>
            </div>
          </div>

          <VolumeSlider label="Microphone Volume" icon={<Mic size={16} className="text-text-muted" />} defaultValue={75} />

          <div className="flex flex-col gap-2 mt-2">
            <label className="text-sm font-medium text-white">Voice Activation Mode</label>
            <div className="flex bg-background border border-border rounded-xl p-1 w-full max-w-md">
              <button className="flex-1 py-2 bg-surface text-white rounded-lg text-sm font-bold shadow-sm">Voice Activity</button>
              <button className="flex-1 py-2 text-text-muted hover:text-white rounded-lg text-sm font-medium transition-colors">Push-to-Talk</button>
            </div>
          </div>

          <div className="mt-2 border-t border-border pt-6 flex flex-col gap-4">
            <ToggleRow
              title="Noise Suppression (AI)"
              description="Automatically filter out background noise like keyboard clicks and fans."
              defaultChecked={true}
            />
            <ToggleRow
              title="Echo Cancellation"
              description="Prevent your microphone from picking up sound from your speakers."
              defaultChecked={true}
            />
          </div>

        </div>
      </div>

    </div>
  );
}