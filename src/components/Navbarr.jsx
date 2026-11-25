
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

const labels = {
  fr: {
    home: "Retour à l'accueil",
    about: "À propos",
    projects: "Études de cas",
    skills: "Expertises",
    journey: "Parcours",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    navigation: "Navigation principale",
    languageSelection: "Sélection de la langue",
  },

  en: {
    home: "Back to homepage",
    about: "About",
    projects: "Case Studies",
    skills: "Expertise",
    journey: "Experience",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navigation: "Main navigation",
    languageSelection: "Language selection",
  },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { language, setLanguage } = useLanguage();

  const t = labels[language] ?? labels.fr;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">

      <div className="navbar-inner">

        {/* =========================
            PERSONAL BRAND
        ========================= */}

        <Link
          to="/#accueil"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label={t.home}
        >
          IB
        </Link>

        {/* =========================
            MAIN NAVIGATION
        ========================= */}

        <nav
          id="main-navigation"
          aria-label={t.navigation}
          className={`navbar-links ${
            menuOpen ? "active" : ""
          }`}
        >

          <Link
            to="/#apropos"
            onClick={closeMenu}
          >
            {t.about}
          </Link>

          <Link
            to="/#projects"
            onClick={closeMenu}
          >
            {t.projects}
          </Link>

          <Link
            to="/#competences"
            onClick={closeMenu}
          >
            {t.skills}
          </Link>

          <Link
            to="/#parcours"
            onClick={closeMenu}
          >
            {t.journey}
          </Link>

          <Link
            to="/#contact"
            className="navbar-contact"
            onClick={closeMenu}
          >
            {t.contact}
            <span>↗</span>
          </Link>

        </nav>

        {/* =========================
            LANGUAGE & MOBILE MENU
        ========================= */}

        <div className="navbar-actions">

          <div
            className="language-switch"
            role="group"
            aria-label={t.languageSelection}
          >

            <button
              type="button"
              className={
                language === "fr" ? "selected" : ""
              }
              onClick={() => setLanguage("fr")}
              aria-pressed={language === "fr"}
            >
              FR
            </button>

            <span aria-hidden="true">/</span>

            <button
              type="button"
              className={
                language === "en" ? "selected" : ""
              }
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>

          </div>

          <button
            type="button"
            className={`menu-button ${
              menuOpen ? "active" : ""
            }`}
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={
              menuOpen ? t.closeMenu : t.openMenu
            }
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
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
