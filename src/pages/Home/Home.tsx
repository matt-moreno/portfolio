import { useRef, useEffect } from "react";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Typed from "typed.js";
import "./Home.css";

export default function Home() {
  const textSpan = useRef(null);

  useEffect(() => {
    const typedText = new Typed(textSpan.current, {
      strings: [
        "Product Owner",
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
    <div className="main-wrapper">
      <section className="hero">
        <div className="home-content">
          <h1>Matt Moreno</h1>
          <h2>
            I am a <span ref={textSpan}></span>
          </h2>
        </div>
      </section>
      <Experience />
      <Education />
    </div>
  );
}
