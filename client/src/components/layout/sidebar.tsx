import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Briefcase, 
  TrendingUp, 
  Target, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Search,
  ChevronRight,
  LogOut,
  User,
  Bot
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Link, useLocation } from "wouter";

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Bot, label: "FinFlow ChatBot", path: "/chatbot" },
  { icon: Briefcase, label: "Portfolio", path: "/portfolio" },
  { icon: TrendingUp, label: "Stocks", path: "/stocks" },
  { icon: Target, label: "Goals", path: "/goals" },
  { icon: MessageSquare, label: "Chat History", path: "/chat-history" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar() {
  const [location] = useLocation();

  return (
    <div className="w-80 glass-morphism-dark border-r border-white/10 p-6 flex flex-col h-screen">
      {/* Logo */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
          <TrendingUp className="text-white text-lg" />
        </div>
        <h1 className="text-2xl font-bold text-gradient">FinFlow</h1>
      </div>
      
      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input 
          type="text" 
          placeholder="Search for..." 
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
        />
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;
          return (
            <Link key={item.label} href={item.path}>
              <div
                className={cn(
                  "sidebar-item flex items-center space-x-3 px-4 py-3 rounded-xl transition-all cursor-pointer",
                  isActive
                    ? "bg-indigo-500/20 border border-indigo-500/30 text-indigo-300"
                    : "text-gray-300 hover:text-white"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                <ChevronRight className="ml-auto text-xs w-4 h-4" />
              </div>
            </Link>
          );
        })}
      </nav>
      
      {/* User Profile */}
      <GlassCard className="mt-8 p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
            <User className="text-white w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-white">Alex Chen</p>
            <p className="text-sm text-gray-400">Premium Trader</p>
          </div>
          <LogOut className="text-gray-400 hover:text-white cursor-pointer w-5 h-5" />
        </div>
      </GlassCard>
    </div>
  );
}
