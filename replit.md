# Personal Resume Website - Replit Configuration

## Overview

This is a modern full-stack web application designed to create a single-page personal resume website for "Haas". The project combines a React frontend with shadcn/ui components and an Express.js backend, featuring a creative and colorful design with smooth animations and responsive layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution
- **Production Build**: esbuild for backend bundling

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL (Neon serverless)
- **Migrations**: Drizzle Kit for schema management
- **Current State**: Uses in-memory storage with interface for future database integration

## Key Components

### Frontend Components
- **Home Page**: Main resume page with sections for bio, education, work experience, and contact
- **UI Components**: Complete shadcn/ui component library including forms, navigation, cards, and interactive elements
- **Responsive Design**: Mobile-first approach with breakpoint-aware components
- **Animations**: CSS-based animations with intersection observer for scroll-triggered effects

### Backend Components
- **Express Server**: RESTful API structure with middleware for logging and error handling
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Route Registration**: Modular route system with /api prefix
- **Development Tools**: Vite integration for hot reloading and development server

### Styling System
- **Design Tokens**: CSS custom properties for consistent theming
- **Color Scheme**: Vibrant color palette with primary (blue), secondary (pink), and accent (green) colors
- **Typography**: Inter font family for modern, readable text
- **Component Variants**: Class variance authority for component styling variations

## Data Flow

### Current Implementation
1. **Static Content**: Resume data is hardcoded in the frontend components
2. **Client-Side Rendering**: React components render directly in the browser
3. **API Ready**: Backend infrastructure prepared for future dynamic content

### Future Database Integration
1. **User Data**: Profile information, education, and work experience stored in PostgreSQL
2. **API Endpoints**: RESTful endpoints for CRUD operations on resume data
3. **Real-time Updates**: Potential for live editing and updates

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (wouter)
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Backend**: Express.js, Drizzle ORM
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **Development**: Vite, TypeScript, tsx, esbuild

### Development Tools
- **Replit Integration**: Vite plugins for Replit-specific features
- **Error Handling**: Runtime error overlay for development
- **Code Mapping**: Source map support for debugging

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend (Vite) and backend (tsx)
- **Hot Reloading**: Vite provides instant updates for frontend changes
- **API Logging**: Express middleware logs all API requests with timing

### Production Build
- **Frontend Build**: Vite bundles React application to `dist/public`
- **Backend Build**: esbuild compiles TypeScript server to `dist/index.js`
- **Static Serving**: Express serves built frontend files in production
- **Environment Detection**: Different behavior based on NODE_ENV

### Replit Deployment
- **Single Command**: `npm start` runs the production build
- **Static Assets**: Built files served directly by Express
- **Database**: Environment variable configuration for PostgreSQL connection
- **Scalability**: Ready for Replit's hosting infrastructure

### Database Setup
- **Migrations**: `npm run db:push` applies schema changes
- **Environment**: DATABASE_URL required for PostgreSQL connection
- **Schema**: Located in `shared/schema.ts` for type safety across frontend and backend

## Technical Decisions

### Monorepo Structure
- **Shared Code**: Common types and schemas in `shared/` directory
- **Clear Separation**: Client and server code in separate directories
- **Type Safety**: TypeScript throughout the entire application

### UI Architecture
- **Component Library**: shadcn/ui provides consistent, accessible components
- **Theming**: CSS custom properties enable easy color scheme changes
- **Responsive**: Mobile-first design with Tailwind's responsive utilities

### Performance Optimizations
- **Bundle Splitting**: Vite automatically optimizes frontend bundles
- **Tree Shaking**: Unused code eliminated in production builds
- **Static Assets**: Efficient serving of images and fonts

This architecture provides a solid foundation for a personal resume website that can scale from a simple static site to a dynamic, database-driven application while maintaining excellent developer experience and performance.