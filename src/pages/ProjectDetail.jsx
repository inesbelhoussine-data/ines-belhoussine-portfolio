
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
    github: "Consulter les livrables et le code source ↗",

    context: "PROJET DE FORMATION — OPENCLASSROOMS",

    kpiLabel: "KEY METRICS",
    kpiTitle: "Les chiffres clés.",

    problemLabel: "01 / BUSINESS CHALLENGE",
    problemTitle: "L'enjeu stratégique.",

    objectivesLabel: "02 / BUSINESS OBJECTIVES",
    objectivesTitle: "Les objectifs métiers.",

    resultsLabel: "03 / KEY FINDINGS",
    resultsTitle: "Les résultats et enseignements.",

    recommendationsLabel: "04 / STRATEGIC RECOMMENDATIONS",
    recommendationsTitle: "Les recommandations à la direction.",

    impactLabel: "05 / BUSINESS VALUE",
    impactTitle: "La valeur ajoutée pour l'entreprise.",

    methodologyLabel: "06 / ANALYTICAL APPROACH",
    methodologyTitle: "La démarche analytique.",

    previous: "← PROJET PRÉCÉDENT",
    next: "PROJET SUIVANT →",
    placeholder: "À compléter.",
    imageAlt: "Visualisation analytique :",
    impactNote: "Bénéfices potentiels et aide à la décision.",
  },

  en: {
    notFound: "Project not found.",
    back: "← All projects",
    backToTop: "↑ Back to top",
    caseStudy: "BUSINESS CASE STUDY",
    github: "Explore project deliverables and source code ↗",

    context: "ACADEMIC PROJECT — OPENCLASSROOMS",

    kpiLabel: "KEY METRICS",
    kpiTitle: "Key figures at a glance.",

    problemLabel: "01 / BUSINESS CHALLENGE",
    problemTitle: "The strategic challenge.",

    objectivesLabel: "02 / BUSINESS OBJECTIVES",
    objectivesTitle: "The business objectives.",

    resultsLabel: "03 / KEY FINDINGS",
    resultsTitle: "Results and actionable insights.",

    recommendationsLabel: "04 / STRATEGIC RECOMMENDATIONS",
    recommendationsTitle: "Recommendations for management.",

    impactLabel: "05 / BUSINESS VALUE",
    impactTitle: "Creating value for the business.",

    methodologyLabel: "06 / ANALYTICAL APPROACH",
    methodologyTitle: "The analytical approach.",

    previous: "← PREVIOUS PROJECT",
    next: "NEXT PROJECT →",
    placeholder: "Coming soon.",
    imageAlt: "Analytical visualisation:",
    impactNote: "Potential business benefits and decision support.",
  },
};

