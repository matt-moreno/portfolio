import { useRef, useEffect } from "react";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Typed from "typed.js";

export default function Home() {
  const textSpan = useRef(null);

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
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/assets/LAbyMatt.jpeg')" }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-0 tracking-tight">
            Matt Moreno
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mt-0 font-light">
            I am a{" "}
            <span
              ref={textSpan}
              className="underline decoration-cyan-400/70 decoration-2 underline-offset-4"
            ></span>
          </h2>
        </div>
      </section>

      {/* Experience and Education Sections */}
      <Experience />
      <Education />
    </div>
  );
}
