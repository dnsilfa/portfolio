import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">Danielle Silfa</span>
        <span className="footer__copy">Designed & built with React + Vite</span>
        <div className="footer__links">
          <a href="https://github.com/dnsilfa" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/danielle-silfa" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:dnsilfa@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
