export interface Book {
  title: string;
  author: string;
  link: string;
}

export interface Site {
  title: string;
  note: string;
  link: string;
}

export interface Group<T> {
  heading: string;
  items: T[];
}

export const bookGroups: Group<Book>[] = [
  {
    heading: "Work and leadership",
    items: [
      {
        title: "The Ride of a Lifetime",
        author: "Robert Iger",
        link: "https://www.amazon.com/Ride-Lifetime-Lessons-Learning-Come/dp/0399592091",
      },
      {
        title: "Scrum",
        author: "Jeff Sutherland",
        link: "https://www.amazon.com/Scrum-Doing-Twice-Work-Half/dp/038534645X",
      },
      {
        title: "Crucial Conversations",
        author: "Kerry Patterson et al.",
        link: "https://www.amazon.com/Crucial-Conversations-Talking-Stakes-Second/dp/0071771328",
      },
      {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        link: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034",
      },
      {
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        link: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/0743269519",
      },
    ],
  },
  {
    heading: "Habits and mindset",
    items: [
      {
        title: "Atomic Habits",
        author: "James Clear",
        link: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
      },
      {
        title: "The Four Agreements",
        author: "Don Miguel Ruiz",
        link: "https://www.amazon.com/Four-Agreements-Practical-Personal-Freedom/dp/1878424319",
      },
      {
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        link: "https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713",
      },
      {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        link: "https://www.amazon.com/Think-Grow-Rich-Napoleon-Hill/dp/1585424331",
      },
    ],
  },
  {
    heading: "Money and career",
    items: [
      {
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        link: "https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194",
      },
      {
        title: "What Color Is Your Parachute?",
        author: "Richard N. Bolles",
        link: "https://www.amazon.com/What-Color-Parachute-Columbus-Day/dp/198485786X",
      },
    ],
  },
  {
    heading: "Big ideas and travel",
    items: [
      {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        link: "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095",
      },
      {
        title: "The Future Is Faster Than You Think",
        author: "Peter H. Diamandis and Steven Kotler",
        link: "https://www.amazon.com/Future-Faster-Than-You-Think/dp/1982109660",
      },
      {
        title: "World Travel: An Irreverent Guide",
        author: "Anthony Bourdain",
        link: "https://www.amazon.com/World-Travel-Irreverent-Guide/dp/1847941817",
      },
    ],
  },
];

export const siteGroups: Group<Site>[] = [
  {
    heading: "Design inspiration",
    items: [
      {
        title: "Curated Design",
        note: "A gallery of modern web design to spark ideas.",
        link: "https://www.curated.design/",
      },
      {
        title: "Land Book",
        note: "Landing pages from top companies and startups.",
        link: "https://land-book.com/",
      },
      {
        title: "Cofolios",
        note: "Design portfolios to benchmark your own against.",
        link: "https://cofolios.com/",
      },
    ],
  },
  {
    heading: "Learning and mentorship",
    items: [
      {
        title: "Scrimba",
        note: "Learn frontend development through interactive screencasts.",
        link: "https://scrimba.com/",
      },
      {
        title: "Maven",
        note: "Live, cohort-based courses on product and career growth.",
        link: "https://www.maven.com/",
      },
      {
        title: "ADPList",
        note: "Free mentorship sessions with people in tech and design.",
        link: "https://adplist.org/",
      },
    ],
  },
  {
    heading: "Tools",
    items: [
      {
        title: "Notion",
        note: "One workspace for notes, tasks, and projects.",
        link: "https://www.notion.so",
      },
      {
        title: "NotebookLM",
        note: "Google's AI research notebook for summarizing your sources.",
        link: "https://notebooklm.google/",
      },
    ],
  },
];

export const talk = {
  title: "Steve Jobs, 2005 Stanford Commencement Address",
  note: "On following your heart and doing work you love.",
  link: "https://youtu.be/UF8uR6Z6KLc?si=CKUNfBC3OKBx0rfj",
};
