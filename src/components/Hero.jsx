
import { useLanguage } from "../context/LanguageContext.jsx";

function Hero() {
  const { language } = useLanguage();

  const translations = {
    fr: {
      welcome: "BUSINESS · TECHNOLOGY · DATA",

      headline:
        "Transformer les données en décisions stratégiques.",

      description:
        "Business Data Analyst, je combine expertise analytique, compréhension des enjeux métiers et compétences technologiques pour transformer des données complexes en recommandations concrètes. Mon objectif : accompagner les décideurs dans le pilotage de la performance, l'identification des opportunités de croissance et la maîtrise des risques.",

      location:
        "Basée en France · Mobilité nationale et internationale",

      projects: "Explorer mes études de cas",
      contact: "Me contacter",
      available: "Disponible",

      cardLabel: "BUSINESS INTELLIGENCE",
      cardTitle: "Decision Support",

      performance: "Performance",
      growth: "Croissance",
      risk: "Risques",

      completedProjects: "projets analytiques réalisés",

      businessTitle: "Business Intelligence",
      businessLabel: "pilotage de la performance",

      strategyTitle: "Strategic Analytics",
      strategyLabel: "aide à la décision",

      opportunities: "mobilité professionnelle",
    },

    en: {
      welcome: "BUSINESS · TECHNOLOGY · DATA",

      headline:
        "Turning data into strategic decisions.",

      description:
        "As a Business Data Analyst, I combine analytical expertise, business understanding, and technical skills to translate complex data into actionable recommendations. My objective is to support decision-makers in driving performance, identifying growth opportunities, and mitigating business risks.",

      location:
        "Based in France · Open to national and international opportunities",

      projects: "Explore my case studies",
      contact: "Get in touch",
      available: "Open to work",

      cardLabel: "BUSINESS INTELLIGENCE",
      cardTitle: "Decision Support",

      performance: "Performance",
      growth: "Growth",
      risk: "Risk",

      completedProjects: "analytical projects completed",

      businessTitle: "Business Intelligence",
      businessLabel: "performance management",

      strategyTitle: "Strategic Analytics",
      strategyLabel: "strategic decision support",

      opportunities: "international mobility",
    },
  };

  const t = translations[language] ?? translations.fr;

  return (
    <section className="hero" id="accueil">

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container hero-content">

        <div className="hero-main">

          {/* =========================
              PROFESSIONAL POSITIONING
          ========================= */}

          <div className="hero-text">

            <p className="eyebrow">
              <span></span>
              {t.welcome}
            </p>

            <h1>
              Ines
              <span>Belhoussine</span>
            </h1>

            <h2>Business Data Analyst</h2>

            <p className="hero-business-headline">
              {t.headline}
            </p>

            <p className="hero-description">
              {t.description}
            </p>

            <p className="hero-location">
              <span>●</span> {t.location}
            </p>

            {/* =========================
                CALL TO ACTION
            ========================= */}

            <div className="hero-actions">

              <a
                href="#projects"
                className="button button-primary"
              >
                {t.projects}
                <span>→</span>
              </a>

              <a
                href="#contact"
                className="button button-secondary"
              >
                {t.contact}
              </a>

            </div>

            {/* =========================
                PROFESSIONAL NETWORKS
            ========================= */}

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

          {/* =========================
              BUSINESS ANALYTICS VISUAL
          ========================= */}

          <div className="hero-visual">

            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            <div className="data-card">

              <div className="data-card-top">

                <div>
                  <span className="tiny-label">
                    {t.cardLabel}
                  </span>

                  <strong>{t.cardTitle}</strong>
                </div>

                <span className="status">
                  <i></i>
                  {t.available}
                </span>

              </div>

              <div className="fake-chart" aria-hidden="true">

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
                  <span>BUSINESS</span>
                  <strong>{t.performance}</strong>
                </div>

                <div>
                  <span>STRATEGY</span>
                  <strong>{t.growth}</strong>
                </div>

                <div>
                  <span>MANAGEMENT</span>
                  <strong>{t.risk}</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            KEY PROFESSIONAL STRENGTHS
        ========================= */}

        <div className="hero-bottom">

          <div>
            <strong>7+</strong>
            <span>{t.completedProjects}</span>
          </div>

          <div>
            <strong>{t.businessTitle}</strong>
            <span>{t.businessLabel}</span>
          </div>

          <div>
            <strong>{t.strategyTitle}</strong>
            <span>{t.strategyLabel}</span>
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
