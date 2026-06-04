import './Projects.css'

const projects = [
  {
    name: 'SwampySells',
    period: 'Aug – Dec 2023',
    description: 'A full-stack e-commerce platform for authenticated University of Florida users to buy, sell, and exchange items. Features a real-time messaging interface between buyers and sellers.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Jira'],
    links: {
      github: 'https://github.com/dnsilfa',
    },
    accent: 'var(--accent)',
  },
  {
    name: 'OSConfig VS Code Extension',
    period: 'Summer 2023 · Microsoft',
    description: 'Azure Open Source VS Code extension that uses Azure OpenAI to interpret user data and generate valid JSON configuration files, with schema validation for 200+ Windows device settings.',
    tags: ['TypeScript', 'VS Code API', 'Azure OpenAI', 'JSON Schema'],
    links: {},
    accent: 'var(--accent-2)',
  },
  // Add more projects here as you build them!
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article className="project-card" key={i} style={{ '--accent-color': p.accent }}>
              <div className="project-card__top">
                <div className="project-card__folder">
                  <FolderIcon />
                </div>
                <div className="project-card__links">
                  {p.links.github && (
                    <a href={p.links.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <GitHubIcon />
                    </a>
                  )}
                  {p.links.live && (
                    <a href={p.links.live} target="_blank" rel="noopener noreferrer" title="Live demo">
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-card__name">{p.name}</h3>
              <p className="project-card__period">{p.period}</p>
              <p className="project-card__desc">{p.description}</p>

              <div className="project-card__tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </article>
          ))}

          {/* placeholder card to invite more */}
          <article className="project-card project-card--placeholder">
            <p>More coming soon…</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function FolderIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}
