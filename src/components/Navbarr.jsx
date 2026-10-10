
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const closeMenu = () => setMenuOpen(false);

  const labels = {
    fr: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      journey: "Parcours",
      contact: "Contact",
      menu: "Ouvrir le menu"
    },
    en: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      journey: "Experience & Education",
      contact: "Contact",
      menu: "Open menu"
    }
  };

  const t = labels[language];

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <Link to="/#accueil" className="navbar-logo" onClick={closeMenu}>
          IB
        </Link>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link to="/#apropos" onClick={closeMenu}>
            {t.about}
          </Link>

          <Link to="/#competences" onClick={closeMenu}>
            {t.skills}
          </Link>

          <Link to="/#projects" onClick={closeMenu}>
            {t.projects}
          </Link>

          <Link to="/#parcours" onClick={closeMenu}>
            {t.journey}
          </Link>

          <Link to="/#contact" className="navbar-contact" onClick={closeMenu}>
            {t.contact}
            <span>↗</span>
          </Link>
        </nav>

        <div className="navbar-actions">
          <div className="language-switch" aria-label="Language selection">
            <button
              type="button"
              className={language === "fr" ? "selected" : ""}
              onClick={() => setLanguage("fr")}
              aria-pressed={language === "fr"}
            >
              FR
            </button>

            <span>/</span>

            <button
              type="button"
              className={language === "en" ? "selected" : ""}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          <button
            className={`menu-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.menu}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
