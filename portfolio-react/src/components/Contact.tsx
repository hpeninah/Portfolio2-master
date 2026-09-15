function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <p className="eyebrow">CONTACT</p>
        <h2>Let's connect.</h2>

        <p>
          I'm open to opportunities in software engineering, bioinformatics,
          computational biology, scientific computing, and data-focused roles.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-details">
          <h3>Get in touch</h3>

          <p>
            If you'd like to discuss an opportunity, project, or potential
            collaboration, feel free to reach out.
          </p>

          <div className="contact-links">
            <a href="mailto:hannah.p.mulato@gmail.com">
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/hannah-mulato"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/hpeninah"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <p className="location">
            Based in the U.S.
            <br />
            Open to remote opportunities and relocation.
          </p>
        </div>

        <div className="contact-form-card">
          <form
            action="https://formspree.io/f/mleozbgl"
            method="POST"
          >
            <label htmlFor="user-name">Name</label>
            <input
              id="user-name"
              type="text"
              name="name"
              required
            />

            <label htmlFor="user-email">Email</label>
            <input
              id="user-email"
              type="email"
              name="email"
              required
            />

            <label htmlFor="user-message">Message</label>
            <textarea
              id="user-message"
              name="message"
              required
            />

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact