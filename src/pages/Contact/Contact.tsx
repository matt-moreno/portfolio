import "./Contact.css";

export default function Contact() {
  return (
    <div className="main-wrapper">
      <section className="contact-container">
        <h1>Contact me</h1>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" placeholder="First Name" />
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" placeholder="Last Name" />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your message..." rows={5} />
          <button type="submit">Send!</button>
        </form>
      </section>
    </div>
  );
}
