
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { projects } from "../data/projects.js";

const translations = {
  fr: {
    kicker: "PROJETS SÉLECTIONNÉS",
    title1: "De la donnée",
    title2: "à la décision.",
    intro:
      "Une sélection de projets illustrant ma démarche : comprendre une problématique, structurer les données, analyser puis communiquer des résultats exploitables.",
    selectedWork: "04 / SELECTED WORK",
    viewStudy: "Voir l'étude",
    count: "04 projets sélectionnés",
    exploreGithub: "Explorer mon GitHub",
  },
  en: {
    kicker: "SELECTED PROJECTS",
    title1: "From data",
    title2: "to decisions.",
    intro:
      "A selection of projects that reflect how I work: understanding a problem, structuring data, analyzing it, and communicating actionable insights.",
    selectedWork: "04 / SELECTED WORK",
    viewStudy: "View case study",
    count: "04 selected projects",
    exploreGithub: "Explore my GitHub",
  },
};

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual visual-${project.id}`}>
      <div className="visual-grid"></div>

      <div className="project-window">
        <div className="window-header">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="window-content">
          <div className="window-sidebar">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="window-dashboard">
            <div className="dashboard-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="dashboard-chart">
              <div style={{ height: "36%" }}></div>
              <div style={{ height: "62%" }}></div>
              <div style={{ height: "48%" }}></div>
              <div style={{ height: "82%" }}></div>
              <div style={{ height: "68%" }}></div>
              <div style={{ height: "95%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <span className="visual-project-number">{project.id}</span>
    </div>
  );
}

function Projects() {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.fr;

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
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
            <span>{t.selectedWork}</span>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project) => {
            const content = project[language] ?? project.fr ?? project;

            return (
              <article className="project-card" key={project.id}>
                <ProjectVisual project={project} />

                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.id}</span>
                    <span>{content.category ?? project.category}</span>
                  </div>

                  <h3>{content.title ?? project.title}</h3>

                  <p>{content.description ?? project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <Link to={`/projets/${project.slug}`}>
                      {t.viewStudy}
                      <span>↗</span>
                    </Link>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects-footer">
          <span>{t.count}</span>

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
