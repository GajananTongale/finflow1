import { db } from "./db";
import { users, portfolios, assets, holdings, transactions, chatSessions, chatMessages } from "@shared/schema";

async function seed() {
  console.log("Seeding database...");

  // Create demo user
  const [user] = await db
    .insert(users)
    .values({
      username: "alex_chen",
      password: "$2b$10$hash", // In real app, this would be properly hashed
      email: "alex.chen@example.com",
      firstName: "Alex",
      lastName: "Chen",
    })
    .returning();

  console.log("Created user:", user.username);

  // Create portfolio
  const [portfolio] = await db
    .insert(portfolios)
    .values({
      userId: user.id,
      name: "Main Portfolio",
      totalValue: "112485.27",
      dailyChange: "4127.86",
      dailyChangePercent: "14.5",
    })
    .returning();

  console.log("Created portfolio:", portfolio.name);

  // Create assets
  const assetData = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      type: "crypto",
      currentPrice: "46320.50",
      change24h: "5.8",
      marketCap: "912000000000",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      type: "crypto",
      currentPrice: "3420.25",
      change24h: "2.4",
      marketCap: "411000000000",
    },
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      type: "stock",
      currentPrice: "187.32",
      change24h: "1.2",
      marketCap: "2850000000000",
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corp.",
      type: "stock",
      currentPrice: "402.65",
      change24h: "-0.8",
      marketCap: "2980000000000",
    },
    {
      symbol: "NVDA",
      name: "NVIDIA Corp.",
      type: "stock",
      currentPrice: "950.02",
      change24h: "3.1",
      marketCap: "2340000000000",
    },
  ];

  const createdAssets = await db
    .insert(assets)
    .values(assetData)
    .returning();

  console.log("Created assets:", createdAssets.length);

  // Create holdings
  const holdingsData = [
    {
      portfolioId: portfolio.id,
      assetId: createdAssets.find(a => a.symbol === "BTC")!.id,
      quantity: "0.458",
      averageCost: "42500.00",
      totalValue: "21214.79",
    },
    {
      portfolioId: portfolio.id,
      assetId: createdAssets.find(a => a.symbol === "ETH")!.id,
      quantity: "2.356",
      averageCost: "3200.00",
      totalValue: "8058.11",
    },
    {
      portfolioId: portfolio.id,
      assetId: createdAssets.find(a => a.symbol === "AAPL")!.id,
      quantity: "15",
      averageCost: "175.00",
      totalValue: "2809.80",
    },
    {
      portfolioId: portfolio.id,
      assetId: createdAssets.find(a => a.symbol === "MSFT")!.id,
      quantity: "8",
      averageCost: "380.00",
      totalValue: "3221.20",
    },
  ];

  const createdHoldings = await db
    .insert(holdings)
    .values(holdingsData)
    .returning();

  console.log("Created holdings:", createdHoldings.length);

  // Create sample transactions
  const transactionData = [
    {
      portfolioId: portfolio.id,
      assetId: createdAssets.find(a => a.symbol === "BTC")!.id,
      type: "buy",
      quantity: "0.458",
      price: "42500.00",
      totalAmount: "19465.00",
      fee: "25.00",
    },
    {
      portfolioId: portfolio.id,
      assetId: createdAssets.find(a => a.symbol === "ETH")!.id,
      type: "buy",
      quantity: "2.356",
      price: "3200.00",
      totalAmount: "7539.20",
      fee: "15.00",
    },
  ];

  const createdTransactions = await db
    .insert(transactions)
    .values(transactionData)
    .returning();

  console.log("Created transactions:", createdTransactions.length);

  // Create sample chat session
  const [chatSession] = await db
    .insert(chatSessions)
    .values({
      userId: user.id,
      title: "Market Analysis Discussion",
      category: "Trading Advice",
    })
    .returning();

  // Create sample chat messages
  const messageData = [
    {
      sessionId: chatSession.id,
      type: "bot",
      content: "Hello! I'm FinFlow AI, your crypto trading assistant. How can I help you today?",
    },
    {
      sessionId: chatSession.id,
      type: "user",
      content: "What's your analysis on Bitcoin's current price movement?",
    },
    {
      sessionId: chatSession.id,
      type: "bot",
      content: "Based on the current market trends, Bitcoin is showing strong bullish momentum with a 5.8% increase. The technical indicators suggest continued upward movement, but I recommend watching key resistance levels around $48,000.",
    },
  ];

  const createdMessages = await db
    .insert(chatMessages)
    .values(messageData)
    .returning();

  console.log("Created chat messages:", createdMessages.length);
  console.log("Database seeded successfully!");
}

// Run seed function
seed().catch(console.error);

export { seed };