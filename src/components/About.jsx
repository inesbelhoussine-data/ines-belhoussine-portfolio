
import { useLanguage } from "../context/LanguageContext.jsx";

function About() {
  const { language } = useLanguage();

  const translations = {
    fr: {
      kicker: "À PROPOS & VISION PROFESSIONNELLE",

      title1: "Comprendre les enjeux.",
      title2: "Éclairer les décisions.",

      intro:
        "À l'intersection du Business, de la Technologie et de la Data, mon ambition est de transformer l'information en un véritable levier de performance et d'aide à la décision.",

      paragraph1:
        "Mon parcours pluridisciplinaire en économie, commerce, développement informatique et analyse de données me permet d'aborder les problématiques d'entreprise avec une vision transversale. Au-delà de la maîtrise technique, je m'intéresse aux enjeux financiers, commerciaux, opérationnels et stratégiques qui orientent les décisions.",

      paragraph2:
        "Mes expériences professionnelles dans la relation client, le développement informatique et la gestion comptable au sein du secteur de l'aviation d'affaires m'ont permis de comprendre les réalités opérationnelles d'une entreprise, l'importance de la fiabilité des informations et la nécessité de disposer d'indicateurs pertinents pour piloter l'activité.",

      paragraph3:
        "Aujourd'hui, en tant que Business Data Analyst, je souhaite devenir un véritable partenaire analytique des équipes métiers et de la direction. Mon rôle ne se limite pas à produire des tableaux de bord : il consiste à comprendre les problématiques, identifier les leviers de performance, anticiper les risques et formuler des recommandations concrètes pour accompagner la prise de décision.",

      journey: "Découvrir mon parcours professionnel",

      approach: "MON APPROCHE — FROM DATA TO DECISION",

      steps: [
        {
          title: "Comprendre",
          description:
            "Identifier les enjeux stratégiques, comprendre les besoins des parties prenantes et définir les objectifs métiers ainsi que les indicateurs pertinents.",
        },
        {
          title: "Fiabiliser",
          description:
            "Collecter, contrôler, nettoyer et structurer les données afin de garantir la qualité et la fiabilité des analyses.",
        },
        {
          title: "Analyser",
          description:
            "Identifier les tendances, mesurer les écarts, évaluer les risques et comprendre les facteurs qui influencent la performance.",
        },
        {
          title: "Recommander",
          description:
            "Transformer les résultats en enseignements clairs et en recommandations opérationnelles permettant aux décideurs de prioriser leurs actions.",
        },
      ],
    },

    en: {
      kicker: "ABOUT ME & PROFESSIONAL VISION",

      title1: "Understanding business.",
      title2: "Empowering decisions.",

      intro:
        "At the intersection of Business, Technology, and Data, my ambition is to turn information into a powerful driver of business performance and informed decision-making.",

      paragraph1:
        "My multidisciplinary background in economics, business, software development, and data analytics enables me to approach business challenges from a cross-functional perspective. Beyond technical expertise, I am particularly interested in the financial, commercial, operational, and strategic factors that shape business decisions.",

      paragraph2:
        "My professional experience in customer relations, software development, and accounting within the business aviation industry has given me valuable insight into day-to-day business operations, the importance of reliable information, and the need for meaningful performance indicators.",

      paragraph3:
        "As a Business Data Analyst, my ambition is to become a trusted analytical partner to business teams and senior management. My role goes beyond building dashboards: it involves understanding business challenges, identifying performance drivers, anticipating risks, and delivering actionable recommendations that support informed decision-making.",

      journey: "Explore my professional background",

      approach: "MY APPROACH — FROM DATA TO DECISION",

      steps: [
        {
          title: "Understand",
          description:
            "Identify strategic challenges, understand stakeholder needs, and define relevant business objectives and performance indicators.",
        },
        {
          title: "Ensure Reliability",
          description:
            "Collect, validate, clean, and structure data to ensure the quality and reliability of analytical findings.",
        },
        {
          title: "Analyse",
          description:
            "Identify trends, measure deviations, assess risks, and understand the underlying drivers of business performance.",
        },
        {
          title: "Recommend",
          description:
            "Translate analytical findings into clear insights and actionable recommendations that help decision-makers prioritise their actions.",
        },
      ],
    },
  };

  const t = translations[language] ?? translations.fr;

  return (
    <section className="section about-section" id="apropos">

      <div className="container">

        {/* =========================
            PROFESSIONAL VISION
        ========================= */}

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

        {/* =========================
            BUSINESS VALUE PROPOSITION
        ========================= */}

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

        {/* =========================
            FROM DATA TO DECISION
        ========================= */}

        <div className="approach">

          <p className="approach-label">
            {t.approach}
          </p>

          <div className="approach-steps">

            {t.steps.map((step, index) => (

              <div
                className="approach-step"
                key={index}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {step.title}
                </strong>

                <p>
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
