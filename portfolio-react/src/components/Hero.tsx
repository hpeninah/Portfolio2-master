function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="eyebrow">
            SOFTWARE ENGINEERING · BIOINFORMATICS · DATA
          </p>

          <h1>Hi, I'm Hannah.</h1>

          <h2 className="hero-title">
            I build software and computational tools for scientific and
            data-driven problems.
          </h2>

          <p className="hero-description">
            I'm a software engineer with a background in Bioinformatics and
            Computational Biology, working across full-stack development,
            APIs, databases, genomic workflows, and scientific computing.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="button">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="button button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          <div className="hero-links">
            <a
              href="https://github.com/hpeninah"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hannah-mulato-62487173/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/profile.jpg"
            alt="Hannah Mulato"
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero