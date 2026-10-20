export default function PortfolioTemplate({ navigation, personal, experience, education, projects, contact, footer }) {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      {navigation}
      <main id="contenido" className="page-container" tabIndex={-1}>
        {personal}
        <div className="history-grid">
          {experience}
          {education}
        </div>
        {projects}
        {contact}
      </main>
      {footer}
    </>
  )
}
