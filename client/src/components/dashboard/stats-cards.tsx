import { ArrowUp, ArrowDown, Wallet, BarChart3, Target, DollarSign } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { portfolioStats } from "@/lib/mock-data";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ComponentType<any>;
  iconColor: string;
}

function StatCard({ title, value, change, isPositive, icon: Icon, iconColor }: StatCardProps) {
  return (
    <GlassCard hover className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon className={`${iconColor} w-5 h-5`} />
          <h3 className="text-gray-400 text-sm">{title}</h3>
        </div>
        {isPositive ? (
          <ArrowUp className="text-emerald-400 w-5 h-5" />
        ) : (
          <ArrowDown className="text-red-400 w-5 h-5" />
        )}
      </div>
      <div className="space-y-2">
        <p className="text-3xl font-bold text-white">{value}</p>
        <p className={`text-sm flex items-center ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
          {isPositive ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
          {change}
        </p>
      </div>
    </GlassCard>
  );
}

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Portfolio Value"
        value={formatCurrency(portfolioStats.totalValue)}
        change={`${formatPercentage(portfolioStats.dailyChangePercent)} this month`}
        isPositive={portfolioStats.dailyChangePercent > 0}
        icon={Wallet}
        iconColor="text-indigo-400"
      />
      <StatCard
        title="24h Trading Volume"
        value={formatCurrency(portfolioStats.tradingVolume24h)}
        change={`${formatPercentage(portfolioStats.tradingVolumeChange)} vs yesterday`}
        isPositive={portfolioStats.tradingVolumeChange > 0}
        icon={BarChart3}
        iconColor="text-cyan-400"
      />
      <StatCard
        title="Active Positions"
        value={portfolioStats.activePositions.toString()}
        change={`${formatPercentage(portfolioStats.positionsChange)} last month`}
        isPositive={portfolioStats.positionsChange > 0}
        icon={Target}
        iconColor="text-yellow-400"
      />
      <StatCard
        title="Available Cash"
        value={formatCurrency(portfolioStats.availableCash)}
        change={`${formatPercentage(portfolioStats.cashChange)} this week`}
        isPositive={portfolioStats.cashChange > 0}
        icon={DollarSign}
        iconColor="text-emerald-400"
      />
    </div>
  );
}
