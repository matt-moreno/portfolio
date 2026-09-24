import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";
import Typed from "typed.js";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function Home() {
  const textSpan = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const typedText = new Typed(textSpan.current, {
      strings: [
        "Product Manager",
        "Web Developer",
        "Data Analyst",
        "Marathon Runner",
        "Life Long Learner",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typedText.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[100dvh] flex items-center px-6 md:px-12 lg:px-16 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/LAbyMatt-hero.jpeg"
            srcSet="/assets/LAbyMatt-hero.jpeg 1400w, /assets/LAbyMatt-hero-2000.jpeg 2000w"
            sizes="100vw"
            alt="Los Angeles skyline, photographed by Matt"
            className="w-full h-full object-cover object-[50%_38%]"
          />
        </div>
        {/* Even tint, no directional fade: mutes the photo just enough for the copy */}
        <div className="absolute inset-0 z-10 bg-background/65" />

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Matt Moreno
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium">
              I am a{" "}
              <span
                ref={textSpan}
                className="text-primary border-b-2 border-primary/40"
              ></span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-[46ch] leading-relaxed">
              Product manager, developer, and marathon runner building at the
              intersection of UX and business strategy.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors group"
              >
                View My Work
                <BsArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 glass text-foreground font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Experience />
      <Education />
    </div>
  );
}
