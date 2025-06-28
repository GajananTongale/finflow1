# FinFlow - AI Crypto Trading Dashboard

## Overview

FinFlow is a luxury AI crypto trading dashboard application built with a modern full-stack architecture. The project features a React-based frontend with a sophisticated glassmorphic design system, an Express.js backend API, and PostgreSQL database integration using Drizzle ORM. The application is designed to provide a high-end user experience for cryptocurrency trading and portfolio management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom glassmorphic design tokens
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with `/api` prefix routing
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Design System
- **Theme**: Dark mode luxury crypto trading interface
- **Visual Effects**: Glassmorphism, gradient backgrounds, floating orbs
- **Typography**: Inter font family for modern readability
- **Color Palette**: Navy base with indigo, cyan, and emerald accents
- **Responsive**: Mobile-first responsive design approach

## Key Components

### Data Layer
- **Database**: PostgreSQL with Neon serverless driver
- **Schema**: User management with extensible table structure
- **Migrations**: Drizzle Kit for database schema migrations
- **Storage Interface**: Abstracted storage layer with in-memory fallback

### Frontend Components
- **Layout**: Sidebar navigation with glassmorphic header
- **Dashboard**: Modular card-based layout with stats, charts, and insights
- **Charts**: Recharts integration for Bitcoin price visualization
- **UI Components**: Comprehensive shadcn/ui component library

### Backend Services
- **Route Registration**: Centralized route management system
- **Error Handling**: Unified error response middleware
- **Development**: Hot reload with Vite integration in development
- **Logging**: Request/response logging with performance metrics

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Routing**: Express routes handle requests with `/api` prefix
3. **Data Access**: Storage interface abstracts database operations
4. **Response**: JSON responses with consistent error handling
5. **State Updates**: Query client manages caching and synchronization

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for Neon PostgreSQL
- **ORM**: drizzle-orm with drizzle-zod for type safety
- **UI Framework**: Comprehensive Radix UI component suite
- **State Management**: @tanstack/react-query for server state
- **Charts**: recharts for data visualization
- **Styling**: Tailwind CSS with PostCSS processing

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Database**: Drizzle Kit for schema management
- **Type Checking**: TypeScript with strict configuration
- **Development**: tsx for TypeScript execution

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild bundles Node.js server to `dist/index.js`
- **Assets**: Static assets served from build output directory

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: NODE_ENV=development for dev features
- **Production**: NODE_ENV=production for optimized builds

### Scaling Considerations
- **Database**: PostgreSQL with connection pooling support
- **Session Storage**: PostgreSQL-backed session management
- **Static Assets**: Served through Express in production
- **API**: RESTful design supports horizontal scaling

## Changelog

Changelog:
- June 28, 2025. Initial setup
- June 28, 2025. Added FinFlow ChatBot page with minimalist design inspired by reference image
- June 28, 2025. Added complete Portfolio page with performance charts, holdings table, and sector allocation
- June 28, 2025. Added Stocks page with market dashboard, watchlist, and global markets overview
- June 28, 2025. Added Settings page with comprehensive configuration options and account management
- June 28, 2025. Added Goals page with financial goal tracking and progress visualization
- June 28, 2025. Added Analytics page with advanced portfolio metrics and performance analysis
- June 28, 2025. Added Chat History page for managing AI conversation sessions

## User Preferences

Preferred communication style: Simple, everyday language.