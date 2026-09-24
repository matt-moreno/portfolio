import { motion, useReducedMotion } from "motion/react";
import { BsArrowUpRight } from "react-icons/bs";

interface Degree {
  institution: string;
  program: string;
  minor?: string;
  years: string;
  image: string;
  imageAlt: string;
  description: string;
}

interface Credential {
  issuer: string;
  program: string;
  year: string;
  image: string;
  url: string;
}

const degrees: Degree[] = [
  {
    institution: "University of Arizona",
    program: "Master of Management Information Systems",
    years: "2024-2025",
    image: "/assets/arizona.png",
    imageAlt: "University of Arizona logo",
    description:
      "Earned a Master's in MIS to strengthen my foundation in systems analysis, data-driven decision making, and IT strategy. Focused on real-world applications through team-based projects.",
  },
  {
    institution: "University of California, Riverside",
    program: "B.A. Political Science, Administrative Studies",
    minor: "Management Information Systems",
    years: "2016-2020",
    image: "/assets/UCR.seal.png",
    imageAlt: "UCR seal",
    description:
      "Studied Political Science with a focus on Administrative Studies and a minor in MIS. Built an interdisciplinary base combining business, technology, and organizational operations.",
  },
];

const credentials: Credential[] = [
  {
    issuer: "Scrimba",
    program: "Frontend Developer Bootcamp",
    year: "2026",
    image: "/assets/scrimba.png",
    url: "https://scrimba.com/certificate/uZRRZxHv/gfrontend",
  },
  {
    issuer: "Google on Coursera",
    program: "Data Analytics Professional Certificate",
    year: "2023",
    image: "/assets/google-data.png",
    url: "https://www.credly.com/badges/025029a9-ece9-41e6-beba-8a88a7277501/porfolio",
  },
  {
    issuer: "Scrum Alliance",
    program: "Certified Scrum Product Owner",
    year: "2023",
    image: "/assets/CSPO.webp",
    url: "https://bcert.me/sfxwtxody",
  },
  {
    issuer: "UC Irvine Continuing Education",
    program: "Cybersecurity Bootcamp",
    year: "2021",
    image: "/assets/UCI.svg.png",
    url: "https://www.parchment.com/u/award/d65a9b98572dcc7d4471f624b70cc265",
  },
];

export default function Education() {
  const reduce = useReducedMotion();

  const reveal = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12 md:mb-16">
          Education
        </h2>

        {/* Two degrees as equal columns: stacked with a rule on mobile, split by a hairline on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          {degrees.map((degree, i) => (
            <motion.article
              key={degree.program}
              {...reveal(i)}
              className="py-10 first:pt-0 last:pb-0 md:py-0 md:first:pr-12 md:last:pl-12"
            >
              <img
                src={degree.image}
                alt={degree.imageAlt}
                className="w-12 h-12 object-contain rounded-lg bg-white p-1.5"
              />

              <h3 className="mt-6 text-xl md:text-2xl font-semibold tracking-tight text-foreground leading-snug">
                {degree.program}
              </h3>

              <p className="mt-2 font-medium text-primary">
                {degree.institution}
                <span className="font-normal text-muted-foreground">
                  , {degree.years}
                </span>
              </p>

              {degree.minor && (
                <p className="mt-1 text-sm text-muted-foreground">
                  Minor in {degree.minor}
                </p>
              )}

              <p className="mt-5 text-muted-foreground leading-relaxed max-w-[52ch]">
                {degree.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 md:mt-20 pt-12 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Certifications
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 -mx-3">
            {credentials.map((credential, i) => (
              <motion.li key={credential.program} {...reveal(i)}>
                <a
                  href={credential.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg p-3 hover:bg-secondary/80 active:scale-[0.99] transition-[background-color,transform]"
                >
                  <img
                    src={credential.image}
                    alt=""
                    className="w-10 h-10 object-contain rounded-lg bg-white p-1 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground leading-snug">
                      {credential.program}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {credential.issuer}, {credential.year}
                    </p>
                  </div>
                  <BsArrowUpRight
                    aria-hidden="true"
                    className="text-sm text-muted-foreground flex-shrink-0 transition-transform group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
