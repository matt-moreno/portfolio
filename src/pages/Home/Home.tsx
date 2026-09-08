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
      <section className="min-h-[100dvh] flex items-center px-6 md:px-12 lg:px-16 pt-24 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center w-full">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
                className="inline-flex items-center gap-2 text-foreground font-medium px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-border">
              <img
                src="/assets/LAbyMatt.jpeg"
                alt="Los Angeles skyline, photographed by Matt"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Experience />
      <Education />
    </div>
  );
}
