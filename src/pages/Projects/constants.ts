export interface Project {
  title: string;
  kind: string;
  summary: string;
  tools: string[];
  image: string;
  imageAlt: string;
  href: string;
  /** External links open in a new tab; internal ones are routes under /projects */
  external: boolean;
  cta: string;
}

const projectData: Project[] = [
  {
    title: "Bellabeat Case Study",
    kind: "Case study",
    summary:
      "Capstone for the Google Data Analytics certificate. I analyzed smart-device fitness data in R to recommend where Bellabeat should focus its marketing.",
    tools: ["R", "Kaggle"],
    image: "/assets/Bellabeat.jpg",
    imageAlt: "Bellabeat case study notebook on Kaggle",
    href: "/projects/bellabeat-case-study",
    external: false,
    cta: "Read the case study",
  },
  {
    title: "Portfolio Website",
    kind: "Code",
    summary:
      "This site. A React single-page app with live Strava data on the Runs page and a liquid glass navigation bar.",
    tools: ["React", "TypeScript", "Tailwind", "Vercel"],
    image: "/assets/Portfolio.jpg",
    imageAlt: "Portfolio website source code",
    href: "https://github.com/matt-moreno/portfolio",
    external: true,
    cta: "View on GitHub",
  },
  // Add Form Builder
];

export default projectData;
