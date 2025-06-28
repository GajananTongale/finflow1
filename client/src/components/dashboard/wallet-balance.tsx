import { ArrowUp, Plus, Minus, MoreHorizontal } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { portfolioStats } from "@/lib/mock-data";

export function WalletBalance() {
  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Wallet Balance</h3>
        <MoreHorizontal className="text-gray-400 w-5 h-5" />
      </div>
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm">Available Balance</p>
          <p className="text-3xl font-bold text-white">{formatCurrency(portfolioStats.totalValue)}</p>
          <p className="text-emerald-400 text-sm flex items-center justify-center">
            <ArrowUp className="w-3 h-3 mr-1" />
            {formatPercentage(portfolioStats.dailyChangePercent)} this month
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-6">
          <Button className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-3 rounded-xl font-medium hover:shadow-lg transition-all text-sm">
            <Plus className="w-4 h-4 mr-2" />
            Deposit
          </Button>
          <Button variant="outline" className="bg-white/10 border border-white/20 px-4 py-3 rounded-xl font-medium hover:bg-white/20 transition-all text-sm">
            <Minus className="w-4 h-4 mr-2" />
            Withdraw
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}
