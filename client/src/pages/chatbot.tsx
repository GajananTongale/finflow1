import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'I understand your question about crypto trading. Let me analyze the current market conditions for you...',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

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
          
          <main className="p-6 h-[calc(100vh-104px)] flex flex-col">
            <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
              {/* Empty State or Chat Messages */}
              <div className="flex-1 flex flex-col justify-center items-center">
                {messages.length === 0 ? (
                  <div className="text-center">
                    <h1 className="text-5xl font-normal text-white mb-8">
                      Hello, <span className="text-gradient">Alex</span>
                    </h1>
                  </div>
                ) : (
                  <div className="w-full flex-1 overflow-y-auto space-y-6 py-6">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`flex items-start space-x-3 max-w-3xl ${
                            message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              message.type === 'user'
                                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500'
                                : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                            }`}
                          >
                            {message.type === 'user' ? (
                              <User className="text-white w-5 h-5" />
                            ) : (
                              <Bot className="text-white w-5 h-5" />
                            )}
                          </div>
                          <div
                            className={`p-4 rounded-2xl ${
                              message.type === 'user'
                                ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30'
                                : 'bg-white/10 border border-white/20'
                            }`}
                          >
                            <p className="text-white leading-relaxed">{message.content}</p>
                            <p className="text-xs text-gray-400 mt-3">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="py-6">
                <GlassCard className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask FinFlow AI..."
                        className="w-full bg-transparent border-none text-white placeholder-gray-400 focus:outline-none text-lg"
                      />
                    </div>
                    <Button
                      onClick={sendMessage}
                      disabled={!inputMessage.trim()}
                      size="sm"
                      className="bg-transparent hover:bg-white/10 p-2 rounded-lg transition-all"
                    >
                      <Send className="w-5 h-5 text-gray-400" />
                    </Button>
                  </div>
                </GlassCard>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}