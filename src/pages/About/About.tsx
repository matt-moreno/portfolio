import "./About.css";
import AboutBottom from "./components/AboutBottom";
import AboutMiddle from "./components/AboutMiddle";
import AboutTop from "./components/AboutTop";

export default function About() {
  return (
    <div className="main-wrapper">
      <AboutTop />
      <AboutMiddle />
      <AboutBottom />
    </div>
  );
}
