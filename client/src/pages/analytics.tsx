import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { GlassCard } from "@/components/ui/glass-card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, ArrowUp, ArrowDown, Activity, DollarSign, BarChart3, PieChart as PieChartIcon } from "lucide-react";
import { formatCurrency, formatPercentage } from "@/lib/utils";

const performanceData = [
  { month: 'Jan', portfolio: 95000, benchmark: 94000 },
  { month: 'Feb', portfolio: 98000, benchmark: 96000 },
  { month: 'Mar', portfolio: 102000, benchmark: 99000 },
  { month: 'Apr', portfolio: 105000, benchmark: 101000 },
  { month: 'May', portfolio: 108000, benchmark: 104000 },
  { month: 'Jun', portfolio: 112000, benchmark: 107000 },
];

const tradingVolumeData = [
  { day: 'Mon', volume: 25000 },
  { day: 'Tue', volume: 32000 },
  { day: 'Wed', volume: 28000 },
  { day: 'Thu', volume: 35000 },
  { day: 'Fri', volume: 42000 },
  { day: 'Sat', volume: 18000 },
  { day: 'Sun', volume: 15000 },
];

const assetAllocationData = [
  { name: 'Stocks', value: 45, color: '#3B82F6' },
  { name: 'Crypto', value: 25, color: '#10B981' },
  { name: 'Bonds', value: 20, color: '#F59E0B' },
  { name: 'Cash', value: 10, color: '#EF4444' },
];

const riskMetrics = [
  { metric: 'Sharpe Ratio', value: '1.45', status: 'good' },
  { metric: 'Max Drawdown', value: '-8.3%', status: 'warning' },
  { metric: 'Beta', value: '0.92', status: 'good' },
  { metric: 'Volatility', value: '12.4%', status: 'neutral' },
];

const topPerformers = [
  { symbol: 'NVDA', name: 'NVIDIA Corp.', return: 15.79, allocation: 12.5 },
  { symbol: 'AAPL', name: 'Apple Inc.', return: 8.71, allocation: 18.2 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', return: 5.89, allocation: 15.3 },
  { symbol: 'BTC', name: 'Bitcoin', return: 24.26, allocation: 8.7 },
];

const monthlyReturnsData = [
  { month: 'Jan', returns: 3.2 },
  { month: 'Feb', returns: 1.8 },
  { month: 'Mar', returns: 4.1 },
  { month: 'Apr', returns: 2.9 },
  { month: 'May', returns: 2.8 },
  { month: 'Jun', returns: 3.7 },
];

export default function Analytics() {
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
            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard hover className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="text-emerald-400 w-5 h-5" />
                    <h3 className="text-gray-400 text-sm">Total Return</h3>
                  </div>
                  <ArrowUp className="text-emerald-400 w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-white">+18.5%</p>
                  <p className="text-sm text-emerald-400">+2.3% this month</p>
                </div>
              </GlassCard>

              <GlassCard hover className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Activity className="text-indigo-400 w-5 h-5" />
                    <h3 className="text-gray-400 text-sm">Sharpe Ratio</h3>
                  </div>
                  <ArrowUp className="text-emerald-400 w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-white">1.45</p>
                  <p className="text-sm text-emerald-400">Excellent</p>
                </div>
              </GlassCard>

              <GlassCard hover className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="text-cyan-400 w-5 h-5" />
                    <h3 className="text-gray-400 text-sm">Max Drawdown</h3>
                  </div>
                  <ArrowDown className="text-yellow-400 w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-white">-8.3%</p>
                  <p className="text-sm text-yellow-400">Within limits</p>
                </div>
              </GlassCard>

              <GlassCard hover className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="text-purple-400 w-5 h-5" />
                    <h3 className="text-gray-400 text-sm">Alpha</h3>
                  </div>
                  <ArrowUp className="text-emerald-400 w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-white">+4.8%</p>
                  <p className="text-sm text-emerald-400">Outperforming</p>
                </div>
              </GlassCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Performance vs Benchmark */}
              <GlassCard>
                <h3 className="text-xl font-semibold text-white mb-6">Performance vs Benchmark</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData}>
                      <XAxis 
                        dataKey="month" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                      />
                      <Tooltip
                        contentStyle={{
                          background: 'rgba(15, 22, 41, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '12px',
                          backdropFilter: 'blur(20px)',
                        }}
                        labelStyle={{ color: '#fff' }}
                        formatter={(value: number) => [formatCurrency(value), '']}
                      />
                      <Area
                        type="monotone"
                        dataKey="benchmark"
                        stroke="#6B7280"
                        fill="#6B7280"
                        fillOpacity={0.2}
                        strokeWidth={2}
                        name="S&P 500"
                      />
                      <Area
                        type="monotone"
                        dataKey="portfolio"
                        stroke="#8B5CF6"
                        fill="#8B5CF6"
                        fillOpacity={0.3}
                        strokeWidth={2}
                        name="Your Portfolio"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>

              {/* Trading Volume */}
              <GlassCard>
                <h3 className="text-xl font-semibold text-white mb-6">Weekly Trading Volume</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={tradingVolumeData}>
                      <XAxis 
                        dataKey="day" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                      />
                      <Tooltip
                        contentStyle={{
                          background: 'rgba(15, 22, 41, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '12px',
                          backdropFilter: 'blur(20px)',
                        }}
                        labelStyle={{ color: '#fff' }}
                        formatter={(value: number) => [formatCurrency(value), 'Volume']}
                      />
                      <Bar
                        dataKey="volume"
                        fill="#3B82F6"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Asset Allocation */}
              <GlassCard>
                <h3 className="text-xl font-semibold text-white mb-6">Asset Allocation</h3>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={assetAllocationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {assetAllocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: number) => [`${value}%`, 'Allocation']}
                        contentStyle={{
                          background: 'rgba(15, 22, 41, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '12px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {assetAllocationData.map((item) => (
                    <div key={item.name} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-400">{item.name}</span>
                      <span className="text-sm text-white ml-auto">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Risk Metrics */}
              <GlassCard>
                <h3 className="text-xl font-semibold text-white mb-6">Risk Metrics</h3>
                <div className="space-y-4">
                  {riskMetrics.map((metric) => (
                    <div key={metric.metric} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">{metric.metric}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-medium">{metric.value}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          metric.status === 'good' ? 'bg-emerald-400' :
                          metric.status === 'warning' ? 'bg-yellow-400' : 'bg-gray-400'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Top Performers */}
              <GlassCard>
                <h3 className="text-xl font-semibold text-white mb-6">Top Performers</h3>
                <div className="space-y-4">
                  {topPerformers.map((performer) => (
                    <div key={performer.symbol} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="font-medium text-white">{performer.symbol}</p>
                        <p className="text-xs text-gray-400">{performer.allocation}% allocation</p>
                      </div>
                      <div className="text-right">
                        <p className="text-emerald-400 font-medium">
                          +{formatPercentage(performer.return)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Monthly Returns */}
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-6">Monthly Returns</h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyReturnsData}>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#94a3b8', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#94a3b8', fontSize: 12 }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                      contentStyle={{
                        background: 'rgba(15, 22, 41, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(20px)',
                      }}
                      labelStyle={{ color: '#fff' }}
                      formatter={(value: number) => [`${value}%`, 'Return']}
                    />
                    <Line
                      type="monotone"
                      dataKey="returns"
                      stroke="#10B981"
                      strokeWidth={3}
                      dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: '#fff', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>
          </main>
        </div>
      </div>
    </div>
  );
}