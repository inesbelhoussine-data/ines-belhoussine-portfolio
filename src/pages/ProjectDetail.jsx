
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { projects } from "../data/projects.js";
import { projectDetails } from "../data/projectDetails.js";

const translations = {
  fr: {
    notFound: "Projet introuvable.",
    back: "← Tous les projets",
    backToTop: "↑ Retour en haut",
    caseStudy: "ÉTUDE DE CAS",
    github: "Explorer le repository GitHub ↗",
    problemLabel: "01 / PROBLÉMATIQUE",
    problemTitle: "Le besoin métier.",
    methodologyLabel: "02 / MÉTHODOLOGIE",
    methodologyTitle: "La démarche.",
    resultsLabel: "03 / RÉSULTATS",
    resultsTitle: "Les résultats clés.",
    previous: "← PROJET PRÉCÉDENT",
    next: "PROJET SUIVANT →",
    placeholder: "À compléter.",
    imageAlt: "Visuel du projet",
  },

  en: {
    notFound: "Project not found.",
    back: "← All projects",
    backToTop: "↑ Back to top",
    caseStudy: "CASE STUDY",
    github: "Explore the GitHub repository ↗",
    problemLabel: "01 / BUSINESS CHALLENGE",
    problemTitle: "The business need.",
    methodologyLabel: "02 / METHODOLOGY",
    methodologyTitle: "The approach.",
    resultsLabel: "03 / RESULTS",
    resultsTitle: "Key findings.",
    previous: "← PREVIOUS PROJECT",
    next: "NEXT PROJECT →",
    placeholder: "Coming soon.",
    imageAlt: "Project visual:",
  },
};

function ProjectDetail() {
  const { slug } = useParams();
  const { language } = useLanguage();

  const t = translations[language] ?? translations.fr;

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const details = projectDetails[slug];

  if (!project) {
    return <main className="case-page">{t.notFound}</main>;
  }

  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const content = project[language] ?? project.fr ?? project;
  const previousContent = previous[language] ?? previous.fr ?? previous;
  const nextContent = next[language] ?? next.fr ?? next;

  // Compatible avec le futur format bilingue de projectDetails.js
  const detailContent = details?.[language] ?? details?.fr ?? details;

  return (
    <main className="case-page">
      <div className="container">

        <div className="case-topbar">
          <Link to="/#projects" className="case-back">
            {t.back}
          </Link>

          <span className="case-counter">
            {t.caseStudy} {project.id} / 04
          </span>
        </div>

        <header className="case-hero">
          <div className="case-eyebrow">
            <span className="case-dot"></span>
            {content.category}
          </div>

          <h1>{content.title}</h1>

          <p className="case-description">
            {content.description}
          </p>

          <div className="case-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="case-github"
          >
            {t.github}
          </a>
        </header>

        {details?.cover && (
          <div className="case-cover">
            <img
              src={details.cover}
              alt={`${t.imageAlt} ${content.title}`}
              className="case-cover-image"
            />
          </div>
        )}

        <section className="case-summary">
          <div className="case-summary-card">
            <span className="case-label">{t.problemLabel}</span>
            <h2>{t.problemTitle}</h2>
            <p>{detailContent?.problem || t.placeholder}</p>
          </div>

          <div className="case-summary-card">
            <span className="case-label">{t.methodologyLabel}</span>
            <h2>{t.methodologyTitle}</h2>

            <ul>
              {(detailContent?.methodology || []).map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="case-summary-result">
          <span className="case-label">{t.resultsLabel}</span>
          <h2>{t.resultsTitle}</h2>
          <p>{detailContent?.results || t.placeholder}</p>
        </section>

        <nav className="case-navigation">
          <Link
            to={`/projets/${previous.slug}`}
            className="case-nav-link"
          >
            <span>{t.previous}</span>
            <strong>{previousContent.title}</strong>
          </Link>

          <Link
            to={`/projets/${next.slug}`}
            className="case-nav-link case-nav-next"
          >
            <span>{t.next}</span>
            <strong>{nextContent.title}</strong>
          </Link>
        </nav>

        {/* Bouton retour en haut */}
        <button
          type="button"
          className="project-back-to-top"
          onClick={scrollToTop}
          aria-label={t.backToTop}
        >
          {t.backToTop}
        </button>

      </div>
    </main>
  );
}

export default ProjectDetail;
