import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { GlassCard } from "@/components/ui/glass-card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { formatCurrency, formatPercentage } from "@/lib/utils";

const portfolioPerformanceData = [
  { date: 'May 31', portfolio: 1030, sp500: 1020 },
  { date: 'Jun 2', portfolio: 1040, sp500: 1025 },
  { date: 'Jun 4', portfolio: 1035, sp500: 1030 },
  { date: 'Jun 6', portfolio: 1050, sp500: 1035 },
  { date: 'Jun 8', portfolio: 1055, sp500: 1040 },
  { date: 'Jun 10', portfolio: 1045, sp500: 1038 },
  { date: 'Jun 12', portfolio: 1065, sp500: 1042 },
  { date: 'Jun 14', portfolio: 1070, sp500: 1045 },
  { date: 'Jun 16', portfolio: 1075, sp500: 1048 },
  { date: 'Jun 18', portfolio: 1080, sp500: 1050 },
  { date: 'Jun 20', portfolio: 1085, sp500: 1055 },
  { date: 'Jun 22', portfolio: 1090, sp500: 1060 },
  { date: 'Jun 24', portfolio: 1095, sp500: 1065 },
  { date: 'Jun 26', portfolio: 1100, sp500: 1070 },
  { date: 'Jun 28', portfolio: 1105, sp500: 1075 },
];

const holdings = [
  { symbol: 'AAPL', name: 'Apple Inc.', shares: 15, price: 187.32, value: 2809.80, gain: 548.55, gainPercent: 24.26 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 8, price: 402.65, value: 3221.20, gain: 179.20, gainPercent: 5.89 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', shares: 5, price: 950.02, value: 4750.10, gain: 647.60, gainPercent: 15.79 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 10, price: 157.95, value: 1579.50, gain: 126.50, gainPercent: 8.71 },
];

const pieData = [
  { name: 'AAPL', value: 2809.80, color: '#3B82F6' },
  { name: 'MSFT', value: 3221.20, color: '#10B981' },
  { name: 'NVDA', value: 4750.10, color: '#F59E0B' },
  { name: 'GOOGL', value: 1579.50, color: '#EF4444' },
];

const totalValue = holdings.reduce((sum, holding) => sum + holding.value, 0);
const totalGain = holdings.reduce((sum, holding) => sum + holding.gain, 0);
const totalGainPercent = (totalGain / (totalValue - totalGain)) * 100;

const sectorData = [
  { sector: 'Technology', percentage: 45, color: '#3B82F6' },
  { sector: 'Healthcare', percentage: 20, color: '#10B981' },
  { sector: 'Finance', percentage: 18, color: '#F59E0B' },
  { sector: 'Consumer', percentage: 12, color: '#EF4444' },
  { sector: 'Energy', percentage: 5, color: '#8B5CF6' },
];

const monthlyReturns = [
  { month: 'Jan', return: 3.65 },
  { month: 'Feb', return: 0.64 },
  { month: 'Mar', return: 2.04 },
  { month: 'Apr', return: -1.23 },
  { month: 'May', return: 4.87 },
  { month: 'Jun', return: 2.34 },
];

export default function Portfolio() {
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
            {/* Portfolio Performance Chart */}
            <GlassCard>
              <h2 className="text-2xl font-bold text-white mb-6">Portfolio Performance</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={portfolioPerformanceData}>
                    <XAxis 
                      dataKey="date" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#94a3b8', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#94a3b8', fontSize: 12 }}
                      domain={['dataMin - 10', 'dataMax + 10']}
                    />
                    <Tooltip
                      contentStyle={{
                        background: 'rgba(15, 22, 41, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(20px)',
                      }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="portfolio"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                      dot={false}
                      name="Your Portfolio"
                    />
                    <Line
                      type="monotone"
                      dataKey="sp500"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={false}
                      name="S&P 500"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Performance Summary */}
              <GlassCard>
                <h3 className="text-xl font-semibold text-white mb-4">Performance Summary</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Total Return</p>
                    <p className="text-2xl font-bold text-emerald-400">+0.74%</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Initial Investment</p>
                    <p className="text-lg text-white">{formatCurrency(totalValue - totalGain)}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Current Value</p>
                    <p className="text-lg text-white">{formatCurrency(totalValue)}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Total Gain/Loss</p>
                    <p className="text-lg text-emerald-400">
                      {formatCurrency(totalGain)} ({formatPercentage(totalGainPercent)})
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Sector Allocation */}
              <GlassCard>
                <h3 className="text-xl font-semibold text-white mb-4">Sector Allocation</h3>
                <div className="space-y-3">
                  {sectorData.map((sector) => (
                    <div key={sector.sector} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: sector.color }}
                        ></div>
                        <span className="text-white">{sector.sector}</span>
                      </div>
                      <span className="text-gray-400">{sector.percentage}%</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Monthly Returns */}
              <GlassCard>
                <h3 className="text-xl font-semibold text-white mb-4">Monthly Returns (%)</h3>
                <div className="grid grid-cols-3 gap-4">
                  {monthlyReturns.map((item) => (
                    <div key={item.month} className="text-center">
                      <p className="text-gray-400 text-sm">{item.month}</p>
                      <p className={`font-semibold ${item.return >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {formatPercentage(item.return)}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Portfolio Summary with Pie Chart */}
              <GlassCard>
                <h3 className="text-xl font-semibold text-white mb-4">Portfolio Summary</h3>
                <div className="mb-6">
                  <p className="text-gray-400 text-sm">Total Value</p>
                  <p className="text-3xl font-bold text-white">{formatCurrency(totalValue)}</p>
                  <p className="text-emerald-400">
                    {formatCurrency(totalGain)} ({formatPercentage(totalGainPercent)})
                  </p>
                </div>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: number) => formatCurrency(value)}
                        contentStyle={{
                          background: 'rgba(15, 22, 41, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '12px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  {pieData.map((item) => (
                    <div key={item.name} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-400">{item.name}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Holdings Table */}
              <GlassCard>
                <h3 className="text-xl font-semibold text-white mb-4">Holdings</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 text-gray-400 text-sm">Symbol</th>
                        <th className="text-left py-3 text-gray-400 text-sm">Name</th>
                        <th className="text-right py-3 text-gray-400 text-sm">Shares</th>
                        <th className="text-right py-3 text-gray-400 text-sm">Price</th>
                        <th className="text-right py-3 text-gray-400 text-sm">Value</th>
                        <th className="text-right py-3 text-gray-400 text-sm">Gain/Loss</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      {holdings.map((holding) => (
                        <tr key={holding.symbol} className="border-b border-white/5">
                          <td className="py-3 font-medium text-white">{holding.symbol}</td>
                          <td className="py-3 text-gray-300">{holding.name}</td>
                          <td className="py-3 text-right text-white">{holding.shares}</td>
                          <td className="py-3 text-right text-white">{formatCurrency(holding.price)}</td>
                          <td className="py-3 text-right text-white">{formatCurrency(holding.value)}</td>
                          <td className="py-3 text-right text-emerald-400">
                            {formatCurrency(holding.gain)} ({formatPercentage(holding.gainPercent)})
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}