"use client";

export default function AccountSettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">Account Information</h3>
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Display Name</label>
            <input type="text" defaultValue="Player One" className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Username</label>
            <input type="text" defaultValue="playerone" className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Email</label>
            <input type="email" defaultValue="player@example.com" className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors" />
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-xl w-max mt-2 transition-colors">
            Save Changes
          </button>
        </form>
      </div>
      <div className="bg-surface/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">Password</h3>
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Current Password</label>
            <input type="password" placeholder="••••••••" className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">New Password</label>
            <input type="password" placeholder="••••••••" className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors" />
          </div>
        </form>
      </div>
    </div>
  );
}