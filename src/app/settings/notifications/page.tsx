"use client";
import { useState } from "react";

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

export default function NotificationsPage() {
  return (
    <div className="bg-surface/30 border border-border rounded-2xl p-8">
      <h3 className="text-xl font-bold text-white mb-6">Notification Preferences</h3>

      <div className="flex flex-col gap-4">
        <ToggleRow
          title="Game Updates"
          description="Get notified when your games have updates available"
          defaultChecked={true}
        />
        <ToggleRow
          title="Friend Activity"
          description="Notifications when friends come online or start playing"
          defaultChecked={true}
        />
        <ToggleRow
          title="Promotional Emails"
          description="Receive news about sales and special offers"
          defaultChecked={false}
        />
        <ToggleRow
          title="Stream Alerts"
          description="Get notified when followed streamers go live"
          defaultChecked={true}
        />
      </div>
    </div>
  );
}