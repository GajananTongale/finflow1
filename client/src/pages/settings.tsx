import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Shield, Palette, Globe, CreditCard, Database, LogOut } from "lucide-react";

const settingsCategories = [
  {
    title: "Account",
    icon: User,
    settings: [
      {
        name: "Profile Information",
        description: "Update your personal information and profile picture",
        type: "link"
      },
      {
        name: "Email Address",
        description: "alex.chen@example.com",
        type: "link"
      },
      {
        name: "Change Password",
        description: "Update your account password for security",
        type: "link"
      },
      {
        name: "Two-Factor Authentication",
        description: "Add an extra layer of security to your account",
        type: "toggle",
        enabled: true
      }
    ]
  },
  {
    title: "Notifications",
    icon: Bell,
    settings: [
      {
        name: "Email Notifications",
        description: "Receive important updates via email",
        type: "toggle",
        enabled: true
      },
      {
        name: "Push Notifications",
        description: "Get real-time alerts on your device",
        type: "toggle",
        enabled: false
      },
      {
        name: "Trading Alerts",
        description: "Notifications for price movements and trades",
        type: "toggle",
        enabled: true
      },
      {
        name: "Market Updates",
        description: "Daily market summaries and news",
        type: "toggle",
        enabled: true
      }
    ]
  },
  {
    title: "Privacy & Security",
    icon: Shield,
    settings: [
      {
        name: "Data Privacy",
        description: "Control how your data is collected and used",
        type: "link"
      },
      {
        name: "Session Management",
        description: "Manage active sessions and devices",
        type: "link"
      },
      {
        name: "Privacy Mode",
        description: "Hide sensitive information in public views",
        type: "toggle",
        enabled: false
      },
      {
        name: "Analytics Tracking",
        description: "Help improve our service with usage analytics",
        type: "toggle",
        enabled: true
      }
    ]
  },
  {
    title: "Appearance",
    icon: Palette,
    settings: [
      {
        name: "Theme",
        description: "Dark mode enabled",
        type: "link"
      },
      {
        name: "Language",
        description: "English (US)",
        type: "link"
      },
      {
        name: "Currency Display",
        description: "USD ($)",
        type: "link"
      },
      {
        name: "Chart Animations",
        description: "Enable smooth animations in charts",
        type: "toggle",
        enabled: true
      }
    ]
  },
  {
    title: "Trading",
    icon: Database,
    settings: [
      {
        name: "Default Order Type",
        description: "Market orders",
        type: "link"
      },
      {
        name: "Risk Management",
        description: "Configure stop-loss and take-profit defaults",
        type: "link"
      },
      {
        name: "Auto-Invest",
        description: "Automatically invest spare change",
        type: "toggle",
        enabled: false
      },
      {
        name: "Paper Trading",
        description: "Practice with virtual money",
        type: "toggle",
        enabled: false
      }
    ]
  },
  {
    title: "Billing",
    icon: CreditCard,
    settings: [
      {
        name: "Subscription Plan",
        description: "Premium Trader - $29.99/month",
        type: "link"
      },
      {
        name: "Payment Method",
        description: "Visa ending in 1234",
        type: "link"
      },
      {
        name: "Billing History",
        description: "View past invoices and payments",
        type: "link"
      },
      {
        name: "Auto-Renewal",
        description: "Automatically renew subscription",
        type: "toggle",
        enabled: true
      }
    ]
  }
];

export default function Settings() {
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
            <div className="max-w-4xl mx-auto space-y-6">
              {settingsCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <GlassCard key={category.title}>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <Icon className="text-white w-4 h-4" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                    </div>
                    
                    <div className="space-y-4">
                      {category.settings.map((setting, index) => (
                        <div key={setting.name}>
                          <div className="flex items-center justify-between py-4">
                            <div className="flex-1">
                              <h3 className="text-lg font-medium text-white">{setting.name}</h3>
                              <p className="text-gray-400 text-sm mt-1">{setting.description}</p>
                            </div>
                            <div className="ml-4">
                              {setting.type === "toggle" ? (
                                <Switch 
                                  checked={setting.enabled} 
                                  className="data-[state=checked]:bg-indigo-500"
                                />
                              ) : (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="bg-white/10 border border-white/20 hover:bg-white/20 text-white"
                                >
                                  Configure
                                </Button>
                              )}
                            </div>
                          </div>
                          {index < category.settings.length - 1 && (
                            <Separator className="bg-white/10" />
                          )}
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                );
              })}

              {/* Danger Zone */}
              <GlassCard className="border-red-500/30">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <LogOut className="text-white w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Danger Zone</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white">Export Data</h3>
                      <p className="text-gray-400 text-sm mt-1">Download all your trading data and account information</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border border-white/20 hover:bg-white/20 text-white"
                    >
                      Export
                    </Button>
                  </div>
                  
                  <Separator className="bg-white/10" />
                  
                  <div className="flex items-center justify-between py-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-red-400">Close Account</h3>
                      <p className="text-gray-400 text-sm mt-1">Permanently delete your account and all associated data</p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      Delete Account
                    </Button>
                  </div>
                </div>
              </GlassCard>

              {/* Support */}
              <GlassCard>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Globe className="text-white w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Support & Help</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="bg-white/10 border border-white/20 hover:bg-white/20 text-white h-auto p-4 flex flex-col items-start space-y-2"
                  >
                    <span className="font-medium">Help Center</span>
                    <span className="text-sm text-gray-400">Browse our knowledge base and FAQs</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="bg-white/10 border border-white/20 hover:bg-white/20 text-white h-auto p-4 flex flex-col items-start space-y-2"
                  >
                    <span className="font-medium">Contact Support</span>
                    <span className="text-sm text-gray-400">Get help from our support team</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="bg-white/10 border border-white/20 hover:bg-white/20 text-white h-auto p-4 flex flex-col items-start space-y-2"
                  >
                    <span className="font-medium">Feature Requests</span>
                    <span className="text-sm text-gray-400">Suggest new features and improvements</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="bg-white/10 border border-white/20 hover:bg-white/20 text-white h-auto p-4 flex flex-col items-start space-y-2"
                  >
                    <span className="font-medium">Community</span>
                    <span className="text-sm text-gray-400">Join our Discord community</span>
                  </Button>
                </div>
              </GlassCard>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}