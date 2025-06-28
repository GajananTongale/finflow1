import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { BitcoinChart } from "@/components/dashboard/bitcoin-chart";
import { WalletBalance } from "@/components/dashboard/wallet-balance";
import { MyAssets } from "@/components/dashboard/my-assets";
import { MarketSummary } from "@/components/dashboard/market-summary";
import { AIInsights } from "@/components/dashboard/ai-insights";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="floating-orb top-1/4 left-1/4 w-96 h-96 bg-indigo-500"></div>
        <div className="floating-orb bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500"></div>
        <div className="floating-orb top-3/4 left-1/2 w-64 h-64 bg-emerald-500"></div>
      </div>

      <div className="relative z-10 flex h-screen">
        <Sidebar />
        
        <div className="flex-1 overflow-y-auto">
          <Header />
          
          <main className="p-6 space-y-6">
            <StatsCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <BitcoinChart />
              <WalletBalance />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MyAssets />
              <MarketSummary />
            </div>
            
            <AIInsights />
          </main>
        </div>
      </div>
    </div>
  );
}
