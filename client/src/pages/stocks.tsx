import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { GlassCard } from "@/components/ui/glass-card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowUp, ArrowDown, TrendingUp, DollarSign, BarChart3, Users } from "lucide-react";
import { formatCurrency, formatPercentage } from "@/lib/utils";

const marketStats = [
  {
    title: 'Market Cap',
    value: '$13.42T',
    change: '+0.47%',
    isPositive: true,
    icon: DollarSign,
  },
  {
    title: 'Trading Volume',
    value: '487.32M',
    change: "Today's volume",
    isPositive: true,
    icon: BarChart3,
  },
  {
    title: 'Top Gainer',
    value: 'META',
    change: '+7.94% Meta Platforms Inc.',
    isPositive: true,
    icon: TrendingUp,
  },
  {
    title: 'Top Loser',
    value: 'MSFT',
    change: '-5.62% Microsoft Corp.',
    isPositive: false,
    icon: Users,
  },
];

const watchlistStocks = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 181.48,
    change: -4.56,
    changePercent: -2.45,
    volume: '558.39M',
    marketCap: '$2.92T',
    updated: 'Just now',
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    price: 376.52,
    change: -22.42,
    changePercent: -5.62,
    volume: '$22.15M',
    marketCap: '$2.79T',
    updated: '2 min ago',
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    price: 892.14,
    change: 15.67,
    changePercent: 1.79,
    volume: '245.88M',
    marketCap: '$2.21T',
    updated: '1 min ago',
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 172.85,
    change: 3.24,
    changePercent: 1.91,
    volume: '125.64M',
    marketCap: '$2.13T',
    updated: 'Just now',
  },
];

const appleChartData = [
  { time: '5/29', price: 189.84 },
  { time: '5/31', price: 192.25 },
  { time: '6/2', price: 194.48 },
  { time: '6/4', price: 193.11 },
  { time: '6/6', price: 195.87 },
  { time: '6/8', price: 196.89 },
  { time: '6/10', price: 193.11 },
  { time: '6/12', price: 188.11 },
  { time: '6/14', price: 183.11 },
  { time: '6/16', price: 185.22 },
  { time: '6/18', price: 184.92 },
  { time: '6/20', price: 186.47 },
  { time: '6/22', price: 184.24 },
  { time: '6/24', price: 182.31 },
  { time: '6/26', price: 181.48 },
];

const globalMarkets = [
  {
    country: 'United States',
    markets: [
      { name: 'S&P 500', symbol: 'SPX', value: 5114.00, change: 1.59 },
      { name: 'Dow Jones', symbol: 'DJI', value: 38262.12, change: 0.39 },
      { name: 'NASDAQ', symbol: 'COMP', value: 16792.59, change: 1.14 },
    ]
  },
  {
    country: 'Japan',
    markets: [
      { name: 'Nikkei 225', symbol: 'N225', value: 38181.28, change: -0.97 },
    ]
  },
  {
    country: 'United Kingdom',
    markets: [
      { name: 'FTSE 100', symbol: 'UKX', value: 8420.26, change: 0.85 },
    ]
  },
];

export default function Stocks() {
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
            {/* Market Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <GlassCard key={stat.title} hover className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="text-indigo-400 w-5 h-5" />
                        <h3 className="text-gray-400 text-sm">{stat.title}</h3>
                      </div>
                      {stat.isPositive ? (
                        <ArrowUp className="text-emerald-400 w-5 h-5" />
                      ) : (
                        <ArrowDown className="text-red-400 w-5 h-5" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                      <p className={`text-sm ${stat.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                        {stat.change}
                      </p>
                    </div>
                  </GlassCard>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Watchlist */}
              <GlassCard>
                <h3 className="text-xl font-semibold text-white mb-4">Watchlist</h3>
                <div className="space-y-4">
                  {watchlistStocks.map((stock) => (
                    <div key={stock.symbol} className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold text-white">{stock.symbol}</p>
                          <p className="text-sm text-gray-400">{stock.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-white">{formatCurrency(stock.price)}</p>
                          <p className={`text-sm flex items-center ${stock.changePercent >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {stock.changePercent >= 0 ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                            {formatCurrency(Math.abs(stock.change))} ({formatPercentage(Math.abs(stock.changePercent))})
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Volume: {stock.volume}</span>
                        <span>Mkt Cap: {stock.marketCap}</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Updated: {stock.updated}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Stock Chart */}
              <GlassCard className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="crypto-icon bg-blue-500">A</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">AAPL</h3>
                      <p className="text-gray-400">Apple Inc.</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">$199.77</p>
                    <p className="text-red-400 text-sm flex items-center">
                      <ArrowDown className="w-3 h-3 mr-1" />
                      $4.56 (-2.45%)
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2 mb-4">
                  <button className="px-3 py-1 text-xs bg-white/10 text-gray-400 rounded-lg hover:bg-white/20">1D</button>
                  <button className="px-3 py-1 text-xs bg-white/10 text-gray-400 rounded-lg hover:bg-white/20">1W</button>
                  <button className="px-3 py-1 text-xs bg-indigo-500/20 text-indigo-300 rounded-lg">1M</button>
                  <button className="px-3 py-1 text-xs bg-white/10 text-gray-400 rounded-lg hover:bg-white/20">3M</button>
                  <button className="px-3 py-1 text-xs bg-white/10 text-gray-400 rounded-lg hover:bg-white/20">1Y</button>
                  <button className="px-3 py-1 text-xs bg-white/10 text-gray-400 rounded-lg hover:bg-white/20">All</button>
                </div>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={appleChartData}>
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
                        domain={['dataMin - 5', 'dataMax + 5']}
                        tickFormatter={(value) => `$${value}`}
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
                        stroke="#3B82F6"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, stroke: '#fff', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
            </div>

            {/* Global Markets */}
            <GlassCard>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-white">Global Markets</h3>
              </div>
              <div className="space-y-6">
                {globalMarkets.map((region) => (
                  <div key={region.country}>
                    <h4 className="text-lg font-medium text-white mb-3">{region.country}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {region.markets.map((market) => (
                        <div key={market.symbol} className="p-4 bg-white/5 rounded-xl">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium text-white">{market.name}</p>
                              <p className="text-sm text-gray-400">{market.symbol}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-white">{market.value.toLocaleString()}</p>
                              <p className={`text-sm flex items-center ${market.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                                {market.change >= 0 ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                                {formatPercentage(Math.abs(market.change))}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </main>
        </div>
      </div>
    </div>
  );
}