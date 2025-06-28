export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  color: string;
  price: number;
  change24h: number;
  holdings: number;
  value: number;
}

export interface PortfolioStats {
  totalValue: number;
  dailyChange: number;
  dailyChangePercent: number;
  tradingVolume24h: number;
  tradingVolumeChange: number;
  activePositions: number;
  positionsChange: number;
  availableCash: number;
  cashChange: number;
}

export interface ChartDataPoint {
  time: string;
  price: number;
}

export const portfolioStats: PortfolioStats = {
  totalValue: 32485.27,
  dailyChange: 4127.86,
  dailyChangePercent: 14.5,
  tradingVolume24h: 8942.50,
  tradingVolumeChange: 8.3,
  activePositions: 12,
  positionsChange: -2.3,
  availableCash: 4280.00,
  cashChange: 5.6,
};

export const cryptoAssets: CryptoAsset[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: '₿',
    color: 'bg-orange-500',
    price: 46320.50,
    change24h: 5.8,
    holdings: 0.458,
    value: 21214.79,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'Ξ',
    color: 'bg-gray-600',
    price: 3420.25,
    change24h: 2.4,
    holdings: 2.356,
    value: 8058.11,
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    icon: 'S',
    color: 'bg-purple-500',
    price: 142.18,
    change24h: -1.2,
    holdings: 12.5,
    value: 1777.25,
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    icon: 'C',
    color: 'bg-blue-500',
    price: 0.581,
    change24h: -0.97,
    holdings: 950,
    value: 551.95,
  },
];

export const marketData: CryptoAsset[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: '₿',
    color: 'bg-orange-500',
    price: 46320.50,
    change24h: 5.8,
    holdings: 0,
    value: 32.50,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'Ξ',
    color: 'bg-gray-600',
    price: 3420.25,
    change24h: 2.1,
    holdings: 0,
    value: 14.78,
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    icon: 'S',
    color: 'bg-purple-500',
    price: 142.18,
    change24h: -1.2,
    holdings: 0,
    value: -4.88,
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    icon: 'C',
    color: 'bg-blue-500',
    price: 0.581,
    change24h: -0.97,
    holdings: 0,
    value: -0.26,
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    symbol: 'DOT',
    icon: 'P',
    color: 'bg-pink-500',
    price: 7.92,
    change24h: -2.5,
    holdings: 0,
    value: -20.04,
  },
];

export const bitcoinChartData: ChartDataPoint[] = [
  { time: '00:00', price: 45200 },
  { time: '02:00', price: 45800 },
  { time: '04:00', price: 46100 },
  { time: '06:00', price: 45900 },
  { time: '08:00', price: 46200 },
  { time: '10:00', price: 46800 },
  { time: '12:00', price: 46500 },
  { time: '14:00', price: 46320 },
  { time: '16:00', price: 46900 },
  { time: '18:00', price: 47200 },
  { time: '20:00', price: 46800 },
  { time: '22:00', price: 46600 },
  { time: '24:00', price: 46320 },
];

export interface AIInsight {
  id: string;
  title: string;
  status: 'bullish' | 'bearish' | 'neutral';
  value: string;
  description: string;
  icon: string;
  color: string;
}

export const aiInsights: AIInsight[] = [
  {
    id: 'sentiment',
    title: 'Market Sentiment',
    status: 'bullish',
    value: 'Bullish',
    description: 'Strong buying momentum detected across major cryptocurrencies.',
    icon: '😊',
    color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30',
  },
  {
    id: 'risk',
    title: 'Risk Level',
    status: 'neutral',
    value: 'Medium',
    description: 'Consider diversifying portfolio to reduce exposure risk.',
    icon: '⚠️',
    color: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30',
  },
  {
    id: 'recommendation',
    title: 'Recommendation',
    status: 'bullish',
    value: 'Hold BTC',
    description: 'Technical indicators suggest continued upward trend.',
    icon: '💡',
    color: 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/30',
  },
];
