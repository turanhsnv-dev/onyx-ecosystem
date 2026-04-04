"use client";
import { useState } from "react";
import { Globe, MapPin, Clock, MessageSquare, ChevronDown } from "lucide-react";

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
        className={`relative w-11 h-6 rounded-full transition-colors duration-300 ease-in-out shrink-0 focus:outline-none ${
          isOn ? "bg-primary" : "bg-surface border border-border"
        }`}
      >
        <span 
          className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${
            isOn ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default function LanguageRegionPage() {
  return (
    <div className="flex flex-col gap-8">
      
      {/* 1. Language Preferences */}
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Globe className="text-primary" size={24} /> Language Preferences
        </h3>
        
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Interface Language</label>
            <div className="relative">
              <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                <option>English (United States)</option>
                <option>Azerbaijani (Azərbaycan)</option>
                <option>Turkish (Türkçe)</option>
                <option>Spanish (Español)</option>
                <option>French (Français)</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            </div>
            <p className="text-xs text-text-muted mt-1">This changes the language of the Onyx client and store.</p>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <label className="text-sm font-medium text-white flex items-center gap-2">
              <MessageSquare size={16} className="text-text-muted"/> Default Game Language
            </label>
            <div className="relative">
              <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                <option>Match Interface Language</option>
                <option>English (Original Audio)</option>
                <option>Japanese (日本語)</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            </div>
          </div>

          <div className="mt-2 border-t border-border pt-6">
            <ToggleRow 
              title="Always show subtitles" 
              description="Automatically enable subtitles in supported games by default." 
              defaultChecked={true} 
            />
          </div>
        </div>
      </div>

      {/* 2. Region & Matchmaking */}
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <MapPin className="text-teal-500" size={24} /> Region & Matchmaking
        </h3>
        
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">Store Region & Currency</label>
              <div className="relative">
                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                  <option>United States (USD $)</option>
                  <option>Europe (EUR €)</option>
                  <option>Turkey (TRY ₺)</option>
                  <option>Azerbaijan (AZN ₼)</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">Matchmaking Server</label>
              <div className="relative">
                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                  <option>Auto (Lowest Ping)</option>
                  <option>Europe (Frankfurt) - 45ms</option>
                  <option>Europe (London) - 52ms</option>
                  <option>Middle East (Dubai) - 68ms</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Date & Time Format */}
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Clock className="text-[#f97316]" size={24} /> Date & Time
        </h3>
        
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Timezone</label>
            <div className="relative">
              <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                <option>(UTC+04:00) Baku, Tbilisi, Yerevan</option>
                <option>(UTC+00:00) London, Dublin, Lisbon</option>
                <option>(UTC-05:00) Eastern Time (US & Canada)</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            </div>
          </div>

          <div className="mt-2 border-t border-border pt-6 flex flex-col gap-4">
            <ToggleRow 
              title="Use 24-hour time format" 
              description="Display time as 14:00 instead of 2:00 PM." 
              defaultChecked={true} 
            />
          </div>
        </div>
      </div>

    </div>
  );
}