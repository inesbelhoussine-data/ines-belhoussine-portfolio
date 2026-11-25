
import { useLanguage } from "../context/LanguageContext.jsx";

const translations = {
  fr: {
    kicker: "EXPÉRIENCES & FORMATIONS",

    title1: "Un parcours transversal.",
    title2: "Une vision business.",

    intro:
      "De l'économie à l'analyse de données, en passant par le commerce, la comptabilité et le développement informatique, mon parcours m'a permis de construire une compréhension transversale de l'entreprise, de ses systèmes d'information et de ses enjeux de performance.",

    trajectory: "MON POSITIONNEMENT",

    trajectoryNote:
      "Une combinaison de compétences métiers, technologiques et analytiques au service de la performance et de la prise de décision.",

    completed: "CERTIFICATION OBTENUE",

    journey: [
      {
        period: "2025 — 2026",
        type: "FORMATION",

        title: "Data Analyst — Certification RNCP niveau 6",

        place: "OpenClassrooms",

        description:
          "Formation professionnalisante en analyse de données, Business Intelligence, statistiques, machine learning et transformation de données. Réalisation d'études de cas appliquées à des problématiques de performance, de rentabilité, d'expansion internationale, de fiabilité du reporting et de gestion des risques.",

        tags: [
          "Business Analytics",
          "Decision Support",
          "Python",
          "SQL",
          "Power BI",
          "Snowflake",
          "dbt",
          "Machine Learning",
        ],

        highlight: true,
        completed: true,
      },

      {
        period: "2025 — 2026",
        type: "EXPÉRIENCE PROFESSIONNELLE",

        title: "Assistante comptable et data",

        place: "DC Aviation G-OPS · Aviation d'affaires",

        description:
          "Contrôle et exploitation des données financières et opérationnelles liées à l'activité aéronautique. Conception de tableaux de bord Power BI, suivi des indicateurs d'activité sur Excel, vérification de la cohérence des données et suivi de la facturation. Contribution à la fiabilité des informations utilisées pour le pilotage opérationnel.",

        tags: [
          "Financial Data",
          "Operational Reporting",
          "Power BI",
          "Excel",
          "Sage 50",
          "Data Quality",
          "Billing",
        ],
      },

      {
        period: "2023 — 2024",
        type: "EXPÉRIENCE PROFESSIONNELLE",

        title: "Développeuse web",

        place: "SHENRON FORMATION · Alternance",

        description:
          "Conception, développement et maintenance de solutions web adaptées aux besoins utilisateurs. Création de sites internet et de boutiques e-commerce, manipulation de bases de données et compréhension des interactions entre les applications, les systèmes d'information et les besoins métiers.",

        tags: [
          "Software Development",
          "Business Requirements",
          "E-commerce",
          "JavaScript",
          "PHP",
          "React",
          "MySQL",
          "WordPress",
          "PrestaShop",
        ],
      },

      {
        period: "2023 — 2024",
        type: "FORMATION",

        title: "Concepteur développeur d'applications",

        place: "SHENRON FORMATION",

        description:
          "Formation en conception et développement d'applications, architecture logicielle, modélisation de bases de données et résolution de problématiques techniques. Acquisition d'une culture informatique facilitant la compréhension des systèmes d'information et la collaboration avec les équipes techniques.",

        tags: [
          "Application Development",
          "Database Design",
          "Software Architecture",
          "Information Systems",
          "Git",
        ],
      },

      {
        period: "2021 — 2023",
        type: "EXPÉRIENCE PROFESSIONNELLE",

        title: "Conseillère clientèle",

        place: "EDF · Alternance",

        description:
          "Gestion et suivi des dossiers clients, identification des besoins, traitement des demandes et suivi administratif et financier. Gestion des devis, factures et paiements, permettant de développer une compréhension concrète de la relation client, des processus commerciaux et des enjeux opérationnels.",

        tags: [
          "Customer Relationship",
          "Business Operations",
          "CRM",
          "Billing",
          "Customer Needs",
          "Stakeholder Communication",
        ],
      },

      {
        period: "2021 — 2023",
        type: "FORMATION",

        title: "BTS Négociation et digitalisation de la relation client",

        place: "Pigier",

        description:
          "Formation orientée stratégie commerciale, gestion de la relation client, négociation et digitalisation des processus commerciaux. Développement d'une compréhension des enjeux de satisfaction client, de performance commerciale et de développement de l'activité.",

        tags: [
          "Business Development",
          "Sales Strategy",
          "Customer Relationship",
          "Negotiation",
          "Digital Transformation",
        ],
      },

      {
        period: "2019 — 2021",
        type: "FORMATION",

        title: "Économie et gestion — L1 validée",

        place: "Université Côte d'Azur",

        description:
          "Étude des mécanismes économiques, des fondamentaux de la gestion, des mathématiques et de l'environnement des entreprises. Acquisition de bases quantitatives et économiques utiles à la compréhension des problématiques financières et stratégiques.",

        tags: [
          "Economics",
          "Business Management",
          "Quantitative Analysis",
          "Mathematics",
        ],
      },
    ],
  },

  en: {
    kicker: "PROFESSIONAL EXPERIENCE & EDUCATION",

    title1: "A multidisciplinary background.",
    title2: "A business-driven mindset.",

    intro:
      "From economics to data analytics, through business, accounting, and software development, my background has enabled me to develop a cross-functional understanding of organisations, information systems, and business performance.",

    trajectory: "MY PROFESSIONAL POSITIONING",

    trajectoryNote:
      "A combination of business understanding, technical expertise, and analytical thinking dedicated to business performance and informed decision-making.",

    completed: "CERTIFICATION OBTAINED",

    journey: [
      {
        period: "2025 — 2026",
        type: "EDUCATION",

        title: "Data Analyst — Level 6 Professional Certification",

        place: "OpenClassrooms",

        description:
          "Professional training in data analytics, business intelligence, statistics, machine learning, and data transformation. Completed business-oriented case studies addressing performance, profitability, international expansion, reporting reliability, and risk management.",

        tags: [
          "Business Analytics",
          "Decision Support",
          "Python",
          "SQL",
          "Power BI",
          "Snowflake",
          "dbt",
          "Machine Learning",
        ],

        highlight: true,
        completed: true,
      },

      {
        period: "2025 — 2026",
        type: "PROFESSIONAL EXPERIENCE",

        title: "Accounting & Data Assistant",

        place: "DC Aviation G-OPS · Business Aviation",

        description:
          "Validated and analysed financial and operational data within the business aviation industry. Developed Power BI dashboards, monitored operational indicators in Excel, checked data consistency, and supported billing processes. Contributed to the reliability of information used for operational monitoring.",

        tags: [
          "Financial Data",
          "Operational Reporting",
          "Power BI",
          "Excel",
          "Sage 50",
          "Data Quality",
          "Billing",
        ],
      },

      {
        period: "2023 — 2024",
        type: "PROFESSIONAL EXPERIENCE",

        title: "Web Developer",

        place: "SHENRON FORMATION · Work-study Programme",

        description:
          "Designed, developed, and maintained web solutions aligned with user requirements. Built websites and e-commerce platforms, worked with databases, and developed an understanding of the relationship between applications, information systems, and business needs.",

        tags: [
          "Software Development",
          "Business Requirements",
          "E-commerce",
          "JavaScript",
          "PHP",
          "React",
          "MySQL",
          "WordPress",
          "PrestaShop",
        ],
      },

      {
        period: "2023 — 2024",
        type: "EDUCATION",

        title: "Application Design & Development Programme",

        place: "SHENRON FORMATION",

        description:
          "Training in application design, software development, architecture, database modelling, and technical problem-solving. Developed a technical foundation supporting a better understanding of information systems and collaboration with technology teams.",

        tags: [
          "Application Development",
          "Database Design",
          "Software Architecture",
          "Information Systems",
          "Git",
        ],
      },

      {
        period: "2021 — 2023",
        type: "PROFESSIONAL EXPERIENCE",

        title: "Customer Relationship Advisor",

        place: "EDF · Work-study Programme",

        description:
          "Managed customer accounts, identified customer needs, handled enquiries, and supported administrative and financial processes. Monitored quotations, invoices, and payments, gaining practical insight into customer relationships, commercial processes, and operational challenges.",

        tags: [
          "Customer Relationship",
          "Business Operations",
          "CRM",
          "Billing",
          "Customer Needs",
          "Stakeholder Communication",
        ],
      },

      {
        period: "2021 — 2023",
        type: "EDUCATION",

        title: "BTS — Business Development & Digital Customer Relations",

        place: "Pigier",

        description:
          "Business-oriented qualification focused on commercial strategy, customer relationship management, negotiation, and the digitalisation of sales processes. Developed an understanding of customer satisfaction, commercial performance, and business development.",

        tags: [
          "Business Development",
          "Sales Strategy",
          "Customer Relationship",
          "Negotiation",
          "Digital Transformation",
        ],
      },

      {
        period: "2019 — 2021",
        type: "EDUCATION",

        title: "Economics & Management — First Year Completed",

        place: "Université Côte d'Azur",

        description:
          "Studied economic principles, business management fundamentals, mathematics, and the corporate environment. Developed quantitative and economic foundations relevant to financial analysis and strategic business challenges.",

        tags: [
          "Economics",
          "Business Management",
          "Quantitative Analysis",
          "Mathematics",
        ],
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

        {/* =========================
            SECTION HEADER
        ========================= */}

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

        {/* =========================
            PROFESSIONAL POSITIONING
        ========================= */}

        <div className="journey-layout">

          <div className="journey-side">

            <p>{t.trajectory}</p>

            <div className="trajectory">

              <span>BUSINESS UNDERSTANDING</span>

              <span className="trajectory-arrow">
                +
              </span>

              <span>TECHNOLOGY</span>

              <span className="trajectory-arrow">
                +
              </span>

              <span>DATA ANALYTICS</span>

              <span className="trajectory-arrow">
                ↓
              </span>

              <span className="trajectory-active">
                STRATEGIC DECISION SUPPORT
              </span>

            </div>

            <p className="trajectory-note">
              {t.trajectoryNote}
            </p>

          </div>

          {/* =========================
              PROFESSIONAL TIMELINE
          ========================= */}

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

                    {item.completed && (
                      <span className="current-badge">
                        {t.completed}
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

                      <span key={tag}>
                        {tag}
                      </span>

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
