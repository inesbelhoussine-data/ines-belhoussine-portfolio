
export const projectDetails = {
  // =====================================================
  // PROJECT 01 — ANALYTICS ENGINEERING & DATA GOVERNANCE
  // =====================================================

 
"data-transformation": {
  cover: "/images/projects/data_projet1/dashboard_projet1.png",

  fr: {
    problem:
      "Comment permettre à la direction d'OpenClassrooms de disposer d'indicateurs fiables pour comprendre l'évolution des inscriptions aux parcours Data, identifier les profils étudiants majoritaires et orienter ses futures décisions de recrutement et de développement régional ?",

    objectives: [
      "Construire une architecture analytique structurée et reproductible.",
      "Fiabiliser les données utilisées pour le reporting décisionnel.",
      "Identifier les tendances d'évolution des inscriptions.",
      "Analyser les profils sociodémographiques des étudiants.",
      "Comparer la représentation géographique en tenant compte des populations régionales.",
      "Formuler des recommandations pour accompagner les décisions stratégiques."
    ],

    methodology: [
      "Importation des données OpenClassrooms et INSEE dans Snowflake.",
      "Construction d'une architecture dbt en trois couches : Staging, Intermediate et Mart.",
      "Nettoyage et normalisation des données avec SQL.",
      "Traitement explicite des informations de genre non renseignées.",
      "Enrichissement des données étudiants avec les populations régionales.",
      "Création d'un data mart dédié aux indicateurs métier.",
      "Contrôle des doublons, valeurs NULL et effectifs dans Snowflake.",
      "Export des données consolidées vers Power BI.",
      "Analyse des tendances temporelles, géographiques et démographiques."
    ],

    kpis: [
      {
        value: "4 647",
        label: "Étudiants analysés"
      },
      {
        value: "-43,9 %",
        label: "Évolution des effectifs 2022–2025"
      },
      {
        value: "+11,9 %",
        label: "Reprise des effectifs en 2025"
      },
      {
        value: "13",
        label: "Zones régionales représentées"
      }
    ],

    results:
      "L'analyse de 4 647 étudiants révèle une diminution des effectifs de 43,9 % entre 2022 et 2025, passant de 1 696 à 951 étudiants. Une reprise de 11,9 % est néanmoins observée en 2025 par rapport à 2024. L'Île-de-France constitue le territoire le plus représenté, avec une densité de 17 étudiants pour 100 000 habitants sur la base de la population INSEE de 2025. La tranche d'âge 30–34 ans est la plus représentée. Par ailleurs, 26,81 % des observations présentent un genre non renseigné, mettant en évidence un enjeu de complétude des données. L'architecture Snowflake et dbt permet de consolider ces indicateurs dans un tableau de bord décisionnel interactif.",

    recommendations: [
      "Investiguer les causes de la baisse des inscriptions observée entre 2022 et 2024.",
      "Identifier les facteurs associés à la reprise des effectifs en 2025.",
      "Analyser les canaux d'acquisition et les taux de conversion étudiants.",
      "Approfondir les opportunités de développement dans les territoires moins représentés.",
      "Étudier les besoins des principales tranches d'âge.",
      "Intégrer des indicateurs de réussite, d'abandon et de satisfaction.",
      "Améliorer la complétude des données dans le respect de la vie privée.",
      "Intégrer les populations INSEE correspondant à chaque année étudiée.",
      "Étudier l'automatisation des transformations et de l'actualisation du reporting."
    ],

    businessImpact:
      "Cette solution analytique fournit à la direction une base structurée d'aide à la décision pour suivre les inscriptions, comprendre les profils étudiants et identifier les tendances nécessitant des investigations complémentaires. L'architecture modulaire Snowflake et dbt facilite la maintenance, la traçabilité et l'évolution des transformations. Le dashboard Power BI permet de rendre les indicateurs accessibles aux utilisateurs métier. Les gains financiers, les économies de temps et l'amélioration des performances de recrutement restent à mesurer."
  },

  en: {
    problem:
      "How can OpenClassrooms provide its management team with reliable indicators to understand enrolment trends across Data programmes, identify key student demographics, and support future recruitment and regional development decisions?",

    objectives: [
      "Build a structured and reproducible analytics architecture.",
      "Improve data reliability for strategic reporting.",
      "Identify student enrolment trends.",
      "Analyse student demographic profiles.",
      "Compare regional representation using population data.",
      "Develop actionable recommendations to support strategic decisions."
    ],

    methodology: [
      "Load OpenClassrooms and INSEE datasets into Snowflake.",
      "Build a three-layer dbt architecture: Staging, Intermediate, and Mart.",
      "Clean and standardise data using SQL.",
      "Explicitly categorise missing gender information.",
      "Enrich student data with regional population figures.",
      "Develop a business-oriented analytical data mart.",
      "Validate duplicates, NULL values, and student counts in Snowflake.",
      "Export consolidated data to Power BI.",
      "Analyse temporal, geographical, and demographic trends."
    ],

    kpis: [
      {
        value: "4,647",
        label: "Students analysed"
      },
      {
        value: "-43.9%",
        label: "Enrolment change from 2022 to 2025"
      },
      {
        value: "+11.9%",
        label: "Enrolment recovery in 2025"
      },
      {
        value: "13",
        label: "Regional areas represented"
      }
    ],

    results:
      "The analysis of 4,647 students revealed a 43.9% decline in enrolments between 2022 and 2025, from 1,696 to 951 students. However, enrolments recovered by 11.9% in 2025 compared with 2024. Île-de-France emerged as the most represented region, with 17 students per 100,000 inhabitants based on the 2025 INSEE population reference. Students aged 30–34 represent the largest demographic segment. Additionally, 26.81% of observations have unspecified gender information, highlighting a data completeness issue. The Snowflake and dbt architecture consolidates these indicators into an interactive Power BI dashboard.",

    recommendations: [
      "Investigate the factors behind declining enrolments between 2022 and 2024.",
      "Identify factors associated with the enrolment recovery in 2025.",
      "Analyse student acquisition channels and conversion rates.",
      "Explore development opportunities in underrepresented regions.",
      "Investigate the needs of the main student age groups.",
      "Introduce completion, dropout, and satisfaction indicators.",
      "Improve data completeness while respecting privacy requirements.",
      "Incorporate year-specific INSEE population data.",
      "Explore automated data transformations and dashboard refreshes."
    ],

    businessImpact:
      "This analytics solution provides management with a structured decision-support framework for monitoring enrolments, understanding student demographics, and identifying trends requiring further investigation. The modular Snowflake and dbt architecture supports maintainability, traceability, and future development. The Power BI dashboard makes key business indicators accessible to stakeholders. Financial returns, time savings, and improvements in recruitment performance remain to be measured."
  }
},


  // =====================================================
  // PROJECT 02 — BUSINESS INTELLIGENCE & EXECUTIVE REPORTING
  // =====================================================

 
"business-intelligence": {
  cover: "/images/projects/data_projet2/Page_1.png",

  fr: {
    problem:
      "Comment permettre à la direction générale, aux directions régionales et aux directions nationales de piloter un portefeuille de 104 projets IT et Marketing répartis dans quatre régions internationales, tout en maîtrisant les budgets, les délais et les engagements opérationnels ?",

    objectives: [
      "Centraliser les données financières et opérationnelles.",
      "Identifier les dépassements budgétaires.",
      "Détecter les projets présentant des écarts significatifs.",
      "Prioriser les interventions des directions.",
      "Faciliter les décisions de poursuite ou d'arrêt des projets."
    ],

    methodology: [
      "Analyse du cahier des charges et des besoins des trois niveaux de direction.",
      "Nettoyage et transformation des données avec Power Query.",
      "Création d'une clé composite Project_Phase.",
      "Construction d'un modèle relationnel de sept tables de données.",
      "Développement des indicateurs de performance avec DAX.",
      "Comparaison des données réelles et prévisionnelles.",
      "Conception d'un reporting interactif avec Power BI."
    ],

    kpis: [
      {
        value: "104",
        label: "Projets internationaux analysés"
      },
      {
        value: "+5,93 M",
        label: "Dépassement budgétaire constaté"
      },
      {
        value: "73,1 %",
        label: "Projets en alerte"
      },
      {
        value: "+10,56 %",
        label: "Écart budgétaire global"
      }
    ],

    results:
      "L'analyse révèle un budget réel de 62 035 400 contre 56 108 000 prévus, soit un dépassement de 5 927 400. Au total, 76 projets sur 104 sont en alerte. Les durées cumulées sont inférieures de 13,43 % aux prévisions, tandis qu'environ 900 livrables de moins que prévu sont comptabilisés. Le projet Marketing numéro 4 en Égypte présente notamment un surcoût de 231 700 et un dépassement de durée de 95 %, justifiant une revue prioritaire.",

    recommendations: [
      "Prioriser les projets cumulant des écarts financiers et opérationnels défavorables.",
      "Investiguer les causes du dépassement budgétaire global de 5,93 millions.",
      "Organiser une revue prioritaire du projet Marketing en Égypte.",
      "Analyser les causes du déficit d'environ 900 livrables.",
      "Renforcer le suivi des pays concentrant les investissements les plus importants.",
      "Distinguer les écarts favorables des écarts défavorables dans le système d'alerte.",
      "Mettre en place des revues régulières de performance avec les directions."
    ],

    businessImpact:
      "La solution fournit aux décideurs une vision centralisée des performances financières et opérationnelles du portefeuille. Elle permet de prioriser les investigations, d'orienter les arbitrages budgétaires et d'accompagner les actions correctives. Les bénéfices correspondent à la valeur décisionnelle potentielle du reporting et non à des économies effectivement réalisées."
  },

  en: {
    problem:
      "How can senior management, regional directors, and country directors effectively monitor a portfolio of 104 IT and Marketing projects across four international regions while controlling budgets, schedules, and operational commitments?",

    objectives: [
      "Centralise financial and operational data.",
      "Identify budget overruns.",
      "Detect projects with significant performance deviations.",
      "Prioritise management interventions.",
      "Support project continuation or termination decisions."
    ],

    methodology: [
      "Analyse business requirements across three management levels.",
      "Clean and transform data using Power Query.",
      "Create a composite Project_Phase key.",
      "Build a relational data model consisting of seven data tables.",
      "Develop performance indicators using DAX.",
      "Compare actual and planned performance.",
      "Design interactive executive reporting using Power BI."
    ],

    kpis: [
      {
        value: "104",
        label: "International projects analysed"
      },
      {
        value: "+5.93M",
        label: "Identified budget overrun"
      },
      {
        value: "73.1%",
        label: "Projects flagged for review"
      },
      {
        value: "+10.56%",
        label: "Overall budget variance"
      }
    ],

    results:
      "The analysis identified actual expenditure of 62,035,400 against a planned budget of 56,108,000, resulting in a budget overrun of 5,927,400. A total of 76 out of 104 projects were flagged for review. Cumulative project durations were 13.43% below plan, while approximately 900 fewer deliverables than planned were recorded. Marketing project number 4 in Egypt showed a cost overrun of 231,700 and a schedule overrun of 95%, warranting a priority review.",

    recommendations: [
      "Prioritise projects with multiple adverse financial and operational deviations.",
      "Investigate the underlying causes of the 5.93 million budget overrun.",
      "Conduct a priority review of the Marketing project in Egypt.",
      "Investigate the shortfall of approximately 900 deliverables.",
      "Strengthen financial monitoring in countries with the highest investment levels.",
      "Distinguish favourable and adverse deviations within the alert system.",
      "Establish regular performance reviews with management teams."
    ],

    businessImpact:
      "The solution provides decision-makers with a consolidated view of financial and operational performance. It supports the prioritisation of investigations, budget allocation decisions, and corrective actions. These benefits represent the potential decision-making value of the reporting solution rather than measured financial savings."
  }
},


  // =====================================================
  // PROJECT 03 — MARKET INTELLIGENCE & GROWTH STRATEGY
  // =====================================================

 
"international-analysis": {
  cover: "/images/projects/data_projet3/CLUSTER_PROJET3.png",

  fr: {
    problem:
      "Comment accompagner le comité exécutif de La Poule qui Chante dans l'identification de nouveaux marchés internationaux présentant un potentiel favorable à l'exportation de volaille, tout en prenant en compte les opportunités commerciales, l'environnement économique et les risques politiques ?",

    objectives: [
      "Identifier les opportunités de croissance internationale.",
      "Comparer les marchés selon leurs caractéristiques commerciales et économiques.",
      "Évaluer l'ouverture des marchés aux importations.",
      "Intégrer la stabilité politique dans la réflexion stratégique.",
      "Construire une méthodologie transparente de présélection.",
      "Prioriser les marchés nécessitant une étude de faisabilité approfondie."
    ],

    methodology: [
      "Collecte et consolidation de quatre sources de données FAO et Banque mondiale.",
      "Harmonisation des nomenclatures géographiques et contrôle de la qualité des données.",
      "Construction de trois indicateurs métier et sélection de neuf variables.",
      "Standardisation et analyse en composantes principales.",
      "Classification ascendante hiérarchique avec la méthode de Ward.",
      "Segmentation des marchés avec K-Means.",
      "Comparaison des partitions avec le score de silhouette et l'Adjusted Rand Index.",
      "Identification de 21 marchés candidats à partir des profils commerciaux.",
      "Présélection finale selon quatre critères économiques et commerciaux."
    ],

    kpis: [
      {
        value: "161",
        label: "Pays et territoires analysés"
      },
      {
        value: "21",
        label: "Marchés candidats"
      },
      {
        value: "7",
        label: "Marchés présélectionnés"
      },
      {
        value: "3",
        label: "Marchés prioritaires"
      }
    ],

    results:
      "L'analyse multidimensionnelle de 161 pays et territoires a permis d'identifier 21 marchés candidats, puis 7 marchés à approfondir : les Pays-Bas, les Émirats arabes unis, le Japon, Hong Kong, la Belgique, Macao et le Luxembourg. Les Pays-Bas et les Émirats arabes unis répondent favorablement aux quatre critères de présélection. Le Japon se distingue notamment par un volume historique d'importations de 1,069 million de tonnes. Ces trois marchés sont recommandés en priorité pour des études de faisabilité commerciale. Cette démarche réduit de 98,1 % le périmètre initial jusqu'aux trois marchés prioritaires.",

    recommendations: [
      "Approfondir en priorité les marchés néerlandais, émirati et japonais.",
      "Actualiser les données commerciales, économiques et politiques avant toute décision.",
      "Étudier la demande locale, les segments clients et la concurrence.",
      "Analyser les circuits de distribution et les phénomènes de réexportation.",
      "Évaluer les exigences sanitaires, réglementaires et douanières.",
      "Construire des scénarios financiers intégrant les coûts logistiques et les marges prévisionnelles.",
      "Présenter au comité exécutif une comparaison des scénarios de développement.",
      "Envisager une phase pilote avant un déploiement commercial plus important."
    ],

    businessImpact:
      "Cette étude fournit au comité exécutif une démarche structurée de Market Intelligence permettant de concentrer les investigations sur les opportunités internationales les plus pertinentes selon les critères retenus. Elle contribue à orienter les ressources consacrées aux études de marché, à intégrer les risques économiques et politiques et à préparer les futures décisions d'investissement. La réduction du périmètre de recherche est mesurée, mais les gains financiers et la rentabilité d'une expansion restent à évaluer."
  },

  en: {
    problem:
      "How can La Poule qui Chante's executive management identify promising international poultry export markets while considering commercial opportunities, economic conditions, and political risks?",

    objectives: [
      "Identify international growth opportunities.",
      "Compare markets across commercial and economic dimensions.",
      "Assess market openness to imports.",
      "Incorporate political stability into strategic analysis.",
      "Develop a transparent market screening framework.",
      "Prioritise markets requiring further feasibility studies."
    ],

    methodology: [
      "Collect and consolidate four FAO and World Bank data sources.",
      "Harmonise geographical identifiers and perform data quality checks.",
      "Develop three business indicators and select nine analytical variables.",
      "Standardise data and perform Principal Component Analysis.",
      "Apply hierarchical clustering using Ward's method.",
      "Segment international markets using K-Means.",
      "Compare clustering solutions using silhouette scores and the Adjusted Rand Index.",
      "Identify 21 candidate markets based on commercial profiles.",
      "Develop a final shortlist using four economic and commercial criteria."
    ],

    kpis: [
      {
        value: "161",
        label: "Countries and territories analysed"
      },
      {
        value: "21",
        label: "Candidate markets"
      },
      {
        value: "7",
        label: "Shortlisted markets"
      },
      {
        value: "3",
        label: "Priority markets"
      }
    ],

    results:
      "The multidimensional analysis of 161 countries and territories identified 21 candidate markets and shortlisted 7 for further investigation: the Netherlands, the United Arab Emirates, Japan, Hong Kong, Belgium, Macao, and Luxembourg. The Netherlands and the UAE met all four screening criteria, while Japan stood out for its historical poultry import volume of 1.069 million tonnes. These three markets were recommended for priority commercial feasibility studies, narrowing the initial research scope by 98.1%.",

    recommendations: [
      "Prioritise further research into the Netherlands, the UAE, and Japan.",
      "Update commercial, economic, and political data before making investment decisions.",
      "Investigate local demand, customer segments, and competitors.",
      "Assess distribution channels and re-export activity.",
      "Evaluate sanitary, regulatory, and customs requirements.",
      "Develop financial scenarios incorporating logistics costs and projected margins.",
      "Present comparative market entry scenarios to executive management.",
      "Consider a pilot phase before pursuing a larger commercial rollout."
    ],

    businessImpact:
      "This study provides executive management with a structured market intelligence framework for focusing research on the most promising international opportunities under the selected criteria. It supports the prioritisation of market research resources, incorporates economic and political risks, and prepares future investment decisions. The reduction in research scope is quantified, while potential financial returns and expansion profitability remain subject to further assessment."
  }
},


  // =====================================================
  // PROJECT 04 — FRAUD DETECTION & RISK MANAGEMENT
  // =====================================================

 
"machine-learning": {
  cover: "/images/projects/data_projet4/matrice_confusion.png",

  fr: {
    problem:
      "Comment accompagner les organisations dans la maîtrise des risques financiers liés à la circulation de faux billets grâce à une solution prédictive capable d'automatiser une partie des contrôles, tout en limitant les fraudes non détectées et les rejets injustifiés de billets authentiques ?",

    objectives: [
      "Identifier les caractéristiques permettant de distinguer les billets authentiques des faux billets.",
      "Comparer plusieurs approches de Machine Learning.",
      "Maximiser la détection des faux billets.",
      "Limiter les erreurs de classification et les fausses alertes.",
      "Sélectionner un modèle performant, interprétable et maintenable.",
      "Construire un pipeline de prédiction réutilisable.",
      "Développer un prototype d'aide au contrôle opérationnel."
    ],

    methodology: [
      "Exploration et analyse statistique de 1 500 billets.",
      "Analyse de la qualité des données et traitement de 37 valeurs manquantes.",
      "Séparation des données en ensembles d'entraînement et de test.",
      "Construction de pipelines de prétraitement et de prédiction.",
      "Comparaison de la régression logistique, KNN, Random Forest et K-Means.",
      "Évaluation des modèles avec les matrices de confusion, la précision, le recall et le F1-score.",
      "Analyse des risques financiers et opérationnels associés aux erreurs.",
      "Sélection et sauvegarde du pipeline de régression logistique.",
      "Développement d'un script Python et d'un prototype Streamlit."
    ],

    kpis: [
      {
        value: "99 %",
        label: "Classifications correctes sur le test"
      },
      {
        value: "98 %",
        label: "Faux billets détectés sur le test"
      },
      {
        value: "1 500",
        label: "Billets analysés"
      },
      {
        value: "0,999",
        label: "Score ROC-AUC"
      }
    ],

    results:
      "La comparaison de quatre algorithmes a conduit à retenir la régression logistique, qui présente des performances comparables à Random Forest avec une complexité moindre. Sur un jeu de test de 300 billets, le modèle réalise 297 classifications correctes, soit une accuracy de 99 %. Il détecte 98 faux billets sur 100 et identifie correctement 199 billets authentiques sur 200. Deux faux billets restent non détectés et un billet authentique est incorrectement rejeté. Le score ROC-AUC de 0,999 traduit une excellente capacité de discrimination sur les données évaluées. Le pipeline sauvegardé permet de réutiliser le modèle pour de nouvelles prédictions.",

    recommendations: [
      "Prioriser la réduction du risque financier associé aux faux billets non détectés.",
      "Évaluer le coût financier et opérationnel des erreurs de classification.",
      "Adapter le seuil de décision selon les exigences métier.",
      "Maintenir une vérification humaine complémentaire.",
      "Valider le modèle sur de nouvelles données indépendantes.",
      "Surveiller la qualité des données et les dérives du modèle.",
      "Renforcer la validation des fichiers et la gestion des erreurs.",
      "Tester le prototype avant tout déploiement opérationnel."
    ],

    businessImpact:
      "Cette solution démontre la faisabilité d'un système prédictif d'aide à la maîtrise des risques financiers. Elle permet d'identifier automatiquement les observations suspectes, de quantifier les erreurs de classification et de préparer l'intégration d'un contrôle complémentaire dans les processus opérationnels. La sélection d'un modèle simple et performant facilite sa maintenance et son exploitation. Les gains financiers et opérationnels potentiels restent à mesurer en conditions réelles."
  },

  en: {
    problem:
      "How can organisations mitigate financial risks associated with counterfeit banknotes through a predictive solution that partially automates verification while minimising undetected fraud and the incorrect rejection of genuine banknotes?",

    objectives: [
      "Identify characteristics that distinguish genuine from counterfeit banknotes.",
      "Compare multiple machine learning approaches.",
      "Maximise counterfeit detection.",
      "Minimise classification errors and false alerts.",
      "Select an accurate, interpretable, and maintainable model.",
      "Build a reusable predictive pipeline.",
      "Develop an operational decision-support prototype."
    ],

    methodology: [
      "Conduct exploratory and statistical analysis of 1,500 banknotes.",
      "Assess data quality and address 37 missing values.",
      "Split the dataset into training and test sets.",
      "Build preprocessing and prediction pipelines.",
      "Compare Logistic Regression, KNN, Random Forest, and K-Means.",
      "Evaluate models using confusion matrices, precision, recall, and F1-scores.",
      "Assess financial and operational risks associated with classification errors.",
      "Select and save the Logistic Regression pipeline.",
      "Develop a Python prediction script and a Streamlit prototype."
    ],

    kpis: [
      {
        value: "99%",
        label: "Classification accuracy on the test set"
      },
      {
        value: "98%",
        label: "Counterfeit detection rate on the test set"
      },
      {
        value: "1,500",
        label: "Banknotes analysed"
      },
      {
        value: "0.999",
        label: "ROC-AUC score"
      }
    ],

    results:
      "Following a comparison of four algorithms, Logistic Regression was selected for its performance comparable to Random Forest and its lower complexity. On a test dataset of 300 banknotes, the model correctly classified 297 observations, achieving 99% accuracy. It detected 98 out of 100 counterfeit banknotes and correctly identified 199 out of 200 genuine banknotes. Two counterfeit banknotes remained undetected, while one genuine banknote was incorrectly rejected. A ROC-AUC score of 0.999 demonstrates excellent discrimination on the evaluated data. The saved pipeline enables reusable predictions on new observations.",

    recommendations: [
      "Prioritise reducing financial exposure from undetected counterfeit banknotes.",
      "Assess the financial and operational costs of classification errors.",
      "Adjust the decision threshold according to business requirements.",
      "Maintain complementary human verification.",
      "Validate the model using independent datasets.",
      "Monitor data quality and model drift.",
      "Strengthen input validation and error handling.",
      "Test the prototype before operational deployment."
    ],

    businessImpact:
      "This solution demonstrates the feasibility of predictive decision support for financial risk management. It enables automated identification of suspicious observations, quantification of classification errors, and preparation for integration into operational verification processes. Selecting a simple, high-performing model supports maintainability and usability. Potential financial savings and operational improvements remain subject to real-world evaluation."
  }
},


"ecommerce-profitability": {
  cover: "/images/projects/data_projet5/bottleneckkk_portoflio.png",

  fr: {
    problem:
      "Comment permettre à la direction de Bottleneck de piloter sa performance commerciale, de maîtriser sa rentabilité et d'optimiser ses stocks à partir de données fragmentées entre son ERP et son site e-commerce ?",

    objectives: [
      "Fiabiliser et centraliser les données commerciales.",
      "Mesurer le chiffre d'affaires et la rentabilité des produits.",
      "Identifier les anomalies tarifaires et financières.",
      "Analyser la valorisation et la couverture des stocks.",
      "Identifier les opportunités d'optimisation des approvisionnements.",
      "Fournir des recommandations exploitables par la direction."
    ],

    methodology: [
      "Audit et analyse exploratoire des trois sources de données.",
      "Traitement des valeurs manquantes, doublons et incohérences.",
      "Rapprochement des données ERP et e-commerce avec Pandas.",
      "Construction d'un dataset consolidé de 713 produits.",
      "Création des indicateurs financiers et opérationnels.",
      "Détection des prix atypiques avec Z-score et IQR.",
      "Analyse du chiffre d'affaires, des marges et des stocks.",
      "Analyse des corrélations et formulation de recommandations."
    ],

    kpis: [
      {
        value: "143,3 K€",
        label: "Chiffre d'affaires TTC calculé"
      },
      {
        value: "277,3 K€",
        label: "Valorisation du stock"
      },
      {
        value: "61,01 %",
        label: "Taux de marge moyen par produit"
      },
      {
        value: "713",
        label: "Produits analysés"
      }
    ],

    results:
      "L'analyse de 713 produits révèle un chiffre d'affaires TTC calculé de 143 324,10 € et une valorisation des stocks de 277 328,07 €. Le taux de marge moyen par produit atteint 61,01 %. Une référence présente une marge négative de 86,39 %, représentant une perte brute théorique de 66,94 € par unité vendue. Une analyse complémentaire identifie également trois références stockées sans vente pendant le mois étudié, représentant 14 959,40 € de stock au coût d'achat. Enfin, 31 prix atypiques ont été identifiés dans l'analyse initiale, notamment sur des références premium.",

    recommendations: [
      "Vérifier en priorité les prix d'achat et de vente de la référence présentant une marge négative.",
      "Investiguer les références sans vente représentant 14 959,40 € de stock.",
      "Adapter les approvisionnements aux performances commerciales et à la demande historique.",
      "Prioriser les produits combinant forte contribution au chiffre d'affaires et rentabilité élevée.",
      "Approfondir l'analyse des ventes par segment tarifaire.",
      "Automatiser les contrôles de cohérence entre les données ERP et e-commerce.",
      "Mettre en place un reporting mensuel de suivi des ventes, des marges et des stocks."
    ],

    businessImpact:
      "L'analyse fournit à la direction une vision consolidée des performances commerciales, financières et opérationnelles. Elle permet d'identifier les risques de perte de marge, de prioriser les investigations sur les stocks et d'orienter les décisions d'approvisionnement. Les recommandations constituent des leviers potentiels d'amélioration de la rentabilité et du besoin en fonds de roulement, sans présumer de gains financiers effectivement réalisés."
  },

  en: {
    problem:
      "How can Bottleneck's management monitor commercial performance, protect profitability, and optimise inventory using fragmented data from its ERP and e-commerce platform?",

    objectives: [
      "Consolidate and improve the reliability of commercial data.",
      "Measure sales revenue and product profitability.",
      "Identify pricing and financial anomalies.",
      "Analyse inventory valuation and stock coverage.",
      "Identify opportunities to optimise purchasing decisions.",
      "Provide actionable recommendations to management."
    ],

    methodology: [
      "Audit and explore three independent data sources.",
      "Address missing values, duplicates, and inconsistencies.",
      "Integrate ERP and e-commerce data using Pandas.",
      "Build a consolidated dataset of 713 products.",
      "Develop financial and operational performance indicators.",
      "Detect pricing outliers using Z-score and IQR methods.",
      "Analyse revenue, profitability, and inventory performance.",
      "Perform correlation analysis and develop recommendations."
    ],

    kpis: [
      {
        value: "€143.3K",
        label: "Calculated gross sales revenue"
      },
      {
        value: "€277.3K",
        label: "Inventory valuation"
      },
      {
        value: "61.01%",
        label: "Average product markup on cost"
      },
      {
        value: "713",
        label: "Products analysed"
      }
    ],

    results:
      "The analysis of 713 products identified calculated gross sales revenue of €143,324.10 and an inventory valuation of €277,328.07. Average product markup on cost reached 61.01%. One product showed a negative markup of 86.39%, representing a theoretical gross loss of €66.94 per unit sold. Further analysis identified three stocked products with no sales during the month under review, representing €14,959.40 in inventory at purchase cost. The initial analysis also identified 31 pricing outliers, including premium products.",

    recommendations: [
      "Prioritise the verification of purchase and selling prices for the product with negative profitability.",
      "Investigate products with no recorded sales representing €14,959.40 in inventory.",
      "Align purchasing decisions with commercial performance and historical demand.",
      "Prioritise products combining strong revenue contribution and profitability.",
      "Further investigate sales performance across pricing segments.",
      "Automate data consistency checks between ERP and e-commerce systems.",
      "Establish monthly reporting on sales, profitability, and inventory performance."
    ],

    businessImpact:
      "The analysis provides management with a consolidated view of commercial, financial, and operational performance. It supports the identification of profitability risks, the prioritisation of inventory investigations, and more informed purchasing decisions. The recommendations highlight potential opportunities to improve profitability and working capital rather than measured financial savings."
  }
},

};