function CaseList({ items = [] }) {
  return (
    <ul className="case-business-list">
      {items.map((item, index) => (
        <li key={index}>
          <span className="case-list-number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const { language } = useLanguage();

  const t = translations[language] ?? translations.fr;

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
    return (
      <main className="case-page">
        <div className="container">
          <p>{t.notFound}</p>

          <Link to="/#projects" className="case-back">
            {t.back}
          </Link>
        </div>
      </main>
    );
  }

  const previous =
    projects[(index - 1 + projects.length) % projects.length];

  const next =
    projects[(index + 1) % projects.length];

  const content =
    project[language] ?? project.fr ?? project;

  const previousContent =
    previous[language] ?? previous.fr ?? previous;

  const nextContent =
    next[language] ?? next.fr ?? next;

  const detailContent =
    details?.[language] ?? details?.fr ?? details ?? {};

  return (
    <main className="case-page">
      <div className="container">

        {/* ==============================
            NAVIGATION
        ============================== */}

        <div className="case-topbar">

          <Link to="/#projects" className="case-back">
            {t.back}
          </Link>

          <span className="case-counter">
            {t.caseStudy} {project.id} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>

        </div>

        {/* ==============================
            PROJECT HEADER
        ============================== */}

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

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="case-github"
            >
              {t.github}
            </a>
          )}

          <p className="case-project-context">
            {t.context}
          </p>

        </header>

        {/* ==============================
            KEY METRICS
        ============================== */}

        {detailContent.kpis?.length > 0 && (
          <section className="case-kpi-section">

            <span className="case-label">
              {t.kpiLabel}
            </span>

            <h2>{t.kpiTitle}</h2>

            <div className="case-kpi-grid">

              {detailContent.kpis.map((kpi, i) => (
                <div className="case-kpi-card" key={i}>

                  <span className="case-kpi-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <strong className="case-kpi-value">
                    {kpi.value}
                  </strong>

                  <p className="case-kpi-label">
                    {kpi.label}
                  </p>

                </div>
              ))}

            </div>

          </section>
        )}

        {/* ==============================
            BUSINESS CHALLENGE & OBJECTIVES
        ============================== */}

        <section className="case-summary case-business-summary">

          <div className="case-summary-card">

            <span className="case-label">
              {t.problemLabel}
            </span>

            <h2>{t.problemTitle}</h2>

            <p>
              {detailContent.problem || t.placeholder}
            </p>

          </div>

          {detailContent.objectives?.length > 0 && (
            <div className="case-summary-card">

              <span className="case-label">
                {t.objectivesLabel}
              </span>

              <h2>{t.objectivesTitle}</h2>

              <CaseList items={detailContent.objectives} />

            </div>
          )}

        </section>

        {/* ==============================
            KEY FINDINGS
        ============================== */}

        <section className="case-summary-result case-findings">

          <span className="case-label">
            {t.resultsLabel}
          </span>

          <h2>{t.resultsTitle}</h2>

          <p>
            {detailContent.results || t.placeholder}
          </p>

        </section>

        {/* ==============================
            ANALYTICAL VISUALISATION
        ============================== */}

        {details?.cover && (
          <figure className="case-cover">

            <img
              src={details.cover}
              alt={`${t.imageAlt} ${content.title}`}
              className="case-cover-image"
              loading="lazy"
            />

          </figure>
        )}

        {/* ==============================
            STRATEGIC RECOMMENDATIONS
        ============================== */}

        {detailContent.recommendations?.length > 0 && (
          <section className="case-strategy-section">

            <div className="case-strategy-heading">

              <span className="case-label">
                {t.recommendationsLabel}
              </span>

              <h2>{t.recommendationsTitle}</h2>

            </div>

            <div className="case-recommendations-grid">

              {detailContent.recommendations.map(
                (recommendation, i) => (
                  <article
                    className="case-recommendation-card"
                    key={i}
                  >

                    <span className="case-recommendation-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <p>{recommendation}</p>

                    <span
                      className="case-recommendation-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>

                  </article>
                )
              )}

            </div>

          </section>
        )}

        {/* ==============================
            BUSINESS VALUE
        ============================== */}

        {detailContent.businessImpact && (
          <section className="case-impact">

            <div className="case-impact-heading">

              <span className="case-label">
                {t.impactLabel}
              </span>

              <h2>{t.impactTitle}</h2>

            </div>

            <div className="case-impact-content">

              <p>{detailContent.businessImpact}</p>

              <span className="case-impact-note">
                {t.impactNote}
              </span>

            </div>

          </section>
        )}

        {/* ==============================
            ANALYTICAL METHODOLOGY
        ============================== */}

        {detailContent.methodology?.length > 0 && (
          <section className="case-methodology">

            <div className="case-methodology-heading">

              <span className="case-label">
                {t.methodologyLabel}
              </span>

              <h2>{t.methodologyTitle}</h2>

              <div className="case-tags">

                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}

              </div>

            </div>

            <CaseList items={detailContent.methodology} />

          </section>
        )}

        {/* ==============================
            PREVIOUS / NEXT PROJECT
        ============================== */}

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

        {/* ==============================
            BACK TO TOP
        ============================== */}

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
