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
    title: "Scrimba",
    image: generateScreenshotUrl("https://scrimba.com/"),
    link: "https://scrimba.com/",
    description:
      "An interactive platform to learn frontend development through hands-on screencasts and projects. You’ll learn by doing in a uniquely immersive code environment.",
    tag: "education",
  },
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
];

export const bookData = [
  {
    title: "The Ride of a Lifetime",
    image: "https://m.media-amazon.com/images/I/81p86pu0xBL._SL1500_.jpg",
    link: "https://www.amazon.com/Ride-Lifetime-Lessons-Learning-Come/dp/0399592091",
    description:
      "Leadership and life lessons from Disney CEO Bob Iger’s career journey.",
    tag: "non-fiction",
  },
  {
    title: "Scrum: The Art of Doing Twice the Work in Half the Time",
    image: "https://m.media-amazon.com/images/I/71FvcrGqxHL._SL1500_.jpg",
    link: "https://www.amazon.com/Scrum-Doing-Twice-Work-Half/dp/038534645X",
    description:
      "A practical guide to Scrum methodology for teams aiming to boost productivity.",
    tag: "non-fiction",
  },
  {
    title: "Think and Grow Rich",
    image: "https://m.media-amazon.com/images/I/61IxJuRI39L._SL1000_.jpg",
    link: "https://www.amazon.com/Think-Grow-Rich-Napoleon-Hill/dp/1585424331",
    description:
      "Classic personal development book focusing on mindset, wealth, and success.",
    tag: "self-help",
  },
  {
    title: "How to Win Friends and Influence People",
    image: "https://m.media-amazon.com/images/I/71vK0WVQ4rL._SL1500_.jpg",
    link: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034",
    description:
      "Timeless advice on improving social skills and building influence.",
    tag: "self-help",
  },
  {
    title: "World Travel: An Irreverent Guide",
    image: "https://m.media-amazon.com/images/I/91ZAffPjd0L._SL1500_.jpg",
    link: "https://www.amazon.com/World-Travel-Irreverent-Guide/dp/1847941817",
    description:
      "Anthony Bourdain’s take on travel—funny, irreverent, and practical.",
    tag: "non-fiction",
  },
  {
    title: "Atomic Habits",
    image: "https://m.media-amazon.com/images/I/81ANaVZk5LL._SL1500_.jpg",
    link: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
    description:
      "A bestselling guide that offers practical strategies to build good habits, break bad ones, and master tiny behaviors.",
    tag: "self-help",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    image: "https://m.media-amazon.com/images/I/81tPEe0egBL._SL1500_.jpg",
    link: "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095",
    description:
      "An international nonfiction bestseller exploring the evolution of humanity through biology, culture, and society.",
    tag: "non-fiction",
  },
  {
    title: "Rich Dad Poor Dad",
    image: "https://m.media-amazon.com/images/I/814XbqXAz-L._SL1500_.jpg",
    link: "https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194",
    description:
      "A personal finance classic on building wealth through investing and mindset.",
    tag: "non-fiction",
  },
  {
    title: "The Future Is Faster Than You Think",
    image: "https://m.media-amazon.com/images/I/81ntF0SpbaL._SL1500_.jpg",
    link: "https://www.amazon.com/Future-Faster-Than-You-Think/dp/1982109660",
    description:
      "Explores how converging technologies are reshaping business, society, and our world.",
    tag: "non-fiction",
  },
  {
    title: "The 7 Habits of Highly Effective People",
    image: "https://m.media-amazon.com/images/I/71QA8ABqc0L._SL1500_.jpg",
    link: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/0743269519",
    description:
      "A framework for personal and professional effectiveness with enduring habits.",
    tag: "self-help",
  },
  {
    title: "Crucial Conversations: Tools for Talking When Stakes Are High",
    image: "https://m.media-amazon.com/images/I/71npNofb0yL._SL1500_.jpg",
    link: "https://www.amazon.com/Crucial-Conversations-Talking-Stakes-Second/dp/0071771328",
    description:
      "Strategies for handling high-stakes conversations with skill and clarity.",
    tag: "self-help",
  },
  {
    title: "What Color Is Your Parachute?",
    image: "https://m.media-amazon.com/images/I/61vKHv3PD3L._SL1500_.jpg",
    link: "https://www.amazon.com/What-Color-Parachute-Columbus-Day/dp/198485786X",
    description:
      "The perennial career guide to job hunting and personal branding.",
    tag: "self-help",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    image: "https://m.media-amazon.com/images/I/81A5jQHA+lL._SL1500_.jpg",
    link: "https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713",
    description:
      "A no-nonsense guide to prioritizing what truly matters in life.",
    tag: "self-help",
  },
  {
    title: "The Four Agreements",
    image: "https://m.media-amazon.com/images/I/91TFjwgrwyL._SL1500_.jpg",
    link: "https://www.amazon.com/Four-Agreements-Practical-Personal-Freedom/dp/1878424319",
    description:
      "Spiritual guide outlining four principles to live with freedom and joy.",
    tag: "self-help",
  },
];

export const videoData = [
  {
    title: "Steve Jobs' 2005 Stanford Commencement Address",
    image: "https://img.youtube.com/vi/UF8uR6Z6KLc/hqdefault.jpg",
    link: "https://youtu.be/UF8uR6Z6KLc?si=CKUNfBC3OKBx0rfj",
    description:
      "Inspirational speech by Steve Jobs on the importance of following your heart and passion.",
    tag: "motivation",
  },
];
