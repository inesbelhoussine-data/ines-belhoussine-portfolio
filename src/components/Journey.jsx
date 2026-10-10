
import { useLanguage } from "../context/LanguageContext.jsx";

const translations = {
  fr: {
    kicker: "PARCOURS",
    title1: "Construire.",
    title2: "Évoluer.",
    intro:
      "Du développement web à la Data Analytics, mon parcours s'est construit autour d'un même fil conducteur : comprendre les systèmes, structurer l'information et transformer la donnée en solutions utiles.",
    trajectory: "TRAJECTOIRE",
    trajectoryNote:
      "Une évolution progressive vers des problématiques de données, d'automatisation et d'architecture.",
    current: "ACTUEL",

    journey: [
      {
        period: "2025 — 2026",
        type: "FORMATION",
        title: "Bachelor Data Analyst",
        place: "OpenClassrooms",
        description:
          "Analyse de données, Business Intelligence, statistiques, machine learning et transformation de données.",
        tags: ["Python", "SQL", "Power BI", "Snowflake", "dbt"],
        highlight: true,
      },
      {
        period: "2025 — 2026",
        type: "EXPÉRIENCE",
        title: "Comptabilité et Data",
        place: "Assistante comptable et data",
        description:
          "Exploitation, contrôle et structuration de données dans un environnement professionnel.",
        tags: ["Data", "Excel", "Analyse"],
      },
      {
        period: "2023 — 2024",
        type: "EXPÉRIENCE",
        title: "Développement Web",
        place: "Alternance · SHENRON",
        description:
          "Conception et développement d'applications web avec une attention particulière portée aux données et aux bases de données.",
        tags: ["JavaScript", "PHP", "React", "MySQL"],
      },
      {
        period: "2023 — 2024",
        type: "FORMATION",
        title: "Bachelor Développement Web",
        place: "Alternance · SHENRON",
        description:
          "Formation orientée développement d'applications, architecture web et bases de données.",
        tags: ["Web", "Databases", "Development"],
      },
      {
        period: "2021 — 2023",
        type: "FORMATION",
        title: "BTS NDRC",
        place: "Alternance · EDF",
        description:
          "Formation commerciale réalisée en alternance, avec analyse de données clients, facturation et relation client.",
        tags: ["Business", "Analyse", "CRM"],
      },
    ],
  },

  en: {
    kicker: "EXPERIENCE & EDUCATION",
    title1: "Building skills.",
    title2: "Growing forward.",
    intro:
      "From web development to Data Analytics, my journey has followed a consistent path: understanding systems, structuring information, and turning data into practical solutions.",
    trajectory: "CAREER PATH",
    trajectoryNote:
      "A gradual progression toward data transformation, automation, and data architecture.",
    current: "CURRENT",

    journey: [
      {
        period: "2025 — 2026",
        type: "EDUCATION",
        title: "Bachelor's-level Data Analyst Program",
        place: "OpenClassrooms",
        description:
          "Data analysis, Business Intelligence, statistics, machine learning, and data transformation.",
        tags: ["Python", "SQL", "Power BI", "Snowflake", "dbt"],
        highlight: true,
      },
      {
        period: "2025 — 2026",
        type: "EXPERIENCE",
        title: "Accounting & Data",
        place: "Accounting and Data Assistant",
        description:
          "Working with, validating, and structuring data in a professional environment.",
        tags: ["Data", "Excel", "Analysis"],
      },
      {
        period: "2023 — 2024",
        type: "EXPERIENCE",
        title: "Web Development",
        place: "Work-study Program · SHENRON",
        description:
          "Designing and developing web applications, with a particular focus on data and databases.",
        tags: ["JavaScript", "PHP", "React", "MySQL"],
      },
      {
        period: "2023 — 2024",
        type: "EDUCATION",
        title: "Bachelor's-level Web Development Program",
        place: "Work-study Program · SHENRON",
        description:
          "Training in application development, web architecture, and databases.",
        tags: ["Web", "Databases", "Development"],
      },
      {
        period: "2021 — 2023",
        type: "EDUCATION",
        title: "BTS in Customer Relations & Business Development",
        place: "Work-study Program · EDF",
        description:
          "Business-oriented training combining customer data analysis, billing, and customer relationship management.",
        tags: ["Business", "Analysis", "CRM"],
      },
    ],
  },
};

function Journey() {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.fr;

  return (
    <section className="section journey-section" id="parcours">
      <div className="container">

        <div className="journey-header">
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

          <p className="journey-intro">
            {t.intro}
          </p>
        </div>

        <div className="journey-layout">
          <div className="journey-side">
            <p>{t.trajectory}</p>

            <div className="trajectory">
              <span>WEB</span>
              <span className="trajectory-arrow">↓</span>
              <span className="trajectory-active">DATA ANALYTICS</span>
              <span className="trajectory-arrow">↓</span>
              <span>DATA ENGINEERING</span>
            </div>

            <p className="trajectory-note">
              {t.trajectoryNote}
            </p>
          </div>

          <div className="timeline">
            {t.journey.map((item, index) => (
              <article
                className={`timeline-item ${
                  item.highlight ? "timeline-highlight" : ""
                }`}
                key={`${item.period}-${index}`}
              >
                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-period">
                  {item.period}
                </div>

                <div className="timeline-content">
                  <div className="timeline-top">
                    <span>{item.type}</span>

                    {index === 0 && (
                      <span className="current-badge">
                        {t.current}
                      </span>
                    )}
                  </div>

                  <h3>{item.title}</h3>

                  <p className="timeline-place">
                    {item.place}
                  </p>

                  <p className="timeline-description">
                    {item.description}
                  </p>

                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Journey;
