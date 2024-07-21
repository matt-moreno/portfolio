import "./About.css";

export default function About() {
  return (
    <div className="main-wrapper">
      {/* <div className="top-content" /> */}
      {/* Make this an image carousel */}
      <img src="src/assets/MattUCR.jpg" className="about-image" />
      <div className="about-container">
        <h1>About me</h1>
        <p>
          As a Product Owner II at Dubsado, I lead the development and delivery
          of the Form Builder and Scheduler features, which enable users to
          create and manage customized forms and appointments for their clients.
          I collaborate with the engineering, design, and marketing teams to
          define the product vision, roadmap, and backlog, and to ensure the
          quality and usability of the features. I have a BA in Political
          Science Administrative Studies: Management Information Systems from
          the University of California, Riverside, where I learned the
          fundamentals of database management, web development, and business
          administration. I also have a strong background in customer success,
          having worked as a customer success professional at Dubsado for a year
          before becoming a product owner. I am passionate about creating
          positive customer experiences and solving complex problems with
          innovative solutions. I am currently enrolled in Coursera's Data
          Analytics course to enhance my product decisions with data-driven
          results.
        </p>
      </div>

      {/* Make this header appear on the left with content on the right*/}
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="development-container">
          <h3>Web Development</h3>
          <p>HTML, CSS, Javascript, React, Typescript</p>
        </div>
        <div className="development-container">
          <h3>Data</h3>
          <p>I kinda know MongoDB, how to query, and how to write aggregates</p>
        </div>
        <div className="development-container">
          <h3>IDK</h3>
          <p>What should I put here that showcases the stuff I know</p>
        </div>
      </div>

      {/* Make this header appear on the right with content on the left*/}
      <h2>Currently studying</h2>
      <div className="studying-container">
        {/* Update to University of Arizona MIS */}
        <img src="/src/assets/coursera.png" alt="Google Coursera Logo" />
        <p>
          In my role as a Product Owner, I understand the pivotal role data
          plays in making informed decisions and driving product strategy. The
          Google Coursera Data Analytics course is a strategic choice as it
          equips me with the knowledge and tools to harness the power of data.
          From interpreting user behavior to optimizing product features, this
          course is instrumental in enhancing my ability to transform raw data
          into actionable insights.
          <br />
          <br />
          As a Product Owner, my goal is to bridge the gap between user needs
          and product development. Proficiency in data analytics allows me to
          make informed decisions, prioritize features effectively, and
          contribute to the overall success of the products I oversee. By
          studying data analytics, I aim to not only enhance my skill set but
          also bring a more data-centric and strategic approach to product
          development, ensuring that every decision is backed by meaningful
          insights. I look forward to applying the knowledge gained from the
          Data Analytics course to drive innovation, improve product
          performance, and deliver exceptional value to both users and
          stakeholders.
        </p>
      </div>

      <h2>Countries I've been to</h2>
      <div> put a world map here with the countries I've been to </div>
      <div>Put a count of the total countries </div>

      <section className="call-to-action">
        <h2>Let's Connect!</h2>
        <p>
          If you'd like to learn more about my work or discuss potential
          collaborations, feel free to <a href="/contact">contact me</a>. I'm
          always open to new opportunities and exciting projects.
        </p>
      </section>
    </div>
  );
}
