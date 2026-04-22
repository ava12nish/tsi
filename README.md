# TSI Web Platform

A production-quality, custom-built web platform for The Sanga Initiative (TSI), designed to replace the legacy Squarespace site with a modern, high-performance startup-level experience.

## Tech Stack
- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4** (CSS-first configuration)
- **Stripe** (Secure payments)
- **Data Abstraction Layer** (Currently using local mock data, ready for Supabase/PostgreSQL)

## Key Features
- **Premium Landing Page**: High-impact visuals and clear community CTAs.
- **Retreats System**: Beautiful event discovery, detailed information, and low-friction registration.
- **Merch Store**: Custom ecommerce experience with size variants and shopping cart.
- **The Bulletin**: Modern news and updates feed.
- **Admin Dashboard**: Comprehensive management of retreats, registrations, products, and community applications.
- **Stripe Integration**: Plug-and-play architecture for secure transactions.

## Getting Started

### 1. Prerequisites
- Node.js >= 20.9.0
- npm or pnpm

### 2. Installation
```bash
npm install
```

### 3. Environment Setup
Copy `.env.example` to `.env.local` and add your Stripe keys:
```bash
cp .env.example .env.local
```

### 4. Running Locally
```bash
npm run dev
```

## Architecture Notes
The application is built with a strictly decoupled architecture:
- **UI Components**: Located in `src/components`, styled with Tailwind 4 tokens in `globals.css`.
- **Data Access**: Centralized in `src/services/data.service.ts`. To migrate to a real database (e.g., Supabase), you only need to update the methods in this service.
- **State Management**: Cart state is managed via `src/context/CartContext.tsx`.
- **Payments**: Handled by `src/services/stripe.service.ts`.

## Deployment
Recommended: **Vercel**
Simply connect this repository to Vercel and it will automatically deploy the Next.js application.

---
Built with pride for TSI.
