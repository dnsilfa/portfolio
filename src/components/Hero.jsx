import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow animate-up" style={{ animationDelay: '0.1s' }}>
            Hello there
          </p>

          <h1 className="hero__name animate-up" style={{ animationDelay: '0.2s' }}>
            Danielle<br />Silfa
          </h1>

          <p className="hero__title animate-up" style={{ animationDelay: '0.35s' }}>
            Software Engineer
          </p>

          <p className="hero__bio animate-up" style={{ animationDelay: '0.45s' }}>
            Building scalable cloud infrastructure and full-stack applications.
            Passionate about DevOps, Azure, AWS, and shipping reliable software.
            Based in Miami, FL.
          </p>

          <div className="hero__actions animate-up" style={{ animationDelay: '0.55s' }}>
            <a href="#experience" className="btn btn--primary">View my work</a>
            <a href="#contact" className="btn btn--ghost">Get in touch</a>
          </div>

          <div className="hero__links animate-up" style={{ animationDelay: '0.65s' }}>
            <a href="https://linkedin.com/in/danielle-silfa" target="_blank" rel="noopener noreferrer" className="hero__social-link">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href="https://github.com/dnsilfa" target="_blank" rel="noopener noreferrer" className="hero__social-link">
              <GitHubIcon /> GitHub
            </a>
            <a href="mailto:dnsilfa@gmail.com" className="hero__social-link">
              <EmailIcon /> dnsilfa@gmail.com
            </a>
          </div>
        </div>

        <div className="hero__decoration animate-up" style={{ animationDelay: '0.3s' }} aria-hidden="true">
          <div className="hero__code-card">
            <div className="hero__code-dots">
              <span /><span /><span />
            </div>
            <pre className="hero__code">{`// Danielle Silfa
const engineer = {
  focus:  ["Cloud", "DevOps", "Full-Stack"],
  stack:  ["Azure", "AWS", "React"],
  tools:  ["Terraform", "Docker", "K8s"],
  status: "Building cool things ✦"
}`}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
