
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { projects } from "../data/projects.js";
import { projectDetails } from "../data/projectDetails.js";

const translations = {
  fr: {
    kicker: "PORTFOLIO — BUSINESS CASE STUDIES",

    title1: "Des analyses concrètes.",
    title2: "Des décisions éclairées.",

    intro:
      "Découvrez mes études de cas appliquées à des problématiques de performance, de croissance, de fiabilité du reporting et de gestion des risques. Chaque projet associe analyse quantitative, compréhension des enjeux métiers et recommandations opérationnelles.",

    selectedWork: "BUSINESS ANALYTICS / SELECTED WORK",

    viewStudy: "Explorer l'étude de cas",

    count: "études de cas sélectionnées",

    exploreGithub: "Découvrir l'ensemble de mes projets",

    keyMetrics: "CHIFFRES CLÉS & PÉRIMÈTRE",

    businessChallenge: "ENJEU MÉTIER",

    academicProject: "PROJET DE FORMATION",

    sourceCode: "Code & livrables",

    imageAlt: "Visualisation du projet",
  },

  en: {
    kicker: "PORTFOLIO — BUSINESS CASE STUDIES",

    title1: "Actionable insights.",
    title2: "Informed decisions.",

    intro:
      "Explore my case studies addressing business performance, growth opportunities, reporting reliability, and risk management. Each project combines quantitative analysis, business understanding, and actionable recommendations.",

    selectedWork: "BUSINESS ANALYTICS / SELECTED WORK",

    viewStudy: "Explore the case study",

    count: "selected case studies",

    exploreGithub: "Explore all my projects",

    keyMetrics: "KEY FIGURES & SCOPE",

    businessChallenge: "BUSINESS CHALLENGE",

    academicProject: "ACADEMIC PROJECT",

    sourceCode: "Code & deliverables",

    imageAlt: "Project visualisation",
  },
};

/* ==========================================
   PROJECT VISUAL
========================================== */

function ProjectVisual({ project, details, content, t }) {
  return (
    <div
      className={`project-visual visual-${project.id} project-real-visual`}
    >

      <div className="visual-grid"></div>

      {details?.cover ? (

        <img
          src={details.cover}
          alt={`${t.imageAlt}: ${content.title}`}
          className="project-preview-image"
          loading="lazy"
        />

      ) : (

        <div className="project-visual-fallback">
          <span>{content.category}</span>
          <strong>{content.title}</strong>
        </div>

      )}

      <span className="visual-project-number">
        {project.id}
      </span>

      <span className="project-visual-caption">
        {t.academicProject}
      </span>

    </div>
  );
}

/* ==========================================
   PROJECT KEY METRICS
========================================== */

function ProjectMetrics({ metrics = [], label }) {

  if (!metrics.length) {
    return null;
  }

  return (
    <div className="project-metrics">

      <span className="project-metrics-heading">
        {label}
      </span>

      <div className="project-metrics-grid">

        {metrics.slice(0, 2).map((metric, index) => (

          <div
            className="project-metric"
            key={index}
          >

            <strong>{metric.value}</strong>

            <span>{metric.label}</span>

          </div>

        ))}

      </div>

    </div>
  );
}

/* ==========================================
   PROJECTS SECTION
========================================== */

function Projects() {
  const { language } = useLanguage();

  const t = translations[language] ?? translations.fr;

  return (
    <section
      className="section projects-section"
      id="projects"
    >

      <div className="container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="projects-header">

          <div className="section-heading">

            <p className="section-kicker">
              <span></span>
              {t.kicker}
            </p>

            <h2>
              {t.title1}
              <br />
              <span>{t.title2}</span>
            </h2>

          </div>

          <div className="projects-intro">

            <p>{t.intro}</p>

            <span>
              {String(projects.length).padStart(2, "0")}
              {" / "}
              {t.selectedWork}
            </span>

          </div>

        </div>

        {/* =========================
            BUSINESS CASE STUDIES
        ========================= */}

        <div className="projects-list">

          {projects.map((project) => {

            const content =
              project[language] ?? project.fr ?? project;

            const details =
              projectDetails[project.slug];

            const detailContent =
              details?.[language] ?? details?.fr ?? details ?? {};

            return (

              <article
                className="project-card"
                key={project.id}
              >

                {/* REAL PROJECT VISUAL */}

                <ProjectVisual
                  project={project}
                  details={details}
                  content={content}
                  t={t}
                />

                {/* BUSINESS CONTENT */}

                <div className="project-content">

                  <div className="project-meta">

                    <span>{project.id}</span>

                    <span>
                      {content.category ?? project.category}
                    </span>

                  </div>

                  <h3>
                    {content.title ?? project.title}
                  </h3>

                  <div className="project-business-description">

                    <span className="project-business-label">
                      {t.businessChallenge}
                    </span>

                    <p>
                      {content.description ?? project.description}
                    </p>

                  </div>

                  {/* KEY METRICS */}

                  <ProjectMetrics
                    metrics={detailContent.kpis}
                    label={t.keyMetrics}
                  />

                  {/* TECHNICAL & BUSINESS SKILLS */}

                  <div className="project-tags">

                    {project.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>

                  {/* CASE STUDY & DELIVERABLES */}

                  <div className="project-links">

                    <Link
                      to={`/projets/${project.slug}`}
                      className="project-study-link"
                    >

                      {t.viewStudy}

                      <span>↗</span>

                    </Link>

                    {project.github && (

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >

                        {t.sourceCode}

                        <span>↗</span>

                      </a>

                    )}

                  </div>

                </div>

              </article>

            );
          })}

        </div>

        {/* =========================
            GITHUB PORTFOLIO
        ========================= */}

        <div className="projects-footer">

          <span>

            {String(projects.length).padStart(2, "0")}
            {" "}
            {t.count}

          </span>

          <a
            href="https://github.com/inesbelhoussine-data"
            target="_blank"
            rel="noopener noreferrer"
          >

            {t.exploreGithub}

            <span>↗</span>

          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;
