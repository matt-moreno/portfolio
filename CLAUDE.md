# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev        # Start Vite dev server
npm run build      # Type-check (tsc) then build for production
npm run lint       # ESLint with zero warnings allowed
npm run preview    # Preview production build locally
```

No test suite is configured.

## Architecture

This is a React 18 + TypeScript + Vite single-page application deployed on Vercel. `vercel.json` rewrites all routes to `/` for client-side routing.

**Layout**: `MainLayout` wraps all routes with a fixed 300px sidebar (desktop) / hamburger menu (mobile). Pages render in the `<Outlet />` to the right of the sidebar.

**Routing** (`src/App.tsx`): React Router v6 with nested routes. `Resources` has child routes (`/resources/videos`, `/resources/books`). `Projects` has a child route for the Bellabeat case study.

**Theme**: `ThemeContext` wraps the entire app; `ThemeToggle` in the sidebar persists the user's light/dark preference.

**Runs page** (`src/pages/Runs/`): Fetches live data from a separate Railway.app backend (`VITE_API_BASE_URL` env var) which proxies the Strava API. Three endpoints: `/api/strava` (activities), `/api/athlete-stats`, `/api/gear`. GPS polylines from Strava are decoded via `@mapbox/polyline` and rendered with `react-map-gl` + Mapbox GL JS.

**Static content**: Projects (`src/pages/Projects/constants.ts`), races/marathon majors/weekly tracker targets (`src/pages/Runs/constants.ts`), and resources (`src/pages/Resources/constants.ts`) are all defined as plain TypeScript constants — edit these files to add/update content.

**UI components**: `src/components/ui/` contains shadcn/ui-style primitives (Button, Card, Input, Label, Textarea, Toast) built on Radix UI. `src/lib/utils.ts` exports the `cn()` helper (clsx + tailwind-merge).

## Environment Variables

`VITE_API_BASE_URL` — base URL for the Railway.app backend (Strava API proxy). Required for the Runs page to load data.
