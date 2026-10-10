const watchSources = [
  {
    number: "01",
    title: "Sources spécialisées",
    text: "Documentation officielle, blogs techniques, newsletters et médias spécialisés.",
    tags: ["Documentation", "Blogs", "Newsletters"],
  },
  {
    number: "02",
    title: "Communautés",
    text: "Suivi des échanges, tendances et retours d'expérience de professionnels de la Data.",
    tags: ["LinkedIn", "GitHub", "Communautés"],
  },
  {
    number: "03",
    title: "Marché & métiers",
    text: "Observation des compétences demandées, outils émergents et évolutions des métiers Data.",
    tags: ["Emploi", "Compétences", "Tendances"],
  },
];

const discoveries = [
  "Evolution des outils de transformation de données",
  "Montée des architectures cloud",
  "Evolution des pratiques BI et Analytics",
];

function Watch() {
  return (
    <section className="section watch-section" id="veille">
      <div className="container">

        <div className="watch-heading">
          <div className="section-heading">
            <p className="section-kicker">
              <span></span>
              VEILLE MÉTIER & TECHNOLOGIQUE
            </p>

            <h2>
              Rester à jour.
              <br />
              <span>Comprendre ce qui évolue.</span>
            </h2>
          </div>

          <p className="watch-intro">
            J'ai mis en place un système de veille
            structuré afin d'identifier les évolutions du métier, les outils
            émergents et les pratiques qui transforment l'écosystème Data.
          </p>
        </div>

        {/* WORKFLOW */}
        <div className="watch-workflow">
          <div className="workflow-item">
            <span>01</span>
            <strong>Sources</strong>
            <p>Identifier</p>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-item">
            <span>02</span>
            <strong>Collecte</strong>
            <p>Centraliser</p>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-item">
            <span>03</span>
            <strong>Filtrage</strong>
            <p>Sélectionner</p>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-item">
            <span>04</span>
            <strong>Analyse</strong>
            <p>Comprendre</p>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-item workflow-active">
            <span>05</span>
            <strong>Application</strong>
            <p>Expérimenter</p>
          </div>
        </div>

        {/* SOURCES */}
        <div className="watch-grid">
          {watchSources.map((source) => (
            <article className="watch-card" key={source.number}>
              <span className="watch-number">{source.number}</span>

              <h3>{source.title}</h3>

              <p>{source.text}</p>

              <div className="watch-tags">
                {source.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* SYSTEM */}
        <div className="watch-system">
          <div className="watch-system-left">
            <p className="mini-label">MON SYSTÈME</p>

            <h3>
              De l'information
              <br />
              <span>à l'apprentissage.</span>
            </h3>
          </div>

          <div className="watch-system-right">

            <div className="system-row">
              <span>01</span>

              <div>
                <strong>Critères de sélection</strong>
                <p>
                  Pertinence métier · Fiabilité de la source · Actualité ·
                  Applicabilité · Impact potentiel
                </p>
              </div>
            </div>

            <div className="system-row">
              <span>02</span>

              <div>
                <strong>Automatisation</strong>
                <p>
                  Centralisation des sources, alertes et
                  automatisation de la collecte d'informations.
                </p>
              </div>
            </div>

            <div className="system-row">
              <span>03</span>

              <div>
                <strong>Analyse</strong>
                <p>
                  Les informations retenues sont comparées, synthétisées puis
                  classées selon leur intérêt pour mon évolution professionnelle.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RESULTS */}
        <div className="watch-results">
          <div className="results-label">
            <span></span>
            RÉSULTATS DE LA VEILLE
          </div>

          <div className="results-content">
            <h3>Ce que j'ai identifié.</h3>

            <div className="discoveries">
              {discoveries.map((discovery, index) => (
                <div className="discovery" key={discovery}>
                  <span>0{index + 1}</span>
                  <p>{discovery}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Watch;