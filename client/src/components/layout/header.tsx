import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const getPageTitle = (path: string) => {
  switch (path) {
    case "/":
      return "Dashboard";
    case "/chatbot":
      return "FinFlow ChatBot";
    case "/portfolio":
      return "Portfolio";
    case "/stocks":
      return "Stocks";
    case "/goals":
      return "Goals";
    case "/chat-history":
      return "Chat History";
    case "/analytics":
      return "Analytics";
    case "/settings":
      return "Settings";
    default:
      return "Dashboard";
  }
};

export function Header() {
  const [location] = useLocation();
  const pageTitle = getPageTitle(location);

  return (
    <header className="glass-morphism-dark border-b border-white/10 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">{pageTitle}</h2>
          <p className="text-gray-400 mt-1">Welcome back, Alex</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 w-64"
            />
          </div>
          <button className="relative p-2 text-gray-400 hover:text-white">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          <Button className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all glow-effect">
            Connect
          </Button>
        </div>
      </div>
    </header>
  );
}
