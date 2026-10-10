
import { useLanguage } from "../context/LanguageContext.jsx";

const translations = {
  fr: {
    kicker: "COMPÉTENCES",
    title1: "Une stack pensée",
    title2: "pour la donnée.",
    intro:
      "Des compétences allant de l'analyse à la visualisation, enrichies par mon expérience en développement.",

    groups: [
      {
        number: "01",
        title: "Data Analysis",
        description:
          "Exploration, nettoyage, analyse statistique et manipulation de données.",
        skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Statistics"],
      },
      {
        number: "02",
        title: "Databases & Transformation",
        description:
          "Requêtage, transformation et structuration de données.",
        skills: ["SQL", "Snowflake", "dbt", "Data Modeling"],
      },
      {
        number: "03",
        title: "Business Intelligence",
        description:
          "Création de tableaux de bord et communication d'indicateurs métier.",
        skills: ["Power BI", "DAX", "Power Query", "Data Visualization"],
      },
      {
        number: "04",
        title: "Machine Learning",
        description:
          "Application de modèles supervisés et non supervisés à des problématiques data.",
        skills: ["Scikit-learn", "Clustering", "Classification", "PCA"],
      },
      {
        number: "05",
        title: "Development",
        description:
          "Une culture développement qui complète mon profil Data.",
        skills: ["Git", "GitHub", "HTML", "CSS", "JavaScript", "React"],
      },
    ],
  },

  en: {
    kicker: "SKILLS",
    title1: "A tech stack built",
    title2: "around data.",
    intro:
      "Skills spanning data analysis, transformation, and visualization, supported by my background in web development.",

    groups: [
      {
        number: "01",
        title: "Data Analysis",
        description:
          "Data exploration, cleaning, statistical analysis, and data manipulation.",
        skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Statistics"],
      },
      {
        number: "02",
        title: "Databases & Transformation",
        description:
          "Querying, transforming, and structuring data.",
        skills: ["SQL", "Snowflake", "dbt", "Data Modeling"],
      },
      {
        number: "03",
        title: "Business Intelligence",
        description:
          "Building dashboards and communicating key business metrics.",
        skills: ["Power BI", "DAX", "Power Query", "Data Visualization"],
      },
      {
        number: "04",
        title: "Machine Learning",
        description:
          "Applying supervised and unsupervised learning methods to data problems.",
        skills: ["Scikit-learn", "Clustering", "Classification", "PCA"],
      },
      {
        number: "05",
        title: "Development",
        description:
          "A web development background that complements my data skills.",
        skills: ["Git", "GitHub", "HTML", "CSS", "JavaScript", "React"],
      },
    ],
  },
};

function Skills() {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.fr;

  return (
    <section className="section skills-section" id="competences">
      <div className="container">
        <div className="skills-header">
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

          <p className="skills-header-text">
            {t.intro}
          </p>
        </div>

        <div className="skills-list">
          {t.groups.map((group) => (
            <article className="skill-row" key={group.number}>
              <span className="skill-number">{group.number}</span>

              <div className="skill-info">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
