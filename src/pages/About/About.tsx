import "./About.css";

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
      <div className="about-middle">
        <h2>Development</h2>
        <div>HTML, CSS, Javascript, React, Typescript</div>
      </div>
      <div className="about-bottom">
        <h2>Google Course Era Data Analytics</h2>
        <p>Why? Because I want to be a data driven Product Owner</p>
      </div>
    </div>
  );
}
