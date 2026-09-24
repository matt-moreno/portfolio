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
  imageAlt: string;
  url?: string;
}

const degrees: Degree[] = [
  {
    institution: "University of Arizona",
    program: "Master of Management Information Systems",
    years: "2025",
    image: "/assets/arizona.png",
    imageAlt: "University of Arizona logo",
    description:
      "Earned a Master's in MIS to strengthen my foundation in systems analysis, data-driven decision making, and IT strategy. Focused on real-world applications through team-based projects.",
  },
  {
    institution: "University of California, Riverside",
    program: "B.A. Political Science, Administrative Studies",
    minor: "Management Information Systems",
    years: "2016–2020",
    image: "/assets/UCR.seal.png",
    imageAlt: "UCR seal",
    description:
      "Studied Political Science with a focus on Administrative Studies and a minor in MIS. Built an interdisciplinary base combining business, technology, and organizational operations.",
  },
];

const credentials: Credential[] = [
  {
    issuer: "Google · Coursera",
    program: "Data Analytics Professional Certificate",
    year: "2023",
    image: "/assets/google-data.png",
    imageAlt: "Google data certificate logo",
    url: "https://www.credly.com/badges/025029a9-ece9-41e6-beba-8a88a7277501/porfolio",
  },
  {
    issuer: "Scrimba",
    program: "The Frontend Developer Bootcamp",
    year: "2023",
    image: "/assets/scrimba.png",
    imageAlt: "Scrimba logo",
    url: "https://scrimba.com/certificate/uZRRZxHv/gfrontend",
  },
  {
    issuer: "Scrum Alliance",
    program: "Certified Scrum Product Owner",
    year: "2023",
    image: "/assets/CSPO.webp",
    imageAlt: "CSPO badge",
    url: "https://bcert.me/sfxwtxody",
  },
  {
    issuer: "UC Irvine · Continuing Education",
    program: "Cybersecurity Bootcamp",
    year: "2021",
    image: "/assets/UCI.svg.png",
    imageAlt: "UCI seal",
    url: "https://www.parchment.com/u/award/d65a9b98572dcc7d4471f624b70cc265",
  },
];

function Logo({ src, alt, size }: { src: string; alt: string; size: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${size} object-contain rounded-lg bg-white p-1 flex-shrink-0`}
    />
  );
}

export default function Education() {
  const reduce = useReducedMotion();

  const reveal = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, delay: i * 0.06 },
  });

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-secondary/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-14">
          Education
        </h2>

        <div className="divide-y divide-border">
          {degrees.map((degree, i) => (
            <motion.div
              key={degree.program}
              {...reveal(i)}
              className="py-8 first:pt-0 grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-3 sm:gap-8"
            >
              <p className="font-mono text-2xl sm:text-3xl font-medium tracking-tight text-foreground/90 tabular-nums">
                {degree.years}
              </p>

              <div>
                <div className="flex items-center gap-3">
                  <Logo
                    src={degree.image}
                    alt={degree.imageAlt}
                    size="w-10 h-10"
                  />
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground leading-snug">
                      {degree.program}
                    </h3>
                    <p className="text-primary font-medium">
                      {degree.institution}
                    </p>
                  </div>
                </div>

                {degree.minor && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Minor</span> ·{" "}
                    {degree.minor}
                  </p>
                )}

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {degree.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="mt-16 mb-4 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Certifications &amp; training
        </h3>

        <ul className="border-t border-border">
          {credentials.map((credential, i) => {
            const content = (
              <>
                <Logo
                  src={credential.image}
                  alt={credential.imageAlt}
                  size="w-9 h-9"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground leading-snug">
                    {credential.program}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {credential.issuer}
                  </p>
                </div>
                <span className="font-mono text-sm text-muted-foreground tabular-nums">
                  {credential.year}
                </span>
                {credential.url && (
                  <BsArrowUpRight className="text-sm text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
              </>
            );

            return (
              <motion.li
                key={credential.program}
                {...reveal(i)}
                className="border-b border-border"
              >
                {credential.url ? (
                  <a
                    href={credential.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${credential.program} certificate`}
                    className="group -mx-3 px-3 py-4 flex items-center gap-4 rounded-lg hover:bg-secondary/70 transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="py-4 flex items-center gap-4">{content}</div>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
