import { useRef, useEffect, useState } from 'react'
import './Experience.css'

const jobs = [
  {
    role: 'Software Engineer I',
    company: 'Lennar Corporation',
    location: 'Miami, FL',
    period: 'July 2024 – Present',
    color: 'var(--accent)',
    highlights: [
      'Deployed and managed a scalable Azure Kubernetes Service (AKS) cluster using Terraform, leveraging KEDA to autoscale based on CPU and memory demand',
      'Contributed to Alta, a full-stack title insurance application enabling professionals to review statements, collaborate on fee changes, and track transactions',
      'Achieved zero-downtime deployments via Azure App Service slot infrastructure and CI/CD slot-swap pipelines',
      'Engineered automated npm release system using Conventional Commits and Semantic Versioning',
      'Transitioned deployments from ZIP to containerized Docker builds, improving reliability and portability',
      'Authored reusable CI/CD libraries and templates, enforcing build, test, and security standards',
      'Mentored intern on full-stack Azure deployment process and database connectivity',
    ],
    tags: ['Azure', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions', 'TypeScript', 'React'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Microsoft',
    location: 'Redmond, WA',
    period: 'May 2023 – Aug 2023',
    color: 'var(--accent-2)',
    highlights: [
      'Developed OSConfig, an Azure Open Source VS Code extension using TypeScript for configuration file creation',
      'Deployed Azure OpenAI model to interpret real-time user data and generate accurate JSON config files in VS Code',
      'Enhanced extension to validate AI-generated configs by ingesting Windows device schemas',
      'Processed data from model schemas to enable users to view completion list data from 200+ settings on hover',
    ],
    tags: ['TypeScript', 'VS Code API', 'Azure OpenAI', 'JSON Schema'],
  },
  {
    role: 'Technical Intern',
    company: 'DENSO International America, Inc.',
    location: 'Southfield, MI',
    period: 'May 2022 – Aug 2022',
    color: 'var(--text-secondary)',
    highlights: [
      'Communicated external alerts from Auto-ISAC Red Portal and CISA to internal security teams',
      'Developed a Software Bill of Materials template in Excel to improve product registration',
      'Authored guidelines to assist with vulnerability management and documented meeting minutes for project teams',
    ],
    tags: ['Excel', 'Vulnerability Management', 'Security'],
  },
  {
    role: 'Evening with Industry Director',
    company: 'Society of Women Engineers (SWE), University of Florida',
    location: 'Gainesville, FL',
    period: 'May 2022 – May 2023',
    color: 'var(--accent-2)',
    highlights: [
      'Planned in-person and virtual recruitment events connecting 200+ students with company recruiters',
      'Managed logistics, volunteers, budget planning, and communication with 50+ company contacts',
    ],
    tags: ['Event Planning', 'Leadership'],
  },
  {
    role: 'Engineers in the Swamp Director',
    company: 'Society of Women Engineers (SWE), University of Florida',
    location: 'Gainesville, FL',
    period: 'May 2021 – May 2022',
    color: 'var(--accent)',
    highlights: [
      'Coordinated events to introduce new students to SWE and managed 200+ attendees and 25+ organizations',
      'Oversaw volunteer teams and event logistics',
    ],
    tags: ['Leadership', 'Coordination'],
  },
]

function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, options)
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <p className="section-label">Career</p>
        <h2 className="section-title" style={{ marginBottom: '3.5rem' }}>Experience</h2>

        <div className={`exp-timeline ${inView ? 'exp-timeline--visible' : ''}`}>
          {jobs.map((job, i) => (
            <div className="exp-item" key={i} style={{ '--delay': `${i * 0.15}s`, '--color': job.color }}>
              <div className="exp-item__line" />
              <div className="exp-item__dot" />

              <div className="exp-item__card">
                <div className="exp-item__header">
                  <div>
                    <h3 className="exp-item__role">{job.role}</h3>
                    <p className="exp-item__company">{job.company} · {job.location}</p>
                  </div>
                  <span className="exp-item__period">{job.period}</span>
                </div>

                <ul className="exp-item__highlights">
                  {job.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>

                <div className="exp-item__tags">
                  {job.tags.map(t => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          <div className="exp-item" style={{ '--delay': '0.3s', '--color': 'var(--accent-warm)' }}>
            <div className="exp-item__line exp-item__line--last" />
            <div className="exp-item__dot" />
            <div className="exp-item__card">
              <div className="exp-item__header">
                <div>
                  <h3 className="exp-item__role">B.S. Computer Science</h3>
                  <p className="exp-item__company">University of Florida · Gainesville, FL</p>
                </div>
                <span className="exp-item__period">Graduated Dec 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
