
import { useLanguage } from "../context/LanguageContext.jsx";

const translations = {
  fr: {
    kicker: "CONTACT",
    status: "Disponible pour de nouvelles opportunités",
    subtitle: "UN PROJET · UNE OPPORTUNITÉ · UNE CONVERSATION",
    title: "Parlons",
    titleAccent: "-en.",
    description:
      "Je suis ouverte aux opportunités en Data Analytics et Business Intelligence, en France comme à l'international.",
    backToTop: "Retour en haut",
    cv: "CV",
    cvFile: "/CV_ines_belhoussine_FR.pdf",
  },

  en: {
    kicker: "CONTACT",
    status: "Open to new opportunities",
    subtitle: "A PROJECT · AN OPPORTUNITY · A CONVERSATION",
    title: "Let's",
    titleAccent: " connect.",
    description:
      "I'm open to opportunities in Data Analytics and Business Intelligence, both in France and internationally.",
    backToTop: "Back to top",
    cv: "Resume",
    cvFile: "/CV_ines_belhoussine_EN.pdf",
  },
};

function Contact() {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.fr;

  return (
    <section className="contact-section" id="contact">
      <div className="container">

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

        <div className="contact-main">
          <div className="contact-title">
            <p>{t.subtitle}</p>

            <h2>
              {t.title}<span>{t.titleAccent}</span>
            </h2>
          </div>

          <div className="contact-copy">
            <p>{t.description}</p>

            <a
              className="contact-email"
              href="mailto:inesbelhoussine2@gmail.com"
            >
              inesbelhoussine2@gmail.com
              <span>↗</span>
            </a>
          </div>
        </div>

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
            aria-label={
              language === "fr"
                ? "Consulter mon CV français"
                : "View my English resume"
            }
          >
            <div>
              <span>03</span>
              <p>{t.cv}</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

        </div>

        <footer className="portfolio-footer">

          <div className="footer-brand">
            <span>IB</span>
            <p>Ines Belhoussine</p>
          </div>

          <p className="footer-role">
            DATA ANALYST · 2026
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
