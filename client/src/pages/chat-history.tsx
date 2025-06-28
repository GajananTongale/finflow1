import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Bot, User, Search, Calendar, Filter } from "lucide-react";

const chatSessions = [
  {
    id: 1,
    title: "Market Analysis Discussion",
    date: "2024-06-28",
    time: "10:30 AM",
    messages: 12,
    lastMessage: "Based on the current market trends, I recommend...",
    category: "Trading Advice"
  },
  {
    id: 2,
    title: "Portfolio Optimization",
    date: "2024-06-27",
    time: "3:15 PM", 
    messages: 8,
    lastMessage: "Your portfolio allocation looks balanced for...",
    category: "Portfolio"
  },
  {
    id: 3,
    title: "Bitcoin Price Prediction",
    date: "2024-06-26",
    time: "9:45 AM",
    messages: 15,
    lastMessage: "The technical indicators suggest a potential...",
    category: "Analysis"
  },
  {
    id: 4,
    title: "Risk Management Strategy",
    date: "2024-06-25",
    time: "2:20 PM",
    messages: 10,
    lastMessage: "Setting stop-loss orders at these levels would...",
    category: "Risk Management"
  },
  {
    id: 5,
    title: "Altcoin Research",
    date: "2024-06-24",
    time: "11:00 AM",
    messages: 20,
    lastMessage: "Here's my analysis of the top altcoins...",
    category: "Research"
  },
];

const categories = ["All", "Trading Advice", "Portfolio", "Analysis", "Risk Management", "Research"];

export default function ChatHistory() {
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
            {/* Search and Filter */}
            <GlassCard>
              <div className="flex items-center justify-between">
                <div className="flex-1 flex items-center space-x-4">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder="Search chat history..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border border-white/20 hover:bg-white/20 text-white"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </GlassCard>

            {/* Categories */}
            <GlassCard>
              <div className="flex items-center space-x-4 overflow-x-auto">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                      index === 0
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* Chat Sessions */}
            <div className="space-y-4">
              {chatSessions.map((session) => (
                <GlassCard key={session.id} hover className="cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <MessageSquare className="text-white w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1">{session.title}</h3>
                          <p className="text-gray-400 text-sm mb-2 line-clamp-1">{session.lastMessage}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {session.date} at {session.time}
                            </span>
                            <span>{session.messages} messages</span>
                            <span className="px-2 py-1 bg-white/10 rounded-lg">{session.category}</span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 border border-white/20 hover:bg-white/20 text-white"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button
                variant="outline"
                className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8"
              >
                Load More Sessions
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}