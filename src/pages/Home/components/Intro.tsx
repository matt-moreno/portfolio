import { motion, useReducedMotion } from "motion/react";

export default function Intro() {
  const reduce = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="about"
      className="pt-20 md:pt-28 px-6 md:px-12 lg:px-16 scroll-mt-24"
    >
      {/* Same width and 220px left column as Experience below, so the two read as one flow.
          No bottom padding: Experience's top padding provides the gap. */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-8 items-center">
        <motion.div {...reveal(0)} className="w-48 justify-self-center sm:w-full sm:justify-self-stretch">
          <img
            src="/assets/MattPortrait.jpeg"
            alt="Portrait of Matt Moreno"
            width={768}
            height={1024}
            loading="lazy"
            className="w-full aspect-[3/4] object-cover rounded-2xl ring-1 ring-border"
          />
        </motion.div>

        <div>
          <motion.h2
            {...reveal(0.05)}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
          >
            About me
          </motion.h2>

          <motion.div
            {...reveal(0.1)}
            className="mt-6 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-[62ch]"
          >
            <p>
              I'm Matt, a Product Manager and builder based in Southern
              California. I love turning ideas into products, whether that's
              shipping software or building something from scratch. Outside of
              work, you'll usually find me running, traveling, or learning a
              new technical skill.
            </p>
            <p>
              At Dubsado, I've grown from Customer Success to Product Manager,
              leading cross-functional initiatives including the full redesign
              of our platform. My background blends frontend development, data
              analytics, and product strategy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
