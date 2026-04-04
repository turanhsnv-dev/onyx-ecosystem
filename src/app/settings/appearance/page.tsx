"use client";
import { useState } from "react";
import { Check } from "lucide-react";

const ACCENT_COLORS = [
  { id: "purple", label: "Purple", hex: "bg-[#8b5cf6]" }, // Onyx Primary
  { id: "cyan", label: "Cyan", hex: "bg-[#06b6d4]" },
  { id: "pink", label: "Pink", hex: "bg-[#ec4899]" },
  { id: "green", label: "Green", hex: "bg-[#22c55e]" },
  { id: "orange", label: "Orange", hex: "bg-[#f97316]" },
  { id: "blue", label: "Blue", hex: "bg-[#3b82f6]" },
];

export default function AppearancePage() {
  const [activeTheme, setActiveTheme] = useState("dark");
  const [activeColor, setActiveColor] = useState("purple");

  return (
    <div className="flex flex-col gap-8">
      
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">Theme</h3>
        
        <div className="flex flex-wrap gap-6">
          
          <div 
            onClick={() => setActiveTheme("dark")}
            className={`relative flex flex-col items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 w-48 ${
              activeTheme === "dark" ? "border-primary bg-primary/5" : "border-border hover:border-text-muted"
            }`}
          >
            <div className="w-full h-24 bg-[#0a0a0a] rounded-xl border border-border shadow-inner" />
            <span className={`font-bold text-sm ${activeTheme === "dark" ? "text-white" : "text-text-muted"}`}>
              Dark
            </span>
            
            {activeTheme === "dark" && (
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-background shadow-lg">
                <Check size={14} className="text-white" />
              </div>
            )}
          </div>

          <div 
            onClick={() => setActiveTheme("light")}
            className={`relative flex flex-col items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 w-48 ${
              activeTheme === "light" ? "border-primary bg-primary/5" : "border-border hover:border-text-muted"
            }`}
          >
            <div className="w-full h-24 bg-white rounded-xl shadow-inner" />
            <span className={`font-bold text-sm ${activeTheme === "light" ? "text-white" : "text-text-muted"}`}>
              Light
            </span>
            
            {activeTheme === "light" && (
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-background shadow-lg">
                <Check size={14} className="text-white" />
              </div>
            )}
          </div>

        </div>
      </div>

      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">Accent Color</h3>
        
        <div className="flex flex-wrap gap-6">
          {ACCENT_COLORS.map((color) => {
            const isActive = activeColor === color.id;
            
            return (
              <div 
                key={color.id} 
                className="flex flex-col items-center gap-3 cursor-pointer group"
                onClick={() => setActiveColor(color.id)}
              >
                <div 
                  className={`w-12 h-12 rounded-full transition-all duration-300 ${color.hex} ${
                    isActive 
                      ? "ring-4 ring-offset-4 ring-offset-background ring-white scale-110" 
                      : "ring-0 hover:scale-110"
                  }`}
                />
                <span className={`text-xs font-medium transition-colors ${
                  isActive ? "text-white" : "text-text-muted group-hover:text-white"
                }`}>
                  {color.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}