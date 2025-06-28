import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { GlassCard } from "@/components/ui/glass-card";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { bitcoinChartData } from "@/lib/mock-data";
import { ArrowUp } from "lucide-react";

const currentPrice = 46320.50;
const priceChange = 5.8;

export function BitcoinChart() {
  return (
    <GlassCard className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="crypto-icon bg-orange-500">₿</div>
          <div>
            <h3 className="text-xl font-semibold text-white">Bitcoin Price Chart</h3>
            <div className="flex items-center space-x-4 mt-1">
              <span className="text-2xl font-bold text-white">{formatCurrency(currentPrice)}</span>
              <span className="text-emerald-400 text-sm flex items-center">
                <ArrowUp className="w-3 h-3 mr-1" />
                {formatPercentage(priceChange)} <span className="text-gray-400 ml-1">(last 24h)</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs bg-indigo-500/20 text-indigo-300 rounded-lg">1D</button>
          <button className="px-3 py-1 text-xs bg-white/10 text-gray-400 rounded-lg hover:bg-white/20">7D</button>
          <button className="px-3 py-1 text-xs bg-white/10 text-gray-400 rounded-lg hover:bg-white/20">1M</button>
          <button className="px-3 py-1 text-xs bg-white/10 text-gray-400 rounded-lg hover:bg-white/20">3M</button>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={bitcoinChartData}>
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip
              contentStyle={{
                background: 'rgba(15, 22, 41, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(20px)',
              }}
              labelStyle={{ color: '#fff' }}
              formatter={(value: number) => [formatCurrency(value), 'Price']}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="rgb(99, 102, 241)"
              strokeWidth={3}
              dot={{ fill: 'rgb(99, 102, 241)', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}
