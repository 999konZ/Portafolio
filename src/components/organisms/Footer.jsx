export default function Footer({ name, contact }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="page-container footer-layout">
        <p>© {currentYear} {name}. Todos los derechos reservados.</p>
        {contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : <p>Correo de contacto pendiente</p>}
        <a href="#personal">Volver al inicio ↑</a>
      </div>
    </footer>
  )
}
