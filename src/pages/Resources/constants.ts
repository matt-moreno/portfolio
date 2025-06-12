// Utility function to generate microlink.io screenshot URLs with better parameters
const generateScreenshotUrl = (url: string) => {
  const params = new URLSearchParams({
    url: url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    // zoom out to 100%
    viewport: "1920x1080", // Smaller viewport for less zoom, better content capture
    device: "desktop",
    fullPage: "false", // Keep false to show above-the-fold content
    type: "jpeg",
    omitBackground: "false",
    waitForTimeout: "3000", // Wait 3 seconds for content to load
    element: "body", // Capture the full body element
  });
  return `https://api.microlink.io?${params.toString()}`;
};

export const websiteData = [
  {
    title: "Curated Design",
    image: generateScreenshotUrl("https://www.curated.design/"),
    link: "https://www.curated.design/",
    description:
      "A visual gallery of cutting-edge web design inspiration to help spark creativity and elevate your design work. It’s perfect for discovering modern, aesthetic layouts and UI ideas.",
    tag: "design",
  },
  {
    title: "Notebook LM",
    image: generateScreenshotUrl("https://notebooklm.google/"),
    link: "https://notebooklm.google/",
    description:
      "An AI-powered tool that helps you build and refine notebooks, ideal for data analysis, documentation, and note-taking. It simplifies research by organizing and summarizing your notes intelligently.",
    tag: "productivity",
  },
  {
    title: "Notion",
    image: generateScreenshotUrl("https://www.notion.so"),
    link: "https://www.notion.so",
    description:
      "A versatile workspace to organize your notes, tasks, and projects—all in one collaborative platform. It’s great for teams and individuals looking to centralize their work.",
    tag: "productivity",
  },
  {
    title: "Land Book",
    image: generateScreenshotUrl("https://land-book.com/"),
    link: "https://land-book.com/",
    description:
      "A curated collection of modern website designs that can inspire your next web project. Explore a wide variety of landing pages from top-tier companies and startups.",
    tag: "design",
  },
  {
    title: "Cofolios",
    image: generateScreenshotUrl("https://cofolios.com/"),
    link: "https://cofolios.com/",
    description:
      "A showcase of global design portfolios that offer ideas and insight for building your personal or professional portfolio. It’s a great place to benchmark your own portfolio design.",
    tag: "design",
  },
  {
    title: "ADPLists",
    image: generateScreenshotUrl("https://adplist.org/"),
    link: "https://adplist.org/",
    description:
      "A mentorship platform connecting professionals in tech and design with experienced industry mentors. You can book free sessions to grow your career through expert feedback.",
    tag: "productivity",
  },
  {
    title: "Maven",
    image: generateScreenshotUrl("https://www.maven.com/"),
    link: "https://www.maven.com/",
    description:
      "A learning platform offering live, expert-led courses on product management and career development. It’s ideal for leveling up with practical, cohort-based learning.",
    tag: "education",
  },
  {
    title: "Scrimba",
    image: generateScreenshotUrl("https://scrimba.com/"),
    link: "https://scrimba.com/",
    description:
      "An interactive platform to learn frontend development through hands-on screencasts and projects. You’ll learn by doing in a uniquely immersive code environment.",
    tag: "education",
  },
];

export const bookData = [{}];

export const videoData = [{}];
