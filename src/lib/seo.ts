import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://www.mattmoreno.tech";

type PageMeta = { title: string; description: string };

const DEFAULT_META: PageMeta = {
  title: "Matt Moreno · Product Manager",
  description:
    "Matt Moreno is a Southern California product manager with a Master's in Information Systems, building at the intersection of UX and business strategy.",
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

/** Keeps the title, description, canonical and Open Graph tags in sync with the current route. */
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
