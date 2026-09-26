import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://www.mattmoreno.tech";

type PageMeta = { title: string; description: string };

// The home page's title and description live in index.html (what crawlers and link previews
// read before JS runs). Captured once at load so there is a single source of truth.
const DEFAULT_META: PageMeta = {
  title: document.title,
  description:
    document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content") ?? "",
};

// Keyed by pathname. Dynamic routes (e.g. /runs/:stravaId) fall back to their parent.
const PAGE_META: Record<string, PageMeta> = {
  "/": DEFAULT_META,
  "/about": {
    title: "About · Matt Moreno",
    description:
      "About Matt Moreno: Southern California native, product manager, and marathon runner.",
  },
  "/projects": {
    title: "Projects · Matt Moreno",
    description:
      "Product, web development, and data analysis projects by Matt Moreno.",
  },
  "/projects/bellabeat-case-study": {
    title: "Bellabeat Case Study · Matt Moreno",
    description:
      "A data analysis case study of Bellabeat smart device usage, written in R by Matt Moreno.",
  },
  "/projects/simplihealth": {
    title: "SimpliHealth Telehealth Platform · Matt Moreno",
    description:
      "A team case study: a telehealth platform for seniors, from a prioritized Jira backlog and user stories to Figma wireframes.",
  },
  "/projects/google-merch-store": {
    title: "Google Merchandise Store Funnel Analysis · Matt Moreno",
    description:
      "A Google Analytics study of acquisition, engagement, and checkout drop-off on the Google Merchandise Store, with recommendations.",
  },
  "/projects/faa-bird-strikes": {
    title: "FAA Bird Strike Analysis Dashboard · Matt Moreno",
    description:
      "An interactive Tableau dashboard of 99,404 FAA bird strike reports from 2000 to 2011, with data quality caveats and recommendations.",
  },
  "/projects/bank-term-deposit": {
    title: "Bank Term-Deposit Prediction · Matt Moreno",
    description:
      "A team machine learning project in R comparing logistic regression, kNN, Naive Bayes, and decision trees on bank marketing data.",
  },
  "/projects/local-llm-rag": {
    title: "Local LLM with RAG · Matt Moreno",
    description:
      "A lab note on running Llama 3.2 locally in Docker with Open WebUI and a retrieval-augmented knowledge base.",
  },
  "/projects/portfolio-website": {
    title: "Portfolio Website · Matt Moreno",
    description:
      "How Matt Moreno's portfolio site evolved over three versions, built with React, TypeScript, Vite, and live Strava data.",
  },
  "/runs": {
    title: "Runs · Matt Moreno",
    description:
      "Matt Moreno's running log: live Strava activity, marathon majors, and race results.",
  },
  "/photos": {
    title: "Photos · Matt Moreno",
    description: "Photography by Matt Moreno.",
  },
  "/resources": {
    title: "Resources · Matt Moreno",
    description:
      "Books, videos, and tools Matt Moreno recommends for product, design, and development.",
  },
  "/contact": {
    title: "Contact · Matt Moreno",
    description: "Get in touch with Matt Moreno.",
  },
};

function setMeta(selector: string, attr: string, value: string) {
  document.querySelector(selector)?.setAttribute(attr, value);
}

/** Keeps the title, description, canonical, Open Graph and Twitter tags in sync with the current route. */
export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const parent = path.replace(/\/[^/]+$/, "") || "/";
    const meta = PAGE_META[path] ?? PAGE_META[parent] ?? DEFAULT_META;
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", url);
  }, [pathname]);
}

/** Tells crawlers not to index the current page (used by the 404, which Vercel serves as a 200). */
export function useNoIndex() {
  useEffect(() => {
    const tag = document.createElement("meta");
    tag.name = "robots";
    tag.content = "noindex";
    document.head.appendChild(tag);
    document.title = "Page not found · Matt Moreno";
    return () => tag.remove();
  }, []);
}
