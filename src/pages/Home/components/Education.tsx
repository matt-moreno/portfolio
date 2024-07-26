export default function Education() {
  return (
    <section className="education">
      <h3>Education</h3>
      <div className="education-container">
        <div className="education-item">
          <img
            className="badge"
            src="/src/assets/UCR.seal.png"
            alt="UCR seal"
          />
          <p>
            University of California, Riverside
            <br />
            September 2016- June 2020
            <br />
            B.A. Political Science Administrative Studies
            <br />
            Management Information Systems
            <br />
          </p>
        </div>
        <div className="education-item">
          <img className="badge" src="/src/assets/CSPO.webp" alt="CSPO badge" />
          <p>
            Scrum Alliance
            <br />
            Certified Scrum Product Owner
            <br />
            Issued: May 8th 2023
            <br />
            Expires: May 8th 2025
            <br />
            View certificate{" "}
            <a href="https://bcert.me/sfxwtxody" target="_blank">
              Here
            </a>
          </p>
        </div>
        <div className="education-item">
          <img
            className="badge badge-scrimba"
            src="/src/assets/scrimba.png"
            alt="Scrimba logo"
          />
          <p>
            Scrimba Certificate
            <br />
            The Frontend Developer Bootcamp
            <br />
            View certificate{" "}
            <a
              href="https://scrimba.com/certificate/uZRRZxHv/gfrontend"
              target="_blank"
            >
              Here
            </a>
          </p>
        </div>
        <div className="education-item">
          <img className="badge" src="/src/assets/UCI.svg.png" alt="UCI seal" />
          <p>
            University of California, Irvine
            <br />
            Division of Continuing Education
            <br />
            Cybersecurity Bootcamp
            <br />
            May 2021 - November 2021
            <br />
            View certificate{" "}
            <a
              href="https://www.parchment.com/u/award/d65a9b98572dcc7d4471f624b70cc265"
              target="_blank"
            >
              Here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
