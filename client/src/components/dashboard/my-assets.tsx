import { ArrowUp, ArrowDown } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { cryptoAssets } from "@/lib/mock-data";

export function MyAssets() {
  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">My Assets</h3>
        <button className="text-indigo-400 text-sm hover:text-indigo-300">View All</button>
      </div>
      <div className="space-y-4">
        {cryptoAssets.map((asset) => (
          <div key={asset.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
            <div className="flex items-center space-x-3">
              <div className={`crypto-icon ${asset.color}`}>{asset.icon}</div>
              <div>
                <p className="font-medium text-white">{asset.name}</p>
                <p className="text-sm text-gray-400">{asset.symbol}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-white">{formatCurrency(asset.price)}</p>
              <p className={`text-sm flex items-center ${asset.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {asset.change24h >= 0 ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                {formatPercentage(Math.abs(asset.change24h))}
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium text-white">{asset.holdings} {asset.symbol}</p>
              <p className="text-sm text-gray-400">{formatCurrency(asset.value)}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
