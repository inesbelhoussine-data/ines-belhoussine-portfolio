
import { useLanguage } from "../context/LanguageContext.jsx";

const translations = {
  fr: {
    kicker: "EXPERTISE & COMPÉTENCES",

    title1: "Une expertise au service",
    title2: "de la décision.",

    intro:
      "Une approche transversale combinant compréhension des enjeux métiers, analyse quantitative et maîtrise des technologies pour transformer les données en informations stratégiques et recommandations opérationnelles.",

    groups: [
      {
        number: "01",
        title: "Business & Strategic Analytics",
        description:
          "Compréhension des problématiques métiers, identification des leviers de performance et formulation de recommandations pour accompagner les décisions stratégiques et opérationnelles.",

        skills: [
          "Business Analysis",
          "Strategic Analytics",
          "Performance Analysis",
          "Market Intelligence",
          "Decision Support",
          "Risk Analysis",
          "Business Recommendations",
        ],
      },

      {
        number: "02",
        title: "Business Intelligence & Executive Reporting",
        description:
          "Conception de tableaux de bord décisionnels, définition des indicateurs clés et restitution des résultats auprès des équipes métiers et des décideurs.",

        skills: [
          "Power BI",
          "Excel",
          "DAX",
          "Power Query",
          "KPI Monitoring",
          "Executive Reporting",
          "Data Storytelling",
          "Data Visualization",
        ],
      },

      {
        number: "03",
        title: "Financial & Operational Analytics",
        description:
          "Analyse des données financières et opérationnelles pour identifier les écarts, comprendre les facteurs de performance et éclairer les décisions liées aux coûts, aux ressources et à la rentabilité.",

        skills: [
          "Financial Analysis",
          "Revenue Analysis",
          "Budget Monitoring",
          "Profitability Analysis",
          "Operational Performance",
          "Variance Analysis",
        ],
      },

      {
        number: "04",
        title: "Data Analysis & Statistical Insights",
        description:
          "Exploration et analyse approfondie des données pour identifier les tendances, détecter les anomalies, évaluer les hypothèses et produire des conclusions fiables.",

        skills: [
          "Python",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Statistics",
          "Hypothesis Testing",
          "Exploratory Data Analysis",
        ],
      },

      {
        number: "05",
        title: "Analytics Engineering & Data Quality",
        description:
          "Structuration, transformation et fiabilisation des données afin de garantir la cohérence des indicateurs et de construire des bases analytiques reproductibles.",

        skills: [
          "SQL",
          "PostgreSQL",
          "Snowflake",
          "dbt",
          "Data Modeling",
          "Data Transformation",
          "Data Quality",
          "Data Warehouse",
        ],
      },

      {
        number: "06",
        title: "Predictive Analytics & Machine Learning",
        description:
          "Application de méthodes statistiques et prédictives pour anticiper les tendances, segmenter les marchés, identifier les risques et accompagner les décisions métiers.",

        skills: [
          "Scikit-learn",
          "Logistic Regression",
          "Classification",
          "K-Means",
          "Clustering",
          "PCA",
          "Model Evaluation",
          "Predictive Analytics",
        ],
      },

      {
        number: "07",
        title: "Software Development & Technical Expertise",
        description:
          "Une culture du développement informatique permettant de comprendre les environnements techniques, collaborer avec les équipes IT et concevoir des solutions adaptées aux besoins métiers.",

        skills: [
          "Git",
          "GitHub",
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "PHP",
          "MySQL",
        ],
      },
    ],
  },

  en: {
    kicker: "EXPERTISE & SKILLS",

    title1: "Expertise that drives",
    title2: "better decisions.",

    intro:
      "A cross-functional approach combining business understanding, quantitative analysis, and technical expertise to translate data into strategic insights and actionable recommendations.",

    groups: [
      {
        number: "01",
        title: "Business & Strategic Analytics",
        description:
          "Understanding business challenges, identifying performance drivers, and developing actionable recommendations to support strategic and operational decision-making.",

        skills: [
          "Business Analysis",
          "Strategic Analytics",
          "Performance Analysis",
          "Market Intelligence",
          "Decision Support",
          "Risk Analysis",
          "Business Recommendations",
        ],
      },

      {
        number: "02",
        title: "Business Intelligence & Executive Reporting",
        description:
          "Designing executive dashboards, defining key performance indicators, and communicating analytical findings to business stakeholders and decision-makers.",

        skills: [
          "Power BI",
          "Excel",
          "DAX",
          "Power Query",
          "KPI Monitoring",
          "Executive Reporting",
          "Data Storytelling",
          "Data Visualization",
        ],
      },

      {
        number: "03",
        title: "Financial & Operational Analytics",
        description:
          "Analysing financial and operational data to identify performance deviations, understand business drivers, and inform decisions relating to costs, resources, and profitability.",

        skills: [
          "Financial Analysis",
          "Revenue Analysis",
          "Budget Monitoring",
          "Profitability Analysis",
          "Operational Performance",
          "Variance Analysis",
        ],
      },

      {
        number: "04",
        title: "Data Analysis & Statistical Insights",
        description:
          "Exploring and analysing complex datasets to identify trends, detect anomalies, evaluate hypotheses, and generate reliable analytical insights.",

        skills: [
          "Python",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Statistics",
          "Hypothesis Testing",
          "Exploratory Data Analysis",
        ],
      },

      {
        number: "05",
        title: "Analytics Engineering & Data Quality",
        description:
          "Structuring, transforming, and improving data reliability to ensure consistent business indicators and establish reproducible analytical foundations.",

        skills: [
          "SQL",
          "PostgreSQL",
          "Snowflake",
          "dbt",
          "Data Modeling",
          "Data Transformation",
          "Data Quality",
          "Data Warehouse",
        ],
      },

      {
        number: "06",
        title: "Predictive Analytics & Machine Learning",
        description:
          "Applying statistical and predictive methods to anticipate trends, segment markets, identify risks, and support informed business decisions.",

        skills: [
          "Scikit-learn",
          "Logistic Regression",
          "Classification",
          "K-Means",
          "Clustering",
          "PCA",
          "Model Evaluation",
          "Predictive Analytics",
        ],
      },

      {
        number: "07",
        title: "Software Development & Technical Expertise",
        description:
          "A software development background that enables me to understand technical environments, collaborate with IT teams, and design solutions aligned with business requirements.",

        skills: [
          "Git",
          "GitHub",
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "PHP",
          "MySQL",
        ],
      },
    ],
  },
};

function Skills() {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.fr;

  return (
    <section
      className="section skills-section"
      id="competences"
    >
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

            <article
              className="skill-row"
              key={group.number}
            >

              <span className="skill-number">
                {group.number}
              </span>

              <div className="skill-info">

                <h3>{group.title}</h3>

                <p>{group.description}</p>

              </div>

              <div className="skill-tags">

                {group.skills.map((skill) => (

                  <span key={skill}>
                    {skill}
                  </span>

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
