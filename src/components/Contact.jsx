import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-card__glow" aria-hidden="true" />

          <p className="section-label">Let's connect</p>
          <h2 className="contact-card__heading">
            Say hello!
          </h2>
          <p className="contact-card__sub">
            For project inquiries, collaborations, or general questions, feel free to get in touch.
          </p>

          <a href="mailto:dnsilfa@gmail.com" className="btn btn--primary contact-card__btn">
            Say hello →
          </a>

          <div className="contact-card__links">
            <a href="https://linkedin.com/in/danielle-silfa" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon /> linkedin.com/in/danielle-silfa
            </a>
            <a href="https://github.com/dnsilfa" target="_blank" rel="noopener noreferrer">
              <GitHubIcon /> github.com/dnsilfa
            </a>
            <a href="tel:+18636059075">
              <PhoneIcon /> +1 (863) 605-9075
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function LinkedInIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
}
function GitHubIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
}
function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg>
}
