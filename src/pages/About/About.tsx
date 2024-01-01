import "./About.css";
import AboutMiddle from "./components/AboutMiddle";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-top">
        <img
          src="/src/assets/matt-profile.jpg"
          alt="Profile photo of Matt Moreno"
        />
        <div>
          <p>About me</p>
          <h1>Product Owner</h1>
          <p>
            I am a Product Owner at Dubsado and I like what I do. I need to use
            a different picture for this section. Something professional, yet
            warm and inviting. Something about running, something about Piano.
            Plz hire me
          </p>
        </div>
      </div>
      <AboutMiddle />
      <div className="about-bottom">
        <h2>Currently Studying</h2>
        <div className="studying-container">
          <img src="/src/assets/coursera.png" alt="Google Coursera Logo" />
          <p>
            I'm studying this because I want to be a data driven Product Owner
            that brings value (AKA $$$) to your company!
          </p>
        </div>
      </div>
    </div>
  );
}
