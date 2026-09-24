import { motion, useReducedMotion } from "motion/react";
import { BsArrowUpRight } from "react-icons/bs";
import { bookGroups, siteGroups, talk } from "./constants";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-baseline gap-1.5 font-medium text-foreground hover:text-primary transition-colors"
    >
      {children}
      <BsArrowUpRight
        aria-hidden="true"
        className="self-center text-xs text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}

export default function Resources() {
  const reduce = useReducedMotion();

  const reveal = {
    initial: reduce ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <div className="px-6 md:px-12 lg:px-16 pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Resources
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-[60ch]">
          Books, sites, and a talk I keep recommending.
        </p>

        {/* Books: themed groups in two columns, one column on mobile */}
        <motion.section {...reveal} className="mt-16 md:mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Books
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {bookGroups.map((group) => (
              <div key={group.heading}>
                <h3 className="text-sm text-muted-foreground">
                  {group.heading}
                </h3>
                <ul className="mt-4 space-y-4">
                  {group.items.map((book) => (
                    <li key={book.title}>
                      <ExternalLink href={book.link}>{book.title}</ExternalLink>
                      <p className="text-sm text-muted-foreground">
                        {book.author}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Sites: three short groups side by side from md up */}
        <motion.section
          {...reveal}
          className="mt-20 md:mt-24 pt-12 border-t border-border"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Sites I use
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            {siteGroups.map((group) => (
              <div key={group.heading}>
                <h3 className="text-sm text-muted-foreground">
                  {group.heading}
                </h3>
                <ul className="mt-4 space-y-5">
                  {group.items.map((site) => (
                    <li key={site.title}>
                      <ExternalLink href={site.link}>{site.title}</ExternalLink>
                      <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">
                        {site.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...reveal}
          className="mt-20 md:mt-24 pt-12 border-t border-border"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Worth watching
          </h2>
          <div className="mt-6">
            <ExternalLink href={talk.link}>{talk.title}</ExternalLink>
            <p className="mt-0.5 text-sm text-muted-foreground">{talk.note}</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
