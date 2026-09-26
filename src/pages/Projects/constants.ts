export interface Figure {
  src: string;
  alt: string;
  caption: string;
  /** Intrinsic pixel size. Images never render wider than this, so small exports stay sharp */
  width: number;
  height: number;
  /** Plays this MP4 instead, with `src` as its poster frame */
  video?: string;
}

export interface CaseStudySection {
  heading: string;
  body?: string;
  bullets?: string[];
}

export interface CaseStudy {
  /** The course, certificate, or "Personal project" */
  course: string;
  term: string;
  /** e.g. "Team of 4". Omitted for solo work */
  team?: string;
  logo?: { src: string; alt: string; width: number; height: number };
  /** External links shown under the tags, e.g. the full notebook or source code */
  links?: { label: string; href: string }[];
  stats?: { value: string; label: string }[];
  funnel?: { title: string; steps: { label: string; value: number }[] };
  sections: CaseStudySection[];
  /** The first figure is shown as the hero image; the rest follow the write-up */
  figures: Figure[];
}

export interface Project {
  title: string;
  kind: string;
  summary: string;
  tools: string[];
  image: string;
  imageAlt: string;
  /** "contain" letterboxes wide charts on white instead of cropping them */
  imageFit?: "cover" | "contain";
  href: string;
  /** External links open in a new tab; internal ones are routes under /projects */
  external: boolean;
  cta: string;
  /** Rendered by the shared CaseStudy view at /projects/:slug */
  caseStudy?: CaseStudy;
}

const ASSETS = "/assets/projects";

