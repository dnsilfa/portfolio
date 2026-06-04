import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    icon: '⌨️',
    skills: ['C++', 'Java', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React', 'HTML/CSS', 'VS Code API'],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: '☁️',
    skills: ['Azure', 'Azure Kubernetes Service', 'Azure DevOps', 'Azure OpenAI', 'Azure App Service'],
  },
  {
    category: 'DevOps & IaC',
    icon: '⚙️',
    skills: ['Terraform', 'Bicep', 'Docker', 'GitHub Actions', 'CI/CD Pipelines', 'KEDA'],
  },
  {
    category: 'Tools & Practices',
    icon: '🛠',
    skills: ['Git', 'SonarQube', 'Snyk', 'Jira', 'Semantic Versioning', 'Conventional Commits'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">Toolkit</p>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>Skills</h2>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skill-group" key={i}>
              <div className="skill-group__header">
                <span className="skill-group__icon">{group.icon}</span>
                <h3 className="skill-group__category">{group.category}</h3>
              </div>
              <div className="skill-group__list">
                {group.skills.map(s => (
                  <span className="skill-pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
