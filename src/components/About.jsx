
import { useLanguage } from "../context/LanguageContext.jsx";

function About() {
  const { language } = useLanguage();

  const translations = {
    fr: {
      kicker: "À PROPOS",
      title1: "Comprendre la donnée.",
      title2: "Créer de la valeur.",

      intro:
        "Data Analyst avec un parcours initial en développement web, j’aime transformer des données complexes en informations claires, structurées et utiles à la prise de décision.",

      paragraph1:
        "J'ai commencé à travailler à 18 ans, et mes différentes expériences m'ont beaucoup appris, aussi bien sur le plan professionnel que personnel. J'ai toujours aimé comprendre comment les choses fonctionnent, analyser, chercher des solutions et travailler avec rigueur.",

      paragraph2:
        "C'est pendant mon année en développement web que j'ai découvert à quel point j'aimais travailler avec les données, notamment à travers SQL et Python. J'ai alors décidé de me spécialiser en Data Analytics, un domaine qui réunit ce que j'apprécie : la logique, l'analyse et la résolution de problèmes.",

      paragraph3:
        "Aujourd'hui, j'ai envie de continuer à apprendre, de relever de nouveaux défis et de mettre mes compétences au service de projets concrets.",

      journey: "Découvrir mon parcours",
      approach: "MON APPROCHE",

      steps: [
        {
          title: "Comprendre",
          description: "Identifier le besoin métier et poser les bonnes questions."
        },
        {
          title: "Structurer",
          description: "Préparer, nettoyer et organiser les données."
        },
        {
          title: "Analyser",
          description: "Choisir les méthodes adaptées et vérifier les résultats."
        },
        {
          title: "Communiquer",
          description: "Transformer l’analyse en recommandations compréhensibles."
        }
      ]
    },

    en: {
      kicker: "ABOUT ME",
      title1: "Understanding data.",
      title2: "Creating value.",

      intro:
        "I'm a Data Analyst with a background in web development. I enjoy turning complex data into clear, structured insights that support better decision-making.",

      paragraph1:
        "I started working at 18, and each experience has helped me grow both professionally and personally. I've always enjoyed understanding how things work, analyzing problems, finding solutions, and approaching my work with care and attention to detail.",

      paragraph2:
        "During my year studying web development, I discovered how much I enjoyed working with data, especially using SQL and Python. That's what led me to specialize in Data Analytics, a field that combines what I enjoy most: logical thinking, analysis, and problem-solving.",

      paragraph3:
        "Today, I'm excited to keep learning, take on new challenges, and apply my skills to meaningful, real-world projects.",

      journey: "Explore my background",
      approach: "MY APPROACH",

      steps: [
        {
          title: "Understand",
          description: "Identify business needs and ask the right questions."
        },
        {
          title: "Structure",
          description: "Prepare, clean, and organize data."
        },
        {
          title: "Analyze",
          description: "Choose the right methods and validate the results."
        },
        {
          title: "Communicate",
          description: "Turn analysis into clear, actionable recommendations."
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section className="section about-section" id="apropos">
      <div className="container">
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

        <div className="about-grid">
          <div className="about-intro">
            <p className="about-big-text">
              {t.intro}
            </p>
          </div>

          <div className="about-content">
            <p>{t.paragraph1}</p>
            <p>{t.paragraph2}</p>
            <p>{t.paragraph3}</p>

            <a href="#parcours" className="text-link">
              {t.journey}
              <span>↘</span>
            </a>
          </div>
        </div>

        <div className="approach">
          <p className="approach-label">{t.approach}</p>

          <div className="approach-steps">
            {t.steps.map((step, index) => (
              <div className="approach-step" key={index}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
