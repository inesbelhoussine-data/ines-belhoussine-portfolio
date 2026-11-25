
import { useLanguage } from "../context/LanguageContext.jsx";

const translations = {
  fr: {
    kicker: "CONTACT & OPPORTUNITÉS",

    status: "Ouverte aux opportunités professionnelles",

    subtitle: "BUSINESS · DATA · STRATEGIC DECISIONS",

    title: "Construisons",
    titleAccent: " ensemble.",

    description:
      "Vous recherchez un profil capable de comprendre vos enjeux métiers, d'analyser vos données et de transformer les résultats en recommandations concrètes ? Échangeons sur la manière dont mes compétences peuvent contribuer à vos objectifs de performance et de développement.",

    opportunities:
      "Business Data Analyst · BI Analyst · Business Analytics · Reporting Analyst",

    mobility:
      "Mobilité nationale et internationale",

    backToTop: "Retour en haut",

    cv: "Consulter mon CV",

    cvFile: "/CV_ines_belhoussine_FR.pdf",

    cvAria: "Consulter mon CV français",

    footerRole:
      "BUSINESS DATA ANALYST · DECISION SUPPORT",
  },

  en: {
    kicker: "CONTACT & OPPORTUNITIES",

    status: "Open to professional opportunities",

    subtitle: "BUSINESS · DATA · STRATEGIC DECISIONS",

    title: "Let's create",
    titleAccent: " value.",

    description:
      "Looking for someone who can understand your business challenges, analyse your data, and translate findings into actionable recommendations? Let's discuss how my skills can contribute to your performance and growth objectives.",

    opportunities:
      "Business Data Analyst · BI Analyst · Business Analytics · Reporting Analyst",

    mobility:
      "Open to national and international opportunities",

    backToTop: "Back to top",

    cv: "View my CV",

    cvFile: "/CV_ines_belhoussine_EN.pdf",

    cvAria: "View my English CV",

    footerRole:
      "BUSINESS DATA ANALYST · DECISION SUPPORT",
  },
};

function Contact() {
  const { language } = useLanguage();

  const t = translations[language] ?? translations.fr;

  return (
    <section className="contact-section" id="contact">

      <div className="container">

        {/* =========================
            PROFESSIONAL AVAILABILITY
        ========================= */}

        <div className="contact-top">

          <p className="section-kicker">
            <span></span>
            {t.kicker}
          </p>

          <p className="contact-status">

            <span className="status-dot"></span>

            {t.status}

          </p>

        </div>

        {/* =========================
            BUSINESS CALL TO ACTION
        ========================= */}

        <div className="contact-main">

          <div className="contact-title">

            <p>{t.subtitle}</p>

            <h2>
              {t.title}
              <span>{t.titleAccent}</span>
            </h2>

          </div>

          <div className="contact-copy">

            <p>{t.description}</p>

            <div className="contact-professional-focus">

              <p className="contact-target-roles">
                {t.opportunities}
              </p>

              <p className="contact-mobility">
                <span>●</span>
                {t.mobility}
              </p>

            </div>

            <a
              className="contact-email"
              href="mailto:inesbelhoussine2@gmail.com"
            >
              inesbelhoussine2@gmail.com

              <span>↗</span>

            </a>

          </div>

        </div>

        {/* =========================
            PROFESSIONAL LINKS
        ========================= */}

        <div className="contact-links">

          <a
            href="https://www.linkedin.com/in/ines-belhoussine/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >

            <div>
              <span>01</span>
              <p>LinkedIn</p>
            </div>

            <span className="contact-arrow">↗</span>

          </a>

          <a
            href="https://github.com/inesbelhoussine-data"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >

            <div>
              <span>02</span>
              <p>GitHub</p>
            </div>

            <span className="contact-arrow">↗</span>

          </a>

          <a
            href={t.cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label={t.cvAria}
          >

            <div>
              <span>03</span>
              <p>{t.cv}</p>
            </div>

            <span className="contact-arrow">↗</span>

          </a>

        </div>

        {/* =========================
            PORTFOLIO FOOTER
        ========================= */}

        <footer className="portfolio-footer">

          <div className="footer-brand">

            <span>IB</span>

            <p>Ines Belhoussine</p>

          </div>

          <p className="footer-role">

            {t.footerRole} · {new Date().getFullYear()}

          </p>

          <a href="#accueil">

            {t.backToTop}

            <span>↑</span>

          </a>

        </footer>

      </div>

    </section>
  );
}

export default Contact;
