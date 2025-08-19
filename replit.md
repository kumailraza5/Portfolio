# Portfolio Website

## Overview

This is a modern portfolio website built with React and Express.js, showcasing a professional developer's work and skills. The application features a full-stack architecture with a React frontend using shadcn/ui components and a Node.js/Express backend. The site includes sections for hero introduction, about, skills, portfolio projects, and contact functionality with form submissions stored in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and dark mode support
- **Animations**: Framer Motion for smooth animations and transitions throughout the portfolio sections
- **State Management**: TanStack Query (React Query) for server state management and API calls
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for the contact form

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request logging with timing and response data
- **Development**: Custom Vite integration for hot module replacement in development

### Data Storage
- **Database**: PostgreSQL with Neon serverless driver for cloud database connectivity
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: Defined in shared directory for type sharing between frontend and backend
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Current Storage**: In-memory storage implementation as fallback (MemStorage class)

### Authentication & Sessions
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **Security**: Prepared for user authentication with bcrypt-ready user schema

### Project Structure
- **Monorepo Layout**: Shared types and schemas between client and server
- **Client Directory**: Contains React application with organized component structure
- **Server Directory**: Express.js backend with routes and storage abstraction
- **Shared Directory**: Common TypeScript types and Drizzle database schemas

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production database
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support

### UI & Design
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Inter font family for typography

### Development Tools
- **Vite**: Fast build tool and development server with React plugin
- **TypeScript**: Type safety across the entire application stack
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment plugins for Replit platform

### Motion & Interactions
- **Framer Motion**: Animation library for page transitions and interactive elements
- **Embla Carousel**: Touch-friendly carousel component for portfolio showcase

### Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for forms and API data
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### Utilities
- **clsx & class-variance-authority**: Conditional CSS class composition
- **date-fns**: Date utility library for formatting and manipulation
- **nanoid**: Unique ID generation for various application needs