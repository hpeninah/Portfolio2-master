function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-heading">
        <p className="eyebrow">ABOUT</p>
        <h2>Software meets science.</h2>
      </div>

      <div className="about-grid">
        <div className="about-main">
          <p>
            I'm a software engineer with a B.S. in Bioinformatics and
            Computational Biology and professional experience in software
            development.
          </p>

          <p>
            My background sits at the intersection of software engineering,
            biological data, and scientific computing. I've worked with
            technologies including Python, Java, React, FastAPI, REST APIs,
            SQL and NoSQL databases, Git, Docker, cloud platforms, and Linux,
            while also developing computational workflows involving genomic
            data analysis, workflow automation, and high-performance computing.
          </p>

          <p>
            I enjoy solving problems that require both engineering and
            analytical thinking — whether that's building an application,
            designing an API, automating a data workflow, or creating
            computational tools for biological research.
          </p>
        </div>

        <aside className="currently-card">
          <p className="eyebrow">CURRENTLY</p>

          <h3>Open to new opportunities</h3>

          <p>
            I'm interested in software engineering, bioinformatics,
            computational biology, scientific computing, and data-focused
            roles.
          </p>

          <p className="location">
            Based in the U.S.
            <br />
            Open to remote work and relocation
          </p>
        </aside>
      </div>
    </section>
  )
}

export default About