export const mastersProjects: Project[] = [
  {
    title: "Google Merchandise Store Funnel Analysis",
    kind: "Web analytics",
    summary:
      "A Google Analytics study of how shoppers find, browse, and buy on Google's merch store, and where they drop out of checkout.",
    tools: ["Google Analytics", "Funnel analysis", "Channel analysis", "Segmentation"],
    image: `${ASSETS}/google-merch-store/traffic-acquisition.jpg`,
    imageAlt: "Google Analytics traffic acquisition report for the Google Merchandise Store",
    href: "/projects/google-merch-store",
    external: false,
    cta: "Read the case study",
    caseStudy: {
      course: "MIS 587: Business Intelligence",
      term: "Fall 2025",
      stats: [
        { value: "$2.29M", label: "Revenue, year to date" },
        { value: "519,490", label: "Engaged sessions" },
        { value: "24% vs 55%", label: "Checkout completion, mobile vs desktop" },
      ],
      funnel: {
        title: "Checkout funnel, year to date",
        steps: [
          { label: "Begin checkout", value: 24509 },
          { label: "Add shipping", value: 24406 },
          { label: "Add payment", value: 17974 },
          { label: "Purchase", value: 11902 },
        ],
      },
      sections: [
        {
          heading: "Problem",
          body: "The Google Merchandise Store is both a revenue channel and a brand touchpoint. It draws plenty of traffic, but it was not clear which channels bring buyers, which pages keep people browsing, or where interest fails to turn into a purchase. I used the store's Google Analytics data, year to date through November 2025, to measure it against three goals: qualified traffic, engaging browsing, and a smooth checkout.",
        },
        {
          heading: "What I did",
          bullets: [
            "Compared acquisition channels on engagement, key events, and revenue. Direct and Organic Search drive the volume, but Referral had the highest key event rate (34%) and Paid Search one of the highest engagement rates (70%).",
            "Reviewed landing pages. Curated collections like /shop/new kept people browsing, with key event rates of 25% to 37%.",
            "Found high-interest, low-conversion products. The Super G Camp Fleece Black Pullover had 7,669 views and 573 add-to-carts but only 183 purchases.",
            "Traced the checkout funnel step by step and split it by device.",
          ],
        },
        {
          heading: "Recommendations",
          body: "The biggest leak is late in checkout: 26% of users drop between shipping and payment, and another 34% before purchase. Mobile is hit hardest.",
          bullets: [
            "Grow referral partnerships and tighten paid search targeting around top categories like New and Apparel.",
            "Keep investing in curated collections and seasonal drops, which drove the largest revenue spikes.",
            "Fix low-converting product pages with sizing guides, richer descriptions, customer photos, and return policy reminders.",
            "Simplify mobile checkout and add digital wallets like Google Pay and Apple Pay.",
          ],
        },
      ],
      figures: [
        {
          src: `${ASSETS}/google-merch-store/traffic-acquisition.jpg`,
          alt: "Google Analytics traffic acquisition table by channel with engagement rate, key events, and revenue",
          caption:
            "Traffic acquisition by channel. Referral and Paid Search show the strongest engagement.",
          width: 896,
          height: 499,
        },
        {
          src: `${ASSETS}/google-merch-store/ecommerce-purchases.jpg`,
          alt: "Google Analytics ecommerce purchases report showing views, add-to-carts, and purchases by item",
          caption:
            "Top items by views, add-to-carts, and purchases, used to spot high-interest, low-conversion products.",
          width: 893,
          height: 499,
        },
      ],
    },
  },
  {
    title: "FAA Bird Strike Analysis Dashboard",
    kind: "Business intelligence",
    summary:
      "Turned 99,404 FAA bird strike reports from 2000 to 2011 into an interactive Tableau dashboard that shows where strikes happen, who they affect, and what they cost.",
    tools: ["Tableau", "Dashboard design", "Data quality assessment"],
    image: `${ASSETS}/faa-bird-strikes/yearly-trend.jpg`,
    imageAlt: "Year-over-year trend of reported bird strikes, 2000 to 2011",
    imageFit: "contain",
    href: "/projects/faa-bird-strikes",
    external: false,
    cta: "Read the case study",
    caseStudy: {
      course: "MIS 587: Business Intelligence",
      term: "Fall 2025",
      stats: [
        { value: "99,404", label: "Reported bird strikes" },
        { value: "$468.7M", label: "Total damage cost" },
        { value: "18", label: "Human fatalities" },
        { value: "3,639", label: "Precautionary landings" },
      ],
      sections: [
        {
          heading: "Problem",
          body: "Bird strikes are rare on any single flight but costly and sometimes deadly. Each record spans location, operator, aircraft, weather, and wildlife, and without a consolidated view the FAA cannot easily spot high-risk conditions or trends. The goal was a dashboard that shows the scale of the problem and helps target safety resources.",
        },
        {
          heading: "What I did",
          bullets: [
            "Built a summary of incidents, fatalities, injuries, costs, and precautionary landings, plus a year-over-year trend. Reported strikes peaked in 2002 at 5,112, then declined through 2011.",
            "Ranked airports and operators by incident count. Denver International led airports with 3,397 strikes, and military aircraft led operators with 9,193.",
            "Mapped total damage cost by state. California led with about $49.7M.",
            "Broke strikes down by weather and wildlife. Most happened in clear skies with no precipitation and involved a single small bird.",
            "Added filters for time, geography, operator type, aircraft, and conditions.",
          ],
        },
        {
          heading: "Data quality",
          body: "Many records had missing or unknown airport, weather, wildlife size, and bird count values. I flagged this as a completeness and consistency issue and focused on the most reliable fields: incident counts, airport and operator IDs, and outcomes.",
        },
        {
          heading: "Recommendations to the FAA",
          bullets: [
            "Prioritize wildlife mitigation at the highest-risk airports (Denver, DFW, O'Hare, JFK, Memphis) and highest-cost states (California, New York, Colorado, Texas).",
            "Increase wildlife patrols in normal, clear weather, when most strikes occur.",
            "Use species-specific strategies: deterrents for small and medium birds, migratory planning for large ones.",
            "Work with military, cargo, and major carriers on flight procedures and reporting.",
            "Standardize required fields in strike reports to close the data gaps.",
          ],
        },
      ],
      figures: [
        {
          src: `${ASSETS}/faa-bird-strikes/yearly-trend.jpg`,
          alt: "Area chart of reported bird strikes by year, peaking at 5,112 in 2002",
          caption: "Reported strikes by year, peaking in 2002.",
          width: 784,
          height: 345,
        },
        {
          src: `${ASSETS}/faa-bird-strikes/cost-by-state.jpg`,
          alt: "US map shaded by total bird strike damage cost, with California highest",
          caption: "Total damage cost by origin state. California leads at about $49.7M.",
          width: 496,
          height: 279,
        },
        {
          src: `${ASSETS}/faa-bird-strikes/airports-operators.jpg`,
          alt: "Tables ranking airports and airlines by number of bird strikes",
          caption: "Strikes by airport and by operator.",
          width: 647,
          height: 508,
        },
        {
          src: `${ASSETS}/faa-bird-strikes/wildlife-size.jpg`,
          alt: "Bar charts of bird strikes by wildlife size and by number of birds struck",
          caption: "Most strikes involve a single small bird.",
          width: 648,
          height: 426,
        },
      ],
    },
  },
  {
    title: "Bank Term-Deposit Prediction",
    kind: "Machine learning · Team project",
    summary:
      "Compared four models that predict whether a bank client will subscribe to a term deposit, and learned why accuracy alone is the wrong measure.",
    tools: ["R", "tidyverse", "SMOTE", "Logistic regression", "kNN", "Naive Bayes", "Decision tree"],
    image: `${ASSETS}/bank-term-deposit/model-comparison.jpg`,
    imageAlt: "Bar chart comparing accuracy and recall for four classification models",
    href: "/projects/bank-term-deposit",
    external: false,
    cta: "Read the case study",
    caseStudy: {
      course: "MIS 545: Data Mining and Machine Learning",
      term: "Summer 2025",
      team: "Team of 5",
      sections: [
        {
          heading: "Problem",
          body: "A Portuguese bank ran phone campaigns to sell term deposits from May 2008 to November 2010. Only about 12% of the 45,211 clients in the data said yes. Could client traits alone (age, job, marital status, education, balance, and loans) predict who would subscribe, so the bank could focus its calls?",
        },
        {
          heading: "What we did",
          bullets: [
            "Cleaned the data in R and dropped fields that would leak the answer or add bias. Call duration, for example, is only known after the call ends.",
            "Removed age and balance outliers with the 1.5 × IQR rule, leaving 40,108 records, and split them 75/25 into training and test sets.",
            "Dummy coded job, marital status, and education, then balanced the training set with SMOTE (random oversampling for Naive Bayes), since subscribers were heavily outnumbered.",
            "Trained and compared logistic regression, k-nearest neighbors (testing k from 1 to 25), Naive Bayes, and decision trees at four complexity levels.",
          ],
        },
        {
          heading: "Results",
          body: "Measured on a test set of 10,027 clients, 1,081 of whom subscribed:",
          bullets: [
            "The decision tree had the highest accuracy (89%) by predicting almost no one would subscribe. It found 2 of 1,081 subscribers.",
            "kNN reached 84% accuracy but found only 20% of subscribers.",
            "Logistic regression and Naive Bayes found 56% and 57% of subscribers, at 59% and 64% accuracy. Logistic regression's AUC was 0.60.",
          ],
        },
        {
          heading: "Takeaway",
          body: "When the outcome is rare, accuracy rewards a model that always says no. For a marketing team, recall matters more: a model that finds over half of likely subscribers is more useful than one that is 89% accurate and finds almost none. Client traits alone turned out to be a weak signal.",
        },
      ],
      figures: [
        {
          src: `${ASSETS}/bank-term-deposit/model-comparison.jpg`,
          alt: "Bar chart of accuracy and recall by model: logistic regression 59% and 56%, kNN 84% and 20%, Naive Bayes 64% and 57%, decision tree 89% and 0%",
          caption:
            "Accuracy vs recall for each model, from a re-run of the team's final R script.",
          width: 1600,
          height: 1000,
        },
        {
          src: `${ASSETS}/bank-term-deposit/roc-curve.jpg`,
          alt: "ROC curve for the logistic regression model with an AUC of 0.60",
          caption: "Logistic regression ROC curve. An AUC of 0.60 is only modestly better than chance.",
          width: 640,
          height: 640,
        },
      ],
    },
  },
  {
    title: "Local LLM with RAG",
    kind: "Lab note",
    summary:
      "Ran Llama 3.2 locally in Docker with a web UI, then gave it a knowledge base of risk management readings to test retrieval-augmented generation.",
    tools: ["Docker", "Open WebUI", "Ollama", "Llama 3.2", "RAG"],
    image: `${ASSETS}/local-llm-rag/risk-model-chat.jpg`,
    imageAlt: "Open WebUI chat with a custom RISK model answering a risk management question",
    href: "/projects/local-llm-rag",
    external: false,
    cta: "Read the lab note",
    caseStudy: {
      course: "MIS 541: Information Systems Analysis and Design",
      term: "Spring 2025",
      sections: [
        {
          heading: "What I did",
          body: "I ran Open WebUI in Docker with Llama 3.2 as the model. Then I built a knowledge base from my Information Systems Risk Management readings, including DoD and NIST documents, and attached it to a custom model called RISK.",
        },
        {
          heading: "What happened",
          bullets: [
            "Without an Nvidia GPU, the model ran on CPU only. A simple question took about 12 minutes to answer.",
            "With the knowledge base attached, answers got worse. The model struggled to parse the documents and gave a vague reply.",
            "DeepSeek R1 and Gemma both failed with memory errors, even after raising Docker's memory limit.",
          ],
        },
        {
          heading: "Takeaways",
          body: "A local model keeps sensitive data in-house and avoids per-query API fees, which is why a firm might use this setup for private risk assessments. But hardware sets the ceiling. The fixes are a GPU with enough VRAM or a smaller model with fewer parameters, and a knowledge base only helps if the model can retrieve from it well.",
        },
      ],
      figures: [
        {
          src: `${ASSETS}/local-llm-rag/risk-model-chat.jpg`,
          alt: "Open WebUI chat where the RISK model answers a question and cites two DoD PDFs",
          caption: "The RISK model answering from the knowledge base, citing two DoD documents.",
          width: 1600,
          height: 823,
        },
        {
          src: `${ASSETS}/local-llm-rag/docker-containers.jpg`,
          alt: "Docker Desktop showing the open-webui container running on port 3000",
          caption: "Open WebUI running as a Docker container.",
          width: 1527,
          height: 866,
        },
      ],
    },
  },
  {
    title: "SimpliHealth: Simplified Telehealth Platform",
    kind: "Product design · Team project",
    summary:
      "A telehealth concept for seniors and anyone who finds health apps hard to use. We turned a feature list into a prioritized Jira backlog, then designed Figma wireframes tied to each user story.",
    tools: ["Jira", "Figma", "User stories", "Backlog prioritization", "Wireframing"],
    image: `${ASSETS}/simplihealth/create-account.jpg`,
    imageAlt: "SimpliHealth create account wireframe",
    href: "/projects/simplihealth",
    external: false,
    cta: "Read the case study",
    caseStudy: {
      course: "MIS 541: Information Systems Analysis and Design",
      term: "Spring 2025",
      team: "Team of 4",
      logo: {
        src: `${ASSETS}/simplihealth/logo.png`,
        alt: "SimpliHealth.AI",
        width: 586,
        height: 123,
      },
      sections: [
        {
          heading: "Problem",
          body: "Telehealth tools often assume users are comfortable with technology. For seniors and less tech-comfortable patients, a crowded interface can be the difference between getting care and giving up. Our team set out to design a telehealth platform that stays simple: clear navigation, plain-language summaries, and as few steps as possible for common tasks.",
        },
        {
          heading: "What we did",
          bullets: [
            "Refined the concept into 10 MVP features, each written as a user story, such as \"As a senior user, I want a simple login method so that I can access my healthcare securely.\"",
            "Prioritized the backlog into high, medium, and low tiers. Security, scheduling, video calls, and AI after-visit summaries came first. Dark mode and usage analytics came last.",
            "Sequenced the work with a Gantt chart and network diagram to find the critical path. Scheduling comes before AI summaries, which come before medication reminders, since each depends on data from the one before.",
            "Ran the first sprint in Jira with epics, story points, and a burndown chart.",
            "Designed Figma wireframes and mapped each screen back to a user story, from account creation to week and month medication views.",
          ],
        },
        {
          heading: "Design decisions",
          body: "Every screen had to answer a user need. One question kept coming up in our Figma comments: \"How can we make this more accessible for Grandma?\"",
          bullets: [
            "A fixed left-hand navigation so users always know where they are.",
            "An AI After Visit Summary that turns a visit into a plain-language chat with next steps and medication reminders.",
            "One-click video calls built into the scheduling flow.",
            "Clear labels, tooltips, confirmations before major actions, and strong contrast to prevent errors and support accessibility.",
          ],
        },
      ],
      figures: [
        {
          src: `${ASSETS}/simplihealth/create-account.jpg`,
          alt: "Wireframe of the SimpliHealth create account screen with email, password, and Google and Microsoft sign-up",
          caption:
            "Account creation kept to two fields, with Google and Microsoft sign-up as shortcuts.",
          width: 1600,
          height: 1034,
        },
        {
          src: `${ASSETS}/simplihealth/ai-visit-summary.jpg`,
          alt: "Wireframe of the AI After Visit Summary with a chat history list and a conversation with Dr. Simpli",
          caption:
            "AI After Visit Summary: a plain-language recap of each visit, delivered as a chat.",
          width: 1600,
          height: 1034,
        },
      ],
    },
  },
];

const projectData: Project[] = [
  {
    title: "Bellabeat Case Study",
    kind: "Data analysis",
    summary:
      "Capstone for the Google Data Analytics certificate. I analyzed smart-device fitness data in R to recommend where Bellabeat should focus its marketing.",
    tools: ["R", "tidyverse", "ggplot2", "Kaggle"],
    image: "/assets/Bellabeat.jpg",
    imageAlt: "Bellabeat case study notebook on Kaggle",
    href: "/projects/bellabeat-case-study",
    external: false,
    cta: "Read the case study",
    caseStudy: {
      course: "Google Data Analytics Certificate capstone",
      term: "May 2024",
      links: [
        {
          label: "View the full notebook on Kaggle",
          href: "https://www.kaggle.com/code/morenomatt/bellabeat-case-study-r",
        },
      ],
      sections: [
        {
          heading: "Problem",
          body: "Bellabeat makes health-focused smart devices and wants to grow in the smart device market. The business task: study how people use non-Bellabeat fitness trackers, then turn those trends into marketing recommendations for Bellabeat's cofounders and marketing analytics team.",
        },
        {
          heading: "What I did",
          bullets: [
            "Used public Fitbit data from 33 users over one month in 2016, covering daily activity, sleep, hourly steps, and hourly intensity.",
            "Flagged the limits up front: a small sample with no age, height, or weight data, so sampling bias is likely.",
            "Cleaned the data in R: standardized column names, removed duplicate sleep records, and fixed date and time formats.",
            "Merged sleep and activity data, then charted steps and intensity by hour and active minutes against calories.",
          ],
        },
        {
          heading: "Findings",
          bullets: [
            "Average daily steps fell below the CDC's recommendation.",
            "Steps and intensity follow the same daily curve and peak between 5 and 7 pm.",
            "More active minutes go with more calories burned.",
          ],
        },
        {
          heading: "Recommendations",
          bullets: [
            "Add gamification: challenges, rewards, and badges for hitting activity goals.",
            "Offer guided evening workouts timed to the 5 to 7 pm peak.",
            "Set personalized activity goals, with social sharing and friendly competition.",
            "Provide virtual coaching and a community for support and accountability.",
            "Use customer testimonials and success stories in marketing.",
          ],
        },
      ],
      figures: [
        {
          src: `${ASSETS}/bellabeat/steps-by-hour.jpg`,
          alt: "Bar chart of average steps by hour of day, peaking around 6 pm",
          caption: "Average steps by hour. Activity peaks between 5 and 7 pm.",
          width: 840,
          height: 840,
        },
        {
          src: `${ASSETS}/bellabeat/intensity-by-hour.jpg`,
          alt: "Bar chart of average activity intensity by hour of day, following the same curve as steps",
          caption: "Average intensity by hour follows the same curve as steps.",
          width: 840,
          height: 840,
        },
        {
          src: `${ASSETS}/bellabeat/active-minutes-calories.jpg`,
          alt: "Scatter plot of total active minutes against calories burned with an upward trend line",
          caption: "More active minutes, more calories burned.",
          width: 840,
          height: 840,
        },
      ],
    },
  },
  {
    title: "Portfolio Website",
    kind: "Web development",
    summary:
      "This site. Three versions since 2023, from a sidebar layout with placeholder copy to a dark, full-width design with live Strava data.",
    tools: ["React", "TypeScript", "Vite", "Tailwind", "Mapbox GL", "Strava API", "Vercel"],
    image: "/assets/Portfolio.jpg",
    imageAlt: "Portfolio website source code",
    href: "/projects/portfolio-website",
    external: false,
    cta: "Read the case study",
    caseStudy: {
      course: "Personal project",
      term: "October 2023 to present",
      links: [
        { label: "View on GitHub", href: "https://github.com/matt-moreno/portfolio" },
      ],
      sections: [
        {
          heading: "Why I built it",
          body: "I wanted one place to show my product work, what I'm reading, and my running, and a real project to practice front-end development on. I treat it like a product: ship something, use it, and redesign when it no longer fits.",
        },
        {
          heading: "How it evolved",
          bullets: [
            "Version 1 (2023): a React and Vite app with a fixed sidebar and placeholder copy, plus a first Strava integration through a small Express server with Leaflet maps.",
            "Version 2 (2025 to early 2026): the introduction of AI. I started building the site with Claude Code as a development partner, which let me move to Tailwind and ship a Strava dashboard with marathon cards and route maps, marathon detail pages, and a contact form powered by Formspree much faster than I could alone.",
            "Version 3 (2026): a full redesign. I replaced the sidebar with a floating liquid glass navigation bar, went dark-only, and rebuilt each page to be simpler and more focused.",
          ],
        },
        {
          heading: "How it works",
          bullets: [
            "React 18, TypeScript, and Vite, deployed on Vercel.",
            "A separate backend on Railway proxies the Strava API for activities, stats, and gear.",
            "GPS routes from Strava are decoded and drawn with Mapbox GL.",
            "The navigation bar uses real edge refraction in Chromium browsers, with a frosted glass fallback everywhere else.",
          ],
        },
      ],
      figures: [
        {
          src: "/assets/Portfolio.jpg",
          alt: "The portfolio's React source code open in VS Code, with the dev server and API running in the terminal",
          caption: "The source in VS Code during version 1, with the React app and Express API running side by side.",
          width: 800,
          height: 518,
        },
        {
          src: `${ASSETS}/portfolio-website/portfolio-v1-poster.jpg`,
          video: `${ASSETS}/portfolio-website/portfolio-v1.mp4`,
          alt: "Screen recording of the first version of the site, with a sidebar and placeholder text",
          caption: "Version 1: a fixed sidebar and placeholder copy.",
          width: 1280,
          height: 656,
        },
        {
          src: `${ASSETS}/portfolio-website/portfolio-v2-poster.jpg`,
          video: `${ASSETS}/portfolio-website/portfolio-v2.mp4`,
          alt: "Screen recording of the second version of the site, with an experience timeline, marathon cards, resources, and a contact form",
          caption: "Version 2: the first version built with AI, with real content, marathon cards, and a contact form.",
          width: 1280,
          height: 656,
        },
        {
          src: `${ASSETS}/portfolio-website/home-today.jpg`,
          alt: "The current home page with a floating glass navigation bar over a photo of the Los Angeles skyline",
          caption: "Version 3, today: a floating glass nav and full-width pages.",
          width: 1600,
          height: 820,
        },
      ],
    },
  },
  // Add Form Builder
];

export default projectData;
