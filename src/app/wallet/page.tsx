import { Wallet as WalletIcon, Plus, Gift, CreditCard, ArrowUpRight, History, ShieldCheck, ShoppingCart, ArrowDownLeft, ChevronRight } from "lucide-react";

// MOCK DATA: Son Əməliyyatlar
const TRANSACTIONS = [
  { id: 1, type: "purchase", title: "Cyber Nexus 2077", date: "Today", amount: "$59.99", isPositive: false, icon: <ShoppingCart size={20} /> },
  { id: 2, type: "topup", title: "Wallet Top-up", date: "Yesterday", amount: "+$100.00", isPositive: true, icon: <ArrowDownLeft size={20} /> },
  { id: 3, type: "gift", title: "Gift from PhantomX", date: "3 days ago", amount: "+$25.00", isPositive: true, icon: <Gift size={20} /> },
  { id: 4, type: "purchase", title: "Shadow Realm DLC", date: "1 week ago", amount: "$29.99", isPositive: false, icon: <ShoppingCart size={20} /> },
  { id: 5, type: "purchase", title: "Neon Racers Battle Pass", date: "2 weeks ago", amount: "$9.99", isPositive: false, icon: <ShoppingCart size={20} /> },
];

export default function WalletPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-[1200px] mx-auto pb-20">

      {/* SOL SÜTUN: Balans, Qrafik və Tranzaksiyalar (Genişlik 2/3) */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">Forge & Finance</h1>
          <p className="text-text-muted mb-6">Manage your wallet and transactions</p>
        </div>

        {/* 1. Main Balance Card */}
        <div className="bg-gradient-to-br from-[#1a1625] to-[#121212] border border-border rounded-3xl p-8 relative overflow-hidden">
          {/* Arxa plan bəzəyi (Xəfif bənövşəyi işıq) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />

          <div className="relative z-10 flex justify-between items-start mb-8">
            <div>
              <p className="text-text-muted mb-2">Available Balance</p>
              <h2 className="text-5xl font-black text-white">$285.43</h2>
            </div>
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
              <WalletIcon size={28} className="text-primary" />
            </div>
          </div>

          <div className="relative z-10 flex gap-4">
            <button className="bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors">
              <Plus size={20} /> Add Funds
            </button>
            <button className="bg-transparent border border-border text-white hover:bg-surface px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors">
              <Gift size={20} /> Send Gift
            </button>
          </div>
        </div>

        {/* 2. Balance History (Sadə CSS Qrafik) */}
        <div className="bg-surface/50 border border-border rounded-3xl p-8">
          <h3 className="text-xl font-bold text-white mb-8">Balance History</h3>

          {/* Qrafik Konteyneri */}
          <div className="relative h-64 w-full flex items-end justify-between px-2">
            {/* Y oxu (Qiymətlər) */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-text-muted/50 font-medium">
              <span>$360</span><span>$270</span><span>$180</span><span>$90</span><span>$0</span>
            </div>

            {/* Üfüqi Xətlər */}
            <div className="absolute left-10 right-0 top-0 bottom-8 flex flex-col justify-between pointer-events-none">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-full border-b border-border/30" />)}
            </div>

            {/* Nöqtələr (Aylar üzrə) */}
            <div className="absolute left-10 right-0 top-0 bottom-8 flex items-end justify-between px-4 pb-2 pointer-events-none">
              {/* Bu nöqtələrin bottom dəyərlərini random/gözəyarı qoyuruq ki, qrafik forması yaransın */}
              <div className="w-2 h-2 rounded-full bg-primary/50 relative" style={{ bottom: '10%' }} />
              <div className="w-2 h-2 rounded-full bg-primary/50 relative" style={{ bottom: '25%' }} />
              <div className="w-2 h-2 rounded-full bg-primary/50 relative" style={{ bottom: '15%' }} />
              <div className="w-2 h-2 rounded-full bg-primary/50 relative" style={{ bottom: '40%' }} />
              <div className="w-2 h-2 rounded-full bg-primary/50 relative" style={{ bottom: '35%' }} />
              <div className="w-2 h-2 rounded-full bg-primary/50 relative" style={{ bottom: '60%' }} />
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#8b5cf6] relative z-10" style={{ bottom: '75%' }} />
            </div>

            {/* X oxu (Aylar) */}
            <div className="w-full pl-10 flex justify-between text-xs text-text-muted font-medium mt-auto pt-4">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
            </div>
          </div>
        </div>

        {/* 3. Recent Transactions */}
        <div className="bg-surface/50 border border-border rounded-3xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Recent Transactions</h3>
            <span className="text-sm text-text-muted hover:text-white cursor-pointer flex items-center gap-1 transition-colors">
              View All <ChevronRight size={16} />
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {TRANSACTIONS.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-surface rounded-2xl transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tx.type === 'purchase' ? 'bg-background border border-border text-text-muted' :
                      tx.type === 'topup' ? 'bg-green-500/10 text-green-500' : 'bg-primary/10 text-primary'
                    }`}>
                    {tx.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white group-hover:text-primary transition-colors">{tx.title}</span>
                    <span className="text-sm text-text-muted">{tx.date}</span>
                  </div>
                </div>
                <span className={`font-bold ${tx.isPositive ? 'text-green-500' : 'text-white'}`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SAĞ SÜTUN: Kartlar və Quick Actions (Genişlik 1/3) */}
      <div className="w-full lg:w-[360px] flex flex-col gap-6 mt-2 lg:mt-[90px]">

        {/* Payment Methods */}
        <div className="bg-surface/50 border border-border rounded-3xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-white text-lg">Payment Methods</h3>
            <button className="text-text-muted hover:text-white transition-colors"><Plus size={20} /></button>
          </div>

          <div className="flex flex-col gap-4">
            {/* Card 1 (Default) */}
            <div className="border border-primary bg-primary/5 rounded-2xl p-4 flex gap-4 items-center cursor-pointer">
              <div className="w-12 h-8 bg-background rounded border border-border flex items-center justify-center">
                <CreditCard size={20} className="text-text-muted" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="font-bold text-white text-sm">Visa •••• 4242</span>
                <span className="text-xs text-text-muted">Expires 12/25</span>
              </div>
              <div className="text-[10px] bg-primary/20 text-primary px-2 py-1 rounded-md font-bold uppercase tracking-wider">Default</div>
            </div>

            {/* Card 2 */}
            <div className="border border-border bg-background hover:bg-surface/50 rounded-2xl p-4 flex gap-4 items-center cursor-pointer transition-colors">
              <div className="w-12 h-8 bg-surface rounded border border-border flex items-center justify-center">
                <CreditCard size={20} className="text-text-muted" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="font-bold text-white text-sm">Mastercard •••• 8888</span>
                <span className="text-xs text-text-muted">Expires 06/26</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-surface/50 border border-border rounded-3xl p-6">
          <h3 className="font-bold text-white text-lg mb-4">Quick Actions</h3>
          <div className="flex flex-col gap-2">
            {[
              { icon: <ArrowUpRight size={18} />, text: "Transfer to Friend" },
              { icon: <Gift size={18} />, text: "Redeem Gift Card" },
              { icon: <History size={18} />, text: "Transaction History" },
            ].map((action, i) => (
              <button key={i} className="flex items-center gap-3 w-full p-3 hover:bg-surface rounded-xl text-text-main hover:text-white transition-colors">
                <div className="text-text-muted">{action.icon}</div>
                <span className="text-sm font-medium">{action.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Secure Payments Banner */}
        <div className="bg-surface border border-border rounded-3xl p-6 flex gap-4">
          <ShieldCheck size={24} className="text-primary shrink-0" />
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-white">Secure Payments</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              All transactions are encrypted and processed securely. Your payment information is never stored on our servers.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}