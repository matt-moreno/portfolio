# Matt Moreno - Portfolio Website

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.mattmoreno.tech)](https://www.mattmoreno.tech)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?logo=vite)](https://vitejs.dev/)

A modern, responsive portfolio website showcasing my work as a Product Manager, Web Developer, Data Analyst, and Marathon Runner. Built with React, TypeScript, Vite, and Tailwind.

🌐 **Live Site**: [www.mattmoreno.tech](https://www.mattmoreno.tech)

## ✨ Features

- **Modern Tech Stack**: React 18, TypeScript, Vite for fast development and optimal performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes with persistent preferences
- **Interactive Elements**:
  - Animated typing effect on homepage
  - Interactive maps for running routes (Leaflet + React Leaflet)
  - Data visualizations with Recharts
  - Toast notifications
- **Multi-section Portfolio**:
  - **About**: Personal background and skills
  - **Projects**: Featured work including Bellabeat case study
  - **Photos**: Photography showcase
  - **Runs**: Marathon training and running data with GPS route visualizations
  - **Resources**: Curated collection of websites, videos, and books
  - **Contact**: Get in touch form

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Build tool and dev server
- **React Router Dom** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### UI Components & Styling

- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **React Icons** - Additional icon library
- **Class Variance Authority** - Component variant management
- **Tailwind Merge & clsx** - Conditional styling utilities

### Interactive Features

- **Typed.js** - Animated typing effects
- **Leaflet & React Leaflet** - Interactive maps
- **Recharts** - Data visualization charts
- **React Loading** - Loading animations

### Backend & Data

- **Supabase** - Backend as a Service for data storage
- **Mapbox Polyline** - GPS route encoding/decoding
- **Strava API** - Running activity data integration
- **Railway.app** - Separate backend service for Strava token management

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # Radix UI components
├── contexts/           # React contexts (Theme, etc.)
├── layouts/            # Page layouts
├── lib/               # Utility functions and configurations
├── pages/             # Route components
│   ├── About/         # About page
│   ├── Contact/       # Contact form
│   ├── Home/          # Landing page with experience/education
│   ├── Photos/        # Photography showcase
│   ├── Projects/      # Portfolio projects
│   ├── Resources/     # Curated resources
│   └── Runs/          # Running data and routes
├── services/          # API services and data fetching
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## 🎨 Key Features Explained

### Running Tracker

The `/runs` section features:

- Interactive map visualization of running routes
- GPS data integration with Supabase
- Running statistics and progress tracking
- Polyline encoding for efficient route storage

### Project Showcase

- **Bellabeat Case Study**: Google Coursera Data Analytics Capstone
- **Portfolio Website**: This very website

### Resource Library

Curated collections of:

- Useful websites and tools
- Educational videos and tutorials
- Recommended books for professional development

## 🌟 Customization

The website is built with customization in mind:

- **Theme System**: Easy to extend with new color schemes
- **Component Library**: Reusable components with consistent styling
- **Content Management**: Projects and resources can be easily added via constants files

## 📱 Responsive Design

Fully responsive design that works seamlessly across:

- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🚀 Deployment

### Frontend (Vercel)

The frontend is deployed on Vercel:

- **Domain**: www.mattmoreno.tech
- **Deployment**: Automatic via Vercel Git integration
- **CDN**: Global edge network for optimal performance

### Backend (Railway.app)

The backend service for Strava API integration is hosted separately:

- **Platform**: Railway.app
- **Purpose**: Handles Strava OAuth tokens and API requests
- **Repository**: Separate backend repository

## 📧 Contact

Matt Moreno - [www.mattmoreno.tech/contact](https://www.mattmoreno.tech/contact)

Project Link: [https://github.com/matt-moreno/portfolio](https://github.com/matt-moreno/portfolio)

---

⭐ If you like this portfolio, please consider giving it a star!
