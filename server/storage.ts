import { 
  users, 
  portfolios, 
  assets, 
  holdings, 
  transactions, 
  chatSessions, 
  chatMessages,
  type User, 
  type InsertUser,
  type Portfolio,
  type InsertPortfolio,
  type Asset,
  type InsertAsset,
  type Holding,
  type InsertHolding,
  type Transaction,
  type InsertTransaction,
  type ChatSession,
  type InsertChatSession,
  type ChatMessage,
  type InsertChatMessage
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Portfolio methods
  getUserPortfolios(userId: number): Promise<Portfolio[]>;
  createPortfolio(portfolio: InsertPortfolio): Promise<Portfolio>;
  
  // Asset methods
  getAssets(): Promise<Asset[]>;
  getAssetBySymbol(symbol: string): Promise<Asset | undefined>;
  createAsset(asset: InsertAsset): Promise<Asset>;
  
  // Holdings methods
  getPortfolioHoldings(portfolioId: number): Promise<(Holding & { asset: Asset })[]>;
  createHolding(holding: InsertHolding): Promise<Holding>;
  
  // Transaction methods
  getPortfolioTransactions(portfolioId: number): Promise<(Transaction & { asset: Asset })[]>;
  createTransaction(transaction: InsertTransaction): Promise<Transaction>;
  
  // Chat methods
  getUserChatSessions(userId: number): Promise<ChatSession[]>;
  createChatSession(session: InsertChatSession): Promise<ChatSession>;
  getChatMessages(sessionId: number): Promise<ChatMessage[]>;
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Portfolio methods
  async getUserPortfolios(userId: number): Promise<Portfolio[]> {
    return await db
      .select()
      .from(portfolios)
      .where(eq(portfolios.userId, userId));
  }

  async createPortfolio(portfolio: InsertPortfolio): Promise<Portfolio> {
    const [newPortfolio] = await db
      .insert(portfolios)
      .values(portfolio)
      .returning();
    return newPortfolio;
  }

  // Asset methods
  async getAssets(): Promise<Asset[]> {
    return await db.select().from(assets);
  }

  async getAssetBySymbol(symbol: string): Promise<Asset | undefined> {
    const [asset] = await db
      .select()
      .from(assets)
      .where(eq(assets.symbol, symbol));
    return asset || undefined;
  }

  async createAsset(asset: InsertAsset): Promise<Asset> {
    const [newAsset] = await db
      .insert(assets)
      .values(asset)
      .returning();
    return newAsset;
  }

  // Holdings methods
  async getPortfolioHoldings(portfolioId: number): Promise<(Holding & { asset: Asset })[]> {
    return await db
      .select()
      .from(holdings)
      .leftJoin(assets, eq(holdings.assetId, assets.id))
      .where(eq(holdings.portfolioId, portfolioId))
      .then(rows => rows.map(row => ({
        ...row.holdings,
        asset: row.assets!
      })));
  }

  async createHolding(holding: InsertHolding): Promise<Holding> {
    const [newHolding] = await db
      .insert(holdings)
      .values(holding)
      .returning();
    return newHolding;
  }

  // Transaction methods
  async getPortfolioTransactions(portfolioId: number): Promise<(Transaction & { asset: Asset })[]> {
    return await db
      .select()
      .from(transactions)
      .leftJoin(assets, eq(transactions.assetId, assets.id))
      .where(eq(transactions.portfolioId, portfolioId))
      .then(rows => rows.map(row => ({
        ...row.transactions,
        asset: row.assets!
      })));
  }

  async createTransaction(transaction: InsertTransaction): Promise<Transaction> {
    const [newTransaction] = await db
      .insert(transactions)
      .values(transaction)
      .returning();
    return newTransaction;
  }

  // Chat methods
  async getUserChatSessions(userId: number): Promise<ChatSession[]> {
    return await db
      .select()
      .from(chatSessions)
      .where(eq(chatSessions.userId, userId));
  }

  async createChatSession(session: InsertChatSession): Promise<ChatSession> {
    const [newSession] = await db
      .insert(chatSessions)
      .values(session)
      .returning();
    return newSession;
  }

  async getChatMessages(sessionId: number): Promise<ChatMessage[]> {
    return await db
      .select()
      .from(chatMessages)
      .where(eq(chatMessages.sessionId, sessionId));
  }

  async createChatMessage(message: InsertChatMessage): Promise<ChatMessage> {
    const [newMessage] = await db
      .insert(chatMessages)
      .values(message)
      .returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
