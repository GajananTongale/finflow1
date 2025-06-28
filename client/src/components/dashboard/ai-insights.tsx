import { GlassCard } from "@/components/ui/glass-card";
import { aiInsights } from "@/lib/mock-data";
import { Bot } from "lucide-react";

export function AIInsights() {
  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Bot className="text-white w-4 h-4" />
          </div>
          <h3 className="text-xl font-semibold text-white">AI Trading Insights</h3>
        </div>
        <span className="text-sm text-gray-400">Last updated: 2 min ago</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiInsights.map((insight) => (
          <div key={insight.id} className={`bg-gradient-to-br ${insight.color} rounded-xl p-4`}>
            <div className="flex items-center justify-between mb-3">
              <h4 className={`font-medium ${
                insight.status === 'bullish' ? 'text-emerald-300' :
                insight.status === 'bearish' ? 'text-red-300' : 'text-yellow-300'
              }`}>
                {insight.title}
              </h4>
              <span className="text-xl">{insight.icon}</span>
            </div>
            <p className="text-2xl font-bold text-white mb-2">{insight.value}</p>
            <p className="text-sm text-gray-300">{insight.description}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
