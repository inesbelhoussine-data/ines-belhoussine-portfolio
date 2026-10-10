
import { useLanguage } from "../context/LanguageContext.jsx";

function Hero() {
  const { language } = useLanguage();

  const translations = {
    fr: {
      welcome: "BIENVENUE, JE SUIS",
      description:
        "Curieuse de nature, j'aime comprendre, analyser et donner du sens aux données. Après un parcours en développement web, j'ai choisi de me spécialiser dans la Data, un domaine où je peux allier logique, rigueur et créativité.",
      location:
        "Basée en France · Mobile en France et à l'international",
      projects: "Découvrir mes projets",
      contact: "Me contacter",
      available: "Disponible",
      completedProjects: "projets data réalisés",
      mainStack: "stack principale",
      career: "évolution professionnelle",
      opportunities: "ouverte aux opportunités"
    },
    en: {
      welcome: "HI, I'M",
      description:
        "I'm naturally curious and enjoy exploring data, understanding how things work, and finding meaningful insights. With a background in web development, I decided to specialize in Data Analytics, a field that brings together my interest in logic, problem-solving, and creativity.",
      location:
        "Based in France · Open to opportunities in France and internationally",
      projects: "Explore my projects",
      contact: "Get in touch",
      available: "Open to work",
      completedProjects: "data projects completed",
      mainStack: "core tech stack",
      career: "career direction",
      opportunities: "open to opportunities"
    }
  };

  const t = translations[language];

  return (
    <section className="hero" id="accueil">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container hero-content">
        <div className="hero-main">
          <div className="hero-text">
            <p className="eyebrow">
              <span></span>
              {t.welcome}
            </p>

            <h1>
              Ines
              <span>Belhoussine</span>
            </h1>

            <h2>Data Analyst</h2>

            <p className="hero-description">
              {t.description}
            </p>

            <p className="hero-location">
              <span>●</span> {t.location}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                {t.projects}
                <span>→</span>
              </a>

              <a href="#contact" className="button button-secondary">
                {t.contact}
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/ines-belhoussine/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                in
              </a>

              <a
                href="https://github.com/inesbelhoussine-data"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="mailto:inesbelhoussine2@gmail.com"
                aria-label="Email"
              >
                @
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            <div className="data-card">
              <div className="data-card-top">
                <div>
                  <span className="tiny-label">DATA / ANALYTICS</span>
                  <strong>Portfolio 2026</strong>
                </div>

                <span className="status">
                  <i></i>
                  {t.available}
                </span>
              </div>

              <div className="fake-chart">
                <div className="chart-line"></div>

                <div className="chart-bars">
                  <span style={{ height: "35%" }}></span>
                  <span style={{ height: "58%" }}></span>
                  <span style={{ height: "45%" }}></span>
                  <span style={{ height: "78%" }}></span>
                  <span style={{ height: "62%" }}></span>
                  <span style={{ height: "92%" }}></span>
                  <span style={{ height: "73%" }}></span>
                </div>
              </div>

              <div className="data-stats">
                <div>
                  <span>STACK</span>
                  <strong>Python · SQL</strong>
                </div>

                <div>
                  <span>BI</span>
                  <strong>Power BI</strong>
                </div>

                <div>
                  <span>FOCUS</span>
                  <strong>Data</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div>
            <strong>7+</strong>
            <span>{t.completedProjects}</span>
          </div>

          <div>
            <strong>Python · SQL · Power BI</strong>
            <span>{t.mainStack}</span>
          </div>

          <div>
            <strong>Analytics → Engineering</strong>
            <span>{t.career}</span>
          </div>

          <div>
            <strong>France · International</strong>
            <span>{t.opportunities}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
