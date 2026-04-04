"use client";
import { useState } from "react";
import { Gamepad2, Crosshair, Activity, ChevronDown, BatteryFull } from "lucide-react";

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

// Xüsusi Slider Komponenti (Həssaslıq və Deadzone üçün)
const SettingsSlider = ({ label, defaultValue, unit = "%" }: { label: string, defaultValue: number, unit?: string }) => {
  const [val, setVal] = useState(defaultValue);

  return (
    <div className="flex flex-col gap-3 p-4 bg-background/50 border border-border rounded-xl">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-white">{label}</span>
        <span className="text-primary font-bold">{val}{unit}</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={val}
        onChange={(e) => setVal(parseInt(e.target.value))}
        className="w-full h-2 bg-surface rounded-full appearance-none cursor-pointer accent-primary hover:accent-primary/80 transition-all"
      />
    </div>
  );
};

export default function ControllerPage() {
  return (
    <div className="flex flex-col gap-8">

      {/* 1. Device Status */}
      <div className="bg-surface/30 border border-border rounded-2xl p-8 relative overflow-hidden">
        {/* Arxa plan effekti */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
          <Gamepad2 className="text-primary" size={24} /> Connected Device
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-background border border-primary/30 rounded-xl relative z-10 gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center border border-border">
              <Gamepad2 size={32} className="text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-white text-lg">Xbox Elite Wireless Controller Series 2</h4>
              <p className="text-sm text-text-muted flex items-center gap-2">
                Connected via Bluetooth <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg border border-border">
            <BatteryFull size={18} className="text-green-500" />
            <span className="text-sm font-bold text-white">85%</span>
          </div>
        </div>
      </div>

      {/* 2. Aim & Sensitivity */}
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Crosshair className="text-teal-500" size={24} /> Aim & Sensitivity
        </h3>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SettingsSlider label="Horizontal Sensitivity" defaultValue={65} />
            <SettingsSlider label="Vertical Sensitivity" defaultValue={60} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SettingsSlider label="Left Stick Deadzone" defaultValue={5} />
            <SettingsSlider label="Right Stick Deadzone" defaultValue={7} />
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <ToggleRow
              title="Invert Y-Axis"
              description="Pushing the stick up looks down, pulling down looks up."
              defaultChecked={false}
            />
            <ToggleRow
              title="Aim Assist"
              description="Enable subtle crosshair friction and slowdown near targets (supported games only)."
              defaultChecked={true}
            />
          </div>
        </div>
      </div>

      {/* 3. Feedback & Advanced */}
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Activity className="text-[#f97316]" size={24} /> Feedback & Layout
        </h3>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Button Layout Preset</label>
            <div className="relative">
              <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                <option>Default</option>
                <option>Tactical (Crouch on R3)</option>
                <option>Bumper Jumper (Jump on LB)</option>
                <option>Custom Layout...</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            </div>
          </div>

          <SettingsSlider label="Vibration Intensity" defaultValue={80} />

          <div className="mt-2 border-t border-border pt-6 flex flex-col gap-4">
            <ToggleRow
              title="Haptic Feedback (Adaptive Triggers)"
              description="Enable dynamic trigger resistance (only works with DualSense / compatible controllers)."
              defaultChecked={true}
            />
          </div>
        </div>
      </div>

    </div>
  );
}