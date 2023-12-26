import { useRef, useEffect } from "react";
import Typed from "typed.js";
import "./Home.css";

export default function Home() {
  const textSpan = useRef(null);

  useEffect(() => {
    const typedText = new Typed(textSpan.current, {
      strings: [
        "Product Owner",
        "Web Developer",
        "QA Tester",
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
    <div className="home-wrapper">
      <div className="hero">
        <div className="home-content">
          <h1>Matt Moreno</h1>
          <h2>
            I am a <span ref={textSpan}></span>
          </h2>
        </div>
        <img className="home-photo" src="src/assets/laptop.jpg" />
      </div>

      <div className="experience">
        <h3>Experience</h3>
        <ul>
          <li className="experience-item">
            <div className="marker-lg">
              <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
                <path d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-4C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z"></path>
                <circle cx="16" cy="16" r="6"></circle>
              </svg>
            </div>
            <h4>Dubsado</h4>
            <h5>Product Owner II</h5>
            <p>Since 2022</p>
            <ul>
              <li>experience bullet point</li>
              <li>experience bullet point</li>
              <li>experience bullet point</li>
              <li>experience bullet point</li>
              <li>experience bullet point</li>
            </ul>
          </li>

          <li className="experience-item">
            <div className="marker-sm">
              <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
                <circle stroke="none" cx="16" cy="16" r="10"></circle>
              </svg>
            </div>
            <h5>Product Owner I</h5>
            <p>2021-2022</p>
            <ul>
              <li>experience bullet point</li>
              <li>experience bullet point</li>
              <li>experience bullet point</li>
              <li>experience bullet point</li>
              <li>experience bullet point</li>
            </ul>
          </li>

          <li className="experience-item">
            <div className="marker-sm">
              <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
                <circle stroke="none" cx="16" cy="16" r="10"></circle>
              </svg>
            </div>
            <h5>Customer Success</h5>
            <p>2020-2021</p>
            <ul>
              <li>experience bullet point</li>
              <li>experience bullet point</li>
              <li>experience bullet point</li>
              <li>experience bullet point</li>
              <li>experience bullet point</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="education">
        <h3>Education</h3>
        <div className="education-container">
          <div>
            <img className="badge" src="src/assets/UCR.png" alt="UCR seal" />
            <p>University of California, Riverside</p>
            <img
              className="badge"
              src="src/assets/CSPO.webp"
              alt="CSPO badge"
            />
            <p>Certified Scrum Product Owner</p>
          </div>
          <div>
            <img
              className="badge"
              src="src/assets/scrimba.png"
              alt="Scrimba logo"
            />
            <p>Scrimba certificate</p>
            <img
              className="badge"
              src="src/assets/UCI.svg.png"
              alt="UCI seal"
            />
            <p>Cybersecurity certificate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
