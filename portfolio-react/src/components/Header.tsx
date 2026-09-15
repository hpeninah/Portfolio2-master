import ThemeToggle from "./ThemeToggle"

function Header() {
  return (
    <header>
      <a href="#home" className="logo">
        Hannah Mulato
      </a>

      <div className="header-actions">
        <nav aria-label="Main navigation">
          <ul id="menu">
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#portfolio">Projects</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header