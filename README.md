# Matt Moreno - Portfolio Website

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.mattmoreno.tech)](https://www.mattmoreno.tech)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite)](https://vitejs.dev/)

A modern, responsive portfolio website showcasing my work as a Product Manager, Web Developer, Data Analyst, and Marathon Runner. Built with React, TypeScript, Vite, and Tailwind CSS.

**Live Site**: [www.mattmoreno.tech](https://www.mattmoreno.tech)

## Tech Stack

**Frontend**
- React 18, TypeScript, Vite
- React Router v6 — client-side routing
- Tailwind CSS — utility-first styling

**UI Components**
- Radix UI — accessible component primitives
- shadcn/ui-style components (Button, Card, Toast, etc.)
- Lucide React + React Icons
- Class Variance Authority, clsx, Tailwind Merge

**Interactive Features**
- Typed.js — animated typing effect on homepage
- Mapbox GL + react-map-gl — interactive GPS route maps
- Recharts — running data visualizations
- @formspree/react — contact form submissions

**Data & Backend**
- Strava API — live running activity data
- Railway.app — separate backend service handling Strava OAuth and API proxying
- @mapbox/polyline — GPS route encoding/decoding

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # Radix UI / shadcn-style primitives
├── contexts/           # React contexts (ThemeContext)
├── layouts/            # MainLayout (sidebar + outlet)
├── lib/               # cn() utility helper
├── pages/             # Route-level components
│   ├── About/
│   ├── Contact/        # Formspree-powered contact form
│   ├── Home/           # Landing page with experience/education
│   ├── Photos/
│   ├── Projects/       # Project cards + Bellabeat case study
│   ├── Resources/      # Websites, videos, books (tabbed)
│   └── Runs/           # Strava dashboard with live data
├── App.tsx
└── main.tsx
```

## Pages

- **Home** — Animated typing intro, experience timeline, education
- **About** — Personal background and skills
- **Projects** — Bellabeat Google Coursera capstone + portfolio
- **Photos** — Photography showcase
- **Runs** — Live Strava dashboard: GPS route map, weekly tracker, race history, marathon majors progress, athlete stats
- **Resources** — Curated websites, videos, and books
- **Contact** — Contact form via Formspree

## Static Content

Projects, races, marathon majors, and resources are defined as plain TypeScript constants — no CMS required:

- `src/pages/Projects/constants.ts` — project cards
- `src/pages/Runs/constants.ts` — races, marathon majors, weekly mileage targets
- `src/pages/Resources/constants.ts` — websites, videos, books

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Base URL for the Railway.app backend (Strava API proxy) |

## Development

```bash
npm run dev       # Start dev server
npm run build     # Type-check and build for production
npm run lint      # ESLint (zero warnings allowed)
npm run preview   # Preview production build
```

## Deployment

**Frontend** — Vercel with automatic Git integration. `vercel.json` rewrites all routes to `/` for client-side routing.

**Backend** — Separate Railway.app service that manages Strava OAuth tokens and proxies API requests.

---

Project Link: [https://github.com/matt-moreno/portfolio](https://github.com/matt-moreno/portfolio)
