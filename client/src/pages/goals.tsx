import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, Plus, TrendingUp, DollarSign, Calendar, CheckCircle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const goals = [
  {
    id: 1,
    title: "Emergency Fund",
    description: "Build a 6-month emergency fund",
    target: 50000,
    current: 32500,
    deadline: "Dec 2024",
    category: "Savings",
    status: "active",
    icon: DollarSign,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    id: 2,
    title: "Retirement Portfolio",
    description: "Reach $500K for retirement",
    target: 500000,
    current: 287500,
    deadline: "Dec 2030",
    category: "Investment",
    status: "active",
    icon: TrendingUp,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 3,
    title: "House Down Payment",
    description: "Save 20% down payment for home",
    target: 100000,
    current: 100000,
    deadline: "Jun 2024",
    category: "Savings",
    status: "completed",
    icon: CheckCircle,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    id: 4,
    title: "Vacation Fund",
    description: "European vacation savings",
    target: 15000,
    current: 8500,
    deadline: "Jul 2024",
    category: "Savings",
    status: "active",
    icon: Target,
    color: "from-cyan-500 to-cyan-600"
  }
];

const goalCategories = [
  { name: "All", count: 4, active: true },
  { name: "Savings", count: 3, active: false },
  { name: "Investment", count: 1, active: false },
  { name: "Completed", count: 1, active: false },
];

export default function Goals() {
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
            {/* Header with Add Goal Button */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Financial Goals</h1>
                <p className="text-gray-400">Track your progress towards financial milestones</p>
              </div>
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all glow-effect">
                <Plus className="w-5 h-5 mr-2" />
                Add Goal
              </Button>
            </div>

            {/* Goal Categories */}
            <GlassCard>
              <div className="flex items-center space-x-6">
                {goalCategories.map((category) => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      category.active
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* Goals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.map((goal) => {
                const Icon = goal.icon;
                const progress = (goal.current / goal.target) * 100;
                const isCompleted = goal.status === 'completed';
                
                return (
                  <GlassCard key={goal.id} hover className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${goal.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="text-white w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{goal.title}</h3>
                          <p className="text-gray-400 text-sm mt-1">{goal.description}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-xs bg-white/10 px-2 py-1 rounded-lg text-gray-300">
                              {goal.category}
                            </span>
                            <span className="text-xs text-gray-400 flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {goal.deadline}
                            </span>
                          </div>
                        </div>
                      </div>
                      {isCompleted && (
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="text-white w-5 h-5" />
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Progress</span>
                        <span className="text-sm font-medium text-white">
                          {progress.toFixed(1)}%
                        </span>
                      </div>
                      <Progress 
                        value={progress} 
                        className="h-2 bg-white/10"
                      />
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-white">
                          {formatCurrency(goal.current)}
                        </span>
                        <span className="text-sm text-gray-400">
                          of {formatCurrency(goal.target)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Remaining: {formatCurrency(goal.target - goal.current)}
                      </div>
                    </div>

                    {!isCompleted && (
                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg transition-all"
                        >
                          Add Funds
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 border border-white/20 hover:bg-white/20 text-white"
                        >
                          Edit Goal
                        </Button>
                      </div>
                    )}
                  </GlassCard>
                );
              })}
            </div>

            {/* Goal Summary */}
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-6">Goal Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-indigo-400">4</p>
                  <p className="text-gray-400 text-sm">Total Goals</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-400">1</p>
                  <p className="text-gray-400 text-sm">Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-400">3</p>
                  <p className="text-gray-400 text-sm">In Progress</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">{formatCurrency(428500)}</p>
                  <p className="text-gray-400 text-sm">Total Saved</p>
                </div>
              </div>
            </GlassCard>
          </main>
        </div>
      </div>
    </div>
  );
}