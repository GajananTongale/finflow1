import { ArrowUp, ArrowDown } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { marketData } from "@/lib/mock-data";

export function MarketSummary() {
  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Market Summary</h3>
        <span className="text-sm text-gray-400">24h</span>
      </div>
      <div className="space-y-4">
        {marketData.map((crypto) => (
          <div key={crypto.id} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-all">
            <div className="flex items-center space-x-3">
              <div className={`crypto-icon ${crypto.color} text-sm`}>{crypto.icon}</div>
              <span className="font-medium text-white">{crypto.name}</span>
            </div>
            <div className="text-right">
              <p className="font-medium text-white">{formatCurrency(crypto.price)}</p>
              <p className={`text-sm flex items-center ${crypto.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {crypto.change24h >= 0 ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                {formatPercentage(Math.abs(crypto.change24h))} ({formatCurrency(Math.abs(crypto.value))})
              </p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
