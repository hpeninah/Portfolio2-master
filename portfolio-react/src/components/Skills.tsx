import { skillCategories } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <p className="eyebrow">TECH STACK</p>
        <h2>Technical Skills</h2>

        <p>
          Tools and technologies I've used across software engineering,
          bioinformatics, and computational projects.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>
            <h3>{category.title}</h3>

            <p>{category.skills.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills