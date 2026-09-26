import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";

const facts = [
  { label: "Currently", value: "Product Manager at Dubsado" },
  { label: "Focus", value: "Product strategy, frontend, and data" },
  {
    label: "Off the clock",
    value: "Marathons",
    link: { to: "/runs", text: "See my runs" },
  },
];

export default function About() {
  const reduce = useReducedMotion();

  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <div className="flex-1 flex items-center px-6 md:px-12 lg:px-16 pt-24 pb-16">
      {/* Portrait left, story right; collapses to a single column under lg */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[minmax(260px,340px)_1fr] gap-10 lg:gap-16 items-center">
        <motion.div {...enter(0)} className="w-48 sm:w-60 lg:w-full">
          <img
            src="/assets/MattPortrait.jpeg"
            alt="Portrait of Matt Moreno"
            width={768}
            height={1024}
            className="w-full aspect-[3/4] object-cover rounded-2xl ring-1 ring-border"
          />
        </motion.div>

        <div>
          <motion.h1
            {...enter(0.05)}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            About me
          </motion.h1>

          <motion.div
            {...enter(0.1)}
            className="mt-6 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-[62ch]"
          >
            <p>
              I'm Matt, a Product Manager and builder based in Southern
              California. I love turning ideas into products — whether that's
              shipping software, experimenting with hardware, or building
              something from scratch. Outside of work, you'll usually find me
              running, traveling, or learning a new technical skill.
            </p>
            <p>
              I'm a Product Manager at Dubsado, where I've grown from Customer
              Success to leading cross-functional initiatives, including the
              full redesign of our platform. I recently finished a Master's in
              Management Information Systems at the University of Arizona.
            </p>
            <p>
              My background blends frontend development, data analytics, and
              product strategy, and I'm most interested in problems where UX
              and business operations meet.
            </p>
          </motion.div>

          <motion.dl
            {...enter(0.15)}
            className="mt-10 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                <dd className="mt-1 font-medium text-foreground">
                  {fact.value}
                </dd>
                {fact.link && (
                  <Link
                    to={fact.link.to}
                    className="group mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {fact.link.text}
                    <BsArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
}
